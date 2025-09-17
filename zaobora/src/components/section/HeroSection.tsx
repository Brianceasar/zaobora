import Image from "next/image";
import Link from "next/link";
import { HERO_CONTENT } from "@/lib/constants/hero";

const HeroSection = () => (
  <section className="relative pt-24 md:pt-32 pb-16 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="relative z-10">
        <div className="row flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-7/12 md:w-9/12 px-4">
            <div className="hero-contentv03">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                {HERO_CONTENT.title}
              </h1>
              <p className="text-lg text-gray-700 mb-8">{HERO_CONTENT.description}</p>
              <div className="flex items-center gap-4">
                <Link
                  href={HERO_CONTENT.cta.href}
                  className="bg-green-700 text-white py-3 px-6 rounded-md hover:bg-green-800 transition-colors flex items-center gap-2"
                >
                  {HERO_CONTENT.cta.label} <HERO_CONTENT.cta.icon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Image
      src={HERO_CONTENT.image.src}
      alt={HERO_CONTENT.image.alt}
      width={HERO_CONTENT.image.width}
      height={HERO_CONTENT.image.height}
      className="absolute right-0 bottom-0 max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl -z-0"
    />
  </section>
);

export default HeroSection;
