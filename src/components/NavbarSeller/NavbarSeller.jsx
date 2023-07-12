import React from "react";

const NavbarSeller = () => {
  return (
    <>
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light pb-3 metropolis">
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
                <li className="nav-item ml-5 form-inline row justify-content-center"></li>
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
                    alt="profil"
                    style={{ borderRadius: "50%", width: 30 }}
                  />
                </a>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarSeller;
