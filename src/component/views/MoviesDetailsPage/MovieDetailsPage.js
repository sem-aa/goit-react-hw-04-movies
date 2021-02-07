import React from "react";
import { searchMovieInfo } from "../Api/api-service";
import { NavLink, Route, Switch } from "react-router-dom";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import s from "./MovieDetailsPage.module.css";
import routes from "../../../routes";
import PropTypes from "prop-types";

class MovieDetailsPage extends React.Component {
  state = {
    title: "",
    poster_path: "",
    overview: "",
    genres: [],
    vote_average: null,
    id: null,
  };

  async componentDidMount() {
    const respone = await searchMovieInfo(this.props.match.params.movieId);
    this.setState({ ...respone.data });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const { poster_path, title, vote_average, overview, genres } = this.state;
    const { url, path } = this.props.match;

    return (
      <>
        <button className={s.button} onClick={this.handleGoBack}>
          Go back
        </button>
        <div className={s.Poster}>
          <img
            width="200px"
            height="300px"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
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
        <ul>
          Дополнительная информация
          <li>
            <NavLink
              className={s.Link}
              activeClassName={s.ActiveLink}
              to={`${url}/cast`}
            >
              Актеры
            </NavLink>
          </li>
          <li>
            <NavLink
              className={s.Link}
              activeClassName={s.ActiveLink}
              to={`${url}/reviews`}
            >
              Отзывы
            </NavLink>
          </li>
          <Switch>
            <Route path={`${path}/reviews`} component={Reviews} />
            <Route path={`${path}/cast`} component={Cast} />
          </Switch>
        </ul>
      </>
    );
  }
}

MovieDetailsPage.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
  vote_average: PropTypes.number,
  id: PropTypes.number,
};

export default MovieDetailsPage;
