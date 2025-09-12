import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/magicui/lens";
import { blogService } from "@/services/blogService";
import { useEffect, useState } from "react";
import type { BlogType } from "@/Types/blog";
import { handleApiError } from "@/utils/errorHandler";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";



const TopPicks = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
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

  return (
    <div className="flex md:flex-row flex-col gap-4 mx-auto w-full">
      {

        loading ? (
          <div className="w-full min-h-[100px] mx-auto flex justify-center items-center">
            <Loader2 size={24} className="animate-spin text-sky-500" />
          </div>
        ) :

          blogs.length <= 0
            ? ""
            : blogs.map((item) => (
              <Card
                key={item._id}
                className="flex justify-center mx-auto max-w-md shadow-none"
              >
                <CardHeader>
                  <Lens defaultPosition={{ x: 260, y: 150 }}>
                    <div className="w-[500px] h-[200px] overflow-hidden">
                      <img src={item.banner.url} width={500} height={500} />
                    </div>
                  </Lens>
                </CardHeader>
                <CardContent className="flex flex-col justify-between">
                  <CardTitle className="text-lg">{item.title.substring(0, 20) + '...'}</CardTitle>
                  <CardDescription>{item.content.substring(0, 100) + '...'}</CardDescription>
                </CardContent>
                <CardFooter className="space-x-4">
                  <Link to={`/blogs/${item.slug}`} className="w-full">
                    <Button className="w-full bg-sky-600/80 hover:bg-sky-500 hover:cursor-pointer rounded-3xl py-6 font-serif text-lg text-sky-50 italic">
                      Read more
                    </Button>

                  </Link>
                </CardFooter>
              </Card>
            ))}
    </div>
  );
};
export default TopPicks;
