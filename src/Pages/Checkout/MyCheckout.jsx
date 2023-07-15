import React from "react";
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import CheckoutCard from "./Content/CheckoutCard";
import CheckOutTotal from "./Content/CheckOutTotal";
import Address from "./Content/Address";
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
                <Address />
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
