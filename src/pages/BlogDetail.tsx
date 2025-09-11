import LoadingSpinner from "@/components/LoadingSpinner";
import HeartIcon from "@/components/svg/HeartIcon";
import Topic from "@/components/Topic";
import { blogService } from "@/services/blogService";
import type { BlogType } from "@/Types/blog";
import { handleApiError } from "@/utils/errorHandler";
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogType | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) {
        toast("Slug is required");
        return;
      }

      try {
        // const res = await blogService.getBlogBySlug(slug);
        // setBlog(res.data.blog);
        setBlog(blogSample.blog);
      } catch (error) {
        handleApiError(error);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (!blog) return <LoadingSpinner />;

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto">
      <div className="w-full flex flex-col md:flex-row gap-10 mx-auto">
        <div className="max-w-max flex justify-center rounded-[50px] overflow-hidden">
          <img src={blog.banner.url} alt={blog.title} />
        </div>
        <div className="flex flex-col gap-8 justify-between items-start">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-serif font-semibold">{blog.title}</h1>
            <p className="opacity-85">{blog.content}</p>
          </div>
          <div className="flex flex-col justify-end items-end w-full pr-8">
            <h2 className="font-serif text-lg">{blog.author.username}</h2>
            <p className="text-sm opacity-45">
              {new Date(blog.publishedAt).toDateString()}
            </p>
          </div>
          <div className="flex flex-col justify-end items-end w-full pr-8">
            <div className="flex gap-4 bg-sky-50 py-4 px-8 border border-sky-200/85 rounded-full">
              <div className="flex gap-2 items-center">
                <HeartIcon className="w-6" />
                <p>{blog.likesCount}</p>
              </div>
              <div className="flex gap-2 items-center">
                <Eye className="w-6 text-sky-500" />
                <p>{blog.viewsCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 pt-8 md:pt-24">
        <Topic topic="Comment" desc="Add comment here" />
        
      </div>
    </div>
  );
};
export default BlogDetail;

const blogSample = {
  blog: {
    _id: "68c242219a95506750574ecd",
    title: "The Cozy Side of Snowy Days",
    content:
      "Snowy days aren’t just for outdoor adventures—they’re perfect for slowing down indoors too. Imagine curling up with a blanket, sipping hot cocoa, and watching flakes drift outside your window. Snow gives us an excuse to rest, recharge, and appreciate the warmth of home.",
    banner: {
      url: "https://images.unsplash.com/photo-1705989277853-e146af1d029a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 774,
      height: 1161,
    },
    author: {
      _id: "68c11cb2950055cde0bc7074",
      username: "user-q3vama1vtjn",
      email: "test@test.com",
      role: "user",
      createdAt: "2025-09-10T06:37:38.426Z",
    },
    viewsCount: 0,
    likesCount: 0,
    commentsCount: 0,
    status: "published",
    slug: "the-cozy-side-of-snowy-days-782515",
    publishedAt: "2025-09-11T03:29:37.521Z",
    updatedAt: "2025-09-11T03:29:37.521Z",
  },
};
