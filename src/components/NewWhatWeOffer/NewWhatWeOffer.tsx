"use client";

import { useState } from "react";
import { BentoGridSecondDemo } from "./Bento-grid";


export default function NewWhatWeOffer() {

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="space-y-6 text-center">
        <h3 className="text-blue-600 font-medium tracking-wide uppercase">
          WHAT WE OFFER
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Ignite Your Brand's Digital Journey
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We provide digital services tailored to elevate your brand,
          streamline your business processes, and boost your online
          presence.
        </p>
      </div>

      <div className="mt-10 ">
      <BentoGridSecondDemo/>
      </div>
      

    </div>
  );
}
