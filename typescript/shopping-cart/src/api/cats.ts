import axios from "axios";

// eslint-disable-next-line import/prefer-default-export
export async function postCats() {
  const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/cats`);

  return data;
}
