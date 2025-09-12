import React, { useEffect, useState } from "react";
import useAuthStore from "../stores/authStore";
import { authService } from "../services/authService";
import axios from "axios";
import LoadingSpinner from "@/components/LoadingSpinner";
import { userService } from "./userService";
import { toast } from "react-toastify";
import type { ValidationErrorResponse } from "@/Types/blog";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { setAuth, clearAuth } = useAuthStore();
  const [loading, setLoading] = useState(true);

  const refreshAccessToken = async () => {
    try {
      const res = await authService.refreshToken(); // ส่ง cookie ไป
      if (res.data?.accessToken) {
        const accessToken = res.data.accessToken;
        setAuth(null, accessToken);

        const profile = await userService.getCurrentUser();
        const { _id, username, email, role } = profile.data.user;
        const userData = { _id, username, email, role };
        setAuth(userData, accessToken);

      } else {
        clearAuth();
      }
    } catch (err: unknown) {
      clearAuth();
      console.log('Refresh token error: ', err);

      if (axios.isAxiosError(err) && err.response) {
        const data = err.response.data as ValidationErrorResponse;
        const formatted: Record<string, string> = {};
        Object.entries(data.errors).forEach(([field, detail]) => {
          formatted[field] = detail.msg;
        });

      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshAccessToken();
    // refresh only once on initial mount; avoid triggering on route changes
  }, []);

  if (loading) return <LoadingSpinner />;

  return <>{children}</>;
};
