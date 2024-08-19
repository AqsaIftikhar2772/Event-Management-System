import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },
        setError: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        },
        setProducts: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.products = action.payload;
        }
    }
})

export const {setLoading, setError, setProducts} = productSlice.actions;

export default productSlice.reducer;