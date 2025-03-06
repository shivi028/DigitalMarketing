'use client'
import AboutUs from "@/components/AboutHome/AboutHome";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo/AnimatedTestimonialsDemo";
import BrandLogoSlider from "@/components/BrandLogoSection/BrandLogoSection";
// import YourMission from "@/components/BrandLogoSection/YourMission";
import Footer from "@/components/Footer/Footer";
import { GlobeDemo } from "@/components/GithubGlobe/GithubGlobe";
import FancyCompanyLogoSection from "@/components/GlobalAdAgency/FancyCompanyLogoSection";
import GlobalAdAgency from "@/components/GlobalAdAgency/GlobalAdAgency";
import LandingPage from "@/components/LandingPage/LandingPage";
import { MacbookScrollDemo } from "@/components/mackbook/mackBookScroll";
import NewLandingPage from "@/components/NewLanding/NewLandingPage";
import NewServ from "@/components/NewServ/NewServ";
import NewService from "@/components/NewService/NewService";
import NewWhatWeOffer from "@/components/NewWhatWeOffer/NewWhatWeOffer";
import { ParallaxScrollSecondDemo } from "@/components/ParallexScollBlock/Scroll";

import ServicesAnimationComponent from "@/components/ServiceAnimateComponent/ServicesAnimationComponent";
import {CarouselDemo} from "@/components/WhatWeDo/WhatWeDo";
import WorkTogether from "@/components/WorkTogether/WorkTogether";

export default function Home() {
  return (
    <>
        {/* <LandingPage/> */}

        {/* NEW */}
        <NewLandingPage/>
        <GlobalAdAgency/>
        <FancyCompanyLogoSection/>
        <NewService/>
        <NewWhatWeOffer/>
        <NewServ/>
        {/* NEW END */}


        {/* <BrandLogoSlider/>  */}
        {/* <ParallaxScrollSecondDemo/> */}
        <ServicesAnimationComponent/>
          
        {/* <WorkTogether/>   */}
        <CarouselDemo/>
        <AboutUs/>
        
        <MacbookScrollDemo/>
        {/* <AnimatedTestimonialsDemo/> */}
        <GlobeDemo/>
        <Footer/>
        
    </>
  );
}
