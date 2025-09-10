import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex gap-8 justify-between">
      {/* register steps */}
      <div className="basis-1/2 rounded-[50px]">
        <div className="flex flex-col justify-center gap-2 mb-8 border-l-8 border-sky-300 pl-4 h-[110px]">
          <p className="font-serif text-4xl">Register</p>
          <p className="opacity-50 text-sm">
            <span>Sign up for </span>
            <span className="text-sky-600 font-semibold">free </span>
            <span>and get started right away!</span>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 bg-sky-50 rounded-[50px] py-4 px-12">
            <p className="font-serif text-2xl italic text-sky-500">Step 1</p>
            <p className="opacity-60">fill in the registered form</p>
          </div>
          <div className="flex flex-col gap-2 bg-sky-100 rounded-[50px] py-4 px-12">
            <p className="font-serif text-2xl italic text-sky-500">Step 2</p>
            <p className="opacity-60">Agree to Terms & Conditions</p>
          </div>
          <div className="flex flex-col gap-2 bg-sky-200 rounded-[50px] py-4 px-12">
            <p className="font-serif text-2xl italic text-sky-500">Step 3</p>
            <p className="opacity-60">Email verification</p>
          </div>
        </div>
      </div>

      {/* register form */}
      <div className="w-full mx-auto my-auto basis-1/2">
        <CardHeader className="w-full">
          <CardTitle className="font-serif text-2xl">
            Please fill in this form
          </CardTitle>
          <CardDescription className="mb-12">
            Enter information to register an account
          </CardDescription>
          <CardAction>
            <Link to="/login">
              <Button
                variant="link"
                className="hover:text-sky-500 hover:cursor-pointer"
              >
                Log in
              </Button>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  className="py-6 rounded-2xl focus:bg-sky-100"
                  id="email"
                  type="email"
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
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-sky-500 hover:cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms">
                  I agree to the Terms & Conditions and Privacy Policy
                </Label>
              </div>

              <p className="text-xs opacity-50">
                Please read our{" "}
                <Link
                  to="/terms"
                  className="font-bold text-sky-600 text-xs hover:text-sky-500 hover:cursor-pointer"
                >
                  Terms & Conditions{" "}
                </Link>{" "}
                and{"  "}
                <Link
                  to="/terms"
                  className="font-bold text-sky-600 text-xs hover:text-sky-500 hover:cursor-pointer"
                >
                  Privacy Policy.{" "}
                </Link>
                Check the box below if you agree, then you can continue.
              </p>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2 mt-8">
          <Button
            type="submit"
            className="w-full text-lg text-white bg-sky-500 font-serif rounded-2xl py-7 hover:cursor-pointer hover:bg-sky-700 duration-300"
          >
            Register
          </Button>
          <Button
            variant="outline"
            className="w-full text-lg  font-serif rounded-2xl py-6 hover:cursor-pointer"
          >
            Clear
          </Button>
        </CardFooter>
      </div>
    </div>
  );
};
export default Register;
