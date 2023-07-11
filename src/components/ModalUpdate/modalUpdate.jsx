import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalUpdate = ({
  id_product,
  id_category,
  name_product,
  price_product,
  description_product,
  stock_product,
  image_product,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [file, setFile] = useState("");
  const handleShow = () => setShow(true);
  const [preview, setPreview] = useState("");
  let [products, setProducts] = useState([]);
  let [product, setProduct] = useState({
    id_category,
    name_product,
    price_product,
    stock_product,
    description_product,
  });

  let handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name_product", product.name_product);
    formData.append("id_category", product.id_category);
    formData.append("stock_product", product.stock_product);
    formData.append("price_product", product.price_product);
    formData.append("image_product", file);
    formData.append("description_product", product.description_product);
    axios
      .put("http://localhost:3000/product/" + id_product, formData)
      .then((response) => {
        setProducts(response.data);
        handleClose();
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow} className="metropolis">
        Update
      </Button>
      <Modal show={show} onHide={handleClose} className="metropolis">
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Update Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                name="name_product"
                class="form-control"
                placeholder="name"
                value={product.name_product}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="name">Category</label>
              <input
                type="text"
                name="id_category"
                class="form-control"
                placeholder="id Category"
                value={product.id_category}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="price">Price</label>
              <input
                type="text"
                name="price_product"
                class="form-control"
                value={product.price_product}
                placeholder="price"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="stock">Stock</label>
              <input
                type="text"
                name="stock_product"
                class="form-control"
                value={product.stock_product}
                placeholder="stock"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="name">Description Product</label>
              <input
                type="text"
                name="description_product"
                class="form-control"
                placeholder="Description Product"
                value={product.description_product}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              {preview ? (
                <figure className="image is-128x128">
                  <img src={preview} alt="Preview Image" />
                </figure>
              ) : (
                ""
              )}
              <label for="name">Image Product</label>
              <input
                type="file"
                name="image_product"
                class="form-control"
                value={product.image_product}
                onChange={loadImage}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" className="btn-success">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalUpdate;
