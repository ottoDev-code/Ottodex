/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { IUser } from '@/app/interface/user.interface'

const initialState: IUser = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<IUser>) => {
      return action.payload;
    },
  },
})
export const { setUser } = userSlice.actions;
