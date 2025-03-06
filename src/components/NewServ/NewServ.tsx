'use client'
import { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

// Define service data
const services = [
  {
    id: 1,
    title: "Branding Identity",
    imageSrc: "/branding.jpg",
    imageAlt: "Branding identity service showcase"
  },
  {
    id: 2,
    title: "UI/UX Design",
    imageSrc: "/uiux.jpg",
    imageAlt: "UI/UX design service showcase"
  },
  {
    id: 3,
    title: "Web Development",
    imageSrc: "/webdev.jpg",
    imageAlt: "Web development service showcase"
  },
  {
    id: 4,
    title: "Visual Design",
    imageSrc: "/visual-design.jpg",
    imageAlt: "Visual design service showcase"
  }
];

const NewServ = () => {
  const [mounted, setMounted] = useState(false);

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
    <div className="min-h-screen w-full bg-background">
      <div className="w-full max-w-[1728px] mx-auto px-5 md:px-12 py-16 md:py-28">
        <div className="mb-6">
          <span className="text-sm font-light text-black/60">Our Services</span>
        </div>
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-5xl">
            We take creative leaps and offer tailored solutions for the growth of your digital products. 
            From scratch to success and beyond.
          </h2>
        </div>
        
        <div className="services-container">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              index={service.id}
              title={service.title}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewServ;