import { createClient } from "@supabase/supabase-js";
import { APP_SUPABASE_URL, APP_SUPABASE_KEY } from "./constants";

export const supabase = createClient(
    APP_SUPABASE_URL,
    APP_SUPABASE_KEY
);