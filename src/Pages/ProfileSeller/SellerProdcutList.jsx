import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalDelete from "../../components/ModalDelete/modalDelete";
import ModalUpdate from "../../components/ModalUpdate/modalUpdate";
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import Sidebar from "../../components/SidebarSeller/SidebarSeller";
import ProductListContent from "./Content/ProductListContent";

const SellerProductList = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/product`)
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <>
        <NavbarLogin />
        <main className="metropolis">
          <section>
            <p style={{ marginTop: 40 }} />
          </section>
          <div id="wrapper">
            <Sidebar />
            <ProductListContent />
          </div>
        </main>
      </>
    </>
  );
};
export default SellerProductList;
