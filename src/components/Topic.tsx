import { cn } from "@/lib/utils";
import { Snowflake } from "lucide-react";
import type { HTMLAttributes } from "react";

interface TopicComponentProps extends HTMLAttributes<HTMLDivElement> {
  topic: string;
  desc: string;
}

const Topic = ({ topic, desc, ...props }: TopicComponentProps) => {
  return (
    <div className={cn("w-full text-center mb-[4%]")} {...props}>
      <div className="flex flex-col mx-auto gap-1">
        <div className="flex justify-center">
          <h1 className="font-serif text-3xl">{topic}</h1>
          <Snowflake className="text-sky-300 animate-spin" size={"15px"} />
        </div>
        <p className="text-center opacity-40 text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default Topic;
