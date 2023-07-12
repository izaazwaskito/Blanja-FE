import axios from "axios";
import React, { useState } from "react";
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import SidebarSeller from "../../components/SidebarSeller/SidebarSeller";
import ProductCreateContent from "./Content/ProductCreateContent";
import NavbarSeller from "../../components/NavbarSeller/NavbarSeller";

const SellerCreate = () => {
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
      <NavbarSeller />
      <main>
        <section>
          <div className="row m-0 metropolis">
            <SidebarSeller />
            <ProductCreateContent />
          </div>
        </section>
      </main>
    </>
  );
};

export default SellerCreate;
