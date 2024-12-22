import { createClient } from '@supabase/supabase-js';

const supabase= createClient(SUPABASE_URL,SUPABASE_KEY);

async function fetchItems() {
	const { data, error}= await supabase.from('items').select('*');
	if(error) console.error(error);
	else return data;
}