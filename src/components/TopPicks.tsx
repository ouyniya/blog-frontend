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

const topPicks = [
  {
    id: "001",
    banner: {
      url: "https://images.unsplash.com/photo-1596619862377-11d9b6521e55?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    title: "Your next camp",
    content:
      "See our latest and best camp destinations all across the five continents of the globe.",
  },
  {
    id: "002",
    banner: {
      url: "https://plus.unsplash.com/premium_photo-1723741308299-0f6501ae7632?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    title: "Your next camp",
    content:
      "See our latest and best camp destinations all across the five continents of the globe.",
  },
  {
    id: "003",
    banner: {
      url: "https://plus.unsplash.com/premium_photo-1675019219609-0ccc4719d635?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    title: "Your next camp",
    content:
      "See our latest and best camp destinations all across the five continents of the globe.",
  },
  {
    id: "004",
    banner: {
      url: "https://plus.unsplash.com/premium_photo-1672764022725-fdbe7e63f7d0?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    title: "Your next camp",
    content:
      "See our latest and best camp destinations all across the five continents of the globe.",
  },
];

const TopPicks = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 mx-auto w-full">
      {topPicks.length <= 0
        ? ""
        : topPicks.map((item) => (
            <Card
              key={item.id}
              className="flex justify-center mx-auto max-w-md shadow-none"
            >
              <CardHeader>
                <Lens defaultPosition={{ x: 260, y: 150 }}>
                  <div className="w-[500px] h-[200px] overflow-hidden">
                    <img src={item.banner.url} width={500} height={500} />
                  </div>
                </Lens>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
                <CardDescription>{item.content}</CardDescription>
              </CardContent>
              <CardFooter className="space-x-4">
                <Button className="w-full bg-sky-600/80 hover:bg-sky-500 hover:cursor-pointer rounded-3xl py-6 font-serif text-lg text-sky-50 italic">
                  Read more
                </Button>
              </CardFooter>
            </Card>
          ))}
    </div>
  );
};
export default TopPicks;
