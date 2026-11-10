import{createClient} from '@supabase/supabase-js';

const supabaseUrl="https://ntqjjymjorumhjbquvjo.supabase.co"
import.meta.env.VITE_SUPABASE_URL

const supabaseKey="sb_publishable_QFE-K_SJXnUgyz0eEcRRVA_lI5fXhwt"
import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase=createClient(supabaseUrl,supabaseKey);