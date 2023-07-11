import React from "react";

const OrderContent = () => {
  return (
    <>
      {" "}
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
                <div className="row py-4 ">
                  <div className="col-md-12 pl-5">
                    <h4 className="font-weight-bold">My Order</h4>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-2 text-center ">
                    <p className="line-text text-danger font-weight-bold">
                      All items
                    </p>
                  </div>
                  <div className="col-md-2 text-center ">
                    <p>Not yet paid</p>
                  </div>
                  <div className="col-md-2 text-center ">
                    <p>Packed</p>
                  </div>
                  <div className="col-md-2 text-center ">
                    <p>Sent</p>
                  </div>
                  <div className="col-md-2 text-center ">
                    <p>Completed</p>
                  </div>
                  <div className="col-md-2 text-center">
                    <p>Order cancel</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div style={{ marginBottom: 500 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderContent;
