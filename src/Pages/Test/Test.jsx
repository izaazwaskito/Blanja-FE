import axios from "axios";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./my-swiper.css";

// import required modules
import { Pagination } from "swiper/modules";

const HomeLogin = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { sortValue, setSortValue } = useState("");
  const sortOption = ["name_product", "price_product"];
  const [value, setValue] = useState("");

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    return await axios
      .get(`http://localhost:3000/product`)
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.log(error));
  };

  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    axios
      .get(`http://localhost:3000/product?sortby=${value}&sort=asc`)
      .then((response) => {
        setProducts(response.data.data);
        setValue("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <>
        <header className="metropolis">
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container" style={{ maxWidth: 1632 }}>
              <a href="./index.html">
                <img
                  src={require("../../assets/img/logo.png")}
                  alt="logo"
                  style={{
                    display: "inline",
                    marginLeft: 0,
                    marginRight: "auto",
                  }}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item ml-2 form-inline row justify-content-center">
                    <input
                      id="searchbox"
                      className="form-control mr-sm-2 mt-1"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <img
                      className="searchLogo"
                      src={require("../../assets/img/search-logo.png")}
                      alt=""
                    />
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <a href="/pages/mybag.html">
                    <img
                      style={{ marginRight: 40 }}
                      src={require("../../assets/img/cart.png")}
                      alt="cart"
                    />
                  </a>
                  <img
                    style={{ marginRight: 40 }}
                    src={require("../../assets/img/bell.png")}
                    alt="bell"
                  />
                  <a href="/pages/chatv1.html">
                    <img
                      style={{ marginRight: 40 }}
                      src={require("../../assets/img/mail.png")}
                      alt="mail"
                    />
                  </a>
                  <a href="/pages/profile-account.html">
                    <img
                      className="mr-4"
                      src={require("../../assets/img/user.png")}
                      alt="cart"
                      style={{ borderRadius: "50%", width: 30 }}
                    />
                  </a>
                </form>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <section>
            <div
              className="container"
              style={{ marginTop: 100, maxWidth: 1632 }}
            >
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={35}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={require("../../assets/img/karsten-winegeart-cZVE4GpzQLM-unsplash.jpg")}
                  />
                  <span className="fs-2 text-light font-weight-bold position-absolute metropolis h1">
                    Ice Jacket
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../../assets/img/michael-lee-5Z9bgfRZLLE-unsplash.jpg")}
                  />
                  <span className="fs-2 text-light font-weight-bold position-absolute metropolis h1">
                    Best Fashion in 2023
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require("../../assets/img/carousel1.png")} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require("../../assets/img/carousel1.png")} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require("../../assets/img/carousel1.png")} />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          <section className="mt-5">
            <div className="container" style={{ maxWidth: 1632 }}>
              {/* Modal */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Filter
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12 mb-2">
                          <p className="font-weight-bold text-body">Color</p>
                        </div>
                        <div className="col-md-12">
                          <div className="color-groups">
                            <div className="color color-white active-color" />
                            <div className="color color-black" />
                            <div className="color color-yellow" />
                            <div className="color color-blue" />
                            <div className="color color-red" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <p className="font-weight-bold text-body">Sizes</p>
                        </div>
                        <div className="col-md-12">
                          <div style={{ display: "flex" }}>
                            <div className="flex-box">XS</div>
                            <div
                              className="flex-box"
                              style={{
                                background: "#DB3022",
                                color: "white",
                                border: 0,
                              }}
                            >
                              S
                            </div>
                            <div
                              className="flex-box"
                              style={{
                                background: "#DB3022",
                                color: "white",
                                border: 0,
                              }}
                            >
                              M
                            </div>
                            <div className=" flex-box">L</div>
                            <div className="flex-box">XL</div>
                          </div>
                        </div>
                        <div className="col-md-12 mt-3">
                          <p className="font-weight-bold text-body">Category</p>
                        </div>
                        <div className="col-md-12">
                          <div style={{ display: "flex" }}>
                            <div
                              className="flex-box-category"
                              style={{
                                background: "#DB3022",
                                color: "white",
                                border: 0,
                              }}
                            >
                              All
                            </div>
                            <div className=" flex-box-category">Women</div>
                            <div className="flex-box-category">Men</div>
                            <div className=" flex-box-category">Boys</div>
                            <div className="flex-box-category">Girl</div>
                          </div>
                        </div>
                        <div className="col-md-12 mt-3">
                          <p className="font-weight-bold text-body">Brand</p>
                        </div>
                        <div className="col-md-12"></div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn border rounded-pill"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn rounded-pill btn-danger"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="">Category</h2>
              <p className="">What are you currently looking for?</p>
              <div
                className="container-fluid"
                style={{ paddingLeft: 0, paddingRight: 0 }}
              >
                <div className="row" style={{ justifyContent: "center" }}>
                  <div
                    id="carouselCategoryControls"
                    className="carousel slide"
                    data-ride="carousel"
                    style={{ margin: "30px 0 0 0", width: 1800 }}
                  >
                    <div className="carousel-inner container-fluid ">
                      <div className="carousel-item active">
                        <section
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="f-category">
                            <img
                              src={require("../../assets/img/Group 1229.png")}
                              className="d-block w-100"
                            />
                          </div>
                          <div className="f-category">
                            <img
                              src={require("../../assets/img/Group 1230.png")}
                              className="d-block w-100"
                            />
                          </div>
                          <div className="f-category">
                            <img
                              src={require("../../assets/img/Group 1231.png")}
                              className="d-block w-100"
                            />
                          </div>
                          <div className="f-category">
                            <img
                              src={require("../../assets/img/Group 1232.png")}
                              className="d-block w-100"
                            />
                          </div>
                          <div className="f-category">
                            <img
                              src={require("../../assets/img/Group 1233.png")}
                              className="d-block w-100"
                            />
                          </div>
                          <div className="f-category">
                            <img
                              src={require("../../assets/img/Group 1240.png")}
                              className="d-block w-100"
                            />
                          </div>
                        </section>
                      </div>
                      <div className="carousel-item">
                        <section
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="f-category">
                            <img
                              src={require("../../assets/img/Group 1240.png")}
                              className="d-block w-100"
                            />
                          </div>
                          <div className="f-category">
                            <img
                              src={require("../../assets/img/Group 1235.png")}
                              className="d-block w-100"
                            />
                          </div>
                          <div className="f-category">
                            <img
                              src={require("../../assets/img/Group 1236.png")}
                              className="d-block w-100"
                            />
                          </div>
                          <div className="f-category">
                            <img
                              src={require("../../assets/img/Group 1238.png")}
                              className="d-block w-100"
                            />
                          </div>
                          <div className="f-category">
                            <img
                              src={require("../../assets/img/Group 1241.png")}
                              className="d-block w-100"
                            />
                          </div>
                          <div className="f-category">
                            <img
                              src={require("../../assets/img/Group 1229.png")}
                              className="d-block w-100"
                            />
                          </div>
                        </section>
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselCategoryControls"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselCategoryControls"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-5">
            <div className="container" style={{ maxWidth: 1632 }}>
              <h2 className="">Populer</h2>
              <p className="">Find cloths that are you tranding recently!</p>
              <div className="mt-5">
                <div className="row">
                  {products.map((item, index) => (
                    <div className="col-md-2 col-sm-6 col-6 mb-5" key={index}>
                      <Link to={`/product/${item.id_product}`}>
                        <div className="border rounded product">
                          <img
                            src={item.image_product}
                            crossOrigin="anonymous"
                          />
                          <div className="p-2">
                            <h5 className="text-body price-card">
                              {item.name_product}
                            </h5>
                            <h5 className="text-muted price-card">
                              Rp. {item.price_product}
                            </h5>
                            <img
                              src={require("../../assets/img/stars.png")}
                              alt="stars"
                              style={{ marginLeft: 0 }}
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <select
                className="custom-select ml-3"
                style={{ borderRadius: 50 }}
                onChange={handleSort}
                value={sortValue}
              >
                <option>Sort</option>
                {sortOption.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </section>
        </main>
      </>
    </>
  );
};

export default HomeLogin;
