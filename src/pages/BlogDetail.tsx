import CommentForm from "@/components/CommentForm";
import CommentItem from "@/components/CommentItem";
import LoadingSpinner from "@/components/LoadingSpinner";
import InteractiveHeartIcon from "@/components/svg/InteractiveHeartIcon";
import Topic from "@/components/Topic";
import { Button } from "@/components/ui/button";
import { blogService } from "@/services/blogService";
import { commentService } from "@/services/commentService";
import type { BlogType } from "@/Types/blog";
import { handleApiError } from "@/utils/errorHandler";
import { AlertCircle, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [comments, setComments] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) {
        toast("Slug is required");
        return;
      }

      try {
        setLoading(true);
        const res = await blogService.getBlogBySlug(slug);
        setBlog(res.data.blog);
        // setBlog(blogSample.blog);
      } catch (error) {
        handleApiError(error);
      } finally {
        setLoading(false);
      }
    };
      
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchComments = async () => {
    const blogId = blog?._id;

    if (!blogId) {
      toast("Blog id is required");
      return;
    }

    try {
      setLoading(true);
      const res = await commentService.getCommentByBlogId(blogId);
      setComments(res.data.comment);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCommentUpdate = () => {
    fetchComments();
  };

  const handleLikeUpdate = (newCount: number) => {
    if (blog) {
      setBlog({ ...blog, likesCount: newCount });
    }
  };

  useEffect(() => {
    if (blog) {
      fetchComments();
    }
  }, [blog]);

  if (loading) return <LoadingSpinner />;
  if (!blog)
    return (
      <div className="w-full text-red-400 flex flex-col gap-8 items-center justify-center">
        <div className="flex gap-2 items-center">
          <AlertCircle size={18} />
          <p>Blog not found</p>
        </div>
        <Link to="/blog">
          <Button className="rounded-full py-6 px-8 hover:cursor-pointer bg-sky-600 hover:bg-sky-500">
            Go back
          </Button>
        </Link>
      </div>
    );

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
              <InteractiveHeartIcon
                blogId={blog._id}
                initialLikesCount={blog.likesCount}
                onLikeUpdate={handleLikeUpdate}
                className="w-6"
              />
              <div className="flex gap-2 items-center">
                <Eye className="w-6 text-sky-500" />
                <p>{blog.viewsCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 pt-8 md:pt-24">
        <Topic topic="Comments" desc="Share your thoughts" />

        {/* Comment Form */}
        {blog?._id && (
          <div className="bg-sky-50 border border-sky-200 rounded-4xl py-8 px-12">
            <CommentForm 
              blogId={blog._id} 
              onCommentAdded={handleCommentUpdate}
            />
          </div>
        )}

        {/* Comments List */}
        {!!comments && comments.length > 0 ? (
          comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              onCommentUpdated={handleCommentUpdate}
            />
          ))
        ) : (
          <div className="w-full flex justify-center items-center py-8">
            <p className="text-sm opacity-50">No comments yet. Be the first to comment!</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default BlogDetail;

// const blogSample = {
//   blog: {
//     _id: "68c242219a95506750574ecd",
//     title: "The Cozy Side of Snowy Days",
//     content:
//       "Snowy days aren’t just for outdoor adventures—they’re perfect for slowing down indoors too. Imagine curling up with a blanket, sipping hot cocoa, and watching flakes drift outside your window. Snow gives us an excuse to rest, recharge, and appreciate the warmth of home.",
//     banner: {
//       url: "https://images.unsplash.com/photo-1705989277853-e146af1d029a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       width: 774,
//       height: 1161,
//     },
//     author: {
//       _id: "68c11cb2950055cde0bc7074",
//       username: "user-q3vama1vtjn",
//       email: "test@test.com",
//       role: "user",
//       createdAt: "2025-09-10T06:37:38.426Z",
//     },
//     viewsCount: 0,
//     likesCount: 0,
//     commentsCount: 0,
//     status: "published",
//     slug: "the-cozy-side-of-snowy-days-782515",
//     publishedAt: "2025-09-11T03:29:37.521Z",
//     updatedAt: "2025-09-11T03:29:37.521Z",
//   },
// };
