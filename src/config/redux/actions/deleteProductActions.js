import axios from "axios";
const deleteProductActions = (id) => async (dispatch) => {
  try {
    const products = await axios.delete(
      process.env.REACT_APP_API_BACKEND + "products/" + id
    );
    console.log(products);
    alert("delete success");

    const result = products.data.data;
    dispatch({ type: "DELETE_PRODUCT", payload: result });
  } catch (err) {
    console.error(err.message);
    alert("delete failed");
  }
};

export default deleteProductActions;
