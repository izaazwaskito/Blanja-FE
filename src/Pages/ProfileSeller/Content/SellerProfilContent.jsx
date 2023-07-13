import React from "react";

const SellerProfilContent = () => {
  return (
    <>
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
          <div className=" col-md-12 border-bottom mt-3 p-0">
            <h4 className="font-weight-bold pt-2">My Profile</h4>
            <p>Manage your profile information</p>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8 ">
                <div className="col-md-12 mt-5">
                  <div className="row">
                    <div
                      className="col-md-3 col-3  text-right my-auto mb-3"
                      style={{ color: "#9B9B9B" }}
                    >
                      Store name
                    </div>
                    <div className="col-md-8 col-9">
                      <input
                        type="text"
                        className="form-control"
                        style={{ height: 48 }}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        placeholder="Izaaz Waskito Widyarto
                                              "
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div
                      className="col-md-3 col-3 text-right my-auto mb-3"
                      style={{ color: "#9B9B9B" }}
                    >
                      Email
                    </div>
                    <div className="col-md-8 col-9">
                      <input
                        type="text"
                        className="form-control"
                        style={{ height: 48 }}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        placeholder="izaaz.waskito@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div
                      className="col-md-3 col-3 text-right my-auto mb-3"
                      style={{ color: "#9B9B9B" }}
                    >
                      Phone number
                    </div>
                    <div className="col-md-8 col-9">
                      <input
                        type="text"
                        className="form-control"
                        style={{ height: 48 }}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div
                      className="col-md-3 col-3 text-right mt-3 mb-3"
                      style={{ color: "#9B9B9B" }}
                    >
                      Store description
                    </div>
                    <div className="col-md-8 col-9">
                      <input
                        type="text"
                        className="form-control"
                        style={{ height: 118 }}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div
                      className="col-md-3 text-right my-auto mb-3"
                      style={{ color: "#9B9B9B" }}
                    ></div>
                    <div className="col-md-3" style={{ color: "#9B9B9B" }}>
                      <button
                        type="button"
                        className="btn btn-danger rounded-pill btn-cm"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="col-md-12">
                  <div className="row mt-2">
                    <p />
                  </div>
                  <div className="row">
                    <img
                      src={require("../../../assets/img/user.png")}
                      style={{ width: 160, borderRadius: "50%" }}
                    />
                  </div>
                  <div className="row">
                    <div className=" container text-center pt-3 ">
                      <button
                        type="button"
                        className="btn border rounded-pill mb-3"
                        style={{ width: 226, color: "#9B9B9B" }}
                        data-toggle="modal"
                        data-target="#addressModal"
                      >
                        Select image
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-md-1 vhhp"
        style={{ backgroundColor: "#F5F5F5" }}
      ></div>
    </>
  );
};

export default SellerProfilContent;