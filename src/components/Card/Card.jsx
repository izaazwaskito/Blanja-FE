import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/product`)
      .then((response) => setProducts(response.data.data))
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
      <section className="mt-5 metropolis ">
        <div className="container " style={{ maxWidth: 1632 }}>
          <h2 className="">Populer</h2>
          <p className="">Find cloths that are you tranding recently!</p>
          <div className="mt-5">
            <div className="row">
              {products.map((item, index) => (
                <div className="col-md-2 col-sm-6 col-6 mb-5" key={index}>
                  <Link to={`/product/${item.id_product}`}>
                    <div className="border rounded product ">
                      <img
                        src={item.image_product}
                        crossOrigin="anonymous"
                        style={{ height: 185, width: 150 }}
                        alt="product-img"
                      />
                      <div className="p-2">
                        <h5 className="text-body price-card hsxsa">
                          {item.name_product}
                        </h5>
                        <h5 className="text-muted price-card hsxsa">
                          Rp. {formatRp(item.price_product)}
                        </h5>
                        <img
                          src={require("../../assets/img/stars.png")}
                          alt="stars"
                          style={{ marginLeft: 0 }}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
