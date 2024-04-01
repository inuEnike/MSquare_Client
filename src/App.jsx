import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/Product/SingleProduct";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default App;
