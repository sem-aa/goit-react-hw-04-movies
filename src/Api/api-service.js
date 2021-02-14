import axios from "axios";
import Axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const key = "ccc7239b5a4a7d6ec3ebf16ee1ca5933";
const type = "movie";
const topTime = "week";
const language = "ru";
const page = 1;

// Фильмы в топе
export const getTrendigMovie = async () => {
  return await Axios.get(
    `trending/${type}/${topTime}?api_key=${key}&language=${language}`
  );
};

// Поиск фильмов
export const searchMovies = async (query) => {
  return await Axios.get(
    `search/movie?api_key=${key}&language=${language}&page=${page}&include_adult=false&query=${query}`
  );
};

//  Поиск фильма по ID
export const searchMovieInfo = async (movieId) => {
  return await Axios.get(
    `movie/${movieId}?api_key=${key}&language=${language}`
  );
};

// Поиск актеров с фильма
export const searchCastMovie = async (movieId) => {
  return await Axios.get(
    `movie/${movieId}/credits?api_key=${key}&language=${language}`
  );
};

// Поиск оценок
export const searchReviews = async (movieId) => {
  return await Axios.get(
    `movie/${movieId}/reviews?api_key=${key}&language=en-Us&page=${page}`
  );
};
