import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://frtwecxroyeqwuayhocm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydHdlY3hyb3llcXd1YXlob2NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1ODc2MDMsImV4cCI6MjA0NTE2MzYwM30.6J6TtA6vmXMV_JJGtNhvlwHWYVmYgIMNE_0kMhGx7S4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
