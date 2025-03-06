import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdf8f2] overflow-hidden">
       {/* Navigation 
       <header className="container mx-auto px-4 py-5 flex items-center justify-between relative">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="relative h-8 w-8">
              <div className="absolute top-0 left-0 h-4 w-4 bg-[#7e3bff] rounded-full"></div>
              <div className="absolute bottom-0 right-0 h-4 w-4 bg-[#c1ff00] rounded-full"></div>
            </div>
            <span className="ml-2 text-2xl font-bold text-[#1e293b]">HiredEasy</span>
          </div>
        </div>

        {/* Desktop Navigation 
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[#1e293b] hover:text-[#7e3bff] transition-colors">
            Home
          </Link>
          <Link href="/about-us" className="text-[#1e293b] hover:text-[#7e3bff] transition-colors">
            About Us
          </Link>
          <Link href="/products" className="text-[#1e293b] hover:text-[#7e3bff] transition-colors">
          Products
          </Link>
          <Link href="/servicess" className="text-[#1e293b] hover:text-[#7e3bff] transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-[#1e293b] hover:text-[#7e3bff] transition-colors">
            Contact
          </Link>
        </nav>

        <button className="hidden md:block bg-[#7e3bff] text-white px-6 py-3 rounded-full hover:bg-[#6a30d9] transition-colors">
          Schedule Call
        </button>

        {/* Mobile Menu Toggle Button */}
        {/* <button 
          className="md:hidden text-[#1e293b] z-20"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            // X icon for close
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon for open
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

     Mobile Navigation Menu 
    {mobileMenuOpen && (
  <div className="absolute top-0 left-0 w-full h-[40vh] bg-purple-500 shadow-lg py-6 z-50 md:hidden rounded-b-lg"> */} 
    {/* Close Button */}
    {/* <button 
      className="absolute top-4 right-6 text-white text-2xl font-bold hover:text-gray-300"
      onClick={() => setMobileMenuOpen(false)}
    >
      ✖
    </button>

    <nav className="flex flex-col space-y-6 px-6 mt-8">
      <Link href="#" className="text-white text-lg font-medium hover:text-gray-200">
        Home
      </Link>
      <Link href="/about-us" className="text-white text-lg font-medium hover:text-gray-200">
        About Us
      </Link>
      <Link href="/products" className="text-white text-lg font-medium hover:text-gray-200">
      Products
      </Link>
      <Link href="/servicess" className="text-white text-lg font-medium hover:text-gray-200">
        Services
      </Link>
      <Link href="/contact" className="text-white text-lg font-medium hover:text-gray-200">
        Contact
      </Link>
      <button className="bg-white text-purple-600 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
        Schedule Call
      </button>
    </nav>
  </div>
)}



      </header>  */}

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8 pb-16 md:pt-16 md:pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="z-10 max-w-xl">
            <h2 className="text-[#7e3bff] font-medium mb-4 tracking-wider">CREATIVE DIGITAL AGENCY</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e293b] mb-6 leading-tight">
              We build creative websites & apps
            </h1>
            <p className="text-gray-600 mb-8">
              The carbon in our apple pies extraordinary claims require extraord evidence permanence of the stars energy
            </p>
            <button className="bg-[#7e3bff] text-white px-8 py-4 rounded-full hover:bg-[#6a30d9] transition-colors">
              Schedule  Call
            </button>
          </div>

          {/* Right Content - Image and Decorations */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Main circular image container */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-[#c1ff00] rounded-full overflow-hidden z-10 flex items-center justify-center">
              {/* Dots pattern inside the green circle */}
              <div className="absolute top-[15%] right-[15%] grid grid-cols-5 gap-1">
                {Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  ))}
              </div>

              {/* Image centered in the circle */}
              <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden">
                <Image
                  src="/Image/landingPageDesign.jpg"
                  alt="Creative professional"
                  fill
                  sizes="(max-width: 768px) 250px, (max-width: 1200px) 300px, 400px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Purple circle decoration */}
            <div className="absolute left-[10%] top-[20%] w-[80px] h-[80px] bg-[#7e3bff] rounded-full z-0"></div>

            {/* X mark decoration */}
            <div className="absolute right-[5%] top-[15%] text-[#7e3bff] text-3xl font-bold z-0">✕</div>

            {/* Wavy lines decoration */}
            <div className="absolute left-[40%] bottom-[20%] z-0">
              <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10C20 10 20 30 40 30C60 30 60 10 80 10" stroke="#1e293b" strokeWidth="2" />
                <path d="M0 20C20 20 20 40 40 40C60 40 60 20 80 20" stroke="#1e293b" strokeWidth="2" />
                <path d="M0 0C20 0 20 20 40 20C60 20 60 0 80 0" stroke="#1e293b" strokeWidth="2" />
              </svg>
            </div>

            {/* Concentric circles decoration */}
            <div className="absolute left-[20%] bottom-[10%] z-0">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" stroke="#7e3bff" strokeWidth="2" />
                <circle cx="40" cy="40" r="30" stroke="#7e3bff" strokeWidth="2" />
                <circle cx="40" cy="40" r="20" stroke="#7e3bff" strokeWidth="2" />
                <circle cx="40" cy="40" r="10" stroke="#7e3bff" strokeWidth="2" />
              </svg>
            </div>

            {/* Dotted pattern decoration */}
            <div className="absolute right-[30%] top-[50%] z-0">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {Array(10)
                  .fill(0)
                  .map((_, i) =>
                    Array(10)
                      .fill(0)
                      .map((_, j) => <circle key={`${i}-${j}`} cx={i * 10 + 5} cy={j * 10 + 5} r="1" fill="#ffc8a2" />),
                  )}
              </svg>
            </div>

            {/* Curved line decoration */}
            <div className="absolute right-0 bottom-0 z-0">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M200 0C200 110.457 110.457 200 0 200" stroke="#d4d1ff" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Background circle */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-[#ffecd9] -translate-x-1/3 -translate-y-1/3 z-0"></div>
      </section>
    </div>
  )
}