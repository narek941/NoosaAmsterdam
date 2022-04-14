import {
  Home,
  About,
  Product,
  Contact,
  MainLayout,
  SignIn,
  SignUp,
  Order,
  ProductDetail,
} from "../containers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

const MainRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="productDetail" element={<ProductDetail />} />
          <Route path="/home" element={<Home />} />

          <Route path="product" element={<Product />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />

          <Route path="order" element={<Order />} />
          <Route path="/" element={<Home />} />

          {/* <Route path="*" element={<404/>} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
};
export default MainRouter;
