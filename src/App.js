import { Route, Routes, Navigate } from "react-router-dom";
import Category from "./Category/Category";
import Product from "./Product/Product";
import { useEffect } from "react";

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  });
  
  return (
    <>
      <Routes>
        <Route path="/:lang" element={<Category />} />
        <Route path={"/:lang/category/:categoryId"} element={<Product />} />
        <Route index element={<Navigate to="/ru" replace />} />
      </Routes>
    </>
  );
}

export default App;
