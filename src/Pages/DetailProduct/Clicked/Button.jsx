import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Button = () => {
  const { id } = useParams();
  const getUserId = localStorage.getItem("id_user");
  const getToken = localStorage.getItem("token_user");
  const [data, setData] = useState({
    id_product: id,
    quantity_order: "",
    id_user: getUserId,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const handleCreateOrder = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BACKEND}/order`, data).then((res) => {
      if (res.data.statusCode === 201) {
        Toast.fire({
          title: "Order Created",
          icon: "success",
        });
      } else {
        Toast.fire({
          title: "Order Created Error",
          icon: "error",
        });
      }
    });
  };

  return (
    <>
      <form
        onSubmit={
          !getToken || !getUserId ? console.log("error") : handleCreateOrder
        }
      >
        <div style={{ display: "flex" }} className="metropolis">
          <div style={{ marginRight: 40 }}>
            <p
              style={{
                fontWeight: "bold",
                color: "black",
                marginTop: 20,
              }}
            >
              Size
            </p>
            <div className="color-groups">
              <div
                className="color color-white text-center"
                style={{ fontSize: 20 }}
              >
                -
              </div>
              <input
                className="color color text-center"
                style={{ borderColor: "transparent" }}
                placeholder="XL"
              />
              <div
                className="color color-white text-center"
                style={{ fontSize: 20 }}
              >
                +
              </div>
            </div>
          </div>
          <div>
            <p
              style={{
                fontWeight: "bold",
                color: "black",
                marginTop: 20,
              }}
            >
              Quantity
            </p>
            <div className="color-groups">
              <div
                className="color color-white text-center"
                style={{ fontSize: 20 }}
              >
                -
              </div>

              <input
                className="color color text-center"
                style={{ borderColor: "transparent" }}
                placeholder="1"
                name="quantity_order"
                value={data.quantity_order}
                onChange={handleChange}
              />

              <div
                className="color color-white text-center"
                style={{ fontSize: 20 }}
              >
                +
              </div>
            </div>
          </div>
        </div>
        <div className="buttons d-flex mt-3 metropolis">
          <button
            type="button"
            className="Btn rounded-pill mr-2"
            style={{ width: 160, height: 48 }}
          >
            Chat
          </button>
          <button
            type="button"
            className="Btn rounded-pill mr-2"
            style={{ width: 160, height: 48 }}
          >
            Add Bag
          </button>
          <button
            type={"submit"}
            className="btn btn-danger rounded-pill mr-2"
            style={{ width: 343, height: 48, backgroundColor: "#DB3022" }}
          >
            Buy Now
          </button>
        </div>
      </form>
    </>
  );
};

export default Button;
