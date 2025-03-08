"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const VideoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust for earlier/later visibility
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/social.mp4"
        loop
        autoPlay
        muted
      />
    </motion.section>
  );
};

export default VideoSection;
