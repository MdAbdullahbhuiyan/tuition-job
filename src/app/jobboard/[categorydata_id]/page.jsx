import React from 'react';
import { FaBook, FaClock, FaMoneyCheckAlt, FaTransgender } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { SlCalender } from "react-icons/sl";
import { TiGroup } from "react-icons/ti";
import { RiCommandFill } from "react-icons/ri";
import { SiPagekit } from "react-icons/si";




const Details = async ({ params }) => {
    const { categorydata_id } = await params;
    const responsive = await fetch(`http://localhost:5000/categorydata/${categorydata_id}`)
    const categorydata = await responsive.json()
    return (
        <div className=' flex justify-center my-10 mt-30'>
            <div className='shadow-2xl px-15 py-8 rounded-2xl  space-y-6'>
                <h1 className='text-3xl font-bold'>{categorydata.title}</h1>
                <div className='grid grid-cols-2 gap-30 font-semibold opacity-55  items-center'>
                    <h1> JOb ID:{categorydata.jobId}</h1>
                    <h1 >  Posted Date:{categorydata.postedDate}</h1>
                </div>
                <div className='grid grid-cols-2 gap-30 font-semibold opacity-55  items-center'>
                    <h1 className='flex gap-1 items-center '><RiCommandFill className="text-[#0675C1]" /> Tuition Type:{categorydata.tuitionType}</h1>
                    <h1 className='flex gap-1 items-center '> <FaTransgender className="text-[#0675C1]"/> Student Gender:{categorydata.studentGender}</h1>
                </div>
                <div className='grid grid-cols-2 gap-30 font-semibold opacity-55  items-center'>
                    <h1 className='flex gap-1 items-center '> <FaTransgender className="text-[#0675C1]" /> Preferred Tutor:{categorydata.tutorGender}</h1>
                    <h1 className='flex gap-3 items-center'> <FaClock className="text-[#0675C1]" /> Tutoring Time:{categorydata.tutortime}</h1>
                </div>
                <div className='grid grid-cols-2 gap-30 font-semibold opacity-55  items-center'>
                    <h1 className='flex gap-1 items-center'> <SlCalender  className="text-[#0675C1]"/> Tutoring Days: {categorydata.daysPerWeek}</h1>
                    <h1 className='flex gap-1 items-center'> <TiGroup className="text-[#0675C1]"/> Numbers Of Students:{categorydata.numberofstudents}</h1>
                </div>

                <div className='grid grid-cols-2 gap-30 font-semibold opacity-55  items-center'>
                    <h1 className='flex gap-3 items-center'> <FaMoneyCheckAlt className="text-[#0675C1]" /> Salary:{categorydata.salary} BDT</h1>
                    <h1 className='flex gap-3 items-center'> <FaBook className="text-[#0675C1]" />Subjects:{categorydata.subjects}</h1>
                </div>
                <h1 className='font-semibold opacity-55  flex gap-3 items-center' > <FaLocationDot className="text-[#0675C1]" /> Location:{categorydata.location}</h1>
                <h1 className='font-semibold opacity-55  flex gap-3 items-center' > <SiPagekit className="text-[#0675C1]"/> Other Requirements:{categorydata.otherRequirements}</h1>
                
               <div className='flex gap-4 items-center'>
                <button className='border border-blue-600 px-4 py-2 rounded-md '>Direction </button>
                <button className=' bg-blue-600 px-4 py-2 rounded-md text-white shadow-2xl'>Apply</button>
               </div>
            </div>
        </div>
    );
};

export default Details;