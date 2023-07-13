import React from "react";

const OrderContent = () => {
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
          <div className=" col-md-12  mt-3 ">
            <h4 className="font-weight-bold pt-2">My Order</h4>
          </div>
          <div className=" col-md-12 border-bottom mt-3 ">
            <div className="row ">
              <div className="col-md-2 ">
                <p className="line-text text-danger font-weight-bold">
                  All items
                </p>
              </div>
              <div className="col-md-2 ">
                <p>Not yet paid</p>
              </div>
              <div className="col-md-2 text-center">
                <p>Packed</p>
              </div>
              <div className="col-md-2 text-center">
                <p>Sent</p>
              </div>
              <div className="col-md-2 text-center ">
                <p>Completed</p>
              </div>
              <div className="col-md-2 text-right">
                <p>Order cancel</p>
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

export default OrderContent;
