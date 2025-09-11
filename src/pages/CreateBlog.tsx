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
import axios from "axios";
import { toast } from "react-toastify";
import type { ValidationErrorResponse } from "@/Types/blog";
import { blogService } from "@/services/blogService";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const CreateBlog = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const hdlCreatePost = async () => {
    try {
      setLoading(true);

      // validate
      if (!title.trim() || !content.trim() || !file) {
        toast.error("Please fill in all inputs");
        return;
      }

      // check file type
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"]; // adjust as needed
      if (!allowedTypes.includes(file.type)) {
        toast.error("Invalid file type. Please upload JPEG, PNG, or JPG.");
        return;
      }

      // optional: check file size (e.g., max 2MB)
      const maxSize = 2 * 1024 * 1024;
      if (file.size > maxSize) {
        toast.error("File size must be less than 2MB.");
        return;
      }

      if (status !== "published" && status !== "draft") {
        toast.error("Invalid status");
        return;
      }

      const body = new FormData();
      body.append("title", title);
      body.append("content", content);
      body.append("status", status);

      if (file) {
        body.append("banner_image", file);
      } else {
        toast.error("Image banner required");
        return;
      }

      // ยิง api
      await blogService.createNewBlog(body);
      // console.log(body)
      toast.success("Post created successfully");

      navigate("/blog");
    } catch (err: unknown) {
      console.log(err);
      if (axios.isAxiosError(err) && err.response) {
        const data = err.response.data as ValidationErrorResponse;
        const formatted: Record<string, string> = {};
        Object.entries(data.errors).forEach(([field, detail]) => {
          formatted[field] = detail.msg;
        });

        toast.error(Object.values(formatted).join(", "));
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl min-w-xs mx-auto">
      <Topic topic="Write your story" desc="" />
      <div className="flex flex-col gap-8">
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid w-full gap-3">
          <Label htmlFor="content">Your content</Label>
          <Textarea
            placeholder="Type your content here."
            id="content"
            className="h-[200px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="grid w-full gap-3">
            <Label htmlFor="status">Status</Label>
            <Select onValueChange={(value) => setStatus(value)} value={status}>
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
            <Label htmlFor="file">Picture</Label>
            <Input
              id="file"
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          </div>
        </div>

        <Button
          disabled={
            title.trim().length === 0 &&
            content.trim().length === 0 &&
            status !== "published" &&
            status !== "draft" &&
            !file
          }
          className="mt-4 py-6 font-serif bg-sky-600 hover:bg-sky-500 text-lg italic hover:cursor-pointer rounded-full"
          onClick={hdlCreatePost}
        >
          {loading ? (
            <div className="flex w-full justify-center items-center gap-2">
              <Loader2 className="text-sky-200 animate-spin" />
              Submitting...
            </div>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </div>
  );
};
export default CreateBlog;
