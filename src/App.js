import { Route, Routes } from "react-router-dom";
import Category from "./Category/Category";
import Product from "./Product/Product";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/:lang" element={<Category />} />
        <Route path={"/:lang/category/:categoryId"} element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
