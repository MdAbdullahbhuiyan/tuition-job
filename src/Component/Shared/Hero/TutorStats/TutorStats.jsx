"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const stats = [
  {
    number: "457k",
    label: "Active Tutors",
    icon: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/landing_page/total_apply.png",
  },
  {
    number: "3k",
    label: "Live Tuition Jobs",
    icon: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/landing_page/total_jobs.png",
  },
  {
    number: "126k",
    label: "Happy Students",
    icon: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/landing_page/total_happy.png",
  },
  {
    number: "4.8/5",
    label: "Average Tutor Rating",
    icon: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/landing_page/total_rating.png",
  },
];

const locations = ["Barishal(31)", "Mymensingh(37)", "Doha(4)","Rangpur(20)" ,"Savar(6)"];

const TutorStats = () => {
  return (
   <div className="px-22 container mx-auto">
     <div className="bg-[#0d7cd5] mt-10 rounded-3xl p-10 text-white ">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {stats.map((item, i) => (
          <div key={i} className="text-center">
            <div className="flex justify-center mb-3">
              <Image src={item.icon} height={20} width={60} alt="pic" className="h-12 opacity-80" />
            </div>
            <h2 className="text-4xl font-bold">{item.number}</h2>
            <p className="text-lg opacity-80">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Bottom Swiper */}
      <div className="flex items-center justify-center">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className="w-full max-w-xl"
        >
          {locations.map((loc, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#0a63ad] text-white py-3 px-6 text-center rounded-full cursor-pointer hover:bg-[#084f8a] transition">
                {loc}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrow Buttons */}
        <div className="ml-3 bg-white text-blue-600 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
          ❯
        </div>
      </div>
    </div>
   </div>
  );
};

export default TutorStats;
