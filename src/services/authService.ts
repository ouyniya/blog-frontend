import axiosInstance from "@/utils/axiosInstance";


export const authService = {
  login: (email: string, password: string) =>
    axiosInstance.post("/auth/login", { email, password }),

  register: ( email: string, password: string) =>
    axiosInstance.post("/auth/register", { email, password }),

  refreshToken: () => axiosInstance.post("/auth/refresh-token", null),

  logout: () => axiosInstance.post("/auth/logout", null),

};