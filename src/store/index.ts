// @reduxjs/toolkit   react-redux
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import counterReducer from './modules/counter'
import recommend from '@/views/discover/c-views/recommend/store'
const store = configureStore({
  reducer: {
    // 这里的key是固定的,就是redux中的state中的key,这里的value就是我们定义的reducer
    counter: counterReducer,
    recommend
  }
})

// 类型约束
type GetStateFnType = typeof store.getState // 获取store中的state
export type CounterStateType = ReturnType<GetStateFnType> // 获取state中的类型，这里的ReturnType是ts中的一个工具类型，用来获取函数的返回值类型
export const useAppSelector: TypedUseSelectorHook<CounterStateType> = useSelector // 优化类型封装，使用useAppSelector代替useSelector，这样就不用每次都要写类型了，这里TypedUseSelectorHook是ts中的一个工具类型，用来约束useSelector的类型，函数签名为：(state: CounterStateType)：CounterStateType
type DispatchFnType = typeof store.dispatch // 获取store中的dispatch
export const useAppDispatch: () => DispatchFnType = useDispatch // 获取dispatch的类型

export default store
