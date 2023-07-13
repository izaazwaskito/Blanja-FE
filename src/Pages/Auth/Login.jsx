import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [login, setlogin] = useState({
    email_user: "",
    password_user: "",
  });
  const handleChange = (e) => {
    setlogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND}/user/login`, login)
      .then((res) => {
        alert("Succesful Login");
        console.log(login.role_user);
        localStorage.setItem("token_user", res.data.data.token_user);
        localStorage.setItem("role_user", res.data.data.role_user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        alert("Email/Password Wrong");
      });
  };

  return (
    <>
      <div
        className="container metropolis"
        style={{ maxWidth: 450, marginTop: 200 }}
      >
        <img src={require("../../assets/img/logo.png")} alt="logo" />
        <p
          className="text-center py-3 text-body"
          style={{ fontWeight: "bold", margin: "25px 0px" }}
        >
          Please login with your account
        </p>
        <div className="form-group text-center">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
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
                name="options"
                id="option1"
                autoComplete="off"
                defaultChecked=""
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
                name="options"
                id="option2"
                autoComplete="off"
              />{" "}
              Customer
            </label>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="customer"
            role="tabpanel"
            aria-labelledby="customer-tab"
          >
            <form onSubmit={handleLogin}>
              <div className="form-group" style={{ height: 36 }}>
                <label htmlFor="formGroupExampleInput2" />
                <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Email"
                  name="email_user"
                  value={login.email_user}
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
                  value={login.password_user}
                  onChange={handleChange}
                />
              </div>
              <Link
                to={"/resetpassword"}
                className="text-danger float-right py-2"
                style={{ fontSize: 14 }}
              >
                Forgot password?
              </Link>

              <div className="form-group" style={{ marginTop: 50 }}>
                <button
                  type="submit"
                  className="btn btn-danger btn-block rounded-pill"
                  id="button-addon2"
                  title="Login"
                  style={{ backgroundColor: "#DB3022" }}
                >
                  PRIMARY
                </button>
                <p className="text-regis">
                  Don't have a Tokopedia account?
                  <Link to={"/signup"} className="text-danger">
                    Register
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

export default Login;
