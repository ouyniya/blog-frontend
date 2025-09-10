import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { authService } from "@/services/authService";
import { toast } from "react-toastify";
import axios from "axios";
import useAuthStore from "@/stores/authStore";

interface ValidationErrorResponse {
  errors: {
    [key: string]: { msg: string };
  };
}

const Login = () => {
  const { setAuth } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const hdlLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // validate data
    if (!email.trim() || !password.trim()) {
      toast.error("Please fill in all inputs");
      return;
    }

    // send to backend
    try {
      setLoading(true);

      const response = await authService.login(email, password);
      console.log(response);

      const user = response?.data?.user;
      const accessToken = response?.data?.accessToken;

      setAuth(user, accessToken);
      toast.success("Login Success");
      navigate("/");
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

  const hdlClear = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-16 justify-between">
      <div className="basis-1/2 w-full rounded-[50px] my-auto h-full">
        <div className="flex flex-col justify-center gap-2 mb-8 border-l-8 border-sky-300 pl-4 h-[110px]">
          <p className="font-serif text-4xl">Log in</p>
          <p className="opacity-50 text-sm">
            <span>Welcome back!</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full mx-auto my-auto">
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      className="py-6 rounded-2xl focus:bg-sky-100"
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@example.com"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>

                    <div className="relative w-full">
                      <Input
                        className="py-6 rounded-2xl focus:bg-sky-100 w-full border"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        placeholder="password"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-sky-500 hover:cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2 mt-8">
              <Button
                type="submit"
                onClick={hdlLogin}
                className="w-full text-lg text-white bg-sky-500 font-serif rounded-2xl py-7 hover:cursor-pointer hover:bg-sky-700 duration-300"
              >
                {loading && (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-3"></div>
                )}
                Log in
              </Button>
              <Button
                variant="outline"
                className="w-full text-lg  font-serif rounded-2xl py-6 hover:cursor-pointer"
                onClick={hdlClear}
              >
                Clear
              </Button>
            </CardFooter>
          </div>
        </div>
      </div>

      <div className="basis-1/2 overflow-hidden max-h-[480px] rounded-[50px] lg:flex hidden">
        <img
          src="https://images.unsplash.com/photo-1516683179282-b7f603ab6eba?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="snow"
        />
      </div>
    </div>
  );
};
export default Login;
