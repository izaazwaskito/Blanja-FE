import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const BagCard = () => {
  let [order, setOrder] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/order`)
      .then((response) => setOrder(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  const formatRp = (bilangan) => {
    var reverse = bilangan.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return ribuan;
  };

  return (
    <>
      {order.map((item, index) => (
        <div
          className="row mt-2"
          key={index}
          style={{
            boxShadow: "0px 6px 40px 20px rgba(173, 173, 173, .25)",
            borderRadius: 5,
          }}
          id="border-big"
        >
          <div className="col-md-1">
            <input
              className="form-check-input"
              style={{ margin: "30px 20px" }}
              type="checkbox"
              defaultValue=""
              id="flexCheckDefault"
            />
          </div>
          <div className="col-md-7" id="detail-small">
            <img
              src={item.image_product}
              crossOrigin="anonymous"
              style={{
                float: "left",
                borderRadius: 8,
                width: 69,
                height: 59,
                objectFit: "cover",
                margin: "10px 0px",
              }}
              className="mr-2"
            />
            <h6 style={{ paddingTop: 20, fontWeight: "bold" }}>
              {item.name_product}
            </h6>
            <p style={{ fontSize: "small", marginTop: "-10px" }}>
              {item.total_order}
            </p>
          </div>
          <div className="col-md-2 col-7">
            <div className="color-groups mt-4 ml-3">
              <div
                className="color color-white text-center justify-content-center"
                style={{ fontSize: 20 }}
              >
                -
              </div>
              <div
                className="color color text-center justify-content-center pt-1"
                style={{ fontSize: 16 }}
              >
                {item.quantity_order}
              </div>
              <div
                className="color color-white text-center justify-content-center"
                style={{ fontSize: 20 }}
              >
                +
              </div>
            </div>
          </div>
          <div className="col-md-2 col-5 col-3">
            <p
              className="mt-3"
              style={{
                color: "#000000",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Rp. {formatRp(item.total_order)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BagCard;
