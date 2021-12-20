// import axios from 'axios';


const API_KEY = `b85a45a9d8417dc6a08a7bff2e1d0beb`;


// https://api.themoviedb.org/3/trending/movie/week?api_key=b85a45a9d8417dc6a08a7bff2e1d0beb&page=1


const BASE_URL = 'https://api.themoviedb.org/3/';


const getTrendingMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${page}`,
  );

  return response.json();
};

const getSearchMovie = async (movieToSearch, page = 1) => {
  const response = await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${movieToSearch}&page=${page}`,
  );

  return response.json();
};

const getMovieById = async id => {
  const response = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

const getMovieCredits = async id => {
  const response = await fetch(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`,
  );
  const data = await response.json();
  return data;
};

const getMovieReviews = async id => {
  const response = await fetch(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`,
  );
  const data = await response.json();
  return data;
};

export {
  getTrendingMovies,
  getSearchMovie,
  getMovieById,
  getMovieCredits,
  getMovieReviews,
};
