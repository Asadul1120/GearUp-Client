"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { registerAction } from "../_actions/registerAction";
import { IActionState } from "@/types/action";

const initialState: IActionState = {
  success: false,
  statusCode: 0,
  message: "",
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const [state, formAction, pending] = useActionState(
    registerAction,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);

      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <form action={formAction} className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>

        <div className="relative">
          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            required
            className="h-12 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
        </div>
      </div>

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
            required
            className="h-12 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Role */}
      <div>
        <label
          htmlFor="role"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Register As
        </label>

        <select
          id="role"
          name="role"
          defaultValue="CUSTOMER"
          className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        >
          <option value="CUSTOMER">Customer</option>
          <option value="PROVIDER">Provider</option>
        </select>
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
            placeholder="Enter password"
            required
            minLength={6}
            className="h-12 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-12 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Terms */}
      <label className="flex items-start gap-2 text-sm text-gray-600">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300"
        />

        <span>
          I agree to the{" "}
          <Link
            href="/terms"
            className="font-medium text-blue-600 hover:underline"
          >
            Terms & Conditions
          </Link>
        </span>
      </label>

      <button
        type="submit"
        disabled={pending}
        className="flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Creating Account..." : "Create Account"}
      </button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
