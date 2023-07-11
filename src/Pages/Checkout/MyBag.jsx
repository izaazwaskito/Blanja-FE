import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import BagCard from "./Content/BagCard";
import BagTotal from "./Content/BagTotal";

const MyBag = () => {
  return (
    <>
      <NavbarLogin />
      <main className="container metropolis" style={{ maxWidth: 1632 }}>
        <section>
          <div>
            <h1 className="h1-small" style={{ fontWeight: "bold" }}>
              My bag
            </h1>
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
                <div className="col-md-1">
                  <input
                    className="form-check-input"
                    style={{ margin: "20px 20px" }}
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                </div>
                <div className="col-md-9 col-9">
                  <p
                    style={{
                      paddingTop: 15,
                      color: "black",
                      fontWeight: "bold",
                    }}
                    id="p-small"
                  >
                    Select all items (2 items selected)
                  </p>
                </div>
                <div className="col-md-2 col-2">
                  <p
                    className="mt-3"
                    style={{
                      color: "#DB3022",
                      fontWeight: "bold",
                      textAlign: "right",
                      paddingRight: 10,
                    }}
                  >
                    Delete
                  </p>
                </div>
              </div>
              <BagCard />
            </div>
            <BagTotal />
            <div className="row"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MyBag;
