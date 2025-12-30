"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
export default function Header() {
  return (
   <div>
     <div className='bg-[#0675C1] flex gap-1 fixed top-0 px-22 py-2 items-center z-100 container mx-aut0 text-white'><IoIosCall /> 01576562801</div>
    <header className="w-full bg-[#F7F8FC] py-4 shadow-sm fixed top-10 z-100">

      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"   // ← তোমার logo.png public ফোল্ডারে রাখবে
            alt="Caretutors Logo"
            width={190}
            height={50}
          />
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-10 text-[17px] font-medium text-gray-800">
          <Link href="/home" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/signin" className="hover:text-blue-600 transition">
            Sign In
          </Link>
          <Link href="/jobboard" className="hover:text-blue-600 transition">
            Job Board
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition">
            Blog
          </Link>
        </nav>

        {/* Become a Tutor Button */}
        <Link
          href="/becometutor"
          className="hidden md:block bg-[#0B7EC2] text-white px-6 py-2 rounded-xl text-[17px] font-medium hover:bg-[#0690db] transition"
        >
          Become a Tutor
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-3xl text-gray-700">
            ☰
          </button>
        </div>

      </div>
    </header>
   </div>
  );
}
