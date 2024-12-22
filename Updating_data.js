async function addItemToDB(newItem) {
	const { data,error} = await supabase.from('items').insert([newItem]);
	if(error) console.error(error);
	return data;
}