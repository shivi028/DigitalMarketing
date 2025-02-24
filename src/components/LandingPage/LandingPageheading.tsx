import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LandingPageHeading = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Leads!", "Sales!!", "Effort!!!"];
  const firstWords = ["More", "More", "Less"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center text-center">
      <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-lora leading-tight">
        {firstWords.map((firstWord, index) => (
          <span
            key={index}
            className={cn(
              "inline-flex gap-4 transition-all duration-500 items-center",
              currentWord === index ? "scale-105" : "scale-100"
            )}
          >
            <span
              className={cn(
                "inline-block transition-all duration-500",
                currentWord === index ? "text-white" : "text-purple-200"
              )}
            >
              {firstWord}
            </span>
            <span
              className={cn(
                "inline-block transition-all duration-1000",
                currentWord === index 
                  ? "opacity-100 translate-x-0 text-white" 
                  : "opacity-0 translate-x-full text-gray-500"
              )}
            >
              {words[index]}
            </span>
          </span>
        ))}
      </h1>
    </div>
  );
};

export default LandingPageHeading;
