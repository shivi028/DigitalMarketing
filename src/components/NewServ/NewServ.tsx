'use client'
import { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

// Define service data
const services = [
  {
    id: 1,
    title: "Branding Identity",
    imageSrc: "/Image/scroll3.jpg",
    imageAlt: "Branding identity service showcase"
  },
  {
    id: 2,
    title: "UI/UX Design",
    imageSrc: "/Image/scroll6.jpg",
    imageAlt: "UI/UX design service showcase"
  },
  {
    id: 3,
    title: "Web Development",
    imageSrc: "/Image/scroll4.jpg",
    imageAlt: "Web development service showcase"
  },
  {
    id: 4,
    title: "Visual Design",
    imageSrc: "/Image/scroll7.jpg",
    imageAlt: "Visual design service showcase"
  }
];

const NewServ = () => {
  const [mounted, setMounted] = useState(false);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Preload images for smooth hover experience
  useEffect(() => {
    services.forEach(service => {
      const img = new Image();
      img.src = service.imageSrc;
    });
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none" }}
    >
      <div className="w-full max-w-[1728px] mx-auto px-5 md:px-12 py-16 md:py-28 bg-gradient-to-l from-indigo-100/80 to-indigo-40 backdrop-blur-lg">
        <div className="mb-6">
          <span className="text-lg font-light text-black/60">Our Services</span>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-[66rem] text-indigo-800">
          From bold ideas to thriving digital products – &quot;we craft tailored solutions that drive growth beyond success.&quot;
          </h2>
        </div>
        
        <div className="services-container mb-8">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              index={service.id}
              title={service.title}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              onMouseEnter={() => setBgImage(service.imageSrc)}
              onMouseLeave={() => setBgImage("")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewServ;
