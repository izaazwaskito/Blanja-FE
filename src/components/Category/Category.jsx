import React from "react";
import "swiper/css";
import "swiper/css/pagination";

const Category = () => {
  return (
    <>
      <section className="mt-5 metropolis">
        <div className="container" style={{ maxWidth: 1632 }}>
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
                          alt="category-icon"
                        />
                      </div>
                      <div className="f-category">
                        <img
                          src={require("../../assets/img/Group 1230.png")}
                          className="d-block w-100"
                          alt="category-icon"
                        />
                      </div>
                      <div className="f-category">
                        <img
                          src={require("../../assets/img/Group 1231.png")}
                          className="d-block w-100"
                          alt="category-icon"
                        />
                      </div>
                      <div className="f-category">
                        <img
                          src={require("../../assets/img/Group 1232.png")}
                          className="d-block w-100"
                          alt="category-icon"
                        />
                      </div>
                      <div className="f-category">
                        <img
                          src={require("../../assets/img/Group 1233.png")}
                          className="d-block w-100"
                          alt="category-icon"
                        />
                      </div>
                      <div className="f-category">
                        <img
                          src={require("../../assets/img/Group 1240.png")}
                          className="d-block w-100"
                          alt="category-icon"
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
                          alt="category-icon"
                        />
                      </div>
                      <div className="f-category">
                        <img
                          src={require("../../assets/img/Group 1235.png")}
                          className="d-block w-100"
                          alt="category-icon"
                        />
                      </div>
                      <div className="f-category">
                        <img
                          src={require("../../assets/img/Group 1236.png")}
                          className="d-block w-100"
                          alt="category-icon"
                        />
                      </div>
                      <div className="f-category">
                        <img
                          src={require("../../assets/img/Group 1238.png")}
                          className="d-block w-100"
                          alt="category-icon"
                        />
                      </div>
                      <div className="f-category">
                        <img
                          src={require("../../assets/img/Group 1241.png")}
                          className="d-block w-100"
                          alt="category-icon"
                        />
                      </div>
                      <div className="f-category">
                        <img
                          src={require("../../assets/img/Group 1229.png")}
                          className="d-block w-100"
                          alt="category-icon"
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
    </>
  );
};

export default Category;
