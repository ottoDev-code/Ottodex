import { axiosInstance } from "./axios"

export const subscribeToServiceRaider = (data: any) => {
    return axiosInstance().post("/user/worker/raider/service/subscribe", data);
}
export const resubscribeToServiceRaider = (data: any) => {
    return axiosInstance().post("/user/worker/raider/service/resubscribe", data);
}
export const getAllRaiderServices = () => {
    return axiosInstance().get("/user/worker/raider/service/all?page=1&limit=20");
}
