import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDelete = ({
  id_product,
  id_category,
  name_product,
  price_product,
  description__product,
  stock_product,
  image_product,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete("http://localhost:3000/product/" + id_product)
      .then((response) => {
        handleClose();
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose} className="metropolis">
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure want to delete this product?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" className="btn-danger">
              Delete
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalDelete;
