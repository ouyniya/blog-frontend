import { Snowflake } from "lucide-react";
import { Link } from "react-router-dom";
import { Marquee } from "@/components/magicui/marquee";

const Footer = () => {
  return (
    <div className="flex justify-between w-full md:min-h-55 bg-sky-800 md:rounded-t-[100px] p-4 text-white mt-20">
      <div className="justify-start items-end pl-[2%] lg:flex hidden">
        <Snowflake size={"75px"} />
        <div className="flex h-full justify-start pt-[50%]">
          <Snowflake size={"35px"} className="text-sky-400" />
        </div>
      </div>
      <div className="flex items-start justify-center mx-auto h-full text-center mt-4">
        <div>
          <span>© nysdev.com since 2025; All rights reserved by </span>
          <strong>Nysdev</strong>
          <br />
          <div className="flex flex-col md:flex-row gap-4 md:my-0 justify-center font-semibold">
            <Link
              to="/terms"
              className="text-sky-300   hover:text-sky-500 duration-300"
            >
              <span>Terms & Conditions</span>
            </Link>
            <Link
              to="/privacy"
              className="text-sky-300   hover:text-sky-500 duration-300"
            >
              <span>Privacy Policy</span>
            </Link>
            <Link
              to="/cookie"
              className="text-sky-300 hover:text-sky-500 duration-300"
            >
              <span>Cookie Policy</span>
            </Link>
          </div>
          <div className="mt-8 px-20 md:block hidden">
            <Marquee
              pauseOnHover
              className="[--duration:35s] hover:cursor-default"
            >
              <p className="text-sky-50/85 text-xl font-serif italic">
                Stellar Dendrites – Classic star-shaped flakes with branching
                arms. Needles – Thin, elongated ice crystals resembling tiny
                needles. Columns – Hollow or solid column-shaped crystals.Plates
                – Flat, thin, hexagonal-shaped crystals.
              </p>
            </Marquee>
          </div>
        </div>
      </div>
      <div className="justify-start items-end pr-[2%] lg:flex hidden">
        <div className="flex h-full justify-start pt-[50%]">
          <Snowflake size={"35px"} className="text-sky-400" />
        </div>
        <Snowflake size={"75px"} />
      </div>
    </div>
  );
};
export default Footer;
