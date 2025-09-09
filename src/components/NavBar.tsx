import { PinIcon, Megaphone } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";

const NavBar = () => {
  return (
    <div className="flex flex-col gap-4 mb-[5%]">
      <div className="w-full min-h-[400px] bg-sky-200 rounded-b-[100px]"></div>
      <div className="flex justify-between items-center pl-[5%]">
        {/* location */}
        <div className="flex gap-2 basis-1/5">
          <PinIcon />
          <p>Bangkok</p>
        </div>

        {/* Marquee */}
        <div className="flex gap-4 items-center basis-4/5 pr-[2%]">
          <div>
            <Megaphone className="text-sky-600" />
          </div>
          <Marquee
            pauseOnHover
            className="[--duration:35s] hover:cursor-default"
          >
            <p className="text-sky-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              veritatis illum accusamus necessitatibus, voluptatum nisi
              assumenda consectetur cum nobis pariatur neque ab aperiam quas?
              Impedit aspernatur nulla eum corporis aperiam.
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
