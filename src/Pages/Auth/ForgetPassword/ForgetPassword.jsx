import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <>
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
                    placeholder="Email"
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
                  <button
                    type="button"
                    className="btn btn-danger btn-block rounded-pill"
                    data-toggle="modal"
                    data-target="#exampleModal"
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
      <div
        className="modal fade metropolis"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12 mt-3">
                  <img src={require("../../../assets/img/logo.png")} />
                </div>
                <div className="col-md-12  text-center pt-5">
                  <h4 className="font-weight-bold">
                    Request to Reset Your Account Password
                  </h4>
                </div>
                <div className="col-md-12  mt-3">
                  <img src={require("../../../assets/img/lock 1.png")} />
                </div>
                <div className="col-md-2  text-center pt-4"></div>
                <div className="col-md-8  text-center pt-4">
                  <p className="text-body">
                    The following is the button for you to reset the password.
                  </p>
                </div>
                <div className="col-md-2  text-center pt-4"></div>
                <div className="col-md-12  mt-3 mb-4">
                  <div className=" container text-center">
                    <Link to={"/resetpassword/confirm"}>
                      <button
                        type="button"
                        className="btn btn-danger rounded-pill btn-cm w-50"
                        style={{ backgroundColor: "#DB3022" }}
                        onClick="window.location.reload()"
                      >
                        Change password
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal-footer"
              style={{ backgroundColor: "#DF4538" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
