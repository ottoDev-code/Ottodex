import { axiosInstance } from "./axios";

export const createRaidTask = (body: any) => {
    return axiosInstance().post("/task/raid/client/create_task", body);
}
export const getAllRaidTask = () => {
    return axiosInstance().get("/task/raid/user?limit=50&page=1");
}
export const startRaidTask = () => {
    return axiosInstance().post("/task/raid/user/start_raid");
}
export const getSingleTask = (taskId: string) => {
    return axiosInstance().get(`/task/raid/user/single_task/${taskId}`);
}
