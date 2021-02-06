import React from "react";
import { searchMovieInfo } from "../Api/api-service";
import { NavLink, Route, Switch } from "react-router-dom";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import s from "./MovieDetailsPage.module.css";

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

  render() {
    const { poster_path, title, vote_average, overview, genres } = this.state;
    const { url, path } = this.props.match;
    return (
      <>
        <div className={s.Poster}>
          <img
            width="200"
            height="300"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
          <div className={s.MovieInfo}>
            <h2>{title}</h2>
            <p>Use Score: {vote_average * 10}%</p>
            <p>Overview</p>
            <p>{overview}</p>
            <ul>
              {" "}
              Genres
              {genres.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <ul>
          Additional information
          <li>
            <NavLink
              className={s.Link}
              activeClassName={s.ActiveLink}
              to={`${url}/cast`}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={s.Link}
              activeClassName={s.ActiveLink}
              to={`${url}/reviews`}
            >
              Reviews
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

export default MovieDetailsPage;
