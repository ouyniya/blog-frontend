import axiosInstance from "@/utils/axiosInstance";

export const commentService = {
  getCommentByBlogId: (blogId: string) =>
    axiosInstance.get(`/comments/blog/${blogId}`),

  createCommentByBlogId: (blogId: string, content: string) =>
    axiosInstance.post(`/comments/blog/${blogId}`, { content }),

  updateCommentById: (commentId: string, content: string) =>
    axiosInstance.put(`/comments/${commentId}`, { content }),

  deleteCommentById: (commentId: string) =>
    axiosInstance.delete(`/comments/${commentId}`),
};
