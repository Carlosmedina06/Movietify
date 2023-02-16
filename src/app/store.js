import { configureStore } from '@reduxjs/toolkit'

import tasksReducer from '../features/Task/TaskSlice'

export const store = configureStore({
  reducer: { tasks: tasksReducer },
})
