import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3/trending/movie`;
const API_KEY = `b85a45a9d8417dc6a08a7bff2e1d0beb`;
axios.defaults.baseURL = BASE_URL;

const fetchData = async (image, page = 1) => {
  const queryOptions = new URLSearchParams({
    api_key: API_KEY,
  });
  try {
    const { data } = await axios.get('week?' + queryOptions.toString());
    return data;
  } catch (error) {
    throw error;
  }
};
export default fetchData;
// /trending/movie/week

//    return axios
//     .get(`https://pixabay.com/api/?q=${searchQuery}&page=1&key=24480500-399700875c121f80bab96d725&image_type=photo&orientation=horizontal&per_page=12`)
//    .then(response => response.data.hits);
//  };

// export default fetchData;

// `https://pixabay.com/api/?q=${searchQuery}&page=1&key=24480500-399700875c121f80bab96d725&image_type=photo&orientation=horizontal&per_page=12`
