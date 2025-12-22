import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    open: false,
    editIndex: null,
    deleteOpen: false,
    deleteIndex: null,
    billOpen: false,
    billData: null,
    itemDraft: []
}

const salesSlice = createSlice({
    name: "sales",
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
            state.editIndex = null;
            state.itemDraft = [];
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

        /* ---------- BILL ---------- */
        setBillOpen: (state, action) => {
            state.billOpen = action.payload;
        },
        setBillData: (state, action) => {
            state.billData = action.payload;
        },

        /* ---------- ITEM DRAFT ---------- */
        addItemDraft: (state, action) => {
            state.itemDraft.push({
                ...action.payload,
                total: Number(action.payload.quantity) * Number(action.payload.unitprice),
            });
        },
        removeItemDraft: (state, action) => {
            state.itemDraft.splice(action.payload, 1);
        },
        resetItemDraft: (state) => {
            state.itemDraft = [];
        },
        
        /* ---------- SALES CRUD ---------- */
        addSales: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("sales", JSON.stringify(state.list));
        },
        updateSales: (state, action) => {
            const { index, sale } = action.payload;
            state.list[index] = sale;
            localStorage.setItem("sales", JSON.stringify(state.list));
        },
        deleteSales: (state, action) => {
            state.list.splice(action.payload, 1);
            localStorage.setItem("sales", JSON.stringify(state.list));
        },
    }
})

export const { setOpen, setEditIndex, resetUIState, setDeleteOpen, setDeleteIndex, resetDeleteState, setBillOpen, 
    setBillData, addItemDraft, removeItemDraft, resetItemDraft, addSales, updateSales, deleteSales
 } = salesSlice.actions;
export default salesSlice.reducer;