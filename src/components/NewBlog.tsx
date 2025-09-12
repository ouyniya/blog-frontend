import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { BlogType } from "@/Types/blog";
import { blogService } from "@/services/blogService";
import { handleApiError } from "@/utils/errorHandler";

const ReviewCard = ({
  title,
  img,
  content,
  time
}: {
  title: string;
  img: string;
  content: string;
  time: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <div className="flex justify-center items-center w-8 h-8 overflow-hidden rounded-full">
          <img className="rounded-full" width="32" height="32" alt={title} src={img} />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {title.substring(0, 20) + '...'}
          </figcaption>
          <p className="text-xs font-medium opacity-50">{time}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{content.substring(0, 40) + '...'}</blockquote>
    </figure>
  );
};

const NewBlog = () => {

  const [blogs, setBlogs] = useState<BlogType[] | null>(null);
  const [firstRow, setFirstRow] = useState<BlogType[]>([]);
  const [secondRow, setSecondRow] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hdlgetPosts = async () => {
      try {
        setLoading(true);

        const allData = await blogService.getAllBlogs(4, 0);

        setBlogs(allData?.data?.blogs);

      } catch (error) {
        handleApiError(error);
      } finally {
        setLoading(false);
      }
    };

    hdlgetPosts();
  }, []);


  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const mid = Math.ceil(blogs.length / 2);
      setFirstRow(blogs.slice(0, mid));
      setSecondRow(blogs.slice(mid));
    }
  }, [blogs]);



  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">

      <Marquee pauseOnHover className="[--duration:20s]">
        {
          loading ? (
            <div className="w-full min-h-[100px] mx-auto flex justify-center items-center">
              <Loader2 size={24} className="animate-spin text-sky-500" />
            </div>
          ) :
            firstRow.map((review) => (
              <ReviewCard key={review._id} title={review.title} img={review.banner.url} content={review.content}
                time={review.publishedAt.toLocaleString()} />
            ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {
          loading ? (
            <div className="w-full min-h-[100px] mx-auto flex justify-center items-center">
              <Loader2 size={24} className="animate-spin text-sky-500" />
            </div>
          ) :
            secondRow.map((review) => (
              <ReviewCard key={review._id} title={review.title} img={review.banner.url} content={review.content}
                time={review.publishedAt.toLocaleString()} />
            ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};
export default NewBlog;
