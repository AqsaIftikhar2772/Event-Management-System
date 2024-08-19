import axios from "axios";
import { setError, setLoading, setProducts } from "./slice";

export const fetchProducts = (city, plus) => async (dispatch) => {
    dispatch(setLoading());
  try {
    const url = `http://localhost:2004/api/search-venue/${city}/${plus}`
    const response = await axios.get(url)
    dispatch(setProducts(response.data.data))
  } catch (error) {
    dispatch(setError(error?.response && error?.response?.data?.message));
  }
};
