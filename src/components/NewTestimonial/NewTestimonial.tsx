import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DirectionAwareHover } from "../ui/direction-aware-hover";

const TestimonialSection = ({ 
  title = "What they say about HiredEasy",
  subtitle = "Testimonials",
  testimonials = [
    {
      id: 1,
      name: "James Livmore",
      position: "",
      image: "/Image/person1.jpg",
      quote:
        "HiredEasy team is responsive and welcomes feedback to implement. They can improve interpretation of design briefs and attention to detail to avoid lengthy feedback loops. The team here can do a good job.",
    },
    {
      id: 2,
      name: "Hugo Cortez",
      position: "Founder Blomer",
      image: "/Image/person2.jpg",
      quote:
        "Working with HiredEasy has elevated our projects to a whole new level. Their expertise in UX/UI design and branding is unparalleled. They have a unique ability to bring a brand's vision to life, creating intuitive and aesthetically pleasing designs that resonate with our audience. Their dedication and attention to detail have made every collaboration a success.",
    },
    {
      id: 3,
      name: "Salih Ozkan",
      position: "Founder Bians Light",
      image: "/Image/person3.jpg",
      quote:
        "HiredEasy is the our partner for designing operations. They create an really unique designs, also they so helpful and kind at communication. We work with them for a 1 year and we hope that will continue with new designs. If you know they have a skill for your operation, just watch the wonderful team work.",
    },
    {
      id: 4,
      name: "John Lmore",
      position: "",
      image: "/Image/person4.jpg",
      quote:
        "HiredEasy team is responsive and welcomes feedback to implement. They can improve interpretation of design briefs and attention to detail to avoid lengthy feedback loops. The team here can do a good job.",
    },

  ]
}) => {
  // Main section controls
  const headingControls = useAnimation();
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Trigger heading animation
  useEffect(() => {
    if (headingInView) {
      headingControls.start('visible');
    }
  }, [headingControls, headingInView]);

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-16 px-4 md:py-24 overflow-hidden bg-white">
      <motion.div 
  ref={headingRef} 
  initial="hidden" 
  animate={headingControls} 
  variants={headingVariants}
  className="max-w-7xl mx-auto text-center mb-16"
>
  <div className="inline-block mb-2">
    <p className="text-4xl md:text-6xl font-extrabold text-gray-900 uppercase">
      {title}
    </p>
    <p className="text-lg md:text-2xl font-semibold text-blue-600 tracking-wide mt-2">
      {subtitle}
    </p>
  </div>   
</motion.div>  


      <div className="grid grid-cols-1 md:grid-cols-4  h-auto p-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex items-center justify-center">
            <DirectionAwareHover imageUrl={testimonial.image}>
              <p className="font-bold text-xl">{testimonial.name}</p>
              <p className="font-medium text-sm">{testimonial.position}</p>
              <p className="font-normal text-sm italic">"{testimonial.quote}"</p>
            </DirectionAwareHover>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
