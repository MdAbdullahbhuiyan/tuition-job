
import BlogHeader from '@/Component/Shared/BlogComponent/BlogHeader/BlogHeader';
import BlogNavbar from '@/Component/Shared/BlogComponent/BlogNavbar/BlogNavbar';
import LatestPosts from '@/Component/Shared/BlogComponent/LatestPosts/LatestPosts';
import PopularPosts from '@/Component/Shared/BlogComponent/PopularPosts/PopularPosts';
import SignOut from '@/Component/Shared/SignOut/SignOut';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import React from 'react';

const Blog = async () => {
    const session = await getServerSession()

    return (
        <div className='mt-40'>
            {
                session ?
                    (

                        <div className=''>
                            <div className="text-3xl flex justify-center text-green-800 font-bold mb-10">
                                Welcome {session?.user?.name}
                            </div>
                            <BlogHeader></BlogHeader>
                            <BlogNavbar></BlogNavbar>
                            <div className=" mx-auto container px-22 my-15">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

                                    {/* LEFT IMAGE */}
                                    <div className="relative w-full h-64 md:h-72">
                                        <Image
                                            src="https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%AD%E0%A6%AC%E0%A6%BF%E0%A6%B7%E0%A7%8D%E0%A6%AF%E0%A6%A4%E0%A7%87%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A7%A7%E0%A7%A6%E0%A6%9F%E0%A6%BF-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AF%E0%A6%BC%E0%A7%8B%E0%A6%9C%E0%A6%A8%E0%A7%80%E0%A6%AF%E0%A6%BC-%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A6%BF%E0%A6%B2-2.jpg"

                                            alt="future skill"

                                            fill
                                            className="object-cover rounded"
                                        />
                                    </div>

                                    {/* RIGHT CONTENT */}
                                    <div>
                                        {/* Category */}
                                        <p className="text-blue-700 font-medium mb-1">Career</p>

                                        {/* Title */}
                                        <h2 className="text-2xl font-semibold leading-snug mb-2">
                                            ভবিষ্যতের জন্য ১০টি প্রয়োজনীয় স্কিল
                                        </h2>

                                        {/* Description */}
                                        <p className="text-gray-700 leading-7 text-sm">
                                            ভাবুন, ৫ বছর পরে আপনি কেমন হবেন?একটা ভালোমানের চাকরি করবেন? নিজের
                                            একটা ছোট ব্যবসা? ফ্রিল্যান্সিং করে আয়? আপনার স্বপ্ন যাই হোক, সেখানে
                                            পৌঁছানোর জন্য শুধু ইচ্ছা নয়, দরকার কিছু “ফিউচার রেডি স্কিল”। এই ব্লগে
                                            থাকছে এমন ১০টি স্কিল, যেগুলো এ…
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center gap-3 text-sm text-gray-600 mt-4">
                                            <span>Caretutors</span>
                                            <span>May 15, 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <LatestPosts></LatestPosts>
                            <PopularPosts></PopularPosts>
                            <SignOut></SignOut>
                        </div>
                    ) :
                    (<h1 className="text-center text-3xl text-red-700 font-bold my-10">
                        You are not signed in
                    </h1>)
            }
        </div>
    );
};

export default Blog;