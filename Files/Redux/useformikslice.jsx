import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
    name: 'form',
    initialState: {
        list: [],
        editIndex: null,
    },
    reducers: {
        addData: (state, action) => {
            state.list.push(action.payload)
        },
        deleteData: (state, action) => {
            state.list.splice(action.payload, 1)
        },
        setEditIndex: (state, action) => {
            state.editIndex = action.payload
        },
        updateData: (state, action) => {
            const { index, newData } = action.payload
            state.list[index] = newData
            state.editIndex = null
        },
    },
})

export const { addData, deleteData, setEditIndex, updateData } = formSlice.actions
export default formSlice.reducer