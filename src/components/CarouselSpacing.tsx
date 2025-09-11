import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "@/components/motion-primitives/carousel";
import type { BlogType } from "@/Types/blog";
import { Link } from "react-router-dom";

type CarouselSpacingProps = {
  blogs?: BlogType[]; // optional array of BlogType
};

export function CarouselSpacing(props: CarouselSpacingProps) {
  const { blogs } = props;

  return (
    <div className="relative w-full px-4">
      <Carousel>
        <CarouselContent className="-ml-4">
          {blogs?.length === 0
            ? ""
            : blogs?.map((blog) => (
                <CarouselItem key={blog.slug} className="basis-1/3 pl-4">
                  <div className="flex rounded-4xl overflow-hidden items-center justify-center border border-zinc-200 dark:border-zinc-800">
                    <Link to={`/blogs/${blog.slug}`}>
                    <img src={blog.banner.url} alt="" />
                    </Link>
                  </div>
                </CarouselItem>
              ))}
        </CarouselContent>
        <CarouselNavigation
          className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
          classNameButton="bg-sky-500 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
          alwaysShow
        />
      </Carousel>
    </div>
  );
}
