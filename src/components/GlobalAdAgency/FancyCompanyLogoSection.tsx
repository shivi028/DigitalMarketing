import React from "react";
import "../../app/globals.css";
import Marquee from "./MarqueeComponent";
import { marqueeLogos, marqueeReverseLogos } from "./logosData";

const FancyCompanyLogoSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 flex flex-col items-center text-center">
      {/* Review Section */}
      <div className="mb-12">
        <p className="text-2xl font-bold text-orange-500 flex items-center justify-center gap-2">
          <span className="text-blue-600 text-2xl">⭐</span>
          <span className="font-semibold text-gray-900">4.5/5</span> based on 500+ reviews on
          <span className="inline-flex gap-2">
            <img src="/Image/logos/l1.webp" alt="Clutch" className="w-6 inline-block" />
            <img src="/Image/logos/l2.webp" alt="GoodFirms" className="w-6 inline-block" />
            <img src="/Image/logos/l3.webp" alt="G2" className="w-6 inline-block" />
          </span>
        </p>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl border-b pb-8">
        {[{ value: "675+", label: "Digital Experts" }, { value: "4200+", label: "Projects Delivered" }, { value: "97%", label: "Client Satisfaction" }].map((stat, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-4xl font-extrabold text-orange-500">{stat.value}</p>
            <p className="text-gray-700 text-lg font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
      {/* Trusted Companies Section */}
      <div className="mt-16 flex flex-col items-center w-full">
        <h2 className="text-3xl font-bold text-gray-900">Trusted By</h2>
        <p className="text-xl text-orange-500 font-semibold">2500+ Companies</p>
        <p className="text-gray-600 text-lg">Globally</p>
        <div className="relative w-full max-w-5xl mt-6 overflow-hidden ml-6 -mr-6">
          <Marquee logos={marqueeLogos} className="animate-marquee" />
          <Marquee logos={marqueeReverseLogos} className="animate-marquee-reverse mt-4" />
        </div>
      </div>
    </section>
  );
};

export default FancyCompanyLogoSection;