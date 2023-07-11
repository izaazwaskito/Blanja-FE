import React from "react";

const SellerProfilContent = () => {
  return (
    <>
      {" "}
      <div
        id="page-content-wrapper"
        style={{ maxWidth: 1632, background: "#F5F5F5" }}
      >
        <div className="container" style={{ maxWidth: 1632 }}>
          <div className="row">
            <div
              className="col-md-12  p-4 py-5"
              style={{ background: "#F5F5F5" }}
            >
              <div
                className="ml-4 border"
                style={{
                  background: "#fff",
                  borderRadius: 4,
                  marginBottom: 140,
                }}
              >
                <div className="row py-4 border-bottom ">
                  <div className="col-md-12 pl-5">
                    <h4 className="font-weight-bold">Store Profile</h4>
                    <p>Manage your store profile information</p>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-6">
                    <div className="row py-1">
                      <p />
                    </div>
                    <div className="row  py-1 mt-1">
                      <div className="col-md-3 col-3">
                        <p className="text-right" style={{ paddingTop: 13 }}>
                          Name
                        </p>
                      </div>
                      <div className="col-md-9 col-9 pl-0 ">
                        <input
                          type="text"
                          className="form-input container-fluid"
                          placeholder="Johanes Mikael"
                        />
                      </div>
                    </div>
                    <div className="row  py-1 mt-3">
                      <div className="col-md-3 col-3">
                        <p className="text-right" style={{ paddingTop: 13 }}>
                          Email
                        </p>
                      </div>
                      <div className="col-md-9 col-9 pl-0">
                        <input
                          type="text"
                          className="form-input container-fluid"
                          placeholder="johanes@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="row  py-1 mt-3">
                      <div className="col-md-3 col-3 ">
                        <p className="text-right" style={{ paddingTop: 13 }}>
                          Phone Number
                        </p>
                      </div>
                      <div className="col-md-9 col-9 pl-0">
                        <input
                          type="text"
                          className="form-input container-fluid"
                          placeholder={"08901289012"}
                        />
                      </div>
                    </div>
                    <div className="row  py-1 mt-3">
                      <div className="col-md-3 col-3">
                        <p className="text-right pt-2">Store Description</p>
                      </div>
                      <div className="col-md-9 col-9 pl-0">
                        <input
                          type="text"
                          className="form-input container-fluid"
                          placeholder={"Store Description"}
                        />
                      </div>
                    </div>
                    <div className="row  py-1 mt-3">
                      <div className="col-md-3 ">
                        <p className="text-right pt-2" />
                      </div>
                      <div className="col-md-9  mb-3 pl-0">
                        <div className="row" style={{ marginTop: 9 }}>
                          <div className="col-md-4">
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
                  </div>
                  <div className="col-md-6 ">
                    <div className="col-md-12">
                      <div className="row mt-2">
                        <p />
                      </div>
                      <div className="row border-left">
                        <img
                          src={require("../../../assets/img/seller-profile.png")}
                          style={{ width: 160, borderRadius: "50%" }}
                        />
                      </div>
                      <div className="row border-left">
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
        </div>
      </div>
    </>
  );
};

export default SellerProfilContent;
