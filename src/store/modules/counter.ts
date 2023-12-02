import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const counterReducer = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment(state, { payload }: PayloadAction<number>) {
      state.count += payload
    }
  }
})

export const { increment } = counterReducer.actions

export default counterReducer.reducer
