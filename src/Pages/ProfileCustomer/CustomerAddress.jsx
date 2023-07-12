import { useState } from "react";
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import SidebarCustomer from "../../components/SidebarCustomer/SidebarCustomer";
import AddressContent from "./Content/AddressContent";
import axios from "axios";

const CustomerAddress = () => {
  let [address, setAddress] = useState({
    name_address: "",
    address_address: "",
    phone_address: "",
    postal_address: "",
    city_address: "",
    as_address: "",
  });

  let handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name_address", address.name_address);
    formData.append("address_address", address.address_address);
    formData.append("phone_address", address.phone_address);
    formData.append("postal_address", address.postal_address);
    formData.append("city_address", address.city_address);
    formData.append("as_address", address.as_address);
    axios
      .post(`${process.env.REACT_APP_BACKEND}/address`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("Address Created");
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light pb-3">
          <div className="container" style={{ maxWidth: 1610 }}>
            <a href="./index.html">
              <img
                src={require("../../assets/img/logo.png")}
                alt="logo"
                style={{
                  display: "inline",
                  marginLeft: 0,
                  marginRight: "auto",
                }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item ml-5 form-inline row justify-content-center">
                  <input
                    id="searchbox"
                    className="form-control mr-sm-2 mt-1"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <img
                    className="searchLogo"
                    src={require("../../assets/img/search-logo.png")}
                    alt=""
                  />
                  <img
                    id="homeFilter"
                    className="mr-4 border p-2"
                    src={require("../../assets/img/filter.png")}
                    alt="filter"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    style={{ borderRadius: 10 }}
                  />
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <a href="/pages/mybag.html">
                  <img
                    style={{ marginRight: 40 }}
                    src={require("../../assets/img/cart.png")}
                    alt="cart"
                  />
                </a>
                <img
                  style={{ marginRight: 40 }}
                  src={require("../../assets/img/bell.png")}
                  alt="bell"
                />
                <a href="/pages/chatv1.html">
                  <img
                    style={{ marginRight: 40 }}
                    src={require("../../assets/img/mail.png")}
                    alt="mail"
                  />
                </a>
                <a href="/pages/profile-account.html">
                  <img
                    className="mr-4"
                    src={require("../../assets/img/user.png")}
                    alt="cart"
                    style={{ borderRadius: "50%", width: 30 }}
                  />
                </a>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className="row m-0 metropolis">
            <div
              className="col-md-3 col-12 vhhx"
              style={{ backgroundColor: "#FFF", width: "25%" }}
            >
              <div className="row">
                <div
                  className="col-md-4 vhhp"
                  style={{ backgroundColor: "#FFF" }}
                ></div>
                <div className="col-md-8" style={{ marginTop: 124 }}>
                  <div className="row">
                    <div className="col-md-3 col-3 ">
                      <img
                        src=" /assets/img/user.png"
                        style={{ width: 50, borderRadius: "50%" }}
                      />
                    </div>
                    <div className="col-md-9 col-9 pl-0 pt-1">
                      <p className="mt-0 mb-0 font-weight-bold text-body">
                        Johannes Mikael
                      </p>
                      <i
                        className="fa-solid fa-pen"
                        style={{ color: "#9b9b9b" }}
                      />
                      <span style={{ color: "#9B9B9B" }}>Ubah profile</span>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-3 col-3 pl-0 ">
                      <img
                        src="/assets/img/account-profile.png"
                        style={{ width: 30, borderRadius: "50%" }}
                      />
                    </div>
                    <div
                      className="col-md-9 col-9 pl-0 pt-1"
                      style={{ marginLeft: "-20px" }}
                    >
                      <p className="mt-0 mb-3 font-weight-bold">
                        <a
                          href="/pages/profile-account.html"
                          style={{ fontSize: "1rem", color: "#9b9b9b" }}
                        >
                          My Account
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3 col-3 pl-0">
                      <img
                        src=" /assets/img/adress-profile.png"
                        style={{ width: 30, borderRadius: "50%" }}
                      />
                    </div>
                    <div className="col-md-9 col-9 pl-0 pt-1">
                      <p
                        className="mt-0 mb-3 font-weight-bold"
                        style={{ marginLeft: "-20px" }}
                      >
                        <a
                          href="/pages/profile-address.html"
                          style={{ fontSize: "1rem", color: "#9b9b9b" }}
                        >
                          Shipping Adrress
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3 col-3 pl-0">
                      <img
                        src=" /assets/img/myorder-profile.png"
                        style={{ width: 30, borderRadius: "50%" }}
                      />
                    </div>
                    <div className="col-md-9 col-9 pl-0 pt-1">
                      <p
                        className="mt-0 mb-0 font-weight-bold"
                        style={{ marginLeft: "-20px" }}
                      >
                        <a
                          href="/pages/profile-order.html"
                          style={{ fontSize: "1rem", color: "black" }}
                        >
                          My Order
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                <div className=" col-md-12 border-bottom mt-3 ">
                  <h4 className="font-weight-bold pt-2">
                    Choose another address
                  </h4>
                  <p>Manage your shipping address</p>
                </div>
                <div className="col-md-12 mt-5">
                  <div className="row">
                    <button
                      type="button"
                      className="btn btn-primary btn-modal container-fluid p-3"
                      data-toggle="modal"
                      data-target="#addressModal"
                      style={{
                        backgroundColor: "transparent",
                        color: "#9B9B9B",
                        border: "1px dashed",
                      }}
                    >
                      Add New Address
                    </button>
                  </div>
                </div>
                <div className="col-md-12 mt-5">
                  <div
                    className="row"
                    style={{ borderRadius: 4, border: "1px solid red" }}
                  >
                    <div className="col-md-12">
                      <p
                        style={{ fontWeight: "bold", color: "black" }}
                        className="mt-2"
                      >
                        Andreas Jane
                      </p>
                      <p style={{ color: "black" }}>
                        Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                        Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note:
                        blok c 16] Sokaraja, Kab. Banyumas, 53181
                      </p>
                      <p style={{ color: "#DB3022", fontWeight: "bold" }}>
                        Change address
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-1 vhhp"
              style={{ backgroundColor: "#F5F5F5" }}
            ></div>
          </div>
        </section>
        <form onSubmit={handleSubmit}>
          <div
            className="modal fade"
            id="addressModal"
            tabIndex={-1}
            aria-labelledby="addressModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addressModalLabel">
                    Add new address
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-1" />
                    <div className="col-md-10">
                      <div className="form-group">
                        <p className="form-font">
                          Save address as (ex : home address, office address)
                        </p>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput2"
                          placeholder="Rumah"
                          name="as_address"
                          value={address.as_address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-1" />
                  </div>
                  <div className="row">
                    <div className="col-md-1" />
                    <div className="col-md-5">
                      <div className="form-group">
                        <p className="form-font">Recipient’s name</p>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput2"
                          placeholder=""
                          name="name_address"
                          value={address.name_address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group">
                        <p className="form-font">
                          Recipient's telephone number
                        </p>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput2"
                          placeholder=""
                          name="phone_address"
                          value={address.phone_address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-1" />
                  </div>
                  <div className="row">
                    <div className="col-md-1" />
                    <div className="col-md-5">
                      <div className="form-group">
                        <p className="form-font">Address</p>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput2"
                          placeholder=""
                          name="address_address"
                          value={address.address_address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group">
                        <p className="form-font">Posal Code</p>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput2"
                          placeholder=""
                          name="postal_address"
                          value={address.postal_address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-1" />
                  </div>
                  <div className="row">
                    <div className="col-md-1" />
                    <div className="col-md-5">
                      <div className="form-group">
                        <p className="form-font">City or Subdistrict</p>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput2"
                          placeholder=""
                          name="city_address"
                          value={address.city_address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-1" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn border rounded-pill"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn rounded-pill btn-danger">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};
export default CustomerAddress;
