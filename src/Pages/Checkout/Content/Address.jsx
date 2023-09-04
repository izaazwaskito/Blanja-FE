import { useEffect, useState } from "react";
import ModalUpdateAddress from "../../../components/ModalAddress/ModalUpdateAddress";
import axios from "axios";
import AddressMap from "./AddressMap";

const Address = () => {
  let [addresss, setAddresss] = useState([]);

  useEffect(() => {
    const getId = localStorage.getItem("id_user");
    axios
      .get(`${process.env.REACT_APP_BACKEND}/address/${getId}`)
      .then((res) => {
        if (res.data.data[0]) {
          setAddresss(res.data.data[0]);
        } else {
          setAddresss(res.data.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="col-md-10">
        <div>
          <p
            style={{
              paddingTop: 15,
              color: "black",
              fontWeight: "bold",
            }}
          >
            {addresss.name_address}
          </p>
          <p style={{ fontSize: "small", marginTop: "-10px", color: "black" }}>
            {addresss.phone_address}
          </p>
          <p style={{ fontSize: "small", marginTop: "-10px" }}>
            {addresss.street_address} , {addresss.postal_address}
          </p>
        </div>

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
                      data-target="#addressModal2"
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
                <AddressMap />
                {/* Modal */}
                <div
                  className="modal fade"
                  id="addressModal2"
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
                              <p class="form-font">Postal code</p>
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
