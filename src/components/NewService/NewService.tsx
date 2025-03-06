"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { useState } from "react"

export default function NewService() {
  const [activeTab, setActiveTab] = useState("startups")

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Driving Growth for Businesses of All-sizes</h1>
            <p className="text-gray-600 text-lg">
              Led by experts and backed by tech, we are helping businesses hit their revenue goals in ever-evolving
              digital landscape.
            </p>
          </div>

          {/* Tabs */}
          <div className="inline-flex items-center p-1 bg-white border rounded-lg shadow-sm">
            <button
              onClick={() => setActiveTab("startups")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "startups" ? "bg-primary text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              Startups
            </button>
            <button
              onClick={() => setActiveTab("enterprises")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "enterprises" ? "bg-primary text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              Enterprises
            </button>
            <button
              onClick={() => setActiveTab("agencies")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "agencies" ? "bg-primary text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              Agencies
            </button>
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Startups</h2>
            <p className="text-gray-600">
              Helping startups achieve and exceed their business objectives while streamlining operational costs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-blue-100 p-1 text-blue-600">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-gray-700">MVP Development</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-blue-100 p-1 text-blue-600">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-gray-700">SaaS Development</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-blue-100 p-1 text-blue-600">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-gray-700">UI/UX Design</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-blue-100 p-1 text-blue-600">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-gray-700">Product Development</span>
              </div>
            </div>

            <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">
              Get Details
              <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column - Images and Stats */}
        <div className="relative">
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-lg overflow-hidden ">
              <Image
                src="/Image/workTogether2.png"
                alt="Business team meeting"
                width={600}
                height={400}
                className=" object-cover shadow shadow-xl shadow-blue-950"
              />
            </div>

            {/* Client Satisfaction Badge */}
            <div className="absolute -left-10 top-10 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
              <div className="flex items-center text-yellow-500">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="ml-1 text-2xl font-bold text-gray-900">97%</span>
              </div>
              <span className="text-xs text-gray-500 mt-1">CLIENT SATISFACTION</span>
            </div>

            {/* Experts Badge */}
            <div className="absolute -left-16 bottom-20 flex items-center">
              <div className="relative">
                <Image
                  src="/Image/scroll8.jpg"
                  alt="Expert profile"
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 -ml-4">
                <div className="flex items-center text-purple-600">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="ml-1 text-xl font-bold text-gray-900">675+</span>
                </div>
                <span className="text-lg font-semibold text-gray-800">Experts</span>
              </div>
            </div>

            {/* IT Solutions Badge */}
            <div className="absolute right-10 bottom-10 bg-blue-900 text-white rounded-lg px-4 py-2">
              <span className="text-sm font-medium">IT and digital solutions</span>
            </div>

            {/* Testimonial */}
            <div className="absolute right-0 top-1/2 transform translate-x-1/4 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <p className="text-gray-800 text-sm">
                Impressive strategy and outstanding results. It was an absolute delight to work with them.
              </p>
            </div>

            {/* Hummingbird Icon */}
                {/* <div className="absolute right-0 top-0 transform translate-x-1/4 -translate-y-1/4">
                <div className="bg-white rounded-full p-3 shadow-lg">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 4C10 4 8.5 5.5 8.5 7.5C8.5 9.5 10 11 12 11C14 11 15.5 9.5 15.5 7.5C15.5 5.5 14 4 12 4Z"
                        fill="#4FD1C5"
                    />
                    <path d="M6 16C6 13.79 7.79 12 10 12H14C16.21 12 18 13.79 18 16V20H6V16Z" fill="#4FD1C5" />
                    <path
                        d="M12 4C10 4 8.5 5.5 8.5 7.5C8.5 9.5 10 11 12 11C14 11 15.5 9.5 15.5 7.5C15.5 5.5 14 4 12 4Z"
                        stroke="#319795"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M6 16C6 13.79 7.79 12 10 12H14C16.21 12 18 13.79 18 16V20H6V16Z"
                        stroke="#319795"
                        strokeWidth="1.5"
                    />
                    </svg>
                </div>
                </div> */}

            {/* Person Image Top */}
            <div className="absolute right-28 top-0 transform translate-x-1/2 -translate-y-1/3">
              <Image
                src="/Image/team.png"
                alt="Person profile"
                width={110}
                height={110}
                className="rounded-full "
              />
            </div>

            {/* Person Image Bottom */}
            <div className="absolute right-28 bottom-0 transform translate-x-1/3 translate-y-1/3 -z-10">
              <Image
                src="/Image/website.png"
                alt="Person profile"
                width={140}
                height={140}
                className="rounded-full -z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

