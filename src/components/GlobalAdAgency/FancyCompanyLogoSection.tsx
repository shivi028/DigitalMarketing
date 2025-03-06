import React from "react";

const FancyCompanyLogoSection: React.FC = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-10">
      {/* Review Section */}
      <div className="text-center mb-8">
        <p className="text-lg font-medium text-gray-700 flex items-center justify-center gap-2">
          <span className="text-blue-600 text-xl">⭐</span>
          <span className="font-semibold">4.5/5</span> based on 500+ reviews on
          <span className="inline-flex gap-1">
            <img
              src="/Image/logos/l1.webp"
              alt="Clutch"
              className="w-5 inline-block"
            />
            <img
              src="/Image/logos/l2.webp"
              alt="GoodFirms"
              className="w-5 inline-block"
            />
            <img
              src="/Image/logos/l3.webp"
              alt="G2"
              className="w-5 inline-block"
            />
          </span>
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-b pb-8">
        {[
          { value: "675+", label: "Digital Experts" },
          { value: "4200+", label: "Projects Delivered" },
          { value: "97%", label: "Client Satisfaction" },
        ].map((stat, index) => (
          <div key={index} className="border-r border-gray-600">
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Trusted Companies Section */}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
        {/* Left Logos */}
        <div className="flex flex-row gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src="/Image/logo4.webp" alt="Orange Business Services" className="h-20" />
          <img src="/Image/logo1.jpg" alt="Yale University" className="h-20" />
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src="/Image/logo1.jpg" alt="Yale University" className="h-20" />
          <img src="/Image/logo2.webp" alt="Dubai Police" className="h-20" />
          <img src="/Image/logo3.webp" alt="Infosys" className="h-20" />
        </div>
      
        </div>

        {/* Central CTA Box */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white p-6 rounded-lg text-center w-60">
          <p className="text-lg">Trusted By</p>
          <p className="text-2xl font-bold">2500+ Companies</p>
          <p className="text-sm">Globally</p>
          <a href="#" className="mt-2 text-white underline hover:text-gray-200">
            See our clients →
          </a>
        </div>

        {/* Right Logos */}
        <div className="flex flex-row gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src="/Image/logo5.webp" alt="KIA" className="h-20" />
          <img src="/Image/logo6.webp" alt="Hitachi" className="h-20" />
          <img src="/Image/logo7.webp" alt="World Health Organization" className="h-20" />
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src="/Image/logo7.webp" alt="World Health Organization" className="h-20" /> 
          <img src="/Image/logo3.webp" alt="Infosys" className="h-20" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default FancyCompanyLogoSection;
