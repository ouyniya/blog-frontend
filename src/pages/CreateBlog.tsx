import Topic from "@/components/Topic";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CreateBlog = () => {
  const [loading, setLoading] = useState();

  return (
    <div className="max-w-3xl min-w-xs mx-auto">
      <Topic topic="Write your story" desc="" />
      <div className="flex flex-col gap-8">
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" placeholder="title" />
        </div>

        <div className="grid w-full gap-3">
          <Label htmlFor="content">Your content</Label>
          <Textarea
            placeholder="Type your content here."
            id="content"
            className="h-[200px]"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="grid w-full gap-3">
            <Label htmlFor="status">Status</Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="published">published</SelectItem>
                <SelectItem value="draft">draft</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
        </div>

        <Button className="mt-4 py-6 font-serif bg-sky-600 hover:bg-sky-500 text-lg italic hover:cursor-pointer rounded-full">
          {loading ? "" : "Submit"}
        </Button>
      </div>
    </div>
  );
};
export default CreateBlog;
