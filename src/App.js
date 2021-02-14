import { Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import s from "./App.module.css";
import routes from "./routes";
import AppBar from "./AppBar/AppBar";

const HomeView = lazy(() => import("./views/HomeView"));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));

function App() {
  return (
    <div className={s.App}>
      <AppBar />
      <Suspense fallback={<h1>Load page...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route path={routes.movieId} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
