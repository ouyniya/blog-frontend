import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:text-sky-500 text-base">What is NysDev's Blog?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              NysDev Blog is an online platform where we share insights, tutorials, and updates. Our goal is to make complex topics easy to understand and provide useful resources for readers at every level.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:text-sky-500 text-base">Is your content beginner-friendly?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
             Absolutely. We create content for both beginners and advanced readers. Each article is tagged by skill level so you can easily find what is right for you.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="hover:text-sky-500 text-base">Can I share your articles on social media?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Yes, please do! Sharing helps us reach more readers. Just make sure to credit and link back to the original post.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="hover:text-sky-500 text-base">Can I suggest topics for future articles?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Definitely! We love hearing from our readers. Send us your ideas through the contact form, and we’ll consider them for upcoming posts.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default Faq;
