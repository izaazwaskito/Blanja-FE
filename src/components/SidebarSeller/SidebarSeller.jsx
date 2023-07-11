import React from "react";
import { Link } from "react-router-dom";

const SidebarSeller = () => {
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
                src={require("../../assets/img/seller-profile.png")}
                style={{ width: 30, borderRadius: "50%" }}
              />
            </div>
            <div className="col-md-9 col-9 pl-0 pt-1">
              <p className="mt-0 mb-0 font-weight-bold">
                <a
                  style={{ fontSize: "1rem", color: "black" }}
                  data-toggle="collapse"
                  data-target="#collapseStore"
                  aria-expanded="false"
                  aria-controls="collapseStore"
                >
                  Store
                </a>
              </p>
              <div className="accordion" id="accordionExample">
                <div
                  id="collapseStore"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="row pl-4 mt-2">
                    <div className="col-md-12 col-12 pl-0 pt-1">
                      <p className="mt-0 mb-0 font-weight-bold">
                        <Link to={"/seller/profile"}>
                          <a style={{ fontSize: "1rem", color: "black" }}>
                            Store Profile
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pl-4 mt-2">
            <div className="col-md-3 col-3">
              <img
                src={require("../../assets/img/seller-product.png")}
                style={{ width: 30, borderRadius: "50%" }}
              />
            </div>
            <div className="col-md-9 col-9 pl-0 pt-1">
              <p className="mt-0 mb-0 font-weight-bold">
                <a
                  href="/pages/profile-address.html"
                  style={{ fontSize: "1rem", color: "black" }}
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Product
                </a>
              </p>
              <div className="accordion" id="accordionExample">
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="row pl-4 mt-2">
                    <div className="col-md-12 col-12 pl-0 pt-1">
                      <p className="mt-0 mb-0 font-weight-bold">
                        <Link to={"/seller/product"}>
                          <a style={{ fontSize: "1rem", color: "black" }}>
                            My Product
                          </a>
                        </Link>
                      </p>
                    </div>
                    <div className="col-md-12 col-12 pl-0 pt-1">
                      <p className="mt-0 mb-0 font-weight-bold">
                        <Link to={"/seller/create"}>
                          <a style={{ fontSize: "1rem", color: "black" }}>
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
          <div className="row pl-4 mt-2">
            <div className="col-md-3 col-3">
              <img
                src={require("../../assets/img/seller-order.png")}
                style={{ width: 30, borderRadius: "50%" }}
              />
            </div>
            <div className="col-md-9 col-9 pl-0 pt-1">
              <p className="mt-0 mb-0 font-weight-bold">
                <a
                  style={{ fontSize: "1rem", color: "black" }}
                  data-toggle="collapse"
                  data-target="#collapseOrder"
                  aria-expanded="false"
                  aria-controls="collapseOrder"
                >
                  Order
                </a>
              </p>
              <div className="accordion" id="accordionExample">
                <div
                  id="collapseOrder"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="row pl-4 mt-2">
                    <div className="col-md-12 col-12 pl-0 pt-1">
                      <p className="mt-0 mb-0 font-weight-bold">
                        <a style={{ fontSize: "1rem", color: "black" }}>
                          My Order
                        </a>
                      </p>
                    </div>
                    <div className="col-md-12 col-12 pl-0 pt-1">
                      <p className="mt-0 mb-0 font-weight-bold">
                        <a style={{ fontSize: "1rem", color: "black" }}>
                          Cancel Order
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default SidebarSeller;
