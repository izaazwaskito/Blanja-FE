import { useEffect, useState } from "react";
import ModalUpdateAddress from "../../../components/ModalAddress/ModalUpdateAddress";
import axios from "axios";

const AddressMap = () => {
  const [addresss, setAddresss] = useState([]);

  useEffect(() => {
    const getId = localStorage.getItem("id_user");
    axios
      .get(`${process.env.REACT_APP_BACKEND}/address/${getId}`)
      .then((res) => {
        setAddresss(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
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
                {item.street_address} {item.postal_address} {item.city_address}
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
    </div>
  );
};

export default AddressMap;
