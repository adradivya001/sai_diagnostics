import { createClient } from '@supabase/supabase-js';

// Fallback configuration to prevent bundle crash if env vars are missing on hosting platforms
const FALLBACK_URL = 'https://qmqjyssmhewsfrlptjcy.supabase.co';
const FALLBACK_KEY = 'sb_publishable_pWrjZUIWIYQam76OD-8Mxw_8bx_hGN-';

const supabaseUrl = 
  import.meta.env.VITE_SUPABASE_URL || 
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL || 
  FALLBACK_URL;

const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 
  FALLBACK_KEY;

// Safe client initialization that will never crash the initial app render
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
});
