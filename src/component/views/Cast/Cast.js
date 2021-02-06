import React from "react";
import { searchCastMovie } from "../Api/api-service";
import s from "./Cast.module.css";

class Cast extends React.Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const respone = await searchCastMovie(this.props.match.params.movieId);
    this.setState({ cast: respone.data.cast });
  }

  render() {
    return (
      <ul>
        {this.state.cast.map((actor) => (
          <li className={s.List} key={actor.cast_id}>
            <img
              className={s.img}
              width="50px"
              height="100%"
              alt={actor.name}
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
            ></img>
            <div>
              <h3>{actor.name}</h3>
              <p>character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
