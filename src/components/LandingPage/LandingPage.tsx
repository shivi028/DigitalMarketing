"use client"
import Image from "next/image"
import { BarChart3, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Base background layer */}
      <div className="absolute inset-0 bg-[#190B5D]" />

      {/* Enhanced gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#051343] from-70% via-[#14194B]/150 via-100% to-[#ffffff] to-100%" />
      <div className="absolute inset-0 bg-gradient-to-bl via-[#16458E] via-40% to-[#507b8f]" />
      <div className="bg-gradient-to-tl from-[#020B2D] from-15% via-[#020B2D] via-95% to-transparent to-90%" />

      {/* Aurora effect overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,transparent_0%,#7156A2_50%,transparent_75%)]" />

      {/* Content Wrapper */}
      <div className="relative container max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        {/* <header className="py-6">
          <nav className="flex items-center justify-between">
         
            <div className="flex items-center gap-3">
              <Image src='/Image/demo.png' alt="Upcloud Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-white text-2xl font-semibold font-lora">HiredEasy</span>
            </div>

        
            <div className="hidden md:flex items-center gap-8 font-lora">
              {["Features", "About us", "Pricing", "Blog", "Contact"].map((item) => (
                <Link key={item} href="#" className="text-white/90 hover:text-white transition-colors">
                  {item}
                </Link>
              ))}
            </div>
\
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ShoppingCart className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <User className="w-6 h-6" />
              </Button>
              <Button className="bg-white text-black hover:bg-white/90 font-lora">Book a demo</Button>
            </div>
          </nav>
        </header> */}

        {/* Main Section */}
        <main className="py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-lora leading-tight">
                Flexible tools that save your team more time
              </h1>
              <p className="text-white/80 text-lg md:text-xl">
                Get more insights and reports for your startup and improve the customer relationships.
              </p>
              <div className="flex gap-6">
                <Button size="lg" className="bg-gradient-to-r from-[#3D9ECB] to-[#7156A2] hover:opacity-90">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="text-color-bluePrimary border-white/40">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm w-full max-w-md md:max-w-lg lg:max-w-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3D9ECB]/10 to-[#7156A2]/10" />
                <Image src='/Image/demo.png' alt="Dashboard Preview" width={600} height={400} className="w-full h-auto relative z-10" />
              </div>

              {/* Floating Action Buttons */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 mr-4">
                <Button variant="secondary" size="icon" className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20">
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full bg-[#4C7BFF] hover:bg-[#4C7BFF]/90">
                  <BarChart3 className="w-5 h-5" />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full bg-[#7CE7FF] hover:bg-[#7CE7FF]/90">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
