import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTopBanner } from '../api'

export const getTopBannerAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res = await getTopBanner()
  dispatch(changeTopBanners(res.banners))
})

interface RecommendState {
  topBanners: any[]
}

const initialState: RecommendState = {
  topBanners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeTopBanners(state, action) {
      state.topBanners = action.payload
    }
  }
  // extraReducers: {
  //   [getTopBannerAction.fulfilled.type]: (state, action) => {
  //     // state.topBanners = action.payload
  //     console.log('action', action)
  //   }
  // }
  // 接收异步action的三个状态，getTopBannerAction中的返回值
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getTopBannerAction.fulfilled, (state, { payload }) => {
  //       state.topBanners = payload
  //     })
  //     .addCase(getTopBannerAction.rejected, (state, action) => {
  //       console.log('action', action)
  //     })
  //     .addCase(getTopBannerAction.pending, (state, action) => {
  //       console.log('action', action)
  //     })
  // }
})

export const { changeTopBanners } = recommendSlice.actions

export default recommendSlice.reducer
