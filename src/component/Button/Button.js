import React from "react";
import s from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      Вернуться назад
    </button>
  );
};

export default Button;
