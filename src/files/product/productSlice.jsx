import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    open: false,
    deleteOpen: false,
    deleteId: null,
    editId: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // ================= UI STATE =================
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setEditId: (state, action) => {
            state.editId = action.payload;
        },
        resetUIState: (state) => {
            state.open = false;
            state.editId = null;
        },

        setDeleteOpen: (state, action) => {
            state.deleteOpen = action.payload;
        },
        setDeleteId: (state, action) => {
            state.deleteId = action.payload;
        },
        resetDeleteState: (state) => {
            state.deleteOpen = false;
            state.deleteId = null;
        },

        // ================= DATA STATE =================

        // GET
        setProducts: (state, action) => {
            state.list = action.payload;
            localStorage.setItem("products", JSON.stringify(state.list));
        },

        // POST
        addProduct: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("products", JSON.stringify(state.list));
        },

        // DELETE
        deleteProduct: (state, action) => {
            state.list = state.list.filter((item) => item._id !== action.payload);
            localStorage.setItem("products", JSON.stringify(state.list));
        },

        // Edit / PATCH
        updateProduct: (state, action) => {
            state.list = state.list.map(
                (item) => item._id === action.payload._id ? action.payload : item
            );
            localStorage.setItem("products", JSON.stringify(state.list));
        },
    },
});

export const { setOpen, setEditId, resetUIState, setDeleteOpen, setDeleteId, resetDeleteState,
    setProducts, addProduct, deleteProduct, updateProduct
} = productSlice.actions;

export default productSlice.reducer;