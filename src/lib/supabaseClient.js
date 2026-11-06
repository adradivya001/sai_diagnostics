import { createClient } from '@supabase/supabase-js';

// Resolve Supabase URL & Public Key from Vite / Next compatible environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    '[Supabase Configuration Error]: Missing Supabase environment variables.\n' +
    'Please make sure VITE_SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and ' +
    'VITE_SUPABASE_ANON_KEY (or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) are defined in your .env file.'
  );
}

// Initialize Supabase singleton client
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '', {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
});
