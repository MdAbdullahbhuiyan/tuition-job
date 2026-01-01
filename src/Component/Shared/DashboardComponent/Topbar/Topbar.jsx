"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import pic from "../../../../../public/abd.jpeg";
import {
  FaMoon,
  FaSun,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";

export default function Topbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  // apply dark class globally
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Mobile menu (future use) */}
          <button className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <FaBars />
          </button>

          <h1 className="font-semibold text-base sm:text-lg dark:text-white">
            Admin Dashboard
          </h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full border border-gray-200 dark:border-gray-600
            hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {dark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-600" />
            )}
          </button>

          {/* User */}
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <Image
              src={pic}
              width={36}
              height={36}
              className="rounded-full"
              alt="Admin"
            />

            <span className="hidden sm:block text-sm font-medium dark:text-white">
              Abdullah
            </span>

            <FaChevronDown className="text-xs dark:text-gray-300" />

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 top-12 w-40 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                  Settings
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
