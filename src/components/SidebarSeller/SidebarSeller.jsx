import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SidebarSeller = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getSeller = localStorage.getItem("id_seller");
    axios
      .get(`${process.env.REACT_APP_BACKEND}/seller/${getSeller}`)
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
            style={{ backgroundColor: "#FFFFF" }}
          ></div>
          <div className="col-md-8" style={{ marginTop: 124 }}>
            <div className="row">
              <div className="col-md-3 col-3 ">
                <img
                  src={
                    data.photo_seller === null || data.photo_seller === "null"
                      ? require("../../assets/img/account-profile.png")
                      : data.photo_seller
                  }
                  alt="profil"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-md-9 col-9 pl-0 pt-1">
                <p className="mt-0 mb-0 font-weight-bold text-body">
                  {data.name_seller}
                </p>
                <i className="fa-solid fa-pen" style={{ color: "#9b9b9b" }} />
                <span style={{ color: "#9B9B9B" }}>Ubah profile</span>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3 col-3 pl-0 ">
                <img
                  src={require("../../assets/img/seller-profile.png")}
                  alt="seller-profile"
                  style={{ width: 30, borderRadius: "50%" }}
                />
              </div>
              <div className="col-md-9 col-9 pl-0 pt-1">
                <p
                  className="mt-0 mb-0 font-weight-bold"
                  style={{ marginLeft: "-20px" }}
                >
                  <a
                    href="/pages/profile-address.html"
                    style={{ fontSize: "1rem", color: "black" }}
                    data-toggle="collapse"
                    data-target="#collapseStore"
                    aria-expanded="false"
                    aria-controls="collapseStore"
                  >
                    Store
                  </a>
                </p>
                <div
                  className="accordion"
                  id="accordionExample"
                  style={{ marginLeft: "-5px" }}
                >
                  <div
                    id="collapseStore"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="row mt-2">
                      <div className="col-md-12 col-12 pl-0 pt-1">
                        <p className="mt-0 mb-0 font-weight-bold">
                          <Link to={"/seller/profile"}>
                            <a
                              href="/pages/profile-order.html"
                              style={{
                                fontSize: "1rem",
                                color: "#000000",
                              }}
                            >
                              Store profile
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-3 col-3 pl-0">
                <img
                  src={require("../../assets/img/seller-product.png")}
                  alt="product"
                  style={{ width: 30, borderRadius: "50%" }}
                />
              </div>
              <div className="col-md-9 col-9 pl-0 pt-1">
                <p
                  className="mt-0 mb-0 font-weight-bold"
                  style={{ marginLeft: "-20px" }}
                >
                  <a
                    href="/pages/profile-address.html"
                    style={{ fontSize: "1rem", color: "black" }}
                    data-toggle="collapse"
                    data-target="#collapseProduct"
                    aria-expanded="false"
                    aria-controls="collapseProduct"
                  >
                    Product
                  </a>
                </p>
                <div
                  className="accordion"
                  id="accordionExample"
                  style={{ marginLeft: "-5px" }}
                >
                  <div
                    id="collapseProduct"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="row mt-2">
                      <div className="col-md-12 col-12 pl-0 pt-1">
                        <p className="mt-0 mb-0 font-weight-bold">
                          <Link to={"/seller/product"}>
                            <a
                              href="/pages/profile-order.html"
                              style={{
                                fontSize: "1rem",
                                color: "#000000",
                              }}
                            >
                              My Product
                            </a>
                          </Link>
                        </p>
                      </div>
                      <div className="col-md-12 col-12 pl-0 pt-1">
                        <p className="mt-0 mb-0 font-weight-bold">
                          <Link to={"/seller/create"}>
                            <a
                              href="/pages/profile-order.html"
                              style={{
                                fontSize: "1rem",
                                color: "#000000",
                              }}
                            >
                              Selling Product
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-3 col-3 pl-0">
                <img
                  src={require("../../assets/img/seller-order.png")}
                  alt="order"
                  style={{ width: 30, borderRadius: "50%" }}
                />
              </div>
              <div className="col-md-9 col-9 pl-0 pt-1">
                <p
                  className="mt-0 mb-0 font-weight-bold"
                  style={{ marginLeft: "-20px" }}
                >
                  <a
                    href="/pages/profile-address.html"
                    style={{ fontSize: "1rem", color: "black" }}
                    data-toggle="collapse"
                    data-target="#collapseOrder"
                    aria-expanded="false"
                    aria-controls="collapseOrder"
                  >
                    Order
                  </a>
                </p>
                <div
                  className="accordion"
                  id="accordionExample"
                  style={{ marginLeft: "-5px" }}
                >
                  <div
                    id="collapseOrder"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="row mt-2">
                      <div className="col-md-12 col-12 pl-0 pt-1">
                        <p className="mt-0 mb-0 font-weight-bold">
                          <a
                            href="/pages/profile-order.html"
                            style={{
                              fontSize: "1rem",
                              color: "#9b9b9b",
                            }}
                          >
                            My order
                          </a>
                        </p>
                      </div>
                      <div className="col-md-12 col-12 pl-0 pt-1">
                        <p className="mt-0 mb-0 font-weight-bold">
                          <a
                            href="/pages/profile-order.html"
                            style={{
                              fontSize: "1rem",
                              color: "#000000",
                            }}
                          >
                            Order cancel
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarSeller;
