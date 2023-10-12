import { axiosInstance } from "./axios"

export const subscribeToServiceRaider = (data: any) => {
    return axiosInstance().post("/user/worker/raider/service/subscribe", data);
}
export const resubscribeToServiceRaider = (data: any) => {
    return axiosInstance().post("/user/worker/raider/service/resubscribe", data);
}
