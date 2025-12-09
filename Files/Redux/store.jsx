import { configureStore } from '@reduxjs/toolkit'
import formSlice from './useformikslice'

export default configureStore({
  reducer: {
    form: formSlice,
  },
})