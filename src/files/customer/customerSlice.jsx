import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    open: false,
    editIndex: null,
    deleteOpen: false,
    deleteIndex: null
}

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setEditIndex: (state, action) => {
            state.editIndex = action.payload;
        },
        resetUIState: (state) => {
            state.open = false;
            state.editIndex = null;
        },

        setDeleteOpen: (state, action) => {
            state.deleteOpen = action.payload;
        },
        setDeleteIndex: (state, action) => {
            state.deleteIndex = action.payload;
        },
        resetDeleteState: (state) => {
            state.deleteOpen = false;
            state.deleteIndex = null; 
        },

        addCustomer: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("customers", JSON.stringify(state.list));
        },
        updateCustomer: (state, action) => {
            const { index, customer } = action.payload;
            state.list[index] = customer;
            localStorage.setItem("customers", JSON.stringify(state.list));
        },
        deleteCustomer: (state, action) => {
            state.list.splice(action.payload, 1);
            localStorage.setItem("customers", JSON.stringify(state.list));
        }
    }
})

export const { setOpen, setEditIndex, resetUIState, setDeleteOpen, setDeleteIndex, resetDeleteState, addCustomer,
    updateCustomer, deleteCustomer
 } = customerSlice.actions;
export default customerSlice.reducer;