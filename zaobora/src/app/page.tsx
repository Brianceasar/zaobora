import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
// import Preloader from "../components/ui/Preloader";
// import ScrollToTop from "../components/ui/ScrollToTop";
import HeroSection from "../components/section/HeroSection";
import AboutSection from "../components/section/AboutSection";
import ServiceSection from "../components/section/ServiceSection";
import ContactInfoSection from "../components/section/ContactInfoSection";
import GetInTouchSection from "../components/section/GetInTouchSection";

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      {/* <ScrollToTop /> */}
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <ContactInfoSection />
        <GetInTouchSection />
      </main>
      <Footer />
    </>
  );
}