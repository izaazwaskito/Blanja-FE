import React from "react";
import { Link } from "react-router-dom";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

const NavbarSeller = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const getNama = localStorage.getItem("fullname_user");

  const Logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light pb-3 metropolis">
          <div className="container" style={{ maxWidth: 1632 }}>
            <Link to={"/home"}>
              <img
                src={require("../../assets/img/logo.png")}
                alt="logo"
                style={{
                  display: "inline",
                  marginLeft: 0,
                  marginRight: "auto",
                }}
              />
            </Link>
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
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item ml-5 form-inline row justify-content-center"></li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <Link to={"/bag"}>
                  <img
                    style={{ marginRight: 40 }}
                    src={require("../../assets/img/cart.png")}
                    alt="cart"
                  />
                </Link>
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

                <img
                  className="mr-4"
                  src={require("../../assets/img/user.png")}
                  alt="profil"
                  style={{ borderRadius: "50%", width: 30 }}
                  onClick={handleToggle}
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                />
                <div>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left top"
                              : "left bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >
                              <Link
                                to={"/seller/profile"}
                                style={{ color: "black" }}
                              >
                                <MenuItem onClick={handleClose}>
                                  My Account
                                </MenuItem>
                              </Link>
                              <MenuItem onClick={Logout}>Logout</MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarSeller;
