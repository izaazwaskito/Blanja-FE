import React from "react";
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import CheckoutCard from "./Content/CheckoutCard";
import CheckOutTotal from "./Content/CheckOutTotal";
const MyCheckout = () => {
  return (
    <>
      <NavbarLogin />
      <main className="container metropolis" style={{ maxWidth: 1632 }}>
        <section>
          <div>
            <h1 className="h1-small" style={{ fontWeight: "bold" }}>
              Checkout
            </h1>
            <p
              style={{
                fontSize: 16,
                marginTop: "-10px",
                fontWeight: "bold",
                color: "black",
                marginBottom: 0,
              }}
            >
              Shipping Adress
            </p>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-md-8">
              <div
                className="row mt-2"
                style={{
                  boxShadow: "0px 6px 40px 20px rgba(173, 173, 173, .25)",
                  borderRadius: 5,
                }}
                id="border-big"
              >
                <div className="col-md-10">
                  <p
                    style={{
                      paddingTop: 15,
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Andreas Jane
                  </p>
                  <p style={{ fontSize: "small", marginTop: "-10px" }}>
                    Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                    Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok
                    c 16] Sokaraja, Kab. Banyumas, 53181
                  </p>
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
                              <h2 className="text-center">
                                Choose another address
                              </h2>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-1" />
                            <div className="col-md-10 border">
                              {/* <p class="text-center" style="padding: 40px 0 20px 0;">Add new
                                                  address
                                              </p> */}
                              {/* Button trigger modal */}
                              <button
                                type="button"
                                className="btn btn-primary btn-modal"
                                data-toggle="modal"
                                data-target="#Test"
                              >
                                Add New Address
                              </button>
                            </div>
                            <div className="col-md-1" />
                          </div>
                          <div className="row mt-4">
                            <div className="col-md-1" />
                            <div
                              className="col-md-10"
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
                                [Tokopedia Note: blok c 16] Sokaraja, Kab.
                                Banyumas, 53181
                              </p>
                              <p
                                style={{ color: "#DB3022", fontWeight: "bold" }}
                              >
                                Change address
                              </p>
                            </div>
                            <div className="col-md-1" />
                          </div>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CheckoutCard />
            </div>
            <CheckOutTotal />
          </div>
        </section>
      </main>
    </>
  );
};

export default MyCheckout;
