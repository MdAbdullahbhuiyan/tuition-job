"use client";

import Image from "next/image";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {signIn} from 'next-auth/react'

export default function SignIn() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] flex items-center justify-center px-4 mt-30">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="hidden md:flex justify-center">
          <Image
            src="https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/illustration/forTutorSVG/png/sliders/0005.png" // তোমার নিজের image বসাও
            width={500}
            height={500}
            alt="login"
          />
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">

          <h2 className="text-3xl font-bold text-center text-blue-600">
            Welcome Back
          </h2>

          <p className="text-center text-gray-500 mb-8">
            Sign In to Continue
          </p>

          {/* ROLE SELECTOR */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 border p-3 rounded-xl flex items-center gap-2 shadow">
              👨‍👩‍👧 Guardian or Student
            </button>

            <button className="flex-1 border p-3 rounded-xl flex items-center gap-2 shadow">
              👨‍🏫 Tutor
            </button>
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email *</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full border-b p-2 outline-none bg-transparent"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Password *</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border-b p-2 outline-none bg-transparent"
            />
          </div>

          {/* SIGN IN BUTTON */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2 hover:bg-blue-700 transition">
            Sign In →
          </button>

          {/* GOOGLE & GITHUB UI ONLY */}
          <div className="mt-6 flex flex-col gap-3">
            <button 
             onClick={()=>signIn("google")}
              className="w-full border py-2 rounded-lg flex justify-center items-center gap-2"
            >
              <FaGoogle /> Sign in with Google
            </button>

            <button
             onClick={()=>signIn("github")} className="w-full border py-2 rounded-lg flex justify-center items-center gap-2"
            >
              <FaGithub /> Sign in with GitHub
            </button>
          </div>

          {/* BOTTOM LINKS */}
          <div className="flex justify-between mt-6 text-sm text-blue-600">
            <a href="/signup">Sign Up</a>
            <a href="/forgot">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
