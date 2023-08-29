import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SidebarCustomer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getCustomer = localStorage.getItem("id_user");
    axios
      .get(`${process.env.REACT_APP_BACKEND}/user/${getCustomer}`)
      .then((response) => setData(response.data.data[0]))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div
        className="col-md-3 col-12 vhhx"
        style={{ backgroundColor: "#FFF", width: "25%" }}
      >
        <div className="row">
          <div
            className="col-md-4 vhhp"
            style={{ backgroundColor: "#FFF" }}
          ></div>
          <div className="col-md-8" style={{ marginTop: 124 }}>
            <div className="row">
              <div className="col-md-3 col-3 ">
                <img
                  src={require("../../assets/img/user.png")}
                  style={{ width: 50, borderRadius: "50%" }}
                  alt="user"
                />
              </div>
              <div className="col-md-9 col-9 pl-0 pt-1">
                <p className="mt-0 mb-0 font-weight-bold text-body">
                  {data.fullname_user}
                </p>
                <i className="fa-solid fa-pen" style={{ color: "#9b9b9b" }} />
                <span style={{ color: "#9B9B9B" }}>Ubah profile</span>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3 col-3 pl-0 ">
                <img
                  src={require("../../assets/img/account-profile.png")}
                  style={{ width: 30, borderRadius: "50%" }}
                  alt="profile"
                />
              </div>
              <div
                className="col-md-9 col-9 pl-0 pt-1"
                style={{ marginLeft: "-20px" }}
              >
                <p className="mt-0 mb-3 font-weight-bold">
                  <Link
                    to={"/customer/profile"}
                    style={{ fontSize: "1rem", color: "black" }}
                  >
                    My Account
                  </Link>
                </p>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-3 col-3 pl-0">
                <img
                  src={require("../../assets/img/adress-profile.png")}
                  style={{ width: 30, borderRadius: "50%" }}
                  alt="address"
                />
              </div>
              <div className="col-md-9 col-9 pl-0 pt-1">
                <Link to={"/customer/address"}>
                  <p
                    className="mt-0 mb-3 font-weight-bold"
                    style={{ marginLeft: "-20px" }}
                  >
                    <p style={{ fontSize: "1rem", color: "black" }}>
                      Shipping Adrress
                    </p>
                  </p>
                </Link>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-3 col-3 pl-0">
                <img
                  src={require("../../assets/img/myorder-profile.png")}
                  style={{ width: 30, borderRadius: "50%" }}
                  alt="order"
                />
              </div>
              <div className="col-md-9 col-9 pl-0 pt-1">
                <Link to={"/customer/order"}>
                  <p
                    className="mt-0 mb-0 font-weight-bold"
                    style={{ marginLeft: "-20px" }}
                  >
                    <a
                      href="/pages/profile-order.html"
                      style={{ fontSize: "1rem", color: "black" }}
                    >
                      My Order
                    </a>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarCustomer;
