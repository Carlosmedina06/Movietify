import { configureStore } from '@reduxjs/toolkit'

import taskReducer from '../features/Task/TaskSlice'

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
})
