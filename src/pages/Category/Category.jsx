import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ref, get, child } from "firebase/database";

import db from "../../firebase";
import "./Category.css";

export default function Category() {
  const { lang } = useParams();

  const [categories, setCategories] = useState([]);
  const currentUrl = window?.location?.href;

  const getCategories = (lang) => {
    get(child(ref(db), `${lang}/categories`))
      .then((snapshot) => {
        if (snapshot?.exists()) {
          setCategories(snapshot?.val());
        } else {
          console.log("no data");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCategories(lang);
  }, [lang]);

  return (
    <div className="categories">
      <Link to={`/`} className="back-link">
        <button className="back-button">
          {lang === "kg" ? "Артка" : "Назад"}
        </button>
      </Link>
      <div className="categories-list">
        {categories?.length > 0 &&
          categories?.map((category) => (
            <Link
              to={`${currentUrl}/category/${category?.id}`}
              key={category?.id}
              className="category"
            >
              <div>{category?.name}</div>
            </Link>
          ))}
      </div>
    </div>
  );
}
