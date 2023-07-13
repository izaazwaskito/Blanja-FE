import axios from "axios";

const getProductAction = () => async (dispatch) => {
  try {
    const products = await axios.get(
      `${process.env.REACT_APP_BACKEND}/product`
    );
    const result = products.data.data;
    dispatch({ type: "GET_ALL_PRODUCT", payload: result });
  } catch (err) {
    console.log(err);
  }
};
export default getProductAction;
