import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";
import routes from "../routes";

const AppBar = () => {
  return (
    <ul className={s.List}>
      <li className={s.ListItem}>
        <NavLink
          exact
          className={s.Nav}
          activeClassName={s.NavActive}
          to={routes.home}
        >
          Топ недели
        </NavLink>
      </li>
      <li className={s.ListItem}>
        <NavLink
          className={s.Nav}
          activeClassName={s.NavActive}
          to={routes.movies}
        >
          Поиск
        </NavLink>
      </li>
    </ul>
  );
};

export default AppBar;
