import React from "react";
import s from "./MovieInfo.module.css";

const Button = ({ poster_path, title, vote_average, overview, genres }) => {
  return (
    <div className={s.Poster}>
      {poster_path && (
        <img
          width="200px"
          height="300px"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />
      )}
      <div className={s.MovieInfo}>
        <h2>{title}</h2>
        <p>Оценка пользователей: {vote_average * 10}%</p>
        <p>Описание:</p>
        <p>{overview}</p>
        <ul>
          {" "}
          Жанр
          {genres.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Button;
