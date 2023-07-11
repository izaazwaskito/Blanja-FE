import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import SellerCreate from "../../Pages/ProfileSeller/SellerCreate";
import Login from "../../Pages/Auth/Login";
import Signup from "../../Pages/Auth/Signup";
import SellerProductList from "../../Pages/ProfileSeller/SellerProdcutList";
import SellerProfile from "../../Pages/ProfileSeller/SellerProfile";
import DetailPage from "../../Pages/DetailProduct/DetailPage";
import CustomerProfile from "../../Pages/ProfileCustomer/CustomerProfile";
import CustomerAddress from "../../Pages/ProfileCustomer/CustomerAddress";
import CustomerOrder from "../../Pages/ProfileCustomer/CustomerOrder";
import HomeLogin from "../../Pages/Test";
import MyBag from "../../Pages/Checkout/MyBag";
import MyCheckout from "../../Pages/Checkout/MyCheckout";
import ForgetPassword from "../../Pages/Auth/ForgetPassword/ForgetPassword";
import ForgetPasswordConfirm from "../../Pages/Auth/ForgetPassword/ForgetPasswordConfirm";
import ForgetPasswordLogin from "../../Pages/Auth/ForgetPassword/ForgetPasswordLogin";
import RequireAuth from "../../components/RequireAuth/RequireAuth";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/seller/create"
            element={
              <RequireAuth>
                <SellerCreate />
              </RequireAuth>
            }
          />
          <Route
            path="/seller/product"
            element={
              <RequireAuth>
                <SellerProductList />
              </RequireAuth>
            }
          />
          <Route
            path="/seller/profile"
            element={
              <RequireAuth>
                <SellerProfile />
              </RequireAuth>
            }
          />
          <Route
            path="/customer/profile"
            element={
              <RequireAuth>
                <CustomerProfile />
              </RequireAuth>
            }
          />
          <Route
            path="/customer/address"
            element={
              <RequireAuth>
                <CustomerAddress />
              </RequireAuth>
            }
          />
          <Route
            path="/customer/order"
            element={
              <RequireAuth>
                <CustomerOrder />
              </RequireAuth>
            }
          />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="/test" element={<HomeLogin />} />
          <Route
            path="/bag"
            element={
              <RequireAuth>
                <MyBag />
              </RequireAuth>
            }
          />
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <MyCheckout />
              </RequireAuth>
            }
          />
          <Route path="/resetpassword" element={<ForgetPassword />} />
          <Route
            path="/resetpassword/confirm"
            element={<ForgetPasswordConfirm />}
          />
          <Route
            path="/resetpassword/login"
            element={<ForgetPasswordLogin />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
