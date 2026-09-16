const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.warn("⚠️ SUPABASE_URL ou SUPABASE_KEY não configurados.");
}

const supabase = createClient(
    supabaseUrl || "",
    supabaseKey || ""
);

module.exports = supabase;
