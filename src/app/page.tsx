'use client'
import BrandLogoSlider from "@/components/BrandLogoSection/BrandLogoSection";
import YourMission from "@/components/BrandLogoSection/YourMission";
import Footer from "@/components/Footer/Footer";
import LandingPage from "@/components/LandingPage/LandingPage";
import ServicesAnimationComponent from "@/components/ServiceAnimateComponent/ServicesAnimationComponent";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <>
        <LandingPage/>
       <ServicesAnimationComponent/>
        <YourMission/>       
        <BrandLogoSlider/>     
        <WhatWeDo/>
        <Footer/>
        
    </>
  );
}
