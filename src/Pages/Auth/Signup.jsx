import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email_user: "",
    password_user: "",
    fullname_user: "",
    role_user: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND}/user/register`, data)
      .then((res) => {
        alert("succesful register");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response);
        alert("gagal register");
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
                      name="options"
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
                      name="options"
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
      </div>
    </>
  );
};

export default Signup;
