import React from "react";

const Button = () => {
  return (
    <>
      <div className="buttons d-flex mt-3 metropolis">
        <button
          type="button"
          className="Btn rounded-pill mr-2"
          style={{ width: 160, height: 48 }}
        >
          Chat
        </button>
        <button
          type="button"
          className="Btn rounded-pill mr-2"
          style={{ width: 160, height: 48 }}
        >
          Add Bag
        </button>
        <button
          type="button"
          className="btn btn-danger rounded-pill mr-2"
          style={{ width: 343, height: 48, backgroundColor: "#DB3022" }}
        >
          Buy Now
        </button>
      </div>
    </>
  );
};

export default Button;
