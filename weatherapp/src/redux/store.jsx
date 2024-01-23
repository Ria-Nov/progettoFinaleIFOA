import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './reducers/locationReducer'

export default configureStore({
  reducer: locationReducer,
})