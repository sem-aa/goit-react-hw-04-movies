import Axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/";
const key = "ccc7239b5a4a7d6ec3ebf16ee1ca5933";
const type = "movie";
const topTime = "week";

// Фильмы в топе
export const getTrendigMovie = () => {
  return Axios.get(`${BASE_URL}trending/${type}/${topTime}?api_key=${key}`);
};

// Поиск фильмов
export const searchMovies = (query) => {
  return Axios.get(
    `${BASE_URL}search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${query}`
  );
};

//  Поиск фильма по ID
export const searchMovieInfo = (movieId) => {
  return Axios.get(`${BASE_URL}movie/${movieId}?api_key=${key}&language=en-US`);
};

// Поиск актеров с фильма
export const searchCastMovie = (movieId) => {
  return Axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${key}&language=en-US`
  );
};

// Поиск оценок
export const searchReviews = (movieId) => {
  return Axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`
  );
};
