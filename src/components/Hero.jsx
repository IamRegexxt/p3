import React from "react";
import hero from "../assets/images/pro.jpg";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];

  return (
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-1/2 h-auto rounded-lg" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Jesreel A.</span>
          </h1>
          <TypeAnimation
            sequence={[
              'Aspiring Web Developer',
              1000,
              'and Software Developer',
              1000
            ]}
            wrapper="h4"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
          
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div key={icon} className="text-gray-600 hover:text-white cursor-pointer">
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Empty div to which we'll scroll */}
    </section>
  );
};

export default Hero;
