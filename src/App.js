import { Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import s from "./App.module.css";
import routes from "./routes";
import AppBar from "./AppBar/AppBar";

const HomeView = lazy(() => import("./component/views/HomeView/HomeView"));
const MovieDetailsPage = lazy(() =>
  import("./component/views/MoviesDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() =>
  import("./component/views/MoviesPage/MoviesPage")
);
const NotFoundView = lazy(() => import("./component/views/NotFoundView"));

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
