import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalDelete from "../../../components/ModalDelete/modalDelete";
import ModalUpdate from "../../../components/ModalUpdate/modalUpdate";

const ProductListContent = () => {
  let [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/product`)
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div
        className="col-md-8 col-12 vhhp"
        style={{ backgroundColor: "#F5F5F5", marginLeft: "right" }}
      >
        <div
          className="col-md-12 border container-fluid vhhy"
          style={{
            marginTop: 124,
            backgroundColor: "#FFF",
            borderRadius: 4,
            border: "1px solid #9B9B9B",
          }}
        >
          <div className="row">
            <div className=" col-md-12 mt-3">
              <div className=" col-md-12 border-bottom">
                <div className="row">
                  <div className="col-md-12 p-0">
                    <h4 className="font-weight-bold pt-2">My product</h4>
                  </div>
                  <div class="col-md-2 col-4 text-left p-0">
                    <p class="line-text text-danger font-weight-bold">
                      All items
                    </p>
                  </div>
                  <div class="col-md-2 col-4 text-left p-0">
                    <p>Sold Out</p>
                  </div>
                  <div class="col-md-2 col-4 text-left p-0">
                    <p>Archived</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 p-0">
            <div className="input-group rounded col-md-2 p-0 mt-4">
              <input
                className="form-control"
                style={{ borderRadius: 40 }}
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12 border mt-4" style={{ borderRadius: 4 }}>
            <div className="row " style={{ backgroundColor: "#F6F6F6" }}>
              <div className="col-md-8 col-8 p-3">Product Name</div>
              <div className="col-md-1 col-3 p-3">Price</div>
              <div className="col-md-1 col-3 p-3">Stock</div>
              <div className="col-md-2 col-6 p-3">Action</div>
            </div>
            {products
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.name_product
                      .toLowerCase()
                      .includes(search.toLowerCase());
              })
              .map((item) => (
                <div className="row mt-1 mb-1">
                  <div className="col-md-8 col-8 p-3">{item.name_product}</div>
                  <div className="col-md-1 col-3 p-3">{item.price_product}</div>
                  <div className="col-md-1 col-3 p-3">{item.stock_product}</div>
                  <div className="col-md-2 col-8 p-3">
                    <ModalUpdate
                      id_product={item.id_product}
                      name_product={item.name_product}
                      id_category={item.id_category}
                      price_product={item.price_product}
                      stock_product={item.stock_product}
                      description_product={item.description_product}
                      image_product={item.image_product}
                    />
                    <span> </span>
                    <ModalDelete id_product={item.id_product} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div
        className="col-md-1 vhhp"
        style={{ backgroundColor: "#F5F5F5" }}
      ></div>
    </>
  );
};

export default ProductListContent;