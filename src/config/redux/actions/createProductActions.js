import axios from "axios";
import Swal from "sweetalert2";

const createProductAction = (product, photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("name_product", product.name_product);
    formData.append("id_category", product.id_category);
    formData.append("stock_product", product.stock_product);
    formData.append("price_product", product.price_product);
    formData.append("image_product", photo);
    formData.append("description_product", product.description_product);
    const products = await axios.post(
      `${process.env.REACT_APP_BACKEND}/product`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const result = products.data.data;
    dispatch({ type: "CREATE_PRODUCT", payload: result });
    // Swal.fire({
    //   title: "Product Added",
    //   text: `New product have been added`,
    //   icon: "success",
    // });
    Swal.fire({
      title: "Product Added",
      text: "New product have been added",
      icon: "success",
    }).then(function () {
      // Redirect the user
      window.location.href = "/seller/product";
    });
    // setTimeout(function () {
    //   window.location.reload(1);
    // }, 2000);
  } catch (error) {}
};

export default createProductAction;
