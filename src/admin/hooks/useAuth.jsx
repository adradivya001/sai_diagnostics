import { useState, useEffect, createContext, useContext } from 'react';
import { supabase } from '../../lib/supabaseClient';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = async (userId) => {
    try {
      const { data, error: profileErr } = await supabase
        .from('staff_profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (profileErr) {
        console.warn('Could not load staff profile:', profileErr.message);
        return null;
      }
      return data;
    } catch (err) {
      console.warn('Profile fetch exception:', err);
      return null;
    }
  };

  useEffect(() => {
    let mounted = true;

    const initAuth = async () => {
      try {
        const { data: { session }, error: sessionErr } = await supabase.auth.getSession();
        if (sessionErr) throw sessionErr;

        if (session?.user && mounted) {
          setUser(session.user);
          const staffProfile = await fetchProfile(session.user.id);
          if (mounted) setProfile(staffProfile);
        } else if (mounted) {
          setUser(null);
          setProfile(null);
        }
      } catch (err) {
        if (mounted) setError(err.message);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    initAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!mounted) return;
      if (session?.user) {
        setUser(session.user);
        const staffProfile = await fetchProfile(session.user.id);
        if (mounted) setProfile(staffProfile);
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return () => {
      mounted = false;
      subscription?.unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    setError(null);
    const { data, error: signInErr } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password
    });

    if (signInErr) {
      throw signInErr;
    }

    // Verify staff profile authorization
    const staffProfile = await fetchProfile(data.user.id);
    if (!staffProfile) {
      // Check if user has app_metadata role fallback
      const roleFromMeta = data.user.app_metadata?.role;
      if (!roleFromMeta) {
        await supabase.auth.signOut();
        throw new Error('Access denied. No active hospital staff profile found for this account.');
      }
    } else if (staffProfile.is_active === false) {
      await supabase.auth.signOut();
      throw new Error('This staff account has been deactivated. Please contact the administrator.');
    }

    setUser(data.user);
    setProfile(staffProfile);
    return { user: data.user, profile: staffProfile };
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } finally {
      setUser(null);
      setProfile(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        role: profile?.role || user?.app_metadata?.role || null,
        isDoctor: (profile?.role || user?.app_metadata?.role) === 'doctor',
        isNurse: ['nurse', 'receptionist'].includes(profile?.role || user?.app_metadata?.role),
        isAdmin: (profile?.role || user?.app_metadata?.role) === 'hospital_admin',
        loading,
        error,
        login,
        logout,
        refreshProfile: async () => {
          if (user) {
            const p = await fetchProfile(user.id);
            setProfile(p);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
