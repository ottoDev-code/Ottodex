import { axiosInstance } from "./axios"

export const getUserTransactionHistory = () => {
    return axiosInstance().get('/user/personal/wallet/all?limit=10&page=1');
}