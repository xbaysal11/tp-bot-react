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
        <Route index path="/" element={<Language />} />
        <Route path="/:lang" element={<Category />} />
        <Route path={"/:lang/category/:categoryId"} element={<Product />} />
        <Route element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
