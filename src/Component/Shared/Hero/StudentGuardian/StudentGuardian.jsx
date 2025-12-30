"use client";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Submit Your Hiring Requirement",
    desc: "Fill out all the required fields and submit your requirement.",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/illustration/forGuardian/guardianSep1.png",
  },
  {
    id: 2,
    title: "Shortlist from Applied Tutors",
    desc: "Shortlist up to 5 tutors from applied tutors based on your requirement.",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/illustration/forGuardian/guardianSep2.png",
  },
  {
    id: 3,
    title: "Appoint the Best One & Confirm Hiring",
    desc: "Select one tutor from your shortlist, take trial classes and confirm your hiring.",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/illustration/forGuardian/guardianSep3.png",
  },
];

const StudentGuardian = () => {
  return (
    <section className="w-full py-20 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-14">
        How does it work for guardians/students?
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-16 relative">

        {/* Connector Line */}
        <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full border-r-2 border-blue-100"></div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col md:flex-row items-center gap-8 p-8 bg-white border border-blue-100 rounded-2xl shadow-md relative ${
              index === 1 ? "md:ml-auto md:w-[80%]" : "md:w-[80%]"
            }`}
          >
            {/* Image */}
            <div>
              <Image
                src={step.img}
                alt={step.title}
                width={250}
                height={200}
                className="rounded-xl"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentGuardian;
