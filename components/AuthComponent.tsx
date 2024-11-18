"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

type AuthComponentProps = {
  className?: string;
};

const AuthComponent = ({ className }: AuthComponentProps) => {
  return (
    <div className={cn("md:hidden flex gap-3", className)}>
      <Link
        href="/login"
        className="hover:bg-orange-500 hover:text-white px-4 py-2 text-orange-500 transition-all duration-150 rounded-full"
      >
        Login
      </Link>
      <Link
        href="/sign-up"
        className="hover:bg-orange-500 hover:text-white px-4 py-2 text-orange-500 transition-all duration-150 border-2 border-orange-500 rounded-full"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default AuthComponent;
