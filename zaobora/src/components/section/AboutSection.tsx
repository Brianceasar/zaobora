import Image from "next/image";
import Link from "next/link";
import { ABOUT_CONTENT } from "@/lib/constants/about";

const AboutSection = () => (
  <section id={ABOUT_CONTENT.sectionId} className="bg-white py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center g-8">
        
        {/* Image */}
        <div className="w-full md:w-6/12 flex justify-center order-1 md:order-0 mb-8 md:mb-0">
          <div className="relative w-full max-w-md">
            <Image
              src={ABOUT_CONTENT.image.src}
              alt={ABOUT_CONTENT.image.alt}
              width={ABOUT_CONTENT.image.width}
              height={ABOUT_CONTENT.image.height}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        {/* Text */}
        <div className="w-full md:w-6/12">
          <div className="mb-8">
            <h5 className="text-green-700 uppercase font-semibold mb-2">
              {ABOUT_CONTENT.subtitle}
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {ABOUT_CONTENT.title}
            </h2>
            <p className="text-gray-700 mb-6">{ABOUT_CONTENT.description}</p>
            
            <Link
              href={ABOUT_CONTENT.cta.href}
              className="bg-green-700 text-white py-3 px-6 rounded-md hover:bg-green-800 transition-colors flex items-center gap-2 w-fit"
            >
              {ABOUT_CONTENT.cta.label} <ABOUT_CONTENT.cta.icon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
