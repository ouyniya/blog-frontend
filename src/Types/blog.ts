
export interface ValidationErrorResponse {
  errors: {
    [key: string]: { msg: string };
  };
}

export type BlogType = {
  _id: string;
  title: string;
  content: string;
  banner: {
    url: string;
    width: number;
    height: number;
  };
  author: {
    _id: string;
    username: string;
    email: string;
    role: string;
    createdAt: string;
  };
  viewsCount: number;
  likesCount: number;
  commentsCount: number;
  status: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
};