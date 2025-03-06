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
      className={cn("service-item group", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="service-number">[{formatIndex(index)}]</div>
          <h3 className="service-title">{title}</h3>
        </div>
        <span className="view-more">( View More )</span>
      </div>
      <img
        ref={imageRef}
        src={imageSrc}
        alt={imageAlt}
        className={cn(
          "service-image",
          isHovering && imageLoaded ? "opacity-100" : "opacity-0"
        )}
        loading="lazy"
      />
    </div>
  );
};

export default ServiceItem;
