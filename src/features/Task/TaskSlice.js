import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
  task: {},
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
})

export default taskSlice.reducer
