import { Snowflake } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between w-full min-h-35 bg-sky-600 rounded-t-[80px] p-4 text-white">
      <div className="flex justify-start items-end pl-[2%]">
        <Snowflake size={"75px"} />
        <div className="flex h-full justify-start pt-[5%]">
          <Snowflake size={"35px"} />
        </div>
      </div>
      <div className="flex items-center h-full text-center">
        <p>
          <span>© nysdev.com since 2025; All rights reserved by </span>
          <strong>Nysdev</strong>
          <br />
          <div className="flex gap-4 justify-center font-semibold">
            <Link to="/privacy">
              <span>Privacy Policy</span>
            </Link>
            <Link to="/cookie">
              <span>Cookie Policy</span>
            </Link>
          </div>
        </p>
      </div>
      <div className="flex justify-start items-end pr-[2%]">
        <div className="flex h-full justify-start pt-[5%]">
          <Snowflake size={"35px"} />
        </div>
        <Snowflake size={"75px"} />
      </div>
    </div>
  );
};
export default Footer;
