"use client"
import { BarChart3, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import LandingPageHeading from "./LandingPageheading"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#190B5D]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#051343] from-70% via-[#14194B]/150 via-100% to-[#ffffff] to-100%" />
      <div className="absolute inset-0 bg-gradient-to-bl via-[#16458E] via-40% to-[#507b8f]" />
      <div className="bg-gradient-to-tl from-[#020B2D] from-15% via-[#020B2D] via-95% to-transparent to-90%" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,transparent_0%,#7156A2_50%,transparent_75%)]" />

      {/* Content Wrapper */}
      <div className="relative container max-w-7xl mx-auto px-4 md:px-6 lg:px-10 xl:px-12">
        {/* Main Section */}
        <main className="py-12 sm:py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center text-center lg:text-left">
            {/* Left Content */}
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <LandingPageHeading />
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center lg:text-left">
                <p className="text-white/80 text-base sm:text-lg md:text-xl mb-4 mt-5">
                  We help you scale with performance-driven digital marketing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                  <Button size="lg" className="bg-gradient-to-r from-[#3D9ECB] to-[#7156A2] hover:opacity-90">
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg" className="text-color-bluePrimary border-white/40">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Video Section */}
            <div className="relative flex justify-center w-full">
                {/* Video - Now Responsive on All Screens */}
                <video 
                  src="/Image/digital marketing.mp4" 
                  className="w-full h-auto sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] relative z-10 rounded-3xl" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
              
              {/* Floating Action Buttons */}
              <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-4">
                <Button variant="secondary" size="icon" className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 sm:p-3">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full bg-[#4C7BFF] hover:bg-[#4C7BFF]/90 p-2 sm:p-3">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full bg-[#7CE7FF] hover:bg-[#7CE7FF]/90 p-2 sm:p-3">
                  <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
