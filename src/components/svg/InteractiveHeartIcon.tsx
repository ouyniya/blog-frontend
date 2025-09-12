// components/svg/InteractiveHeartIcon.tsx
import { likeService } from "@/services/likeService";
import useAuthStore from "@/stores/authStore";
import { handleApiError } from "@/utils/errorHandler";
import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

interface InteractiveHeartIconProps {
  blogId: string;
  initialLikesCount: number;
  onLikeUpdate?: (newCount: number) => void;
  className?: string;
}

const InteractiveHeartIcon = ({ 
  blogId, 
  initialLikesCount, 
  onLikeUpdate,
  className = "w-6"
}: InteractiveHeartIconProps) => {
  const { isAuthenticated } = useAuthStore();
  const [likesCount, setLikesCount] = useState(initialLikesCount);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLikeToggle = async () => {
    if (!isAuthenticated) {
      toast.error("Please login to like posts");
      return;
    }

    if (loading) return;

    try {
      setLoading(true);
      
      if (isLiked) {
        // Unlike the blog
        await likeService.deleteLike(blogId);
        const newCount = likesCount - 1;
        setLikesCount(newCount);
        setIsLiked(false);
        onLikeUpdate?.(newCount);
        toast.success("Removed like");
      } else {
        // Like the blog
        await likeService.addLike(blogId);
        const newCount = likesCount + 1;
        setLikesCount(newCount);
        setIsLiked(true);
        onLikeUpdate?.(newCount);
        toast.success("Liked!");
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={handleLikeToggle}
        disabled={loading}
        className={`transition-all duration-200 hover:scale-110 ${
          loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <Heart
          size={24}
          className={`transition-colors duration-200 ${
            isLiked 
              ? "fill-red-500 text-red-500" 
              : "fill-gray-200 text-gray-400 hover:text-red-400"
          } ${className}`}
        />
      </button>
      <span className={`text-sm font-medium ${
        isLiked ? "text-red-500" : "text-gray-600"
      }`}>
        {likesCount}
      </span>
    </div>
  );
};

export default InteractiveHeartIcon;
