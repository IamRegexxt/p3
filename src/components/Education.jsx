import React from "react";
import schoolImage1 from "../assets/images/school1.jpg";
import schoolImage2 from "../assets/images/school2.jpg";
import schoolImage3 from "../assets/images/school3.png";
import schoolImage4 from "../assets/images/school4.jpg";

const Education = () => {
  const educations = [
    {
      image: schoolImage1, // Replace with the URL of your first school image
      level: "Elementary",
      count: 0,
    },
    {
      image: schoolImage2, // Replace with the URL of your second school image
      level: "High School",
      count: 0,
    },
    {
      image: schoolImage3, // Replace with the URL of your third school image
      level: "Tertiary",
      count: 0,
    },
    {
      image: schoolImage4, // Replace with the URL of your fourth school image
      level: "Tertiary",
      count: 0,
    },
  ];

  return (
    <section id="education" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-cyan-600">Education</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg"></p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {educations?.map((educ, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${educ.count}%,#ddd ${educ.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <img src={educ.image} alt={`School ${i+1}`} className="w-28 h-28 rounded-full" /> {/* Replace with the image */}
              </div>
              <p className="text-xl mt-3">{educ.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
