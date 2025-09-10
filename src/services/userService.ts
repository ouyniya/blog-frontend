import axiosInstance from "@/utils/axiosInstance";

export const userService = {
  getCurrentUser: () => axiosInstance.get("/users/current"),

};