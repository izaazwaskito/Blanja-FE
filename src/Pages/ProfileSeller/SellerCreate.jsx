import axios from "axios";
import React, { useState } from "react";
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import SidebarSeller from "../../components/SidebarSeller/SidebarSeller";
import ProductCreateContent from "./Content/ProductCreateContent";

const SellerCreate = () => {
  return (
    <>
      <NavbarLogin />
      <main className="metropolis">
        <section>
          <p style={{ marginTop: 40 }} />
        </section>
        <div id="wrapper">
          <SidebarSeller />
          <ProductCreateContent />
        </div>
      </main>
    </>
  );
};

export default SellerCreate;
