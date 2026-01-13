import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    open: false,
    editId: null,
    deleteOpen: false,
    deleteId: null,
    billOpen: false,
    billData: null,
    itemDraft: []
}

const salesSlice = createSlice({
    name: "sales",
    initialState,
    reducers: {
        // ================= UI STATE =================
        setOpen: (state, action) => {
            state.open = action.payload
        },
        setEditId: (state, action) => {
            state.editId = action.payload 
        },
        resetUIState: (state) => {
            state.open = false;
            state.editId = null;
            state.itemDraft = [];
        },

        setDeleteOpen: (state, action) => {
            state.deleteOpen = action.payload
        },
        setDeleteId: (state, action) => {
            state.deleteId = action.payload
        },
        resetDeleteState: (state) => {
            state.deleteOpen = false;
            state.deleteId = null
        },

        // ================= Bill =================
        setBillOpen: (state, action) => {
            state.billOpen = action.payload;
        },
        setBillData: (state, action) => {
            state.billData = action.payload;
        },

        // ================= Item Draft =================
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
        
        // ================= DATA STATE =================

        // GET
        setSales: (state, action) => {
            state.list = action.payload;
            localStorage.setItem("sales", JSON.stringify(state.list));
        },

        // POST
        addSales: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("sales", JSON.stringify(state.list));
        },

        // DELETE
        deleteSales: (state, action) => {
            state.list = state.list.filter((item) => item._id !== action.payload);
            localStorage.setItem("sales", JSON.stringify(state.list));
        },

        // Edit / PATCH
        updateSales: (state, action) => {
            const index = state.list.findIndex((item) => item._id === action.payload._id );
            // findIndex return -1 if "not found"(the data)
            if(index !== -1) state.list[index] = action.payload;
            localStorage.setItem("sales", JSON.stringify(state.list));
        },
    }
})

export const { setOpen, setEditId, resetUIState, setDeleteOpen, setDeleteId, 
    resetDeleteState, setBillOpen, setBillData, addItemDraft, removeItemDraft, 
    resetItemDraft, setSales, addSales, updateSales, deleteSales
 } = salesSlice.actions;
export default salesSlice.reducer;