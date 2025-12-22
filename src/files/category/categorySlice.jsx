// src/redux/slices/categorySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: JSON.parse(localStorage.getItem("categories")) || [],
    open: false,
    editIndex: null,
    deleteOpen: false,
    deleteIndex: null,
};

const categorySlice = createSlice({
    name: "category",
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

        addCategory: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("categories", JSON.stringify(state.list));
        },
        updateCategory: (state, action) => {
            const { index, category } = action.payload;
            state.list[index] = category;
            localStorage.setItem("categories", JSON.stringify(state.list));
        },
        deleteCategory: (state, action) => {
            state.list.splice(action.payload, 1);
            localStorage.setItem("categories", JSON.stringify(state.list));
        },
    },
});

export const { setOpen, setEditIndex, resetUIState, setDeleteOpen, setDeleteIndex, resetDeleteState, 
    addCategory, updateCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;
