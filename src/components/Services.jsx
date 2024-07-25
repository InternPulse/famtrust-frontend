import React from "react";
import services from "./services";

const Services = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="service-heading mb-9">FamTrust Services</h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md flex flex-col items-center service-card"
            >
              <div className="service-icon-container">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="service-icon"
                />
              </div>
              <h3 className="service-title mb-3 mt-1">{service.title}</h3>
              <p className="service-description pb-8">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
