// src/redux/slices/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: JSON.parse(localStorage.getItem("products")) || [],
    open: false,
    editIndex: null,
    deleteOpen: false,
    deleteIndex: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload
        },
        setEditIndex: (state, action) => {
            state.editIndex = action.payload 
        },
        resetUIState: (state) => {
            state.open = false;
            state.editIndex = null
        },

        setDeleteOpen: (state, action) => {
            state.deleteOpen = action.payload
        },
        setDeleteIndex: (state, action) => {
            state.deleteIndex = action.payload
        },
        resetDeleteState: (state) => {
            state.deleteOpen = false;
            state.deleteIndex = null
        },
        
        addProduct: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("products", JSON.stringify(state.list));
        },
        updateProduct: (state, action) => {
            const { index, product } = action.payload;
            state.list[index] = product;
            localStorage.setItem("products", JSON.stringify(state.list));
        },
        deleteProduct: (state, action) => {
            state.list.splice(action.payload, 1);
            localStorage.setItem("products", JSON.stringify(state.list));
        },
    },
});

export const { setOpen, setEditIndex, resetUIState, setDeleteOpen, setDeleteIndex, resetDeleteState, 
    addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
