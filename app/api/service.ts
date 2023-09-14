import { axiosInstance } from "./axios"

export const subscribeToService = (data: any) => {
    return axiosInstance().post("/user/service/raider/subscribe", data);
}
export const resubscribeToService = (data: any) => {
    return axiosInstance().post("/user/service/raider/resubscribe", data);
}
