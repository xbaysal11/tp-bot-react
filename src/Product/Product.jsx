import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ref, get, child } from "firebase/database";

import db from "../firebase";

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
  }, [lang, categoryId]);

  return (
    <div>
      <Link to={`/${lang}`}>назад</Link>
      <div>{lang}</div>
      {products?.map((i) => (
        <div key={i?.id}>{i?.name}</div>
      ))}
    </div>
  );
}
