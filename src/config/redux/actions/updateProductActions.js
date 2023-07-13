import axios from "axios";
import Swal from "sweetalert2";

const updateProductActions =
  (id_product, product, file, handleClose) => async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("name_product", product.name_product);
      formData.append("id_category", product.id_category);
      formData.append("stock_product", product.stock_product);
      formData.append("price_product", product.price_product);
      formData.append("image_product", file);
      formData.append("description_product", product.description_product);
      const products = await axios.put(
        `${process.env.REACT_APP_BACKEND}/product/${id_product}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const result = products.data.data;
      dispatch({ type: "UPDATE_PRODUCT", payload: result });
      handleClose();
      Swal.fire({
        title: "Data has changed",
        text: "",
        icon: "success",
      });
      setTimeout(function () {
        window.location.reload(1);
      }, 2000);
    } catch (error) {}
  };

export default updateProductActions;
