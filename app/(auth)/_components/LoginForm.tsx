"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState, useActionState, useEffect } from "react";
import { loginAction } from "../_actions/authLoginActions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [state, Action, pending] = useActionState(loginAction, false);

  const role = state.data?.user.role;
  

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);

      if (role === "ADMIN") {
        router.push("/admin");
      } else if (role === "CUSTOMER") {
        router.push("/customer");
      } else if (role === "PROVIDER") {
        router.push("/provider");
      } else {
        router.push("/");
      }
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={Action} className="space-y-6">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            className="h-12 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 text-gray-700 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            required
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            autoComplete="current-password"
            className="h-12 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-12 text-gray-700 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-blue-600"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Remember & Forgot */}
      {/* <div className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
          Remember me
        </label>

        <Link
          href="/forgot-password"
          className="text-sm font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
        >
          Forgot Password?
        </Link>
      </div> */}

      {/* Login Button */}
      <button
        type="submit"
        disabled={pending}
        className="flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 font-semibold text-white transition-all duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Logging in..." : "Login"}
      </button>

      {/* Register */}
      <p className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-blue-600 transition hover:underline"
        >
          Create Account
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
