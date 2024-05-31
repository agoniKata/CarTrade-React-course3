// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderMe = () => {
  return (
    <header id="site-header">
      <div className="logo left">
        <img
          className="logocar"
          src="https://static.tildacdn.com/tild3939-6465-4030-a135-636461656637/cartrade_logo-3_1_3.svg"
          alt="Логотип"
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/Ads">Объявления</Link>
          </li>
          <li>
            <Link to="/SubmitAd">Продать</Link>
          </li>
          <li>
            <Link to="/Login">Вход</Link>
          </li>
          <li>
            <Link to="/Registration">Регистрация</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMe;
