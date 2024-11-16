"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CommandSearch } from "./CommandSearch";

export default function Navbar() {
  const [state, setState] = useState(false);
  const pathname = usePathname();
  const active = pathname;

  const menus = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/menu" },
    { title: "About Us", path: "/about" },
  ];

  return (
    <nav className="md:border-0 w-full bg-white border-b">
      <div className="md:flex max-w-screen-2xl items-center px-4 mx-auto">
        <div className="md:py-5 md:block flex items-center justify-between py-3">
          <Link href="/">
            <h1 className="text-3xl font-bold text-black">Foodle</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="focus:border-gray-400 focus:border p-2 text-gray-700 rounded-md outline-none"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={cn(
            "flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0",
            state ? "block" : "hidden"
          )}
        >
          <ul className="md:flex md:space-x-6 md:space-y-0 items-center justify-center space-y-8">
            {menus.map((item, id) => (
              <li
                key={id}
                className={cn(
                  "hover:text-orange-600 text-gray-600 font-bold transition-all duration-150",
                  active === item.path ? "text-orange-600" : ""
                )}
              >
                <Link href={item.path}>{item.title}</Link>
                <span></span>
              </li>
            ))}
            <form className="relative flex items-center p-2 space-x-2 rounded-md">
              <CommandSearch />
            </form>
          </ul>
        </div>
        <div className="md:flex hidden gap-3">
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
      </div>
    </nav>
  );
}
