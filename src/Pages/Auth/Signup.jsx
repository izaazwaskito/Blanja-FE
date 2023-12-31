import axios from "axios";
import "./Auth.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email_user: "",
    password_user: "",
    fullname_user: "",
    role_user: "",
  });
  const [dataSeller, setDataSeller] = useState({
    email_seller: "",
    password_seller: "",
    name_seller: "",
    description_seller: "",
    store_seller: "",
    phone_seller: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSeller = (e) => {
    setDataSeller({
      ...dataSeller,
      [e.target.name]: e.target.value,
    });
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND}/user/register`, data)
      .then((res) => {
        if (res.data.statusCode === 201) {
          Toast.fire({
            title:
              "Congratulations! Your account has been successfully created. Please check your email for further instructions",
            icon: "success",
          }).then(function () {
            // Redirect the user
            window.location.href = "/login";
          });
        } else {
          Toast.fire({
            title: "Sorry, this email is already registered.",
            icon: "error",
          }).then(function () {
            // Redirect the user
            window.location.href = "/signup";
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
        alert("gagal register");
      });
  };

  const handleRegisterSeller = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND}/seller/register`, dataSeller)
      .then((res) => {
        if (res.data.statusCode === 201) {
          Toast.fire({
            title:
              "Congratulations, your account has been created successfully!",
            icon: "success",
          }).then(function () {
            // Redirect the user
            window.location.href = "/login";
          });
        } else {
          Toast.fire({
            title: "Sorry, this email is already registered.",
            icon: "error",
          }).then(function () {
            // Redirect the user
            window.location.href = "/signup";
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
        alert("gagal register");
      });
  };
  return (
    <>
      {/* <div
        className="container metropolis"
        style={{ maxWidth: 450, marginTop: 200 }}
      >
        <img src={require("../../assets/img/logo.png")} alt="logo" />
        <p
          className="text-center py-3 text-body"
          style={{ fontWeight: "bold", margin: "25px 0px" }}
        >
          Please sign up with your account
        </p>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active text-center"
            id="customer"
            role="tabpanel"
            aria-labelledby="customer-tab"
          >
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                  value={data.role_user}
                  onChange={handleChange}
                >
                  <label
                    className="btn btn-secondary active"
                    style={{
                      paddingLeft: 26,
                      paddingRight: 26,
                      backgroundColor: "#DB3022",
                      borderColor: "#DB3022",
                    }}
                  >
                    <input
                      type="radio"
                      name="role_user"
                      id="option1"
                      autoComplete="off"
                      defaultChecked=""
                      value={"seller"}
                    />{" "}
                    Seller
                  </label>
                  <label
                    className="btn btn-secondary"
                    style={{
                      backgroundColor: "#DB3022",
                      borderColor: "#DB3022",
                    }}
                  >
                    <input
                      type="radio"
                      name="role_user"
                      id="option2"
                      autoComplete="off"
                      value={"customer"}
                    />{" "}
                    Customer
                  </label>
                </div>
              </div>
              <div className="form-group" style={{ height: 36 }}>
                <label htmlFor="formGroupExampleInput" />
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Fullname"
                  name="fullname_user"
                  value={data.fullname_user}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group" style={{ height: 36 }}>
                <label htmlFor="formGroupExampleInput2" />
                <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Email"
                  name="email_user"
                  value={data.email_user}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2" />
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Password"
                  name="password_user"
                  value={data.password_user}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group" style={{ marginTop: 50 }}>
                <button
                  type="submit"
                  className="btn btn-danger btn-block rounded-pill"
                  id="button-addon2"
                  title="Register"
                  style={{ backgroundColor: "#DB3022" }}
                >
                  PRIMARY
                </button>
                <p className="text-regis">
                  Already have a Tokopedia account?
                  <Link to={"/login"} className="text-danger">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <div
        className="container metropolis"
        style={{ maxWidth: 450, marginTop: 130 }}
      >
        <img src={require("../../assets/img/logo.png")} alt="logo" />
        <p
          className="text-center py-3 text-body"
          style={{ fontWeight: "bold", margin: "25px 0px" }}
        >
          Please sign up with your account
        </p>

        <ul
          className="nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="button signup-customer active"
              id="customer-tab"
              data-toggle="tab"
              data-target="#customer"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Customer
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="button signup-seller"
              id="seller-tab"
              data-toggle="tab"
              data-target="#seller"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Seller
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="customer"
            role="tabpanel"
            aria-labelledby="customer-tab"
          >
            <form onSubmit={handleRegister}>
              <div className="form-group" style={{ height: 36 }}>
                <label htmlFor="formGroupExampleInput" />
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Fullname"
                  name="fullname_user"
                  value={data.fullname_user}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group" style={{ height: 36 }}>
                <label htmlFor="formGroupExampleInput2" />
                <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Email"
                  name="email_user"
                  value={data.email_user}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2" />
                <input
                  type="password"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Password"
                  name="password_user"
                  value={data.password_user}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group" style={{ marginTop: 50 }}>
                <button
                  type="submit"
                  className="btn btn-danger btn-block rounded-pill"
                  id="button-addon2"
                  title="Register"
                  style={{ backgroundColor: "#DB3022" }}
                >
                  Register
                </button>
                <p className="text-regis">
                  Already have a Tokopedia account?
                  <Link to={"/login"} className="text-danger">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div
            className="tab-pane fade"
            id="seller"
            role="tabpanel"
            aria-labelledby="seller-tab"
          >
            <form onSubmit={handleRegisterSeller}>
              <div className="form-group" style={{ height: 36 }}>
                <label htmlFor="formGroupExampleInput" />
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Name"
                  name="name_seller"
                  value={dataSeller.name_seller}
                  onChange={handleChangeSeller}
                />
              </div>
              <div className="form-group" style={{ height: 36 }}>
                <label htmlFor="formGroupExampleInput2" />
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Email"
                  name="email_seller"
                  value={dataSeller.email_seller}
                  onChange={handleChangeSeller}
                />
              </div>
              <div className="form-group" style={{ height: 36 }}>
                <label htmlFor="formGroupExampleInput2" />
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Phone number"
                  name="phone_seller"
                  value={dataSeller.phone_seller}
                  onChange={handleChangeSeller}
                />
              </div>
              <div className="form-group" style={{ height: 36 }}>
                <label htmlFor="formGroupExampleInput2" />
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Store name"
                  name="store_seller"
                  value={dataSeller.store_seller}
                  onChange={handleChangeSeller}
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2" />
                <input
                  type="password"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Password"
                  name="password_seller"
                  value={dataSeller.password_seller}
                  onChange={handleChangeSeller}
                />
              </div>
              <div className="form-group" style={{ marginTop: 50 }}>
                <button
                  type="submit"
                  className="btn btn-danger btn-block rounded-pill"
                  id="button-addon2"
                  title="Register"
                  style={{ backgroundColor: "#DB3022" }}
                >
                  Register
                </button>
                <p className="text-regis">
                  Already have a Tokopedia account?
                  <Link to={"/login"} className="text-danger">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
