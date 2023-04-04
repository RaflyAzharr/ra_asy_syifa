import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://qucofsmikvesgqedfquc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y29mc21pa3Zlc2dxZWRmcXVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2ODk4MDUsImV4cCI6MTk5NDI2NTgwNX0.ftmKymgPCa7WzUX9ob_dqYPttF01FgXqxMEwcKs90wA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase