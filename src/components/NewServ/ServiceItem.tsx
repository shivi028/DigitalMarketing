import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ServiceItemProps {
  index: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const ServiceItem = ({ index, title, imageSrc, imageAlt, className }: ServiceItemProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageRef.current) {
      const img = imageRef.current;
      if (img.complete) {
        setImageLoaded(true);
      } else {
        img.onload = () => setImageLoaded(true);
      }
    }
  }, [imageSrc]);

  const formatIndex = (index: number) => {
    return index < 10 ? `0${index}` : index;
  };

  return (
    <div
      ref={itemRef}
      className={cn(
        "service-item group relative p-4 transition-all duration-500",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Blur effect on default */}
      <div
        className={cn(
          "flex justify-between items-start backdrop-blur-md bg-white/30 rounded-lg p-4 transition-all duration-500",
          isHovering ? "backdrop-blur-none bg-white/90 shadow-lg scale-102" : ""
        )}
      >
        <div>
          <div className="service-number text-xl font-semibold text-gray-700">
            [{formatIndex(index)}]
          </div>
          <h3 className="service-title text-2xl font-medium text-gray-800">
            {title}
          </h3>
        </div>
        <span className="view-more text-gray-600 group-hover:text-black transition-colors duration-300">
          ( View More )
        </span>
      </div>

      {/* Image with blur effect */}
      <img
        ref={imageRef}
        src={imageSrc}
        alt={imageAlt}
        className={cn(
          "service-image w-full h-60 object-cover rounded-lg transition-all duration-500",
            
        )}
        loading="lazy"
      />
    </div>
  );
};

export default ServiceItem;
