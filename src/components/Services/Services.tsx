'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  { 
    title: "Website Development", 
    description: "We create stunning, user-friendly websites aligned with your goals.", 
    icon: "/Image/website.png", 
    color: "bg-[#f3e8ff]" 
  },
  { 
    title: "Social Media Marketing", 
    description: "Run targeted ad campaigns on Facebook and Instagram to boost your brand visibility.", 
    icon: "/Image/demo.png", 
    color: "bg-[#fff5eb]" 
  },
  { 
    title: "Google Ads Management", 
    description: "Maximize reach on Google with expertly managed campaigns.", 
    icon: "/Image/team.png", 
    color: "bg-[#e8fff0]" 
  },
  { 
    title: "Branding & Logo Design", 
    description: "Create a unique brand identity with stunning logos and designs.", 
    icon: "/Image/logo3.webp", 
    color: "bg-[#fffde8]" 
  },
  { 
    title: "SEO", 
    description: "Boost your search rankings and attract organic traffic.", 
    icon: "/Image/logo2.webp", 
    color: "bg-[#e8f4ff]" 
  },
];

const Services = () => {
  const [currentTitle, setCurrentTitle] = useState(services[0].title);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % services.length;
      setCurrentTitle(services[index].title);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[90vh]  px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#DCC2FF] to-[#F6F6F7]">
     
      <div className="max-w-7xl mx-auto text-center  pt-28 mb-16">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-purple-500 relative "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Exceptional Services for <br />
          <span className="relative inline-block mt-3 text-[1.8rem]">
            <motion.span
              key={currentTitle}
              className="text-slate-950"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {currentTitle}
              <span className="absolute left-0 w-full h-2 bottom-[-8px]">
                <svg
                  className="w-full h-full"
                  role="presentation"
                  viewBox="-320 -70.8161 640.4 59.82"
                  preserveAspectRatio="none"
                >
                  <path
                    style={{ animationDuration: "0.2s" }}
                    d="M-300,-56 C-50,-72 298,-65 300,-59 C332,-53 -239,-36 -255,-27 C-271,-18 -88,-24 91,-20"
                    stroke="#6f15bb"
                    strokeWidth="7.777"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.span>
          </span>
        </motion.h1>
      </div>

      {/* Responsive Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative p-8
      ">
        {/* First row - 3 cards (stacked in column on small screens) */}
        {services.slice(0, 3).map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`relative rounded-2xl p-6 shadow-lg overflow-hidden h-[280px] flex flex-col justify-center items-center ${service.color} group`}
          >
            <div className="z-10 transition-opacity duration-300 group-hover:blur-md">
              <h3 className="text-xl text-center font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Image
                src={service.icon}
                alt={service.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>
        ))}

        {/* Second row - 2 large cards (stacked in column on small screens) */}
        <div className="md:col-span-3 flex flex-col md:flex-row justify-center gap-8 mt-8">
          {services.slice(3, 5).map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx + 3) * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative rounded-2xl p-8 shadow-lg overflow-hidden w-full md:w-[48%] h-[300px] flex flex-col justify-center items-center ${service.color} group`}
            >
              <div className="z-10 transition-opacity duration-300 group-hover:blur-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image
                  src={service.icon}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default Services;
