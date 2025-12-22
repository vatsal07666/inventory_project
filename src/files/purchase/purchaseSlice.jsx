import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: JSON.parse(localStorage.getItem("purchase")) || [],
    open: false,
    editIndex: null,
    deleteOpen: false,
    deleteIndex: null,
};

const purchaseSlice = createSlice({
    name: "purchase",
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setEditIndex: (state, action) => {
            state.editIndex = action.payload
        },
        resetUIState: (state) => {
            state.open = false;
            state.editIndex = null;
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
        
        addPurchase: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("purchase", JSON.stringify(state.list));
        },
        updatePurchase: (state, action) => {
            const { index, purchase } = action.payload;
            state.list[index] = purchase;
            localStorage.setItem("purchase", JSON.stringify(state.list));
        },
        deletePurchase: (state, action) => {
            state.list.splice(action.payload, 1);
            localStorage.setItem("purchase", JSON.stringify(state.list));
        },
    }
})

export const { setOpen, setEditIndex, resetUIState, setDeleteOpen, setDeleteIndex, 
    resetDeleteState, addPurchase, updatePurchase, deletePurchase
 } = purchaseSlice.actions;
 export default purchaseSlice.reducer;