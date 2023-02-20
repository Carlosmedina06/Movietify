import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import taskReducer from './taskSlice'
import loginSlice from './loginSlice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    login: loginSlice,
  },
  middleware: [thunk],
})
