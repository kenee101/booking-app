import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ichyptlwdlfrkkyfnqgs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljaHlwdGx3ZGxmcmtreWZucWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNzkwMTQsImV4cCI6MjAyOTY1NTAxNH0.VA2tiBIeBhkHJ3tY0bGcTPHUguCBFcEflddpscvcAV0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
