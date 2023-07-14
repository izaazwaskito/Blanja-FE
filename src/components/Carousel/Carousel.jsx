import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import CarouselCSS from "./carousel.module.css";

// import required modules
import { Pagination } from "swiper/modules";
const Carousel = () => {
  return (
    <>
      <section>
        <div className="container" style={{ marginTop: 100, maxWidth: 1632 }}>
          <div className="container" style={{ marginTop: 100, maxWidth: 1632 }}>
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
                <img
                  src={require("../../assets/img/aedrian-ECt01A5HZtw-unsplash.jpg")}
                />
                <span className="fs-2 text-light font-weight-bold position-absolute metropolis h1">
                  Sneakers Timeless
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={require("../../assets/img/chris-henry-fXAa4-GHudU-unsplash.jpg")}
                />
                <span className="fs-2 text-light font-weight-bold position-absolute metropolis h1">
                  Hypebeast
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={require("../../assets/img/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg")}
                />
                <span className="fs-2 text-light font-weight-bold position-absolute metropolis h1">
                  Simple Minimalist
                </span>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
