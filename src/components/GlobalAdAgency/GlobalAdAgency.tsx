import React from "react";

const GlobalAdAgency: React.FC = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 text-center">
      {/* Heading Section */}
      <h3 className="text-orange-500 text-lg font-medium mb-2">
        Meet My Award-Winning
      </h3>
      <h2 className="text-gray-800 text-3xl md:text-4xl font-semibold mb-6">
        Global Ad Agency
      </h2>

      {/* Country List */}
      <div className="text-gray-500 text-lg max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {[
            "United States",
            "Canada",
            "Brazil",
            "India",
            "Australia",
            "United Kingdom",
            "Japan",
            "Malaysia",
            "Germany",
            "Hong Kong",
            "Singapore",
            "France",
            "Italy",
            "Netherlands",
            "Spain",
            "Argentina",
            "Chile",
            "Colombia",
            "Mexico",
          ].map((country, index, array) => (
            <span key={index} className="inline-block">
              {country}
              {index !== array.length - 1 && " •"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalAdAgency;
