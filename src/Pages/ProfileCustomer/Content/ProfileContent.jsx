import axios from "axios";
import React, { useEffect, useState } from "react";

const ProfileContent = () => {
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    const getCustomer = localStorage.getItem("id_user");
    axios
      .get(`${process.env.REACT_APP_BACKEND}/user/${getCustomer}`)
      .then((response) => setData(response.data.data[0]))
      .catch((error) => console.log(error));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const getCustomer = localStorage.getItem("id_user");
    await axios
      .put(`${process.env.REACT_APP_BACKEND}/user/update/${getCustomer}`, data)
      .then((response) => {
        setData(response);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  let [photo, setPhoto] = useState(null);
  let handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };
  const handleUpdatePhoto = async (e) => {
    const formData = new FormData();
    formData.append("photo_user", photo);
    const getCustomer = localStorage.getItem("id_user");
    await axios
      .put(
        `${process.env.REACT_APP_BACKEND}/user/photo/${getCustomer}`,
        formData
      )
      .then((response) => {
        setData(response);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

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
                    <form onSubmit={handleUpdate}>
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
                            name="fullname_user"
                            value={data.fullname_user}
                            onChange={handleChange}
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
                            name="email_user"
                            value={data.email_user}
                            onChange={handleChange}
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
                            name="role_user"
                            value={data.role_user}
                            onChange={handleChange}
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
                            type="submit"
                            className="btn btn-danger rounded-pill btn-cm"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="col-md-12">
                    <div className="row mt-2">
                      <p />
                    </div>
                    <div className="row">
                      <img
                        src={
                          data.photo_user === null || data.photo_user === "null"
                            ? require("../../../assets/img/account-profile.png")
                            : data.photo_user
                        }
                        style={{
                          width: 170,
                          height: 170,
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                        alt="user-img"
                        crossOrigin="anonymous"
                      />
                    </div>

                    <form onSubmit={handleUpdatePhoto}>
                      <div className="row">
                        <input
                          type="file"
                          onChange={handleUpload}
                          name="photo_user"
                          style={{ paddingLeft: 80, paddingTop: 20 }}
                        />
                        <button
                          type="submit"
                          className="btn"
                          style={{ marginLeft: 150 }}
                        >
                          Upload
                        </button>
                      </div>
                    </form>
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
