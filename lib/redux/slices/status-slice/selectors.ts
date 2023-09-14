/* Instruments */
import type { ReduxState } from '@/lib/redux'
export const getIsLoading = (state: ReduxState) => state.status.isLoading
