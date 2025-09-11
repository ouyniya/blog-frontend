import type { ValidationErrorResponse } from "@/Types/blog";
import axios from "axios";
import { toast } from "react-toastify";

export const handleApiError = (err: unknown) => {
  console.error(err);

  if (axios.isAxiosError(err) && err.response) {
    const data = err.response.data as ValidationErrorResponse;

    if (data?.errors) {
      const formatted: Record<string, string> = {};
      Object.entries(data.errors).forEach(([field, detail]) => {
        formatted[field] = detail.msg;
      });
      toast.error(Object.values(formatted).join(", "));
      return;
    }

    if (typeof data === "object" && data && "message" in data) {
      toast.error((data as { message: string }).message);
    } else {
      toast.error("API error occurred");
    }
  } else {
    toast.error("Something went wrong");
  }
};
