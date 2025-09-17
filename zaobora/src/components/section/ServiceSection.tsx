import ServiceCard from "../ui/ServiceCard";
import { SERVICES_CONTENT } from "@/lib/constants/services";

const ServiceSection = () => (
  <section
    id={SERVICES_CONTENT.sectionId}
    className="bg-cover bg-center py-16"
    style={{ backgroundImage: `url('${SERVICES_CONTENT.backgroundImage}')` }}
  >
    <div className="container mx-auto px-4">
      <div className="flex justify-center text-center">
        <div className="w-full sm:w-11/12 md:w-8/12 xl:w-6/12 mb-12">
          <h5 className="text-green-700 uppercase font-semibold mb-2">
            {SERVICES_CONTENT.subtitle}
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {SERVICES_CONTENT.title}
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {SERVICES_CONTENT.cards.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default ServiceSection;
