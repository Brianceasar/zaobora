import React from "react";
import Hero from "../../components/shared/Hero";
import About from "../../components/shared/About";
import Services from "../../components/shared/Services";
import Testimonials from "../../components/shared/Testimonials";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </>
  );
};

export default HomePage;
