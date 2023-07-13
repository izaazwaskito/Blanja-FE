import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

const ModalUpdateAddress = ({
  id_address,
  name_address,
  street_address,
  phone_address,
  postal_address,
  city_address,
  place_address,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [addresss, setAddresss] = useState([]);
  let [address, setAddress] = useState({
    name_address,
    street_address,
    phone_address,
    postal_address,
    city_address,
    place_address,
  });

  let handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/address/" + id_address, address)
      .then((response) => {
        setAddresss(response.data);
        handleClose();
        Swal.fire({
          title: "Address Updated",
          text: "",
          icon: "success",
        });

        setTimeout(function () {
          window.location.reload(1);
        }, 2000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {/* <button
        type="button"
        className="btn border rounded-pill mb-3"
        style={{ width: 226, color: "#9B9B9B" }}
        onClick={handleShow}
      >
        Choose another address
      </button> */}
      <p style={{ color: "#DB3022", fontWeight: "bold" }} onClick={handleShow}>
        Change address
      </p>
      <Modal show={show} onHide={handleClose} className="metropolis" size="lg">
        <form onSubmit={handleSubmit}>
          <Modal.Header>
            <h5 className="modal-title" id="addressModalLabel">
              Add new address
            </h5>
            <button
              type="button"
              className="close mr-1"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </Modal.Header>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-10">
                <div className="form-group">
                  <p className="form-font">
                    Save address as (ex : home address, office address)
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Rumah"
                    name="place_address"
                    value={address.place_address}
                    onChange={handleChange}
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
                    name="name_address"
                    value={address.name_address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <p className="form-font">Recipient's telephone number</p>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder=""
                    name="phone_address"
                    value={address.phone_address}
                    onChange={handleChange}
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
                    name="street_address"
                    value={address.street_address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <p className="form-font">Postal Code</p>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder=""
                    name="postal_address"
                    value={address.postal_address}
                    onChange={handleChange}
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
                    name="city_address"
                    value={address.city_address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-1" />
            </div>
          </div>
          <Modal.Footer>
            <button
              type="button"
              className="btn border rounded-pill"
              data-dismiss="modal"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn rounded-pill btn-danger">
              Save
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalUpdateAddress;
