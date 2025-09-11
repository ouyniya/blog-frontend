import { PinIcon, Snowflake } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="flex flex-col gap-4 mb-[5%]">
      <Link to="/">
          <div className="w-full h-[350px] rounded-b-[100px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517918558653-3a2c5ab393a2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="snow header" className="w-full -mt-30 opacity-85" />
          </div>
      </Link>
      <div className="flex gap-2 justify-between items-center md:px-[5%] px-8 ">
        {/* location */}
        <div className="flex gap-2 basis-1/5">
          <PinIcon />
          <p>Bangkok</p>
        </div>

        {/* Marquee */}
        <div className="flex gap-4 items-center basis-4/5 pr-[2%]">
          <div>
            <Snowflake className="text-sky-400" />
          </div>
          <Marquee
            pauseOnHover
            className="[--duration:35s] hover:cursor-default"
          >
            <p className="text-sky-600 text-sm">
              When heavy snow falls, roads close, plans pause, and life slows. At first, it feels inconvenient, but soon, we realize it’s a gift. Snow encourages us to rest, spend time with loved ones, and embrace stillness—a rare luxury in busy lives.
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
