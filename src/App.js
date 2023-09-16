// import { Route, Routes, Navigate } from "react-router-dom";
// import Category from "./Category/Category";
// import Product from "./Product/Product";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
  }, []);
  return (
    <div className="App">
      wetqetw
      {/* <Routes>
        <Route path="/:lang" element={<Category />} />
        <Route path={"/:lang/category/:categoryId"} element={<Product />} />
        <Route index element={<Navigate to="/ru" replace />} />
      </Routes> */}
    </div>
  );
}

export default App;
