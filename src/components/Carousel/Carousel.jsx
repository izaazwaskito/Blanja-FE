import React from "react";

const Carousel = () => {
  return (
    <>
      <section>
        <div className="container" style={{ marginTop: 100, maxWidth: 1632 }}>
          <div className="row" style={{ justifyContent: "center" }}>
            <div
              id="carouselTopControls"
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
                    <div>
                      <img
                        src={require("../../assets/img/card-1.png")}
                        className="d-block w-100"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../assets/img/card-2.png")}
                        className="d-block w-100"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../assets/img/card-1.png")}
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
                    <div>
                      <img
                        src={require("../../assets/img/card-1.png")}
                        className="d-block w-100"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../assets/img/card-2.png")}
                        className="d-block w-100"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../assets/img/card-1.png")}
                        className="d-block w-100"
                      />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a
        className="carousel-control-prev"
        href="#carouselTopControls"
        role="button"
        data-slide="prev"
        style={{ height: 150, top: 140 }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselTopControls"
        role="button"
        data-slide="next"
        style={{ height: 150, top: 140 }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </>
  );
};

export default Carousel;
