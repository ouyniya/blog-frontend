import axiosInstance from "@/utils/axiosInstance";

export const likeService = {
  addLike: (blogId: string) => axiosInstance.post(`/likes/blog/${blogId}`),
  deleteLike: (blogId: string) => axiosInstance.delete(`/likes/blog/${blogId}`),
};
