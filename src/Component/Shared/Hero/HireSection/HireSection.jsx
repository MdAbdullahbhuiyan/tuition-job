"use client";
import Image from "next/image";
import baner1 from '../../../../../public/01.png'
import baner2 from '../../../../../public/02.png'
import baner3 from '../../../../../public/04.png'
import baner4 from '../../../../../public/05.png'
import Link from "next/link";
const HireSection = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Text Section */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Hire the Right Tutor Today
          </h1>

          <p className="mt-5 text-xl text-gray-600">
            Book one-on-one lessons with verified tutors in your area
          </p>

          <div className="mt-8">
           <Link href={"/hire"}> <button className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition">
              Hire a Tutor
            </button></Link>
          </div>

          <p className="mt-5 text-gray-600 text-lg">
            Want to become a Tutor?{" "}
            <span className="text-blue-600 font-semibold cursor-pointer">
              <Link href={"/becometutor"}> Sign Up</Link>
            </span>{" "}
            now
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full  gap-3 justify-center">

         <div className="flex gap-2 pb-4">
           <Image
            src={baner1}
            alt="Tutor Banner"
            width={250}
            height={100}
            className="rounded-tl-full shadow-xl"
          />
          <Image
            src={baner2}
            alt="Tutor Banner"
            width={200}
            height={70}
            className="rounded-xl shadow-xl"
          />
         </div>
         <div className="flex gap-2">
           <Image
            src={baner3}
            alt="Tutor Banner"
            width={200}
            height={50}
            className="rounded-xl shadow-xl"
          />
          <Image
            src={baner4}
            alt="Tutor Banner"
            width={250}
            height={100}
            className="rounded-br-full shadow-xl"
          />
         </div>

        </div>
      </div>
    </section>
  );
};

export default HireSection;
