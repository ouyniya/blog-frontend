import Topic from "@/components/Topic";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
import { useEffect, useState } from "react";
import { handleApiError } from "@/utils/errorHandler";
import { blogService } from "@/services/blogService";
import { toast } from "react-toastify";
import { Loader2, Snowflake } from "lucide-react";
import HeartIcon from "@/components/svg/HeartIcon";
import type { BlogType } from "@/Types/blog";

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  const perPage = 10; // limit

  useEffect(() => {
    const hdlgetPosts = async () => {
      try {
        setLoading(true);

        // const allData = await blogService.getAllBlogs(perPage, offset);
        // setTotalPage(Math.ceil(allData?.data?.total / perPage));
        // setPage(Math.floor(offset / perPage) + 1);
        // setTotal(allData?.data?.total);
        // setBlogs(allData?.data?.blogs);

        setPage(blogSample.total / perPage);
        setTotal(blogSample.total);
        setBlogs(blogSample.blogs);
      } catch (error) {
        handleApiError(error);
      } finally {
        setLoading(false);
      }
    };

    hdlgetPosts();
  }, [offset]);

  return (
    <div className="max-w-4xl mx-auto">
      <Topic topic="Blogs" desc="Discover stories, ideas, and tips" />

      <div className="flex flex-col gap-8">
        {loading ? (
          <div className="w-full min-h-[100px] mx-auto flex justify-center items-center">
            <Loader2 size={24} className="animate-spin text-sky-500" />
          </div>
        ) : (
          <Table>
            <TableCaption className="font-serif text-lg italic opacity-75 pt-4">
              Inspire your everyday life
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[5%]"></TableHead>
                <TableHead className="w-[40%]">title</TableHead>
                <TableHead className="w-[18%]">author</TableHead>
                <TableHead className="flex justify-end text-right">
                  <HeartIcon className="w-6" />
                </TableHead>
                <TableHead className="text-right w-[8%]">view</TableHead>
                <TableHead className="text-right">Published at</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-red-400">
                    No blog yet
                  </TableCell>
                </TableRow>
              ) : (
                blogs.map((blog) => (
                  <TableRow key={blog._id}>
                    <TableCell className="text-sky-300">
                      {<Snowflake size={16} />}
                    </TableCell>
                    <TableCell className="font-medium">
                      {blog.title.substring(0, 30) + "..."}
                    </TableCell>
                    <TableCell>{blog.author.username}</TableCell>
                    <TableCell className="text-right">
                      {blog.likesCount}
                    </TableCell>
                    <TableCell className="text-right">
                      {blog.viewsCount}
                    </TableCell>
                    <TableCell className="text-right text-xs opacity-40">
                      {new Date(blog.publishedAt).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        )}

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className={
                  offset < perPage
                    ? "pointer-events-none opacity-50"
                    : "hover:cursor-pointer"
                }
                onClick={() => {
                  if (offset < perPage) {
                    return;
                  } else {
                    setOffset((page - 2) * perPage);
                  }
                }}
              ></PaginationPrevious>
            </PaginationItem>

            {totalPage <= 3 ? (
              Array.from({ length: totalPage }, (_, i) => i + 1).map((item) => (
                <PaginationItem key={item}>
                  <PaginationLink
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setOffset((item - 1) * perPage);
                    }}
                  >
                    {item}
                  </PaginationLink>
                </PaginationItem>
              ))
            ) : (
              <>
                <PaginationItem>
                  <PaginationLink
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setOffset(0);
                    }}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setOffset((totalPage - 1) * perPage);
                    }}
                  >
                    {totalPage}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              <PaginationNext
                className={
                  offset > (totalPage - 2) * perPage
                    ? "pointer-events-none opacity-50"
                    : "hover:cursor-pointer"
                }
                onClick={() => {
                  if (offset > (totalPage - 2) * perPage) {
                    return;
                  } else {
                    setOffset(page * perPage);
                  }
                }}
              >
                Next
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

            <div className="flex flex-col md:flex-row gap-4 mx-auto w-full pt-16">
        {blogs.length <= 0
          ? ""
          : blogs.map((item, index) => {
              if (index > 2) {
                return;
              }
              return (
                <Card
                  key={item._id}
                  className="flex justify-between mx-auto w-md shadow-none"
                >
                  <CardHeader>
                    <Lens defaultPosition={{ x: 260, y: 150 }}>
                      <div className="w-[500px] h-[200px] overflow-hidden">
                        <img src={item.banner.url} width={500} height={500} />
                      </div>
                    </Lens>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-start items-start h-full">
                    <CardTitle className="mb-4">
                      {item.title.substring(0, 25) + "..."}
                    </CardTitle>
                    <CardDescription>
                      {item.content.substring(0, 100) + "..."}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="space-x-4">
                    <Button className="w-full bg-sky-600/80 hover:bg-sky-500 hover:cursor-pointer rounded-3xl py-6 font-serif text-lg text-sky-50 italic">
                      Read more
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
      </div>
    </div>
  );
};
export default Blog;

const blogSample = {
  limit: 20,
  offset: 0,
  total: 1,
  blogs: [
    {
      _id: "68c16fa0d263444d4cc17225",
      title: "test",
      content: "test",
      banner: {
        url: "https://res.cloudinary.com/drcejgsvh/image/upload/v1757507488/blog-api/p9ofp0urb5m43yvmkasv.png",
        width: 500,
        height: 500,
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
      slug: "test-ppsi6e",
      publishedAt: "2025-09-10T12:31:28.904Z",
      updatedAt: "2025-09-10T12:31:28.904Z",
    },
    {
      _id: "68c16fa0d263444d4cc17225",
      title: "Snow and Childhood Memories",
      content:
        "There’s something timeless about the very first snowfall of the season. The world suddenly feels hushed, as if nature has pressed pause. Streets, trees, and rooftops turn into a soft white canvas, inviting us to slow down and breathe. Whether you’re watching from a window with a warm drink or stepping outside to catch snowflakes on your hand, that first snow always brings childlike wonder.",
      banner: {
        url: "https://res.cloudinary.com/drcejgsvh/image/upload/v1757507488/blog-api/p9ofp0urb5m43yvmkasv.png",
        width: 500,
        height: 500,
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
      slug: "test-ppsi6e",
      publishedAt: "2025-09-10T12:31:28.904Z",
      updatedAt: "2025-09-10T12:31:28.904Z",
    },
    {
      _id: "68c16fa0d263444d4cc17225",
      title: "Snow as Nature’s Artist",
      content:
        "There’s something timeless about the very first snowfall of the season. The world suddenly feels hushed, as if nature has pressed pause. Streets, trees, and rooftops turn into a soft white canvas, inviting us to slow down and breathe. Whether you’re watching from a window with a warm drink or stepping outside to catch snowflakes on your hand, that first snow always brings childlike wonder.",
      banner: {
        url: "https://res.cloudinary.com/drcejgsvh/image/upload/v1757507488/blog-api/p9ofp0urb5m43yvmkasv.png",
        width: 500,
        height: 500,
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
      slug: "test-ppsi6e",
      publishedAt: "2025-09-10T12:31:28.904Z",
      updatedAt: "2025-09-10T12:31:28.904Z",
    },
    {
      _id: "68c16fa0d263444d4cc17225",
      title: "The Cozy Side of Snowy Days",
      content:
        "There’s something timeless about the very first snowfall of the season. The world suddenly feels hushed, as if nature has pressed pause. Streets, trees, and rooftops turn into a soft white canvas, inviting us to slow down and breathe. Whether you’re watching from a window with a warm drink or stepping outside to catch snowflakes on your hand, that first snow always brings childlike wonder.",
      banner: {
        url: "https://res.cloudinary.com/drcejgsvh/image/upload/v1757507488/blog-api/p9ofp0urb5m43yvmkasv.png",
        width: 500,
        height: 500,
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
      slug: "test-ppsi6e",
      publishedAt: "2025-09-10T12:31:28.904Z",
      updatedAt: "2025-09-10T12:31:28.904Z",
    },
    {
      _id: "68c16fa0d263444d4cc17225",
      title: "The Cozy Side of Snowy Days",
      content:
        "There’s something timeless about the very first snowfall of the season. The world suddenly feels hushed, as if nature has pressed pause. Streets, trees, and rooftops turn into a soft white canvas, inviting us to slow down and breathe. Whether you’re watching from a window with a warm drink or stepping outside to catch snowflakes on your hand, that first snow always brings childlike wonder.",
      banner: {
        url: "https://res.cloudinary.com/drcejgsvh/image/upload/v1757507488/blog-api/p9ofp0urb5m43yvmkasv.png",
        width: 500,
        height: 500,
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
      slug: "test-ppsi6e",
      publishedAt: "2025-09-10T12:31:28.904Z",
      updatedAt: "2025-09-10T12:31:28.904Z",
    },
    {
      _id: "68c16fa0d263444d4cc17225",
      title: "The Cozy Side of Snowy Days",
      content:
        "There’s something timeless about the very first snowfall of the season. The world suddenly feels hushed, as if nature has pressed pause. Streets, trees, and rooftops turn into a soft white canvas, inviting us to slow down and breathe. Whether you’re watching from a window with a warm drink or stepping outside to catch snowflakes on your hand, that first snow always brings childlike wonder.",
      banner: {
        url: "https://res.cloudinary.com/drcejgsvh/image/upload/v1757507488/blog-api/p9ofp0urb5m43yvmkasv.png",
        width: 500,
        height: 500,
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
      slug: "test-ppsi6e",
      publishedAt: "2025-09-10T12:31:28.904Z",
      updatedAt: "2025-09-10T12:31:28.904Z",
    },
    {
      _id: "68c16fa0d263444d4cc17225",
      title: "The Cozy Side of Snowy Days",
      content:
        "There’s something timeless about the very first snowfall of the season. The world suddenly feels hushed, as if nature has pressed pause. Streets, trees, and rooftops turn into a soft white canvas, inviting us to slow down and breathe. Whether you’re watching from a window with a warm drink or stepping outside to catch snowflakes on your hand, that first snow always brings childlike wonder.",
      banner: {
        url: "https://res.cloudinary.com/drcejgsvh/image/upload/v1757507488/blog-api/p9ofp0urb5m43yvmkasv.png",
        width: 500,
        height: 500,
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
      slug: "test-ppsi6e",
      publishedAt: "2025-09-10T12:31:28.904Z",
      updatedAt: "2025-09-10T12:31:28.904Z",
    },
    {
      _id: "68c16fa0d263444d4cc17225",
      title: "The Cozy Side of Snowy Days",
      content:
        "There’s something timeless about the very first snowfall of the season. The world suddenly feels hushed, as if nature has pressed pause. Streets, trees, and rooftops turn into a soft white canvas, inviting us to slow down and breathe. Whether you’re watching from a window with a warm drink or stepping outside to catch snowflakes on your hand, that first snow always brings childlike wonder.",
      banner: {
        url: "https://res.cloudinary.com/drcejgsvh/image/upload/v1757507488/blog-api/p9ofp0urb5m43yvmkasv.png",
        width: 500,
        height: 500,
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
      slug: "test-ppsi6e",
      publishedAt: "2025-09-10T12:31:28.904Z",
      updatedAt: "2025-09-10T12:31:28.904Z",
    },
    {
      _id: "68c16fa0d263444d4cc17225",
      title: "The Cozy Side of Snowy Days",
      content:
        "There’s something timeless about the very first snowfall of the season. The world suddenly feels hushed, as if nature has pressed pause. Streets, trees, and rooftops turn into a soft white canvas, inviting us to slow down and breathe. Whether you’re watching from a window with a warm drink or stepping outside to catch snowflakes on your hand, that first snow always brings childlike wonder.",
      banner: {
        url: "https://res.cloudinary.com/drcejgsvh/image/upload/v1757507488/blog-api/p9ofp0urb5m43yvmkasv.png",
        width: 500,
        height: 500,
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
      slug: "test-ppsi6e",
      publishedAt: "2025-09-10T12:31:28.904Z",
      updatedAt: "2025-09-10T12:31:28.904Z",
    },
    {
      _id: "68c16fa0d263444d4cc17225",
      title: "The Cozy Side of Snowy Days",
      content:
        "There’s something timeless about the very first snowfall of the season. The world suddenly feels hushed, as if nature has pressed pause. Streets, trees, and rooftops turn into a soft white canvas, inviting us to slow down and breathe. Whether you’re watching from a window with a warm drink or stepping outside to catch snowflakes on your hand, that first snow always brings childlike wonder.",
      banner: {
        url: "https://res.cloudinary.com/drcejgsvh/image/upload/v1757507488/blog-api/p9ofp0urb5m43yvmkasv.png",
        width: 500,
        height: 500,
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
      slug: "test-ppsi6e",
      publishedAt: "2025-09-10T12:31:28.904Z",
      updatedAt: "2025-09-10T12:31:28.904Z",
    },
    {
      _id: "68c16fa0d263444d4cc17225",
      title: "The Cozy Side of Snowy Days",
      content:
        "There’s something timeless about the very first snowfall of the season. The world suddenly feels hushed, as if nature has pressed pause. Streets, trees, and rooftops turn into a soft white canvas, inviting us to slow down and breathe. Whether you’re watching from a window with a warm drink or stepping outside to catch snowflakes on your hand, that first snow always brings childlike wonder.",
      banner: {
        url: "https://res.cloudinary.com/drcejgsvh/image/upload/v1757507488/blog-api/p9ofp0urb5m43yvmkasv.png",
        width: 500,
        height: 500,
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
      slug: "test-ppsi6e",
      publishedAt: "2025-09-10T12:31:28.904Z",
      updatedAt: "2025-09-10T12:31:28.904Z",
    },
    {
      _id: "68c16fa0d263444d4cc17225",
      title: "The Cozy Side of Snowy Days",
      content:
        "There’s something timeless about the very first snowfall of the season. The world suddenly feels hushed, as if nature has pressed pause. Streets, trees, and rooftops turn into a soft white canvas, inviting us to slow down and breathe. Whether you’re watching from a window with a warm drink or stepping outside to catch snowflakes on your hand, that first snow always brings childlike wonder.",
      banner: {
        url: "https://res.cloudinary.com/drcejgsvh/image/upload/v1757507488/blog-api/p9ofp0urb5m43yvmkasv.png",
        width: 500,
        height: 500,
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
      slug: "test-ppsi6e",
      publishedAt: "2025-09-10T12:31:28.904Z",
      updatedAt: "2025-09-10T12:31:28.904Z",
    },
    {
      _id: "68c16fa0d263444d4cc17225",
      title: "The Cozy Side of Snowy Days",
      content:
        "There’s something timeless about the very first snowfall of the season. The world suddenly feels hushed, as if nature has pressed pause. Streets, trees, and rooftops turn into a soft white canvas, inviting us to slow down and breathe. Whether you’re watching from a window with a warm drink or stepping outside to catch snowflakes on your hand, that first snow always brings childlike wonder.",
      banner: {
        url: "https://res.cloudinary.com/drcejgsvh/image/upload/v1757507488/blog-api/p9ofp0urb5m43yvmkasv.png",
        width: 500,
        height: 500,
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
      slug: "test-ppsi6e",
      publishedAt: "2025-09-10T12:31:28.904Z",
      updatedAt: "2025-09-10T12:31:28.904Z",
    },
    {
      _id: "68c16fa0d263444d4cc17225",
      title: "The Cozy Side of Snowy Days",
      content:
        "There’s something timeless about the very first snowfall of the season. The world suddenly feels hushed, as if nature has pressed pause. Streets, trees, and rooftops turn into a soft white canvas, inviting us to slow down and breathe. Whether you’re watching from a window with a warm drink or stepping outside to catch snowflakes on your hand, that first snow always brings childlike wonder.",
      banner: {
        url: "https://res.cloudinary.com/drcejgsvh/image/upload/v1757507488/blog-api/p9ofp0urb5m43yvmkasv.png",
        width: 500,
        height: 500,
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
      slug: "test-ppsi6e",
      publishedAt: "2025-09-10T12:31:28.904Z",
      updatedAt: "2025-09-10T12:31:28.904Z",
    },
  ],
};
