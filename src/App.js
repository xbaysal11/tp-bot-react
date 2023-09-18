import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";

import Category from "./Category/Category";
import Product from "./Product/Product";
import Language from "./Language/Language";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Language />} />
        <Route path="/:lang" element={<Category />} />
        <Route path={"/:lang/category/:categoryId"} element={<Product />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
