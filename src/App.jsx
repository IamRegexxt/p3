import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Education from "./components/Education";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
