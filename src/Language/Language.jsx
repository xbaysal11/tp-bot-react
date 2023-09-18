import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Language.css";

export default function Language() {
  const location = useLocation();

  return (
    <div className="languages">
      <div className="languages-list">
        <Link to={`${location?.pathname}/ru`} className="language">
          <div>Русский 🇷🇺</div>
        </Link>
        <Link to={`${location?.pathname}/kg`} className="language">
          <div>Кыргызча 🇰🇬</div>
        </Link>
      </div>
    </div>
  );
}
