import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16 relative overflow-hidden">
      {/* Decorative dots on left side */}
      <div className="hidden md:block absolute left-4 md:left-8 top-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-600"></div>
              <div className="w-2 h-2 rounded-full bg-purple-600"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto">
        {/* About Us heading */}
        <h2 className="text-purple-600 font-medium mb-4 tracking-wide">ABOUT US</h2>

        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 max-w-2xl mb-12">
          We are here to make your product look more elegant and stylish...
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image section with decorative elements */}
          <div className="relative">
            {/* Beige background shape */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-amber-100/80 z-0"></div>

            {/* Main image */}
            <div className="relative z-10 rounded-xl overflow-hidden">
              <Image
                src='/Image/homeabout.jpg'
                alt="Team members working together"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />

              {/* Green circle overlay */}
              <div className="hidden md:block absolute -right-16 -bottom-16 w-64 h-64 bg-lime-400 rounded-full opacity-80 z-20"></div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-8">
            {/* Paragraph */}
            <p className="text-gray-700 mb-8">
            Strategize, Optimize, Monetize Mastering Digital Domination <br/>
Beyond Likes, Forging Loyalty We Are Your Digital Allies
            </p>

            {/* Bullet points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-700 text-white flex items-center justify-center text-sm">
                  1
                </div>
                <p className="text-gray-700">Pixels with Personality Your Digital Story, Our Expertise.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-700 text-white flex items-center justify-center text-sm">
                  2
                </div>
                <p className="text-gray-700">Crafting Tomorrow’s Brands Today Your Digital Evolution Partner.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-700 text-white flex items-center justify-center text-sm">
                  3
                </div>
                <p className="text-gray-700">Pixels with Purpose Elevating Brands in the Digital Age</p>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-12">
              <div className="bg-purple-600 rounded-3xl p-6 md:p-8 text-white">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center border-r border-purple-400">
                    <div className="text-3xl md:text-4xl font-bold">280+</div>
                    <div className="text-sm md:text-base mt-1">Project Delivered</div>
                  </div>

                  <div className="text-center border-r border-purple-400">
                    <div className="text-3xl md:text-4xl font-bold">500+</div>
                    <div className="text-sm md:text-base mt-1">Happy Clients</div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold">3500+</div>
                    <div className="text-sm md:text-base mt-1">Total Coffees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

