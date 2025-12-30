"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const categories = [
  {
    id: 1,
    title: "Professional Skill Development",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Professional_Skill.png",
  },
  {
    id: 2,
    title: "Special Skill Development",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special_Skill.png",
  },
  {
    id: 3,
    title: "Uni Help",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Uni_help.png",
  },
  {
    id: 4,
    title: "Madrasa Medium",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Madrasa.png",
  },
  {
    id: 5,
    title: "Special Child Education",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png",
  },
  {
    id: 6,
    title: "Bangla Medium",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Bangla.png",
  },
  {
    id: 7,
    title: "English Version",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/English_Version.png",
  },
  {
    id: 8,
    title: "English  Medium",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/English_Medium.png",
  },
  {
    id: 9,
    title: "Religous Studies",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Arabic.png",
  },
  {
    id: 10,
    title: "Addmission Test",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Admmission.png",
  },
  {
    id: 11,
    title: "Art",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Arts.png",
  },
  {
    id: 12,
    title: "Language Learning",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Language.png",
  },
  {
    id: 13,
    title: "Test Preparation",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Test_Preparation.png",
  },
];

export default function ServingCategory() {
  return (
    <section className="py-16 bg-[#f4f7fc]">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        Serving Categories
      </h2>

      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg duration-200 cursor-pointer">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={350}
                  height={250}
                  className="rounded-md"
                />
                <h3 className="text-center mt-4 text-lg font-semibold text-gray-800">
                  {cat.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
