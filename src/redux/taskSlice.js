import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getTasks: (state, action) => {
      state.tasks = action.payload
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    hideCompletedTask: (state) => {
      state.tasks = state.tasks.filter((task) => !task.completed)
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.completed = !task.completed
        }

        return task
      })
    },
    deleteTask: (state, action) => {
      const id = action.payload

      state.tasks = state.tasks.filter((task) => task.id !== id)
    },
  },
})

export const { getTasks, addTask, hideCompletedTask, updateTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer
