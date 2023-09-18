import { Route, Routes, Navigate } from "react-router-dom";
import Category from "./Category/Category";
import Product from "./Product/Product";
import Language from "./Language/Language";
import { useEffect } from "react";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Language />} />
        <Route path="/:lang" element={<Category />} />
        <Route path={"/:lang/category/:categoryId"} element={<Product />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
