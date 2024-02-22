import React from "react";
import aboutImg from "../assets/images/about.jpg";
const About = () => {
  
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              "🚀I am Jesreel Amorganda, a 3rd Year Student of Naga College Foundation 
                taking the course of Bachelor Science of Computer Science. Enthusiastic
                 student with a strong dedication to academic excellence and personal growth. Eager to explore the intersections of knowledge and creativity, I am passionate about building new things that are connected to technology. Through my studies and extracurricular experiences,
               I aim to contribute my unique perspective and skills
                to make a positive impact on the world. ✨"
              </p>
              <br />
              <br />
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
