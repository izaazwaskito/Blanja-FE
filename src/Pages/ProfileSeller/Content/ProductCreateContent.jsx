import axios from "axios";
import React, { useState } from "react";

const ProductCreateContent = () => {
  let [photo, setPhoto] = useState(null);
  let [product, setProduct] = useState({
    name_product: "",
    id_category: "",
    stock_product: "",
    price_product: "",
    description_product: "",
  });

  let handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  let handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name_product", product.name_product);
    formData.append("id_category", product.id_category);
    formData.append("stock_product", product.stock_product);
    formData.append("price_product", product.price_product);
    formData.append("image_product", photo);
    formData.append("description_product", product.description_product);
    axios
      .post(`${process.env.REACT_APP_BACKEND}/product`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("product created");
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div
        className="col-md-8 col-12 vhhpx"
        style={{
          backgroundColor: "#F5F5F5",
          marginLeft: "right",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div
            className="col-md-12 border container-fluid"
            style={{
              marginTop: 124,
              backgroundColor: "#FFF",
              borderRadius: 4,
              border: "1px solid #9B9B9B",
            }}
          >
            <div className=" col-md-12 border-bottom mt-3 p-0">
              <h4 className="font-weight-bold pt-2">Inventory</h4>
            </div>
            <div className=" col-md-6 mt-3 p-0 mb-4">
              <p>Name of goods</p>
              <input
                type="text"
                className="form-control"
                style={{ height: 48 }}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                name="name_product"
                value={product.name_product}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>
          <div
            className="col-md-12 border container-fluid"
            style={{
              marginTop: 30,
              backgroundColor: "#FFF",
              borderRadius: 4,
              border: "1px solid #9B9B9B",
            }}
          >
            <div className=" col-md-12 border-bottom mt-3 p-0">
              <h4 className="font-weight-bold pt-2">Item details</h4>
            </div>
            <div className=" col-md-6 mt-3 p-0 mb-4">
              <p>Unit price</p>
              <input
                type="text"
                className="form-control"
                style={{ height: 48 }}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                placeholder=""
                name="price_product"
                value={product.price_product}
                onChange={handleChange}
              />
            </div>
            <div className=" col-md-6 mt-3 p-0 mb-4">
              <p>Stock</p>
              <input
                type="text"
                className="form-control"
                style={{ height: 48 }}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                placeholder=""
                name="stock_product"
                value={product.stock_product}
                onChange={handleChange}
              />
            </div>
            <div className=" col-md-6 mt-3 p-0 mb-4">
              <p>Category</p>
              <select
                class="form-control"
                style={{ height: 48 }}
                id="exampleFormControlSelect1"
                name="id_category"
                value={product.id_category}
                onChange={handleChange}
              >
                <option name="id_category" value={1}>
                  T-Shirt
                </option>
                <option name="id_category" value={2}>
                  Pants
                </option>
                <option name="id_category" value={3}>
                  Hoodie
                </option>
                <option name="id_category" value={4}>
                  Parka
                </option>
                <option name="id_category" value={5}>
                  Longsleeve
                </option>
                <option name="id_category" value={6}>
                  Varsity
                </option>
                <option name="id_category" value={7}>
                  Sweatshirt
                </option>
              </select>
            </div>
          </div>
          <div
            className="col-md-12 border container-fluid"
            style={{
              marginTop: 30,
              backgroundColor: "#FFF",
              borderRadius: 4,
              border: "1px solid #9B9B9B",
            }}
          >
            <div className=" col-md-12 border-bottom mt-3 p-0">
              <h4 className="font-weight-bold pt-2">Photo of goods</h4>
            </div>
            <div className=" col-md-6 mt-3 p-0 mb-4">
              <input
                type="file"
                className="form-control"
                style={{ height: 48 }}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                name="image_product"
                onChange={handleUpload}
                placeholder=""
              />
            </div>
          </div>
          <div
            className="col-md-12 border container-fluid"
            style={{
              marginTop: 30,
              backgroundColor: "#FFF",
              borderRadius: 4,
              border: "1px solid #9B9B9B",
            }}
          >
            <div className=" col-md-12 border-bottom mt-3 p-0">
              <h4 className="font-weight-bold pt-2">Descriptions</h4>
            </div>
            <div className=" col-md-12 mt-3 p-0 mb-4">
              <input
                type="text"
                className="form-control"
                style={{ height: 316 }}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                name="description_product"
                value={product.description_product}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>
          <div className="col-md-12 mb-4 text-right" style={{ marginTop: 30 }}>
            <button
              type="submit"
              className="btn btn-danger rounded-pill btn-cm"
            >
              Sell
            </button>
          </div>
        </form>
      </div>
      <div
        className="col-md-1 vhhpx"
        style={{ backgroundColor: "#F5F5F5" }}
      ></div>
    </>
  );
};

export default ProductCreateContent;
