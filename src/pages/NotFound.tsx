import Topic from "@/components/Topic";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-w-screen min-h-screen bg-sky-200 px-4">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white py-10 px-12 rounded-[100px] shadow-xl shadow-sky-300/50 border-2 border-sky-500/75">
          <div className="flex flex-col gap-4 w-full">
            <Topic
              topic="Page Not Found"
              desc="Oops! This page seems to have wandered off."
            />
            <p className="mb-8 px-8 text-center opacity-60">
              {`Hmm… we couldn’t find what you’re looking for. `} <br />
              {` Maybe try exploring somewhere else?`}
            </p>
            <Link to="/" className="w-full flex justify-center">
              <Button className="mx-auto rounded-full py-6 px-6 bg-sky-500 text-lg font-serif italic hover:bg-sky-600 hover:cursor-pointer duration-300">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
