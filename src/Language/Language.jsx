import React from "react";
import { Link } from "react-router-dom";
import "./Language.css";

export default function Language() {
  const currentUrl = window?.location?.origin;

  return (
    <div className="languages">
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
