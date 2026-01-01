"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBook, FaMoneyCheckAlt, FaShareAlt } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";





const TuitionFilter = () => {
  const [categorydata, setCategorydata] = useState([]);
  const [categories, setCategories] = useState(null);

  const [selectedType, setSelectedType] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const [filteredData, setFilteredData] = useState([]);

  // Fetch JSON from server
  useEffect(() => {
    const loadData = async () => {
      const res1 = await fetch("http://localhost:5000/categorydata");
      const res2 = await fetch("http://localhost:5000/categories");

      const data1 = await res1.json();
      const data2 = await res2.json();

      setCategorydata(data1);
      setCategories(data2);
      setFilteredData(data1);
    };

    loadData();
  }, []);

  // Filter Logic
  useEffect(() => {
    if (!categorydata.length) return;

    const result = categorydata.filter((item) => {
      return (
        (selectedType ? item.tuitionType === selectedType : true) &&
        (selectedSubject ? item.subjects.includes(selectedSubject) : true) &&
        (selectedLocation ? item.location === selectedLocation : true)
      );
    });

    setFilteredData(result);
  }, [selectedType, selectedSubject, selectedLocation, categorydata]);

  if (!categories) return <p className="p-6">Loading...</p>;
  
  return (
    <div className=" mt-10">
      
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
      {/* Filters */}
      <div className="col-span-1 space-y-4 bg-white shadow p-4 rounded-xl">
        <h2 className="text-xl font-semibold">Filter</h2>

        {/* Tuition Type */}
        <select
          className="w-full p-2 border rounded-lg"
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="\">Tuition Type</option>
          {categories.tuitionType.map((type, i) => (
            <option key={i} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Subjects */}
        <select
          className="w-full p-2 border rounded-lg"
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="\">Subjects</option>
          {categories.subjects.map((sub, i) => (
            <option key={i} value={sub}>
              {sub}
            </option>
          ))}
        </select>

        {/* Location */}
        <select
          className="w-full p-2 border rounded-lg"
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="\">Location</option>
          {categories.location.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Filter Result */}
      <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredData.length === 0 ? (
          <p className="text-gray-500">No data found</p>
        ) : (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white  rounded-xl  space-y-3 shadow-2xl"
            >
              <h3 className="text-lg ">{item.title}</h3>
               <div className="flex gap-8 items-center">
                 <p className="text-sm text-gray-600 flex gap-1 items-center ">  Job ID:{item.jobId}</p>  
                <p className="text-sm text-gray-600 flex gap-1 items-center">  Posted Date:{item.postedDate}</p> </div> 
              <p className="text-sm text-gray-600  items-center"> <span className="flex gap-1 items-center"><FaLocationDot className="text-[#0675C1]"  /> Location</span>{item.location}</p>   
             
              <p className="text-sm text-gray-600 items-center flex gap-3  mt-2\"> <FaMoneyCheckAlt className="text-[#0675C1]" />Salary: {item.salary}</p>
              <p className="text-sm  text-gray-600 flex gap-3 items-center "> <FaBook className="text-[#0675C1]" />Subject: {item.subjects}</p>
              <p className="text-sm text-gray-600 flex gap-3 items-center"> <SlCalender  className="text-[#0675C1]"  />Days/Week: {item.daysPerWeek}</p>
              <div className="  flex gap-7 text-gray-600 items-center"> 
                <Link href={`/jobboard/${item.id}`} ><h1 className="flex items-center gap-2 hover:bg-[#F2F5FC] px-3 py-1 rounded-2xl"><MdOutlineMenu /> Details</h1></Link>
                <Link href="/share" ><h1 className="flex items-center gap-2"><FaShareAlt /> Share</h1></Link>
                
              </div>
            </div>
            
          ))
        )}
      </div>
    </div>
   
      
    </div>
  );
}
export default TuitionFilter;