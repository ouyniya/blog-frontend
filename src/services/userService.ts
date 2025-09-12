import axiosInstance from "@/utils/axiosInstance";

export const userService = {
  getCurrentUser: () => axiosInstance.get("/users/current"),

  getUserById: (userId: string) => axiosInstance.get(`/users/${userId}`),

  deleteUserById: (userId: string) => axiosInstance.delete(`/users/${userId}`),

  getAllUsers: (limit: number, offset: number) =>
    axiosInstance.get(`/users/all?limit=${limit}&offset=${offset}`),

  updateUserData: (body) =>
    axiosInstance.put(`/users/current`, body),

  deleteCurrentUser: () =>
    axiosInstance.delete(`/users/current`),
};
