import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalDelete from "../../../components/ModalDelete/modalDelete";
import ModalUpdate from "../../../components/ModalUpdate/modalUpdate";
import { useDispatch, useSelector } from "react-redux";
import getProductAction from "../../../config/redux/actions/getProductActions";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";

const ProductListContent = () => {
  // const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  // const { product } = useSelector((state) => state.product);
  // useEffect(() => {
  //   dispatch(getProductAction());
  // }, []);

  const handleDelete = (id_product) => {
    Swal.fire({
      title: "Are you sure you want to delete this item?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      icon: "warning",
      iconColor: "#DB3022",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        confirmButton: "order-1",
        denyButton: "order-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("http://localhost:7474/product/" + id_product);
        Swal.fire("Deleted!", "", "success");
        setTimeout(function () {
          window.location.reload(1);
        }, 2000);
      } else if (result.isDenied) {
        Swal.fire("Delete Cancel", "", "info");
      }
    });
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name_product,
      sortable: true,
    },
    {
      name: "Stock",
      selector: (row) => row.stock_product,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price_product,
      sortable: true,
    },
    {
      name: "Update",
      cell: (row) => (
        <ModalUpdate
          id_product={row.id_product}
          name_product={row.name_product}
          id_category={row.id_category}
          price_product={row.price_product}
          stock_product={row.stock_product}
          description_product={row.description_product}
          image_product={row.image_product}
        />
      ),
      sortable: true,
    },
    {
      name: "Delete",
      cell: (row) => (
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(row.id_product)}
        >
          Delete
        </button>
      ),
      sortable: true,
    },
  ];
  const [products, setProducts] = useState([]);
  const endpoint = `${process.env.REACT_APP_BACKEND}/product`;
  const getData = async () => {
    await axios.get(endpoint).then((response) => {
      const data = response.data.data;
      setProducts(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div
        className="col-md-8 col-12 vhhp"
        style={{ backgroundColor: "#F5F5F5", marginLeft: "right" }}
      >
        <div
          className="col-md-12 border container-fluid vhhyy"
          style={{
            marginTop: 124,
            backgroundColor: "#fff",
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
          {/* <div className="col-md-12 p-0">
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
          </div> */}
          {/* <div className="col-md-12 border mt-4" style={{ borderRadius: 4 }}>
            <div className="row " style={{ backgroundColor: "#F6F6F6" }}>
              <div className="col-md-8 col-8 p-3">Product Name</div>
              <div className="col-md-1 col-3 p-3">Price</div>
              <div className="col-md-1 col-3 p-3">Stock</div>
              <div className="col-md-2 col-6 p-3">Action</div>
            </div>
            {product
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
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id_product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div> */}
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
          <DataTable
            columns={columns}
            data={products.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name_product
                    .toLowerCase()
                    .includes(search.toLowerCase());
              // filter((item) => {
              // if (search === "") {
              //   return item;
              // } else if (
              //   item.name.toLowerCase().includes(search.toLowerCase())
              // ) {
              //   return item;
              // }
            })}
            pagination
            // paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            // subHeaderComponent={subHeaderComponentMemo}
            selectableRows
            persistTableHead
          />
        </div>
      </div>
      <div
        className="col-md-1 vhhp"
        style={{ backgroundColor: "#F5F5F5" }}
        fixedHeader
        pagination
      ></div>
    </>
  );
};

export default ProductListContent;
