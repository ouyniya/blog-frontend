import axiosInstance from "@/utils/axiosInstance";

export const blogService = {
  createNewBlog: (body: unknown) => axiosInstance.post("/blogs", body),

  getAllBlogs: (limit:number, offset: number) => axiosInstance.get(`/blogs/all?limit=${limit}&offset=${offset}`),

  getBlogByUser: (userId: string) => axiosInstance.get(`/blogs/user/${userId}`),

  getBlogBySlug: (slug: string) => axiosInstance.get(`/blogs/${slug}`),

  updateBlog: (blogId: string) => axiosInstance.put(`/blogs/${blogId}`),

  deleteBlog: (blogId: string) => axiosInstance.delete(`/blogs/${blogId}`),
};
