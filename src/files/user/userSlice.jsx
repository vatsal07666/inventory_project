import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    open: false,
    deleteOpen: false,
    deleteId: null,
    editId: null,
};

const userSlice = createSlice({
    name: "user",
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
        setUser: (state, action) => {
            state.list = action.payload;
            localStorage.setItem("users", JSON.stringify(state.list));
        },

        // POST
        addUser: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("users", JSON.stringify(state.list));
        },

        // DELETE
        deleteUser: (state, action) => {
            state.list = state.list.filter((item) => item._id !== action.payload);
            localStorage.setItem("users", JSON.stringify(state.list));
        },

        // Edit / PATCH
        updateUser: (state, action) => {
            const index = state.list.findIndex((item) => item._id === action.payload._id );
            // findIndex return -1 if "not found"(the data)
            if(index !== -1) state.list[index] = action.payload;
            localStorage.setItem("users", JSON.stringify(state.list));
        },
    },
});

export const { setOpen, setEditId, resetUIState, setDeleteOpen, setDeleteId, resetDeleteState,
    setUser, addUser, deleteUser, updateUser
} = userSlice.actions;

export default userSlice.reducer;