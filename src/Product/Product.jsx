import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Product() {
  const { lang, categoryId } = useParams();

  return (
    <div>
      <Link to={`/${lang}`}>назад</Link>
      <div>{lang}</div>
      <div>product - {categoryId}</div>
    </div>
  );
}
