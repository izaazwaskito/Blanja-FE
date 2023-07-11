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
      <div id="page-content-wrapper">
        <div className="container" style={{ maxWidth: 1632 }}>
          <div className="row">
            <div
              className="col-md-12  p-4 py-5"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              <div
                className="ml-4 border"
                style={{
                  background: "#fff",
                  borderRadius: 4,
                  marginBottom: 140,
                }}
              >
                <div className="row py-4 border-bottom ">
                  <div className="col-md-12 pl-5">
                    <h4 className="font-weight-bold">Sell Product</h4>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row ">
                    <div className="col-md-6">
                      <div className="row py-1">
                        <p />
                      </div>
                      <div className="row  py-1 mt-1">
                        <div className="col-md-3 col-3">
                          <p className="text-right" style={{ paddingTop: 13 }}>
                            Name
                          </p>
                        </div>
                        <div className="col-md-9 col-9 pl-0  mb-5">
                          <input
                            type="text"
                            className="form-input container-fluid"
                            placeholder="Name Product"
                            name="name_product"
                            value={product.name_product}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-3 col-3">
                          <p className="text-right" style={{ paddingTop: 13 }}>
                            Category
                          </p>
                        </div>
                        <div className="col-md-9 col-9 pl-0  mb-5">
                          <select
                            class="form-control"
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
                        <div className="col-md-3 col-3">
                          <p className="text-right" style={{ paddingTop: 13 }}>
                            Price
                          </p>
                        </div>
                        <div className="col-md-9 col-9 pl-0  mb-5">
                          <input
                            type="text"
                            className="form-input container-fluid"
                            name="price_product"
                            placeholder="Price Product"
                            value={product.price_product}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-3 col-3">
                          <p className="text-right" style={{ paddingTop: 13 }}>
                            Stock
                          </p>
                        </div>
                        <div className="col-md-9 col-9 pl-0  mb-5">
                          <input
                            type="text"
                            className="form-input container-fluid"
                            name="stock_product"
                            placeholder="Stock Product"
                            value={product.stock_product}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-3 col-3">
                          <p className="text-right" style={{ paddingTop: 13 }}>
                            Image
                          </p>
                        </div>
                        <div className="col-md-9 col-9 pl-0  mb-5">
                          <input
                            type="file"
                            className="form-input container-fluid"
                            placeholder=""
                            name="image_product"
                            onChange={handleUpload}
                          />
                        </div>
                        <div className="col-md-3 col-3">
                          <p className="text-right" style={{ paddingTop: 13 }}>
                            Description
                          </p>
                        </div>
                        <div className="col-md-9 col-9 pl-0  mb-5">
                          <input
                            type="text"
                            className="form-input container-fluid"
                            name="description_product"
                            placeholder="Description Product"
                            value={product.description_product}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-3 col-3">
                          <p
                            className="text-right"
                            style={{ paddingTop: 13 }}
                          />
                        </div>
                        <div className="col-md-9 col-9 pl-0  mb-5">
                          <button
                            type="submit"
                            className="btn btn-danger rounded-pill btn-cm"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCreateContent;
