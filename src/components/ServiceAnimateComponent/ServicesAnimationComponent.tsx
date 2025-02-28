"use client"

import DigitalMarketingGrid from "./ServiceAnimate"

export default function ServicesAnimationComponent() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-b from-[#DCC2FF] to-[#F6F6F7]">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
        Digital Marketing Solutions
      </h1>
      <DigitalMarketingGrid />
    </main>
  )
}
