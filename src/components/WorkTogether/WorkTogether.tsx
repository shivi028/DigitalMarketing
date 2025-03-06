import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function WorkTogether() {
  return (
    <main className="min-h-screen bg-[#FFF8E7] relative overflow-hidden">
      {/* Wave pattern decoration */}
      <div className="absolute top-[15%] left-[20%] md:left-[15%] lg:left-[10%] xl:left-[15%] z-0">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 10C13.3333 10 13.3333 0 26.6667 0C40 0 40 10 53.3333 10C66.6667 10 66.6667 0 80 0"
            stroke="#333"
            strokeWidth="1.5"
          />
          <path
            d="M0 30C13.3333 30 13.3333 20 26.6667 20C40 20 40 30 53.3333 30C66.6667 30 66.6667 20 80 20"
            stroke="#333"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Dots pattern decoration */}
      <div className="absolute bottom-[10%] right-[10%] z-0">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="3" fill="#7E3AF2" />
          <circle cx="5" cy="20" r="3" fill="#7E3AF2" />
          <circle cx="5" cy="35" r="3" fill="#7E3AF2" />
          <circle cx="5" cy="50" r="3" fill="#7E3AF2" />
          <circle cx="20" cy="5" r="3" fill="#7E3AF2" />
          <circle cx="20" cy="20" r="3" fill="#7E3AF2" />
          <circle cx="20" cy="35" r="3" fill="#7E3AF2" />
          <circle cx="20" cy="50" r="3" fill="#7E3AF2" />
          <circle cx="35" cy="5" r="3" fill="#7E3AF2" />
          <circle cx="35" cy="20" r="3" fill="#7E3AF2" />
          <circle cx="35" cy="35" r="3" fill="#7E3AF2" />
          <circle cx="35" cy="50" r="3" fill="#7E3AF2" />
        </svg>
      </div>

      {/* Wifi icon decoration */}
      <div className="absolute top-[25%] right-[10%] z-0">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 16.5C12.8284 16.5 13.5 15.8284 13.5 15C13.5 14.1716 12.8284 13.5 12 13.5C11.1716 13.5 10.5 14.1716 10.5 15C10.5 15.8284 11.1716 16.5 12 16.5Z"
            fill="#333"
          />
          <path
            d="M6.34141 10.5C7.98521 9.18938 9.94823 8.49756 11.9998 8.49756C14.0514 8.49756 16.0144 9.18938 17.6582 10.5"
            stroke="#333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.51562 7.5C5.76303 5.75721 8.5384 4.80078 11.4001 4.80078C14.2618 4.80078 17.0372 5.75721 19.2846 7.5"
            stroke="#333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.16992 13.5C10.0205 12.9377 11.0002 12.6392 12.0002 12.6392C13.0002 12.6392 13.9799 12.9377 14.8305 13.5"
            stroke="#333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side with illustration */}
          <div className="w-full lg:w-1/3 mb-10 lg:mb-0 relative">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-[#7E3AF2] rounded-3xl transform rotate-12"></div>
              <div className="absolute -bottom-4 -left-8 w-[100px] h-[120px]">
                <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,0 C30,20 70,20 100,0 L100,120 C70,100 30,100 0,120 Z" fill="#A7C4A0" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/Image/workTogether2.png"
                  alt="Person waving"
                  width={290}
                  height={340}
                  className="transform -translate-y-2"
                />
              </div>
            </div>
          </div>

          {/* Center content */}
          <div className="w-full lg:w-1/3 text-center">
            <h2 className="text-[#7E3AF2] font-medium text-lg md:text-xl mb-4 tracking-wide">LET'S WORK TOGETHER</h2>
            <h1 className="text-[#1F2937] text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Need a successful project?
            </h1>
            <Button className="bg-[#7E3AF2] hover:bg-[#6C2BD9] text-white px-8 py-6 rounded-lg text-lg font-medium">
              Schedule Call
            </Button>
          </div>

          {/* Right side with illustration */}
          <div className="w-full lg:w-1/3 mt-10 lg:mt-0 relative">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-[#FFE9B1] rounded-3xl"></div>
              <div className="absolute -top-6 -right-6">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M40 10C40 15.5228 35.5228 20 30 20C24.4772 20 20 15.5228 20 10C20 4.47715 24.4772 0 30 0C35.5228 0 40 4.47715 40 10Z"
                    fill="#F8A13F"
                  />
                  <path
                    d="M40 10C40 15.5228 35.5228 20 30 20C24.4772 20 20 15.5228 20 10C20 4.47715 24.4772 0 30 0C35.5228 0 40 4.47715 40 10Z"
                    fill="#F8A13F"
                  />
                  <circle cx="30" cy="10" r="5" fill="#FFE9B1" />
                </svg>
              </div>
              <div className="absolute -top-4 right-10">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M40 10C40 15.5228 35.5228 20 30 20C24.4772 20 20 15.5228 20 10C20 4.47715 24.4772 0 30 0C35.5228 0 40 4.47715 40 10Z"
                    fill="#6BA5C2"
                  />
                  <path
                    d="M40 10C40 15.5228 35.5228 20 30 20C24.4772 20 20 15.5228 20 10C20 4.47715 24.4772 0 30 0C35.5228 0 40 4.47715 40 10Z"
                    fill="#6BA5C2"
                  />
                  <circle cx="30" cy="10" r="5" fill="#FFF8E7" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/Image/workTogether1.png"
                  alt="Person with puzzle piece"
                  width={290}
                  height={340}
                />
              </div>
              <div className="absolute bottom-10 right-0 transform translate-x-1/4">
                <div className="bg-[#7E3AF2] w-16 h-16 rounded-lg transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#F8C4B4]"></div>
    </main>
  )
}

