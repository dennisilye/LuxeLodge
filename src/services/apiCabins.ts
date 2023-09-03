import supabase from "./supabase"

export const getCabins = async () => {

  const { data, error } = await supabase.from('cabins').select('*')

  if (error) {
    console.log(error);
    throw new Error(error.message)
  }

  return data;
}