import HeroSection from "../components/section/HeroSection";
import AboutSection from "../components/section/AboutSection";
import ServiceSection from "../components/section/ServiceSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
      </main>
    </>
  );
}