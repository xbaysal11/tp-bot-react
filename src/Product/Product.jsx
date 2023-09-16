import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ref, get, child } from "firebase/database";

import db from "../firebase";
import "./Product.css";

export default function Product() {
  const { lang, categoryId } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = (lang, categoryId) => {
    get(child(ref(db), `${lang}/products`))
      .then((snapshot) => {
        if (snapshot?.exists()) {
          setProducts(
            snapshot
              ?.val()
              ?.filter((i) => String(i?.categoryId) === String(categoryId))
          );
        } else {
          console.log("no data");
        }
      })
      .catch((error) => console.log(error));
  };
  const imageUrl = (url) => {
    const loc = new URL(url);
    const link =
      loc?.hostname === "drive.google.com"
        ? `https://drive.google.com/uc?export=view&id=${url?.split("/")?.[5]}`
        : url;
    return link;
  };

  useEffect(() => {
    console.log("product");
    lang && categoryId && getProducts(lang, categoryId);
  }, [lang, categoryId]);

  return (
    <div className="products">
      <Link to={`/${lang}`} className="back-link">
        <button className="back-button">
          {lang === "kg" ? "Артка" : "Назад"}
        </button>
      </Link>
      <div className={products?.length > 0 && "products-list"}>
        {products?.length > 0 ? (
          products?.map((i) => (
            <div key={i?.id} className="product">
              <img src={imageUrl(i?.imageUrl)} alt="product" />
              <div className="">
                <span className="label-text text-ultra">{"Артикул: "}</span>
                <span className="text-small">{i?.id}</span>
              </div>
              <div>
                <span className="label-text text-ultra">
                  {lang === "kg" ? "Аталышы: " : "Название: "}
                </span>
                <b>{i?.name}</b>
              </div>
              <div className="">
                <span className="label-text text-ultra">
                  {lang === "kg" ? "Өлкө: " : "Страна: "}
                </span>
                <span className="text-small">{i?.production}</span>
              </div>
              <div className="">
                <span className="label-text text-ultra">
                  {lang === "kg" ? "Аныктама: " : "Описание: "}
                </span>
                <span className="text-small">{i?.description}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-small">
            {lang === "kg" ? "Тизме бош 🌞" : "Cписок пустой 🌞"}
          </div>
        )}
      </div>
    </div>
  );
}
