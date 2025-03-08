// MarqueeComponent.js
import React from "react";
// import { marqueeLogos, marqueeReverseLogos } from "./logosData";

const Marquee = ({ logos, className }:any) => {
  return (
    <div className={`flex gap-8 w-full justify-center items-center ${className}`}>
      {logos.map((logo:any, index:any) => (
        <img key={index} src={logo.src} alt={logo.alt} className="h-16" />
      ))}
    </div>
  );
};

export default Marquee;