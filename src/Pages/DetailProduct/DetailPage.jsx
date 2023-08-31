import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import ProductReview from "./ProductReview/ProductReview";
import Quantity from "./Clicked/Quantity";
import Button from "./Clicked/Button";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  let [products, setProducts] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/product/${id}`)
      .then((response) => setProducts(response.data.data[0]))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLogin = localStorage.getItem("token_user");
  if (!isLogin) {
    return (
      <>
        <Navbar />
        <main>
          <section>
            <div className="container" style={{ maxWidth: 1632 }}>
              <p className="" style={{ marginTop: 150 }}>
                Home &gt; Category &gt; {products.name_category}
              </p>
            </div>
          </section>
          <section>
            <div className="container" style={{ maxWidth: 1632 }}>
              <div className="row">
                <div className="col-12 col-lg-3 mt-2">
                  <div className="row">
                    <div className="col">
                      <img
                        src={products.image_product}
                        crossOrigin="anonymous"
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8 mt-2">
                  <h1>{products.name_product}</h1>
                  <p>{products.name_category}</p>
                  <div className="rate" style={{ color: "orange" }}>
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                  </div>
                  <div className="price">
                    <p style={{ margin: "20px 0 -5px 0" }}>Price</p>
                    <h2 className="fw-bold fs-3">
                      Rp. {products.price_product}
                    </h2>
                  </div>
                  <div className="d-flex flex-column">
                    <p
                      className="font-weight-bold ms-1 mt-4 mb-4"
                      style={{ color: "black" }}
                    >
                      Color
                    </p>
                    <div className="d-flex">
                      <div className="color-groups">
                        <div className="color color-white active-color" />
                        <div className="color color-black" />
                        <div className="color color-yellow" />
                        <div className="color color-blue" />
                        <div className="color color-red" />
                      </div>
                    </div>
                  </div>
                  <Quantity />
                  <Button />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container" style={{ maxWidth: 1632 }}>
              <h2 className="mt-5 fw-bold fs-3">Informasi Produk</h2>
              <div className="condition mt-5">
                <h3 className="fw-bold fs-4">Condition</h3>
                <h4 style={{ color: "#DB3022" }}>New</h4>
              </div>
              <div className="descirpiton">
                <h3 className="fw-bold fs-4 mt-5">Description</h3>
                <p>{products.description_product}</p>
              </div>
            </div>
          </section>
          <ProductReview />
        </main>
      </>
    );
  } else {
    return (
      <>
        <NavbarLogin />
        <main>
          <section>
            <div className="container" style={{ maxWidth: 1632 }}>
              <p className="" style={{ marginTop: 150 }}>
                Home &gt; Category &gt; {products.name_category}
              </p>
            </div>
          </section>
          <section>
            <div className="container" style={{ maxWidth: 1632 }}>
              <div className="row">
                <div className="col-12 col-lg-3 mt-2">
                  <div className="row">
                    <div className="col">
                      <img
                        src={products.image_product}
                        crossOrigin="anonymous"
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8 mt-2">
                  <h1>{products.name_product}</h1>
                  <p>{products.name_category}</p>
                  <div className="rate" style={{ color: "orange" }}>
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                    <span className="fa fa-star" style={{ fontSize: 20 }} />
                  </div>
                  <div className="price">
                    <p style={{ margin: "20px 0 -5px 0" }}>Price</p>
                    <h2 className="fw-bold fs-3">
                      Rp. {products.price_product}
                    </h2>
                  </div>
                  <div className="d-flex flex-column">
                    <p
                      className="font-weight-bold ms-1 mt-4 mb-4"
                      style={{ color: "black" }}
                    >
                      Color
                    </p>
                    <div className="d-flex">
                      <div className="color-groups">
                        <div className="color color-white active-color" />
                        <div className="color color-black" />
                        <div className="color color-yellow" />
                        <div className="color color-blue" />
                        <div className="color color-red" />
                      </div>
                    </div>
                  </div>
                  <Quantity />
                  <Button />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container" style={{ maxWidth: 1632 }}>
              <h2 className="mt-5 fw-bold fs-3">Informasi Produk</h2>
              <div className="condition mt-5">
                <h3 className="fw-bold fs-4">Condition</h3>
                <h4 style={{ color: "#DB3022" }}>New</h4>
              </div>
              <div className="descirpiton">
                <h3 className="fw-bold fs-4 mt-5">Description</h3>
                <p>{products.description_product}</p>
              </div>
            </div>
          </section>
          <ProductReview />
        </main>
      </>
    );
  }
};

export default DetailPage;
