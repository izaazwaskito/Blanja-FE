import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="metropolis">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
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
              <form className="form-inline my-2 my-lg-0">
                <Link to={"/login"}>
                  <button
                    type="button"
                    className="btn btn-danger rounded-pill mr-2 ml-3"
                    style={{ backgroundColor: "#DB3022" }}
                  >
                    Login
                  </button>
                </Link>
                <Link to={"/signup"}>
                  <button
                    type="button"
                    className="btn border rounded-pill ml-3"
                    style={{ color: "#9B9B9B" }}
                  >
                    Signup
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Filter
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
                  <div className="col-md-12 mb-2">
                    <p className="font-weight-bold text-body">Color</p>
                  </div>
                  <div className="col-md-12">
                    <div className="color-groups">
                      <div className="color color-white active-color" />
                      <div className="color color-black" />
                      <div className="color color-yellow" />
                      <div className="color color-blue" />
                      <div className="color color-red" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <p className="font-weight-bold text-body">Sizes</p>
                  </div>
                  <div className="col-md-12">
                    <div style={{ display: "flex" }}>
                      <div className="flex-box">XS</div>
                      <div
                        className="flex-box"
                        style={{
                          background: "#DB3022",
                          color: "white",
                          border: 0,
                        }}
                      >
                        S
                      </div>
                      <div
                        className="flex-box"
                        style={{
                          background: "#DB3022",
                          color: "white",
                          border: 0,
                        }}
                      >
                        M
                      </div>
                      <div className=" flex-box">L</div>
                      <div className="flex-box">XL</div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <p className="font-weight-bold text-body">Category</p>
                  </div>
                  <div className="col-md-12">
                    <div style={{ display: "flex" }}>
                      <div
                        className="flex-box-category"
                        style={{
                          background: "#DB3022",
                          color: "white",
                          border: 0,
                        }}
                      >
                        All
                      </div>
                      <div className=" flex-box-category">Women</div>
                      <div className="flex-box-category">Men</div>
                      <div className=" flex-box-category">Boys</div>
                      <div className="flex-box-category">Girl</div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <p className="font-weight-bold text-body">Brand</p>
                  </div>
                  <div className="col-md-12"></div>
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
                <button type="button" className="btn rounded-pill btn-danger">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
