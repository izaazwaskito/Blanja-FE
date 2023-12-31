import axios from "axios";
import React, { useEffect, useState } from "react";

const SellerProfilContent = () => {
  const getSeller = localStorage.getItem("id_seller");
  const [data, setData] = useState({
    store_seller: "",
    email_seller: "",
    phone_seller: "",
    description_seller: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .put(`${process.env.REACT_APP_BACKEND}/seller/update/${getSeller}`, data)
      .then((response) => {
        setData(response);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const getSeller = localStorage.getItem("id_seller");
    axios
      .get(`${process.env.REACT_APP_BACKEND}/seller/${getSeller}`)
      .then((response) => setData(response.data.data[0]))
      .catch((error) => console.log(error));
  }, []);
  let [photo, setPhoto] = useState(null);
  let handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };
  const handleUpdatePhoto = async (e) => {
    const formData = new FormData();
    formData.append("photo_seller", photo);
    const getCustomer = localStorage.getItem("id_seller");
    await axios
      .put(
        `${process.env.REACT_APP_BACKEND}/seller/photo/${getCustomer}`,
        formData
      )
      .then((res) => {
        if (res.data.statusCode === 201) {
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  };

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
                  <form onSubmit={handleUpdate}>
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
                          name="store_seller"
                          value={data.store_seller}
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
                          name="email_seller"
                          value={data.email_seller}
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
                          name="phone_seller"
                          value={data.phone_seller}
                          onChange={handleChange}
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
                        <textarea
                          type="text"
                          className="form-control"
                          style={{ height: 118 }}
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-lg"
                          name="description_seller"
                          value={data.description_seller}
                          onChange={handleChange}
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
                        data.photo_seller === null ||
                        data.photo_seller === "null"
                          ? require("../../../assets/img/account-profile.png")
                          : data.photo_seller
                      }
                      style={{
                        width: 160,
                        height: 160,
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                      alt=""
                      crossOrigin="anonymous"
                    />
                  </div>
                  <form onSubmit={handleUpdatePhoto}>
                    <div className="row">
                      <input
                        type="file"
                        onChange={handleUpload}
                        name="photo_seller"
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
  );
};

export default SellerProfilContent;
