import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function Category() {
  const { lang } = useParams();
  const location = useLocation();

  return (
    <div>
      {lang}
      <div>Category </div>
      <Link to={`${location.pathname}/category/category1`}>category 1</Link>
    </div>
  );
}
