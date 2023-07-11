import React from "react";

const AddressContent = () => {
  return (
    <>
      <div
        id="page-content-wrapper"
        style={{ maxWidth: 1632 }}
        className="metropolis"
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
                    <h4 className="font-weight-bold">Choose another address</h4>
                    <p>Manage your shipping address</p>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-12">
                    <div className="row py-1">
                      <div className="row container-fluid">
                        <div className="col-md-1" />
                        <div className="col-md-12 mt-4">
                          {/* Button trigger modal */}
                          <div className="row mt-4">
                            <div className="col-md-1" />
                            <button
                              type="button"
                              className="btn btn-primary btn-modal btn-modal-ea ml-1 col-md-10"
                              data-toggle="modal"
                              data-target="#exampleModal"
                            >
                              Add New Address
                            </button>
                            <div className="col-md-1" />
                          </div>
                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
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
                                          Save address as (ex : home address,
                                          office address)
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
                                        <p className="form-font">
                                          Recipient’s name
                                        </p>
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
                                        <p className="form-font">
                                          City or Subdistrict
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
                        <div className="col-md-1" />
                      </div>
                      <div className="row mt-4 container-fluid">
                        <div className="col-md-1" />
                        <div
                          className="col-md-10  col-11 mb-2"
                          style={{
                            border: "1px solid #DB3022",
                            borderRadius: 4,
                          }}
                        >
                          <p
                            style={{ fontWeight: "bold", color: "black" }}
                            className="mt-2"
                          >
                            Andreas Jane
                          </p>
                          <p style={{ color: "black" }}>
                            Perumahan Sapphire Mediterania, Wiradadi, Kec.
                            Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181
                            [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas,
                            53181
                          </p>
                          <p
                            style={{
                              color: "#DB3022",
                              fontWeight: "bold",
                            }}
                          >
                            Change address
                          </p>
                        </div>
                        <div className="col-md-1" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div style={{ marginBottom: 200 }} />
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

export default AddressContent;
