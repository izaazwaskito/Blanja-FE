import React from "react";

const ProfileContent = () => {
  const getNama = localStorage.getItem("fullname_user");
  const getEmail = localStorage.getItem("email_user");
  return (
    <>
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
            <div className=" col-md-12 border-bottom mt-3 ">
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
                        Name
                      </div>
                      <div className="col-md-8 col-9">
                        <input
                          type="text"
                          className="form-control"
                          style={{ height: 48 }}
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-lg"
                          placeholder={getNama}
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
                          placeholder={getEmail}
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
                          placeholder={"081225169016"}
                        />
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div
                        className="col-md-3 col-3 text-right my-auto mb-3"
                        style={{ color: "#9B9B9B" }}
                      >
                        Gender
                      </div>
                      <div className="col-md-8 col-9">
                        <div className="row ml-1">
                          <div className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              id="customRadioInline1"
                              name="customRadioInline1"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadioInline1"
                              style={{ color: "#9B9B9B" }}
                            >
                              Male
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              id="customRadioInline2"
                              name="customRadioInline1"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadioInline2"
                              style={{ color: "#9B9B9B" }}
                            >
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div
                        className="col-md-3 col-3 text-right my-auto mb-3"
                        style={{ color: "#9B9B9B" }}
                      >
                        Date of birth
                      </div>
                      <div
                        className="col-md-2 col-3 text-right my-auto mb-3"
                        style={{ color: "#9B9B9B" }}
                      >
                        <select
                          className="custom-select custom-select-lg mb-3"
                          style={{ fontSize: 14 }}
                        >
                          <option selected="">Day</option>
                          <option>1</option>
                        </select>
                      </div>
                      <div
                        className="col-md-2 col-3 text-right my-auto mb-3"
                        style={{ color: "#9B9B9B" }}
                      >
                        <select
                          className="custom-select custom-select-lg mb-3"
                          style={{ fontSize: 14 }}
                        >
                          <option selected="">Month</option>
                          <option value={1}>Agustus</option>
                        </select>
                      </div>
                      <div
                        className="col-md-2 col-3 text-right my-auto mb-3"
                        style={{ color: "#9B9B9B" }}
                      >
                        <select
                          className="custom-select custom-select-lg mb-3"
                          style={{ fontSize: 14 }}
                        >
                          <option selected="">Year</option>
                          <option value={1}>2000</option>
                        </select>
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
                        alt=""
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
    </>
  );
};

export default ProfileContent;
