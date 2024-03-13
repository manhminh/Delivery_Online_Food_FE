import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import RestaurantDetails from "../components/Restaurant/RestaurantDetails";
import Cart from "../components/Cart/Cart";
import Profile from "../components/Profile/Profile";
import Navbar from "../components/Navbar/Navbar";
import Auth from "../components/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/user/userAction";
import { findCart } from "../redux/cart/cartAction";
import PaymentSuccess from "../components/Payment/PaymentSuccess";

const CustomerRoutes = () => {
  const auth = useSelector((state) => state.auth);

  console.log(auth);

  const jwt = localStorage.getItem("jwt");

  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.jwt || jwt) {
      dispatch(getUser());
      dispatch(findCart());
    }
  }, [auth.jwt, jwt]);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account/:register" element={<HomePage />} />
        <Route
          path="/restaurant/:city/:title/:id"
          element={<RestaurantDetails />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile/*" element={<Profile />} />
        <Route path="/payment/success/:id" element={<PaymentSuccess />} />
      </Routes>

      <Auth />
    </div>
  );
};

export default CustomerRoutes;
