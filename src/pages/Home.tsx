import Faq from "@/components/Faq";
import HotBlog from "@/components/HotBlog";
import NewBlog from "@/components/NewBlog";
import Topic from "@/components/Topic";
import TopPicks from "@/components/TopPicks";
import Welcome from "@/components/Welcome";
import { InView } from "@/components/ui/in-view";

const Home = () => {
  return (
    <div className="w-full px-4">
      <Welcome />

      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Topic
          topic="Top Picks"
          desc="Recommend blogs"
          className="mt-[10%] mb-[4%]"
        />
        <TopPicks />
      </InView>

      <Topic
        topic="New Blogs"
        desc="Discover stories, ideas, and tips"
        className="mt-[10%] mb-[4%]"
      />
      <NewBlog />

      <InView
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <Topic
          topic="Hot Blogs"
          desc="Check out the most popular articles"
          className="mt-[10%] mb-[4%]"
        />
        <HotBlog />
      </InView>

      <Topic topic="FAQ" desc="Ask and Answer" className="mt-[10%] mb-[4%]" />
      <Faq />
    </div>
  );
};
export default Home;
