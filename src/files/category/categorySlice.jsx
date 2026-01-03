import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    open: false,
    deleteOpen: false,
    deleteId: null,
    editId: null,
};

const categorySlice = createSlice({
    name: "category",
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
        setCategories: (state, action) => {
            state.list = action.payload;
            localStorage.setItem("categories", JSON.stringify(state.list));
        },

        // POST
        addCategory: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("categories", JSON.stringify(state.list));
        },

        // DELETE
        deleteCategory: (state, action) => {
            state.list = state.list.filter((item) => item._id !== action.payload);
            localStorage.setItem("categories", JSON.stringify(state.list));
        },

        // Edit / PATCH
        updateCategory: (state, action) => {
            const index = state.list.findIndex((item) => item._id === action.payload._id );
            // findIndex return -1 if "not found"(the data)
            if(index !== -1) state.list[index] = action.payload;
            localStorage.setItem("categories", JSON.stringify(state.list));
        },
    },
});

export const { setOpen, setEditId, resetUIState, setDeleteOpen, setDeleteId, resetDeleteState,
    setCategories, addCategory, deleteCategory, updateCategory
} = categorySlice.actions;

export default categorySlice.reducer;