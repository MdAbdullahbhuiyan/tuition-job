"use client";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Complete Your Profile",
    desc: "Complete your profile by including your personal, educational, tuition related and supporting documentation details.",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/illustration/forTutorSVG/png/tutor02.png",
  },
  {
    id: 2,
    title: "Apply to Your Desired Tuition Job",
    desc: "Check the job board everyday and apply on desirable tuition jobs which match with you the most.",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/illustration/forTutorSVG/png/tutor03.png",
  },
  {
    id: 3,
    title: "Get Selected",
    desc: "Get shortlisted by the guardian/student based on the information provided in your profile.",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/illustration/forTutorSVG/png/tutor04.png",
  },
  {
    id: 4,
    title: "Start Tutoring",
    desc: "Take the trial classes and confirm your expected tuition job. Happy tutoring!",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/illustration/forTutorSVG/png/tutor05.png",
  },
];

const TutorWork = () => {
  return (
    <section className="w-full py-20 bg-[#f3f6fc]">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-14">
        How does it work for tutors?
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-16 relative">

        {/* Connector Line */}
        <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full border-r-2 border-blue-100"></div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col md:flex-row items-center gap-8 p-8 bg-white border border-blue-100 rounded-2xl shadow-md relative ${
              index % 2 !== 0 ? "md:ml-auto md:w-[80%]" : "md:w-[80%]"
            }`}
          >
            {/* Image */}
            <div>
              <Image
                src={step.img}
                alt={step.title}
                width={260}
                height={200}
                className="rounded-xl"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">
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

export default TutorWork;
