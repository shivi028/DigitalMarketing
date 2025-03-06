// components/LandingPage.tsx
import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const NewLandingPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Enhanced Background pattern - full page coverage */}
      
      <div className="absolute inset-0 w-full h-full -z-10" >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="w-full h-full bg-red-800"
    preserveAspectRatio="none"
  >
    <path
      fill="#ff7e5f"
      fillOpacity="1"
      d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,202.7C672,203,768,149,864,144C960,139,1056,181,1152,176C1248,171,1344,117,1392,90.7L1440,64V320H0Z"
    />
  </svg>
</div>





      {/* Header */}
      <div className="relative z-10">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <div className="text-orange-500 font-bold text-xl">
          <Link href={"/"}>HIREDEASY</Link>
          <span className="text-xs align-top ml-1">by digitalmarket</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 flex flex-col items-center justify-center pt-16 md:pt-24 relative z-10">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Let's Grow Your <span className="text-orange-500">Revenue</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-400 mb-16">
            Through Digital Marketing.
          </h2>

          <div className="mb-6">
            <p className="text-gray-500 text-xl mb-6">
              Step 1: Analyze your website
            </p>

            <div className="w-full max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row border border-gray-300 rounded-md overflow-hidden shadow-md">
                <input
                  type="text"
                  placeholder="Your Website URL"
                  className="flex-grow px-4 py-4 outline-none bg-white"
                />
                <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-medium px-6 py-4 whitespace-nowrap">
                  START MY ANALYSIS
                </button>
              </div>

              <div className="flex items-center justify-center mt-6 text-gray-500">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Get the answer in minutes.</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
     
    </div>
  );
};

export default NewLandingPage;