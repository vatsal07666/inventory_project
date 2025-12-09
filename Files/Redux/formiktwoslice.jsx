import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form2",
    initialState: {
        list: [],
        editIndex: null
    },
    reducers: {
        addData: (state, actions) => {
            state.list.push(actions.payload)
        },
        deleteData: (state,action) => {
            state.list.splice(action.payload, 1)
        },
        updateData: (state, action) => {
            const {index, newData} = action.payload
            state.list[index] = newData
            state.editIndex = null
        },
        setEditIndex: (state, action) => {
            state.editIndex = action.payload
        }
    }
})

export const {addData, deleteData, updateData, setEditIndex} = formSlice.actions
export default formSlice.reducer 