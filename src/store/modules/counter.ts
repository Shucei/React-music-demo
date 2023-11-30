import { createSlice } from '@reduxjs/toolkit'

const counterReducer = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment(state, { payload }) {
      state.count += payload
    }
  }
})

export const { increment } = counterReducer.actions

export default counterReducer.reducer
