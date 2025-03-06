"use client";

import {Carousel} from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Advertising Stuff",
      button: "Explore Advertising",
      src: "/Image/scroll1.jpg",
    },
    {
      title: "Click, Connect, Conver",
      button: "Schedule Call",
      src: "/Image/scroll9.jpg",
    },
    {
      title: "Pixels to Profits",
      button: "Schedule Call",
      src: "/Image/scroll6.jpg",
    },
    {
      title: " Amplifying Reach",
      button: "Checkout What people say about us",
      src: "/Image/scroll7.jpg",
    },
    {
      title: "Surfing Success Together",
      button: "Schedule Call",
      src: "/Image/scroll3.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 bg-[#dfc4f7] mb-20 p-4">
      <div>
      <h1 className="text-2xl md:text-5xl font-bold mb-6 flex justify-center items-center text-center">We are ready to serve you differently!!</h1>
      </div>
      <Carousel slides={slideData} />
    </div>
  );
}
