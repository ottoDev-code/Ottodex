/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { IUser } from '@/app/interface/user.interface'
export interface IStatus {
  isLoading: boolean;
}

const initialState: IStatus = {
  isLoading: false
}

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
})
export const { setLoading } = statusSlice.actions
