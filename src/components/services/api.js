import axios from "axios";

export default async function fetchAlbum() {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/albums`
    );

    return data;
  } catch (error) {
    return error.message;
  }
}
