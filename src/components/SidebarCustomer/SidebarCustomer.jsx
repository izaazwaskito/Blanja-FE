import React from "react";
import { Link } from "react-router-dom";

const SidebarCustomer = () => {
  return (
    <>
      <div id="sidebar-wrapper" className="metropolis">
        <ul className="sidebar-nav">
          <div className="row py-0 pl-4 pt-5 pb-4">
            <div className="col-md-4 col-3">
              <img
                src={require("../../assets/img/user.png")}
                style={{ width: 50, borderRadius: "50%" }}
              />
            </div>
            <div className="col-md-8 col-9 pl-0 pt-1">
              <p className="mt-0 mb-0 font-weight-bold text-body">
                Johannes Mikael
              </p>
              <p>Ubah profile</p>
            </div>
          </div>
          <div
            className="btn-group btn-group-toggle pl-4 pb-3"
            data-toggle="buttons"
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
              />{" "}
              <Link to={"/seller/profile"}>Seller</Link>
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
              <Link to={"/customer/profile"}>Customer</Link>
            </label>
          </div>
          <div className="row pl-4">
            <div className="col-md-3 col-3">
              <img
                src={require("../../assets/img/account-profile.png")}
                style={{ width: 30, borderRadius: "50%" }}
              />
            </div>
            <div className="col-md-9 col-9 pl-0 pt-1">
              <p className="mt-0 mb-0 font-weight-bold">
                <Link to={"/customer/profile"}>
                  <a style={{ fontSize: "1rem", color: "black" }}>My Account</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="row pl-4 mt-2">
            <div className="col-md-3 col-3">
              <img
                src={require("../../assets/img/adress-profile.png")}
                style={{ width: 30, borderRadius: "50%" }}
              />
            </div>
            <div className="col-md-9 col-9 pl-0 pt-1">
              <p className="mt-0 mb-0 font-weight-bold">
                <Link to={"/customer/address"}>
                  <a style={{ fontSize: "1rem", color: "black" }}>
                    Shipping Adrress
                  </a>
                </Link>
              </p>
            </div>
          </div>
          <div className="row pl-4 mt-2">
            <div className="col-md-3 col-3">
              <img
                src={require("../../assets/img/myorder-profile.png")}
                style={{ width: 30, borderRadius: "50%" }}
              />
            </div>
            <div className="col-md-9 col-9 pl-0 pt-1">
              <p className="mt-0 mb-0 font-weight-bold">
                <Link to={"/customer/order"}>
                  <a style={{ fontSize: "1rem", color: "black" }}>My Order</a>
                </Link>
              </p>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default SidebarCustomer;
