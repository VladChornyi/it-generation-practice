import axios from 'axios';

export default async function fetchAlbum() {
  try {
    const {data} = await axios.get(
      `https://jsonplaceholder.typicode.com/albums`
    );

    return data;
  } catch (error) {
    return error.message;
  }
}

export const fetchStarWarsCharacter = async (peopleName) => {
  try {
    const {data} = await axios.get(
      `https://swapi.py4e.com/api/people/?search=${peopleName}`
    );
    return data;
  } catch (error) {
    return error.message;
  }
};
