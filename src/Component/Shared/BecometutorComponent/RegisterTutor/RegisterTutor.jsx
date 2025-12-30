"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const RegisterTutor = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <div className="w-full py-16 px-4 bg-[#F4F7FF]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/registerTutor.png" 
            alt="Register Tutor Illustration"
            width={420}
            height={420}
            className="object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-[#1C2A53] mb-1">
            Register as a Tutor
          </h2>
          <p className="text-sm text-gray-500 mb-6">Sign Up to Continue</p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Name */}
            <div>
              <label className="font-medium text-sm">Name *</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-blue-500"
                placeholder="Rafsan Chowdhury"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="font-medium text-sm">Gender *</label>
              <div className="flex items-center gap-4 mt-2">
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" /> Male
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" /> Female
                </label>
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="font-medium text-sm">Phone Number *</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-blue-500"
                placeholder="01756441122"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-medium text-sm">Email *</label>
              <input
                type="email"
                className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-blue-500"
                placeholder="name@example.com"
              />
            </div>

            {/* City */}
            <div>
              <label className="font-medium text-sm">City *</label>
              <select className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-blue-500">
                <option>Select your city</option>
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Rajshahi</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="font-medium text-sm">Location *</label>
              <select className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-blue-500">
                <option>Select your location</option>
                <option>Uttara</option>
                <option>Banani</option>
                <option>Mirpur</option>
              </select>
            </div>

            {/* Password */}
            <div className="relative">
              <label className="font-medium text-sm">Password *</label>
              <input
                type={showPass ? "text" : "password"}
                className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 bottom-3"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="font-medium text-sm">Confirm Password *</label>
              <input
                type={showConfirmPass ? "text" : "password"}
                className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 bottom-3"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
              >
                {showConfirmPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>

            {/* Agree Checkbox */}
            <div className="col-span-2 flex items-center gap-2 mt-2">
              <input type="checkbox" />
              <p className="text-sm">
                I agree to the{" "}
                <span className="text-blue-600">Terms of Use</span> and{" "}
                <span className="text-blue-600">Privacy Policy</span>
              </p>
            </div>

            {/* Button */}
            <div className="col-span-2 mt-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-md">
                Sign Up →
              </button>
            </div>

            <div className="col-span-2 text-center mt-3 text-sm">
              Already have an account?{" "}
              <span className="text-blue-600 cursor-pointer">Sign In</span>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterTutor;
