"use client";
import BlogNavbar from "@/Component/Shared/BlogComponent/BlogNavbar/BlogNavbar";
import Image from "next/image";

const studyData = [
    {
        id: 1,
        category: "Study Hacks",
        title: "গণিত পরীক্ষার ভয় আর নয়",
        desc: "গণিত অনেক শিক্ষার্থীর কাছে একটি দুরুহ এবং ভয়ের বিষয়। কিন্তু কিছু নিয়ম জানা থাকলে গণিত পরীক্ষার প্রস্তুতি আর কঠিন লাগে না।",
        author: "Caretutors",
        date: "September 10, 2025",
        image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%97%E0%A6%A3%E0%A6%BF%E0%A6%A4-%E0%A6%AA%E0%A6%B0%E0%A7%80%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE%E0%A6%B0-%E0%A6%AD%E0%A7%9F-%E0%A6%86%E0%A6%B0-%E0%A6%A8%E0%A7%9F-min.jpg",
    },
    {
        id: 2,
        category: "Study Hacks",
        title: "এসএসসি পরীক্ষার প্রস্তুতি | SSC Exam Preparation",
        desc: "এসএসসি পরীক্ষার প্রস্তুতি সঠিকভাবে নেওয়া অত্যন্ত গুরুত্বপূর্ণ। কিছু পড়াশোনার কৌশল জানা থাকলে প্রস্তুতি আরও সহজ হয়।",
        author: "Caretutors",
        date: "August 18, 2025",
        image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/SSC-Exam-Preparation-1-min.jpg",
    },
    {
        id: 3,
        category: "Study Hacks",
        title: "ইংরেজিতে জড়তা কাটানোর ১০টি টিপস",
        desc: "ইংরেজিতে দুর্বলতা কাটাতে চাইলে কিছু অভ্যাস গড়ে তোলা জরুরি। এসব টিপস আপনাকে আত্মবিশ্বাস বাড়াতে সাহায্য করবে।",
        author: "Caretutors",
        date: "May 31, 2025",
        image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%87%E0%A6%82%E0%A6%B0%E0%A7%87%E0%A6%9C%E0%A6%BF%E0%A6%A4%E0%A7%87-%E0%A6%9C%E0%A7%9C%E0%A6%A4%E0%A6%BE-%E0%A6%95%E0%A6%BE%E0%A6%9F%E0%A6%BE%E0%A6%A8%E0%A7%8B%E0%A6%B0-%E0%A7%A7%E0%A7%A6%E0%A6%9F%E0%A6%BF-%E0%A6%9F%E0%A6%BF%E0%A6%AA%E0%A6%B8.jpg",
    },
];

export default function StudyHacks() {
    return (
        <div className="mt-40">
            <BlogNavbar></BlogNavbar>
            <div className="container  mx-auto px-22 py-10">
                <h2 className="text-3xl font-bold mb-8">Study Hacks</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {studyData.map((item) => (
                        <div key={item.id}>
                            {/* Image */}
                            <div className="w-full h-60 relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover rounded"
                                />
                            </div>

                            {/* Category */}
                            <p className="text-sm text-gray-600 mt-3">{item.category}</p>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mt-1">{item.title}</h3>

                            {/* Description */}
                            <p className="text-gray-700 mt-2 text-sm leading-6">
                                {item.desc}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center gap-3 mt-4 text-sm text-gray-600">
                                <span>{item.author}</span>
                                <span>{item.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
