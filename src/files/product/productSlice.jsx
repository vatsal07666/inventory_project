// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     list: [],
//     open: false,
//     deleteOpen: false,
//     deleteId: null,
//     editId: null,
// };

// const productSlice = createSlice({
//     name: "product",
//     initialState,
//     reducers: {
//         // ================= UI STATE =================
//         setOpen: (state, action) => {
//             state.open = action.payload;
//         },
//         setEditId: (state, action) => {
//             state.editId = action.payload;
//         },
//         resetUIState: (state) => {
//             state.open = false;
//             state.editId = null;
//         },

//         setDeleteOpen: (state, action) => {
//             state.deleteOpen = action.payload;
//         },
//         setDeleteId: (state, action) => {
//             state.deleteId = action.payload;
//         },
//         resetDeleteState: (state) => {
//             state.deleteOpen = false;
//             state.deleteId = null;
//         },

//         // ================= DATA STATE =================

//         // GET
//         setProducts: (state, action) => {
//             state.list = action.payload;
//             localStorage.setItem("products", JSON.stringify(state.list));
//         },

//         // POST
//         addProduct: (state, action) => {
//             state.list.push(action.payload);
//             localStorage.setItem("products", JSON.stringify(state.list));
//         },

//         // DELETE
//         deleteProduct: (state, action) => {
//             state.list = state.list.filter((item) => item._id !== action.payload);
//             localStorage.setItem("products", JSON.stringify(state.list));
//         },

//         // Edit / PATCH
//         updateProduct: (state, action) => {
//             const index = state.list.findIndex((item) => item._id === action.payload._id );
//             // findIndex return -1 if "not found"(the data)
//             if(index !== -1) state.list[index] = action.payload;
//             localStorage.setItem("products", JSON.stringify(state.list));
//         },
//     },
// });

// export const { setOpen, setEditId, resetUIState, setDeleteOpen, setDeleteId, resetDeleteState,
//     setProducts, addProduct, deleteProduct, updateProduct
// } = productSlice.actions;

// export default productSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = "sqqVgyC2NtNy2hR6";

const initialState = {
  list: [],
  open: false,
  deleteOpen: false,
  deleteId: null,
  editId: null,
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // UI
    setOpen: (state, action) => { state.open = action.payload },
    setEditId: (state, action) => { state.editId = action.payload },
    setDeleteId: (state, action) => { state.deleteId = action.payload },
    setDeleteOpen: (state, action) => { state.deleteOpen = action.payload },
    resetUIState: (state) => {
      state.open = false;
      state.editId = null;
    },
    resetDeleteState: (state) => {
      state.deleteOpen = false;
      state.deleteId = null;
    },

    // DATA
    setProducts: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    addProduct: (state, action) => {
      state.list.unshift(action.payload);
    },
    updateProduct: (state, action) => {
      const i = state.list.findIndex(p => p._id === action.payload._id);
      if (i !== -1) state.list[i] = action.payload;
    },
    deleteProduct: (state, action) => {
      state.list = state.list.filter(p => p._id !== action.payload);
    },
  },
});

export const {
  setOpen,
  setEditId,
  setDeleteId,
  setDeleteOpen,
  resetUIState,
  resetDeleteState,
  setProducts,
  startLoading,
  addProduct,
  updateProduct,
  deleteProduct,
} = productSlice.actions;

export default productSlice.reducer;

/* --------- NORMAL FUNCTION (NO ASYNC) --------- */
export const loadProducts = () => (dispatch) => {
  dispatch(startLoading());

  axios.get("https://generateapi.techsnack.online/api/product", {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  })
  .then((res) => {
    dispatch(setProducts(res.data.Data));
  })
  .catch(() => {
    dispatch(setProducts([]));
  });
};
