// src/redux/slices/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: JSON.parse(localStorage.getItem("users")) || [],
    open: false,
    editIndex: null,
    deleteOpen: false,
    deleteIndex: null,
};

const userSlice = createSlice({
    name: "user",
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
        
        addUser: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("users", JSON.stringify(state.list));
        },
        updateUser: (state, action) => {
            const { index, user } = action.payload;
            state.list[index] = user;
            localStorage.setItem("users", JSON.stringify(state.list));
        },
        deleteUser: (state, action) => {
            state.list.splice(action.payload, 1);
            localStorage.setItem("users", JSON.stringify(state.list));
        },
    },
});

export const { setOpen, setEditIndex, resetUIState, setDeleteOpen, setDeleteIndex, resetDeleteState, 
    addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
