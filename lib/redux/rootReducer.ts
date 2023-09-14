/* Instruments */
import { statusSlice, userSlice } from './slices'

export const reducer = {
  user: userSlice.reducer,
  status: statusSlice.reducer,
}
