import Basket from "../components/Basket";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../components/Home";
import Products from "./../components/Products";
import NotFound from "./../components/NotFound";

const Navigation = (props: any) => {
  return (
    <Routes>
      <Route path="/" element={<Home {...props} />} />
      <Route path="basket" element={<Basket {...props} />} />
      <Route path="products" element={<Products {...props} />} />
      {/* <Route path="/" element={<AllProducts />} />
        <Route path=":id" element={<ProductDetails />} /> */}
      {/* </Route> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
