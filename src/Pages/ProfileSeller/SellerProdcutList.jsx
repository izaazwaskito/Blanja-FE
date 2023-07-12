import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalDelete from "../../components/ModalDelete/modalDelete";
import ModalUpdate from "../../components/ModalUpdate/modalUpdate";
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import Sidebar from "../../components/SidebarSeller/SidebarSeller";
import ProductListContent from "./Content/ProductListContent";
import NavbarSeller from "../../components/NavbarSeller/NavbarSeller";
import SidebarSeller from "../../components/SidebarSeller/SidebarSeller";

const SellerProductList = () => {
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
      <NavbarSeller />
      <main>
        <section>
          <div className="row m-0 metropolis">
            <SidebarSeller />
            <ProductListContent />
          </div>
        </section>
      </main>
    </>
  );
};
export default SellerProductList;
