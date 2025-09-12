// components/CommentForm.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { commentService } from "@/services/commentService";
import { handleApiError } from "@/utils/errorHandler";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

interface CommentFormProps {
  blogId: string;
  onCommentAdded: () => void;
  editCommentId?: string;
  initialContent?: string;
  onEditCancel?: () => void;
}

const CommentForm = ({ 
  blogId, 
  onCommentAdded, 
  editCommentId, 
  initialContent = "", 
  onEditCancel 
}: CommentFormProps) => {
  const [content, setContent] = useState(initialContent);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }

    try {
      setLoading(true);
      
      if (editCommentId) {
        // Update existing comment
        await commentService.updateCommentById(editCommentId, content);
        toast.success("Comment updated successfully");
        onEditCancel?.();
      } else {
        // Create new comment
        await commentService.createCommentByBlogId(blogId, content);
        toast.success("Comment added successfully");
      }
      
      setContent("");
      onCommentAdded();
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setContent("");
    onEditCancel?.();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="comment" className="text-sm font-medium text-gray-700">
          {editCommentId ? "Edit Comment" : "Add Comment"}
        </label>
        <Input
          id="comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your comment here..."
          className="min-h-[100px] resize-none"
        />
      </div>
      
      <div className="flex gap-2 justify-end">
        {editCommentId && (
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            disabled={loading}
            className="rounded-full"
          >
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          disabled={loading || !content.trim()}
          className="rounded-full bg-sky-600 hover:bg-sky-700"
        >
          <Send size={16} className="mr-2" />
          {loading ? "Saving..." : editCommentId ? "Update" : "Post"}
        </Button>
      </div>
    </form>
  );
};

export default CommentForm;
