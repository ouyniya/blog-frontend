// components/CommentItem.tsx
import { Button } from "@/components/ui/button";
import { commentService } from "@/services/commentService";
import useAuthStore from "@/stores/authStore";
import { handleApiError } from "@/utils/errorHandler";
import { Edit2, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import CommentForm from "./CommentForm";

interface CommentItemProps {
  comment: {
    _id: string;
    content: string;
    userId: string;
    publishedAt: string;
    user?: {
      username: string;
    };
  };
  onCommentUpdated: () => void;
}

const CommentItem = ({ comment, onCommentUpdated }: CommentItemProps) => {
  const { user } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Check if current user is the owner of the comment
  const isOwner = user && comment.userId === user._id;

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this comment?")) {
      return;
    }

    try {
      setDeleting(true);
      await commentService.deleteCommentById(comment._id);
      toast.success("Comment deleted successfully");
      onCommentUpdated();
    } catch (error) {
      handleApiError(error);
    } finally {
      setDeleting(false);
    }
  };

  const handleEditStart = () => {
    setIsEditing(true);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  const handleEditComplete = () => {
    setIsEditing(false);
    onCommentUpdated();
  };

  if (isEditing) {
    return (
      <div className="flex flex-col gap-4 my-4 border border-sky-200 rounded-4xl py-8 px-12 bg-sky-50">
        <CommentForm
          blogId="" // Not needed for editing
          onCommentAdded={handleEditComplete}
          editCommentId={comment._id}
          initialContent={comment.content}
          onEditCancel={handleEditCancel}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 my-4 border border-b-slate-200 rounded-4xl py-8 px-12">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <p className="font-serif opacity-75">
            User: {comment.user?.username || comment.userId}
          </p>
          <p className="text-xs opacity-45 flex gap-2">
            <Edit2 size={14} />
            {new Date(comment.publishedAt).toLocaleDateString()}
          </p>
        </div>
        
        {isOwner && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleEditStart}
              className="rounded-full"
            >
              <Edit2 size={14} className="mr-1" />
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDelete}
              disabled={deleting}
              className="rounded-full text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 size={14} className="mr-1" />
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          </div>
        )}
      </div>
      
      <p className="opacity-85">{comment.content}</p>
    </div>
  );
};

export default CommentItem;
