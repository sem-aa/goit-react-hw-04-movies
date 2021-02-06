import { Route, NavLink, Switch } from "react-router-dom";
import HomeView from "./component/views/HomeView/HomeView";
import MoviesPage from "./component/views/MoviesPage/MoviesPage";
import MovieDetailsPage from "./component/views/MoviesDetailsPage/MovieDetailsPage";
import NotFoundView from "./component/views/NotFoundView";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.App}>
      <ul className={s.List}>
        <li className={s.ListItem}>
          <NavLink exact className={s.Nav} activeClassName={s.NavActive} to="/">
            Home
          </NavLink>
        </li>
        <li className={s.ListItem}>
          <NavLink className={s.Nav} activeClassName={s.NavActive} to="/movies">
            Movies Page
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />

        <Route component={NotFoundView} />
      </Switch>
    </div>
  );
}

export default App;
