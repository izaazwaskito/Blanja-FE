import { useEffect, useState } from "react";
import ModalUpdateAddress from "../../../components/ModalAddress/ModalUpdateAddress";
import axios from "axios";

const Address = () => {
  let [addresss, setAddresss] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/address`)
      .then((response) => setAddresss(response.data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="col-md-10">
        {addresss.map((item) => (
          <div>
            <p
              style={{
                paddingTop: 15,
                color: "black",
                fontWeight: "bold",
              }}
            >
              {item.name_address}
            </p>
            <p style={{ fontSize: "small", marginTop: "-10px" }}>
              {item.street_address} , {item.postal_address}
            </p>
          </div>
        ))}
        {/* Button trigger modal */}

        <button
          type="button"
          className="btn border rounded-pill mb-3"
          style={{ width: 226, color: "#9B9B9B" }}
          data-toggle="modal"
          data-target="#addressModal"
        >
          Choose another address
        </button>

        {/* Modal */}
        <div
          className="modal fade"
          id="addressModal"
          tabIndex={-1}
          aria-labelledby="addressModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="text-center">Choose another address</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-5">
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
                {addresss.map((item) => (
                  <div className="col-md-12 mt-5">
                    <div
                      className="row"
                      style={{
                        borderRadius: 4,
                        border: "1px solid red",
                      }}
                    >
                      <div className="col-md-12">
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                          }}
                          className="mt-2 mb-1"
                        >
                          {item.place_address}
                        </p>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                          }}
                          className="mb-0"
                        >
                          {item.name_address}
                        </p>
                        <p style={{ color: "black" }} className="mb-0">
                          {" "}
                          {item.phone_address}
                        </p>
                        <p style={{ color: "black" }} className="mb-1">
                          {" "}
                          {item.street_address} {item.postal_address}{" "}
                          {item.city_address}
                        </p>
                        <ModalUpdateAddress
                          id_address={item.id_address}
                          name_address={item.name_address}
                          place_address={item.place_address}
                          phone_address={item.phone_address}
                          street_address={item.street_address}
                          postal_address={item.postal_address}
                          city_address={item.city_address}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {/* Modal */}
                <div
                  className="modal fade"
                  id="Test"
                  tabIndex={-1}
                  aria-labelledby="TestLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="TestLabel">
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
                                Save address as (ex : home address, office
                                address)
                              </p>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput2"
                                placeholder="Rumah"
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
                              />
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="form-group">
                              <p sclass="form-font">Postal code</p>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput2"
                                placeholder=""
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
                        <button
                          type="button"
                          className="btn rounded-pill btn-danger"
                        >
                          Save
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
    </>
  );
};

export default Address;
