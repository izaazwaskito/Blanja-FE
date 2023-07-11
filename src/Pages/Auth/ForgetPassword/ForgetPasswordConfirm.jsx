import React from "react";
import { Link } from "react-router-dom";

const ForgetPasswordConfirm = () => {
  return (
    <>
      <div
        className="container metropolis"
        style={{ maxWidth: 450, marginTop: 200 }}
      >
        <img src={require("../../../assets/img/logo.png")} alt="logo" />
        <p
          className="text-center py-3"
          style={{ fontWeight: "bold", margin: "25px 0px", color: "black" }}
        >
          Reset password
        </p>
        <p
          className="text-center py-3"
          style={{
            fontWeight: "bold",
            margin: "25px 0px",
            color: "#F01F0E",
            fontSize: 14,
          }}
        >
          You need to change your password to activate your account
        </p>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="customer"
            role="tabpanel"
            aria-labelledby="customer-tab"
          >
            <form>
              <div className="form-group" style={{ height: 36 }}>
                <label htmlFor="formGroupExampleInput2" />
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Password"
                  style={{ marginTop: "-10px" }}
                />
              </div>
              <div className="form-group" style={{ height: 36 }}>
                <label htmlFor="formGroupExampleInput2" />
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Confirmation New Password"
                  style={{ marginTop: "-10px" }}
                />
              </div>
              <div className="form-group" style={{ marginTop: 10 }}>
                <a
                  className="text-danger float-right py-2"
                  style={{ fontSize: 14 }}
                >
                  Forgot password?
                </a>
                <Link to={"/resetpassword/login"}>
                  <button
                    type="button"
                    className="btn btn-danger btn-block rounded-pill"
                    style={{ backgroundColor: "#DB3022" }}
                  >
                    PRIMARY
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordConfirm;
