"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const serviceCards = [
  {
    title: "AI & Automation",
    description:
      "Integrate AI & automation into workflows to drive efficiency and reduce cost.",
    icon: "/Image/scroll3.jpg",
    color: "light",
    features: [
      "Chatbot Development",
      "AI-Powered Virtual Assistants",
      "AI & Automation Consulting",
      "Workflow Automation",
      "Predictive Analytics & Insights",
    ],
  },
  {
    title: "Software Engineering",
    description:
      "Tackle complex business challenges with our skilled software engineers and architects.",
    icon: "/Image/scroll4.jpg",
    color: "dark",
    features: [
      "Consulting",
      "Website Development",
      "SaaS Product Development",
      "Modernization",
      "DevOps",
      "Mobile App Development",
      "MVP Development",
      "Maintenance & Migration",
      "QA and Testing",
      "Software Development",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with data-driven marketing strategies.",
    icon: "/Image/scroll8.jpg",
    color: "light",
    features: [
      "SEO Optimization",
      "Content Marketing",
      "Social Media Management",
      "PPC Advertising",
      "Email Marketing",
    ],
  },
  {
    title: "UX/UI Design",
    description:
      "Create intuitive and engaging user experiences that convert visitors into customers.",
    icon: "/Image/scroll6.jpg",
    color: "dark",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "Usability Testing",
    ],
  },
];

export default function NewWhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);

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

      <Carousel
        className="w-full mt-12"
        opts={{
          align: "start",
          loop: true,
        }}
        onSelect={(index: any) => setActiveIndex(index)}
      >
        <CarouselContent>
          {serviceCards.map((card, index) => (
            <CarouselItem key={index} className="md:basis-full lg:basis-full">
              <Card
                className={`h-full rounded-lg shadow-md p-6 transition-all duration-300 ${
                  card.color === "dark"
                    ? "bg-gradient-to-r from-indigo-800 to-indigo-900 text-white"
                    : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800"
                }`}
              >
                <CardHeader className="flex flex-row items-start justify-between pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center bg-opacity-80"
                    >
                      <img
                        src={card.icon || "/placeholder.svg"}
                        alt={`${card.title} icon`}
                        className="w-8 h-8"
                      />
                    </div>
                    <h2 className="text-2xl font-bold">{card.title}</h2>
                  </div>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-opacity-50">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-opacity-80">{card.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-opacity-70">
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2 mt-6">
          <CarouselPrevious className="h-10 w-10 rounded-lg border" />
          <CarouselNext className="h-10 w-10 rounded-lg border" />
        </div>
      </Carousel>
    </div>
  );
}
