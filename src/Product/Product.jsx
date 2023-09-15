import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ref, get, child } from "firebase/database";

import db from "../firebase";
import "./Product.css"

export default function Product() {
  const { lang, categoryId } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    get(child(ref(db), `${lang}/products`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducts(
            snapshot
              .val()
              ?.filter((i) => String(i.categoryId) === String(categoryId))
          );
        } else {
          console.log("no data");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <div className="products">
      <Link to={`/${lang}`} className="back-button">
        <button>back</button>
      </Link>
      <div>{lang}</div>
      {products?.map((i) => (
        <div key={i?.id} className="product">
          {i?.name}
        </div>
      ))}
    </div>
  );
}
