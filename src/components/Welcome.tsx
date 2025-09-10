import { PixelImage } from "@/components/magicui/pixel-image";
import { CircleCheck, CircleDashed } from "lucide-react";
import { AnimatedList } from "@/components/magicui/animated-list";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "@/stores/authStore";
import { authService } from "@/services/authService";
import { toast } from "react-toastify";
import axios from "axios";

interface ValidationErrorResponse {
  errors: {
    [key: string]: { msg: string };
  };
}

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const Welcome = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const { isAuthenticated, user, clearAuth } = useAuthStore();

  const hdlLogout = async () => {
    try {
      const response = await authService.logout();
      console.log(response);
      clearAuth()

      toast.success("Logout Success");
      setTimeout(() => navigate("/"), 500);
    } catch (err: unknown) {
      console.log(err);
      if (axios.isAxiosError(err) && err.response) {
        const data = err.response.data as ValidationErrorResponse;
        const formatted: Record<string, string> = {};
        Object.entries(data.errors).forEach(([field, detail]) => {
          formatted[field] = detail.msg;
        });

        toast.error(Object.values(formatted).join(", "));
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full flex justify-between">
          <div className="mb-5">
            <p className="font-serif text-4xl">Welcome to NysDev!</p>
            <p className="font-serif text-2xl mb-4 text-sky-500 italic">
              Inspire your everyday life
            </p>
            <p className="opacity-60 text-sm">
              Discover stories, ideas, and tips that inspire your everyday life.
            </p>
          </div>

          <div className="flex gap-0.5">
            <CircleDashed
              size={"40px"}
              className="text-sky-300 hover:text-sky-400"
            />
            <CircleCheck
              size={"40px"}
              className="text-sky-300 hover:text-sky-400"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between p-8 rounded-4xl border border-slate-200 h-full">
          <h1 className="font-serif text-2xl">Update</h1>
          <p className="text-xs opacity-35 lg:-mt-2">
            as of {new Date().toISOString()}
          </p>
          <div
            className={cn(
              "relative flex h-[200px] w-full flex-col overflow-hidden p-2"
            )}
          >
            <AnimatedList>
              {notifications.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
          </div>
        </div>
      </div>

      <div className="h-full">
        <PixelImage
          src="https://images.unsplash.com/photo-1544235653-a313b8a430d9?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          customGrid={{ rows: 4, cols: 6 }}
          grayscaleAnimation
        />
      </div>

      <div className="flex flex-col gap-2 justify-between">
        {isAuthenticated ? (
          <>
            <div className="flex flex-col items-start justify-center py-4 px-6 w-full md:w-[180px] h-full rounded-2xl bg-sky-50 overflow-clip">
              <div className="hover:text-sky-500 duration-300">
                <p className="font-serif text-lg mb-1">Welcome back!</p>
              </div>
              <p className="text-sm opacity-50">
                <span className="font-semibold font-serif italic">id: </span>
                {user?.username.substring(0, 10) + "..."}
              </p>
              <p className="text-sm opacity-50">
                <span className="font-semibold font-serif italic">Role: </span>
                {user?.role.toUpperCase()}
              </p>
            </div>

            <div className="flex flex-col items-start justify-center py-4 px-6 w-full md:w-[180px] h-full rounded-2xl bg-pink-100 overflow-clip">
              <div>
                <button className="hover:cursor-pointer" onClick={hdlLogout}>
                  <p className="font-serif text-lg mb-1 hover:text-pink-500">
                    Logout
                  </p>
                </button>
              </div>
              <p className="text-sm opacity-50">Time to say goodbye</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-start justify-center py-4 px-6 w-full md:w-[180px] h-full rounded-2xl bg-sky-50 overflow-clip">
              <Link to="/register" className="hover:text-sky-500 duration-300">
                <p className="font-serif text-lg mb-1">Register</p>
              </Link>
              <p className="text-sm opacity-50">Wanna Write a Blog</p>
              <p className="text-sm opacity-50">Please Join us</p>
            </div>
            <div className="flex flex-col items-start justify-center py-4 px-6 w-full md:w-[180px] h-full rounded-2xl bg-sky-100 overflow-clip">
              <Link to="login" className="hover:text-sky-500 duration-300">
                <p className="font-serif text-lg mb-1">Login</p>
              </Link>
              <p className="text-sm opacity-50">Already have an account?</p>
            </div>
          </>
        )}

        <div className="flex flex-col items-start justify-center py-4 px-6 w-full md:w-[180px] h-full rounded-2xl bg-sky-200 overflow-clip">
          <Link to="/blog" className="hover:text-sky-500 duration-300">
            <p className="font-serif text-lg mb-1">Comment</p>
          </Link>
          <p className="text-sm opacity-50">
            Commenting and joining discussions
          </p>
        </div>
        <div className="flex flex-col items-start justify-center py-4 px-6 w-full md:w-[180px] h-full rounded-2xl bg-sky-300 overflow-clip">
          <Link to="/create-blog" className="hover:text-sky-500 duration-300">
            <p className="font-serif text-lg mb-1">Write</p>
          </Link>
          <p className="text-sm opacity-50">Share stories, or experiences </p>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
