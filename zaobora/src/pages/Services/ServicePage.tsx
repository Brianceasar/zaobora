import React from "react";
import ServiceCard from "../../components/ui/ServiceCard";
import { services } from "../../data/services";

const ServicesPage: React.FC = () => {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
