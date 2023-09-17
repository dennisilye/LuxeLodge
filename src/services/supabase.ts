import { createClient } from '@supabase/supabase-js'



export const supabaseUrl = 'https://kwjwrkxjemimqkwkmqaa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3andya3hqZW1pbXFrd2ttcWFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1ODU5MTcsImV4cCI6MjAwOTE2MTkxN30.3nVRUg52qW9DaLd1qf_bhIY8cQ0QRA0GTtarsK3diU0'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;