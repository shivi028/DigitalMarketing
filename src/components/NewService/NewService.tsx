"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useState } from "react";

const images = [
  '/Image/logos/l1.webp',
  "/Image/logos/l3.webp",
  '/Image/logos/l4.webp',
  "/Image/logos/l5.webp",
  "/Image/logos/l6.png",
  "/Image/logos/l7.png",
  "/Image/logos/l8.png",
  "/Image/logos/l9.png",
  "/Image/logos/l10.png",
  
];
const Award = [
  '/Image/logos/al1.svg',
  '/Image/logos/al2.svg',
  '/Image/logos/al3.svg',
  '/Image/logos/al1.svg',
  '/Image/logos/al2.svg',
  '/Image/logos/al3.svg',
  '/Image/logos/al1.svg',
]

export default function NewService() {
  const [activeTab, setActiveTab] = useState<"startups" | "enterprises" | "agencies">("startups");

  const tabContent = {
    startups: {
      title: "Startups",
      description: "Helping startups achieve and exceed their business objectives while streamlining operational costs.",
      services: ["MVP Development", "SaaS Development", "UI/UX Design", "Product Development"],
    },
    enterprises: {
      title: "Enterprises",
      description: "Supporting enterprises with scalable and robust digital solutions to enhance productivity and efficiency.",
      services: ["Enterprise Software", "Cloud Solutions", "Data Analytics", "Process Automation"],
    },
    agencies: {
      title: "Agencies",
      description: "Empowering agencies with cutting-edge tools and technology to deliver exceptional client experiences.",
      services: ["Brand Strategy", "Digital Marketing", "Creative Services", "SEO Optimization"],
    },
  };

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Driving Growth for Businesses of All Sizes
            </h1>
            <p className="text-gray-600 text-lg">
              Led by experts and backed by tech, we are helping businesses hit their revenue goals in an ever-evolving
              digital landscape.
            </p>
          </div>

          {/* Tabs */}
          <div className="inline-flex items-center p-1 bg-white border rounded-lg shadow-sm">
            {Object.keys(tabContent).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as "startups" | "enterprises" | "agencies")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === key ? "bg-primary text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">{tabContent[activeTab].title}</h2>
            <p className="text-gray-600">{tabContent[activeTab].description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tabContent[activeTab].services.map((service) => (
                <div key={service} className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-blue-100 p-1 text-blue-600">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">
              Get Details
            </a>
          </div>
        </div>

        {/* Right Column - Marquee Effect */}
        <div className="overflow-hidden w-full max-w-[38rem] space-y-6 ml-16">
          <div
            className="flex gap-4"
            style={{
              animation: "marquee 25s linear infinite",
              display: "flex",
              whiteSpace: "nowrap",
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="w-40 h-18 md:w-40 md:h-18 lg:w-40 lg:h-18 rounded-lg overflow-hidden flex-shrink-0  flex justify-center items-center shadow-md"
              >
                <Image src={img} alt={`Marquee Image ${index}`} width={98} height={70} className="object-cover" />
              </div>
            ))}
          </div>
          <div
            className="flex gap-4"
            style={{
              animation: "marquee-reverse 25s linear infinite",
              display: "flex",
              whiteSpace: "nowrap",
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="w-40 h-18 md:w-40 md:h-18 lg:w-40 lg:h-18 rounded-lg overflow-hidden flex-shrink-0 flex justify-center items-center shadow-md"
              >
                <Image src={img} alt={`Marquee Image ${index}`} width={98} height={70} className="object-cover" />
              </div>
            ))}
          </div>
          <div
            className="flex gap-4"
            style={{
              animation: "marquee 25s linear infinite",
              display: "flex",
              whiteSpace: "nowrap",
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="w-40 h-18 md:w-40 md:h-18 lg:w-40 lg:h-18 rounded-lg overflow-hidden flex-shrink-0 flex justify-center items-center shadow-md"
              >
                <Image src={img} alt={`Marquee Image ${index}`} width={98} height={70} className="object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-20">
            <p className="text-md text-slate-950 font-semibold">Awards &  Certifications -</p>
            <div
            className="flex gap-4 justify-center items-center"
            style={{
              animation: "marquee 25s linear infinite",
              display: "flex",
              whiteSpace: "nowrap",
            }}
          >
            {Award.map((img, index) => (
              <div
                key={index}
                className="w-40 h-18 md:w-40 md:h-18 lg:w-40 lg:h-18 rounded-lg overflow-hidden flex-shrink-0 flex justify-center items-center shadow-md"
              >
                <Image src={img} alt={`Marquee Image ${index}`} width={70} height={40} className="object-cover" />
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee-reverse {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
