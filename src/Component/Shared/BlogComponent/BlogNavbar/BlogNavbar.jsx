"use client";
import { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import logo2 from "../../../../../public/logo2.png"

export default function BlogNavbar() {
  const [open, setOpen] = useState(false)
  const categories = [
  
    { name: "Academic", href: "/blog/category/academic" },
    { name: "Career", href: "/blog/category/career" },
    { name: "Skills", href: "/blog/category/skills" },
    { name: "Study Hacks", href: "/blog/category/studyhacks"  },
    { name: "Technology", href: "/blog/category/technology"  },
  ];

  return (
<div className="mx-auto px-22 container">
        <div className=" border-b pb-3 ">
      {/* Top Row (Logo + Search) */}
      <div className="flex justify-between items-center py-4">
        
       <Image   src={logo2}
          alt="logo"
          width={100}
          height={80}
          className="rounded-2xl"
          ></Image>
        <div className="border rounded-full p-2 cursor-pointer">
          <FaSearch size={18} />
        </div>
      </div>

      {/* BLOG Title + Filter */}
      <div className="flex items-center gap-6 mt-4">
        <h1 className="text-4xl font-bold">BLOG</h1>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 text-lg"
          >
            All Categories <FiChevronDown size={20} />
          </button>

          {open && (
            <div className="absolute bg-white shadow-md rounded-md mt-2 w-56 z-50">
              {categories.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Submit Blog */}
        <Link href="/blogs/submit" className="text-lg hover:underline">
          Submit Blog
        </Link>
      </div>
    </div>
</div>
  );
}
