import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { ref, get, child } from "firebase/database";

import db from "../firebase";

export default function Category() {
  const { lang } = useParams();
  const location = useLocation();

  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    get(child(ref(db), `${lang}/categories`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setCategories(snapshot.val());
        } else {
          console.log("no data");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCategories();
  }, [lang]);

  return (
    <div>
      {lang}
      <div>Category </div>
      {categories?.map((category) => (
        <Link
          to={`${location.pathname}/category/${category?.id}`}
          key={category?.id}
        >
          {category?.name}
        </Link>
      ))}
    </div>
  );
}
