import React from "react";

const ProductReview = () => {
  return (
    <>
      <section>
        <div className="container pr metropolis" style={{ maxWidth: 1632 }}>
          <h2 className="mt-5 fw-bold fs-2">Product Review</h2>
          <div className="d-flex align-items-center">
            <div className="mb-3">
              <div className="d-flex align-items-center">
                <p className="fw-bold" style={{ fontSize: 80, color: "black" }}>
                  5.0
                </p>
                <p className="qty">/5</p>
              </div>
              <div className="rate" style={{ color: "orange" }}>
                <span className="fa fa-star" style={{ fontSize: 20 }} />
                <span className="fa fa-star" style={{ fontSize: 20 }} />
                <span className="fa fa-star" style={{ fontSize: 20 }} />
                <span className="fa fa-star" style={{ fontSize: 20 }} />
                <span className="fa fa-star" style={{ fontSize: 20 }} />
              </div>
            </div>
            <div className="mb-3 ml-3">
              <div className="rate" style={{ color: "orange" }}>
                <div className="display: flex;">
                  <div>
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                  </div>
                  <div>
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                  </div>
                  <div>
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                  </div>
                  <div>
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                  </div>
                  <div>
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 ml-3">
              <div className="rate" style={{ color: "orange" }}>
                <div className="display: flex;">
                  <div>
                    <span style={{ color: "#9B9B9B" }}>5</span>
                  </div>
                  <div>
                    <span style={{ color: "#9B9B9B" }}>4</span>
                  </div>
                  <div>
                    <span style={{ color: "#9B9B9B" }}>3</span>
                  </div>
                  <div>
                    <span style={{ color: "#9B9B9B" }}>2</span>
                  </div>
                  <div>
                    <span style={{ color: "#9B9B9B" }}>1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 ml-3">
              <div style={{ marginTop: "-51px" }}>
                <img src={require("../../../assets/img/Line 48.png")} alt="" />
              </div>
            </div>
            <div className="mb-3 ml-3">
              <div className="rate" style={{ color: "orange" }}>
                <div className="display: flex;">
                  <div>
                    <span style={{ color: "#9B9B9B" }}>5</span>
                  </div>
                  <div>
                    <span style={{ color: "#9B9B9B" }}>0</span>
                  </div>
                  <div>
                    <span style={{ color: "#9B9B9B" }}>0</span>
                  </div>
                  <div>
                    <span style={{ color: "#9B9B9B" }}>0</span>
                  </div>
                  <div>
                    <span style={{ color: "#9B9B9B" }}>0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductReview;
