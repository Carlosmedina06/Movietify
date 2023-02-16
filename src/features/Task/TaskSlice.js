import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
  task: {},
}

const userSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload
      const foundTask = state.find((task) => task.id === id)

      if (foundTask) {
        foundTask.title = title
        foundTask.description = description
      }
    },
    deleteTask: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload)

      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1)
      }
    },
  },
})

export const { addTask, editTask, deleteTask } = userSlice.actions
export default userSlice.reducer
