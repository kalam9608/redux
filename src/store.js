import { configureStore } from '@reduxjs/toolkit'
import accountSlices from './slices/accountSlices'
import bonusSlice from './slices/bonusSlice'
import reawardReducers from './reducers/rewardReducers'

export const store = configureStore({
  reducer: {
    acount:accountSlices,
    bonus:bonusSlice,
    reward:reawardReducers
  },
})