import React, { Suspense, lazy } from "react";
import s from "./InfoCastReview.module.css";
import { NavLink, Route, Switch } from "react-router-dom";
import routes from "../../routes";

const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

const InfoCastReview = ({ url, path, location }) => {
  return (
    <>
      <ul>
        Дополнительная информация
        <li>
          <NavLink
            className={s.Link}
            activeClassName={s.ActiveLink}
            to={{
              pathname: `${url}${routes.cast}`,
              state: {
                from: location,
              },
            }}
          >
            Актеры
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.Link}
            activeClassName={s.ActiveLink}
            to={{
              pathname: `${url}${routes.reviews}`,
              state: {
                from: location,
              },
            }}
          >
            Отзывы
          </NavLink>
        </li>
        <Suspense fallback={<h3>Грузим дополнительную информацию</h3>}>
          <Switch>
            <Route path={`${path}/reviews`} component={Reviews} />
            <Route path={`${path}/cast`} component={Cast} />
          </Switch>
        </Suspense>
      </ul>
    </>
  );
};

export default InfoCastReview;
