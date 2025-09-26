// src/lib/constants/hero.ts
import { FaArrowRight } from "react-icons/fa6";

export const HERO_CONTENT = {
  title: (
    <>
      Empowering <span className="text-green-700">Farmers to enhance their</span> livelihoods
    </>
  ),
  description: `Since 2020, we've been building sustainable agricultural value chains that uplift rural communities, promote climate-smart farming, and encourage environmental stewardship. Our top-notch services in smart agriculture, agroecology, and farmer capacity building foster long-term partnerships in the agriculture industry.`,
  cta: {
    href: "/services",
    label: "Learn More",
    icon: FaArrowRight,
  },
  image: {
    src: "/img/hero/zaobora-hero.webp",
    alt: "zaobora empowering farmers",
    width: 800,
    height: 800,
  },
};
