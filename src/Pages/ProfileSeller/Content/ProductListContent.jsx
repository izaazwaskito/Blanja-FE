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
      <div id="page-content-wrapper">
        <div className="container" style={{ maxWidth: 1632 }}>
          <div className="row">
            <div
              className="col-md-12  p-4 py-5"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              <div
                className="ml-4 border pb-4"
                style={{
                  background: "#fff",
                  borderRadius: 4,
                  marginBottom: 140,
                }}
              >
                <div className="row py-4 border-bottom ">
                  <div className="col-md-12 pl-5">
                    <h4 className="font-weight-bold">My Product</h4>
                  </div>
                </div>
                <div class="row ">
                  <div class="col-md-2 text-center ">
                    <p class="line-text text-danger font-weight-bold">
                      All items
                    </p>
                  </div>
                  <div class="col-md-2 text-center ">
                    <p>Sold Out</p>
                  </div>
                  <div class="col-md-2 text-center ">
                    <p>Archived</p>
                  </div>
                  <div class="col-md-2 text-center ">
                    <p></p>
                  </div>
                  <div class="col-md-2 text-center ">
                    <p></p>
                  </div>
                  <div class="col-md-2 text-center">
                    <p></p>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="row  m-1">
                    <div className="input-group rounded col-md-2 p-0">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <button className="btn border" type="submit">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 border m-3">
                  <div className="row border">
                    <div className="col-md-8">Product Name</div>
                    <div className="col-md-1">Price</div>
                    <div className="col-md-1">Stock</div>
                    <div className="col-md-2">Action</div>
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
                        <div className="col-md-8">{item.name_product}</div>
                        <div className="col-md-1">{item.price_product}</div>
                        <div className="col-md-1">{item.stock_product}</div>
                        <div className="col-md-2">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListContent;
