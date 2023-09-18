import React from "react";
import { Link } from "react-router-dom";
import "./Language.css";
import Logo from "../../assets/images/logo.jpg";

export default function Language() {
  const currentUrl = window?.location?.origin;

  return (
    <div className="languages">
      <div className="welcome">
        <div className="welcome-image">
          <img src={Logo} alt="logo" />
        </div>
        <div className="welcome-text">
          <p>Добро пожаловать!</p>
        </div>
      </div>
      <div className="languages-list">
        <Link to={`${currentUrl}/ru`} className="language">
          <div>Русский 🇷🇺</div>
        </Link>
        <Link to={`${currentUrl}/kg`} className="language">
          <div>Кыргызча 🇰🇬</div>
        </Link>
      </div>
    </div>
  );
}
