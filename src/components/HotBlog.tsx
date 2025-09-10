import { Link } from "react-router-dom";
import BookMarkIcons from "./svg/BookmarkIcon";
import type { SVGProps } from "react";
import { Cursor } from "@/components/motion-primitives/cursor";

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={31}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill={"oklch(68.5% 0.169 237.323)"}
          fillRule="evenodd"
          stroke={"#fff"}
          strokeLinecap="square"
          strokeWidth={2}
          d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={"#22c55e"} d="M0 0h26v31H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

const HotBlog = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full bg-sky-100 rounded-[100px] border-2 border-sky-200 py-8 px-8">
      {/* Cursor */}
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.15,
        }}
        className="left-12 top-4"
      >
        <div>
          <MouseIcon className="h-6 w-6" />
          <div className="ml-4 mt-1 rounded-[4px] bg-sky-500 px-2 py-0.5 text-neutral-50">
            NysDev
          </div>
        </div>
      </Cursor>

      <div className="relative flex lg:flex-row flex-col gap-8 justify-between">
        {/* images */}
        <div className="flex basis-2/3">
          <div>
            <div className="absolute -top-1 lg:right-2/5 right-[5%] h-20 w-20 z-10">
              <BookMarkIcons />
            </div>
            <div className="rounded-[80px] h-[250px] overflow-hidden hover:opacity-80 duration-300">
              <img
                src="https://images.unsplash.com/photo-1547754980-3df97fed72a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="snowflake"
              />
            </div>
            <div className="flex gap-2 mt-4">
              <div className="rounded-[50px] w-[25%] h-[100px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1575640781759-4c790e8585e2?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="snowflake"
                />
              </div>
              <div className="rounded-[50px] w-[25%] h-[100px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1536759808958-bcc29b661ec6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="snowflake"
                />
              </div>
              <div className="rounded-[50px] w-[25%] h-[100px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1675082816016-a5577bd6e6a7?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="snowflake"
                />
              </div>
              <div className="rounded-[50px] w-[25%] h-[100px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1612037536415-1356f91f2c30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="snowflake"
                />
              </div>
            </div>
          </div>
        </div>

        {/* text  */}
        <div className="flex items-center basis-1/3  mb-12 px-8 lg:mb-0 lg:px-0">
          <div className="flex flex-col gap-8 w-full">
            <h1 className="font-serif text-sky-600 text-2xl">
              Discover the Magic of Snowflakes ❄️
            </h1>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col justify-between gap-6 w-full">
                <p className="text-sm opacity-50">
                  <span>
                    Every snowflake is a tiny work of art, unique and delicate.
                    From the classic star-shaped dendrites to slender needles,
                    flat plates, and charming capped columns, each flake tells
                    its own story. Even the irregular ones have their own
                    beauty, reminding us that no two moments—or people—are ever
                    exactly the same.
                  </span>{" "}
                  <Link to="/blog">
                    <span className="font-serif italic text-sky-600 font-semibold hover:text-sky-800">
                      Read more...
                    </span>
                  </Link>
                </p>
                <h1 className="font-serif text-xl italic">
                  Embrace the wonder in every crystal.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotBlog;
