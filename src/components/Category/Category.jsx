import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import CategorylCSS from "./category.module.css";

// import required modules
import { Pagination } from "swiper/modules";

const Category = () => {
  return (
    <>
      <section className="mt-5 metropolis">
        <div className="container" style={{ maxWidth: 1602 }}>
          <h2 className="">Category</h2>
          <p className="">What are you currently looking for?</p>
          <div
            className="container-fluid"
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <Swiper
              c
              slidesPerView={"7"}
              spaceBetween={20}
              modules={[Pagination]}
              className={CategorylCSS.ew12x}
            >
              <SwiperSlide>
                <img src={require("../../assets/img/Group 1229.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("../../assets/img/Group 1230.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("../../assets/img/Group 1231.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("../../assets/img/Group 1232.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("../../assets/img/Group 1233.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("../../assets/img/Group 1235.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("../../assets/img/Group 1236.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("../../assets/img/Group 1238.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("../../assets/img/Group 1240.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("../../assets/img/Group 1241.png")} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
