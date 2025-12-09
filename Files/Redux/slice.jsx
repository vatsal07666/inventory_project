// import { createSlice } from "@reduxjs/toolkit";

// export const buttonWork = createSlice({
//   name: "users",
//   initialState: {
//     username: [],
//   },
//   reducers: {
//     adduser: (state, action) => {
//       state.username.push(action.payload);
//     },
//     deleteuser: (state, action) => {
//       state.username.splice(action.payload, 1);
//     },
//     updateuser: (state, action) => {
//       const { index, name, age, mobile } = action.payload;

//       // Safety checks
//       // if (typeof index !== "number" || !state.username[index]) return;

//       // Update the specific user
//       state.username[index] = { name, age, mobile };
//     },
//   },
// });

// export const { adduser, deleteuser, updateuser } = buttonWork.actions;
// export default buttonWork.reducer;


import { createSlice } from "@reduxjs/toolkit";

export const buttonWork = createSlice({
  name: "users",
  initialState: {
    username: [],
    // form: {
    //   name: "",
    //   age: "",
    //   mobile: "",
    //   editIndex: null,
    // },
  },
  reducers: {
    adduser: (state, action) => {
      state.username.push(action.payload);
    },
    deleteuser: (state, action) => {
      state.username.splice(action.payload, 1);
    },
    updateuser: (state, action) => {
      const { index, name, age, mobile } = action.payload;
      if (typeof index !== "number" || !state.username[index]) return;
      state.username[index] = { name, age, mobile };
    },

    // 🧩 NEW REDUCERS to manage form state globally
    setFormField: (state, action) => {
      const { field, value } = action.payload;
      state.form[field] = value;
    },
    setEditIndex: (state, action) => {
      state.form.editIndex = action.payload;
    },
    resetForm: (state) => {
      state.form = { name: "", age: "", mobile: "", editIndex: null };
    },
  },
});

export const {
  adduser,
  deleteuser,
  updateuser,
  setFormField,
  setEditIndex,
  resetForm,
} = buttonWork.actions;

export default buttonWork.reducer;


