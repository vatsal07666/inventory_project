import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    open: false,
    deleteOpen: false,
    deleteId: null,
    editId: null,
};

const purchaseSlice = createSlice({
    name: "purchase",
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
        setPurchase: (state, action) => {
            state.list = action.payload;
            localStorage.setItem("purchase", JSON.stringify(state.list));
        },

        // POST
        addPurchase: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("purchase", JSON.stringify(state.list));
        },

        // DELETE
        deletePurchase: (state, action) => {
            state.list = state.list.filter((item) => item._id !== action.payload);
            localStorage.setItem("purchase", JSON.stringify(state.list));
        },

        // Edit / PATCH
        updatePurchase: (state, action) => {
            const index = state.list.findIndex((item) => item._id === action.payload._id );
            // findIndex return -1 if "not found"(the data)
            if(index !== -1) state.list[index] = action.payload;
            localStorage.setItem("purchase", JSON.stringify(state.list));
        },
    },
});

export const { setOpen, setEditId, resetUIState, setDeleteOpen, setDeleteId, resetDeleteState,
    setPurchase, addPurchase, deletePurchase, updatePurchase
} = purchaseSlice.actions;

export default purchaseSlice.reducer;