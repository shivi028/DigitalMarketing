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
import TestimonialSection from "@/components/NewTestimonial/NewTestimonial";

// import TestimonialCard from "@/components/NewTestimonial/NewTestimonial";
import NewWhatWeOffer from "@/components/NewWhatWeOffer/NewWhatWeOffer";
import { ParallaxScrollSecondDemo } from "@/components/ParallexScollBlock/Scroll";

import ServicesAnimationComponent from "@/components/ServiceAnimateComponent/ServicesAnimationComponent";
import VideoSection from "@/components/Video/VideoSection";

import {CarouselDemo} from "@/components/WhatWeDo/WhatWeDo";
import WorkTogether from "@/components/WorkTogether/WorkTogether";

export default function Home() {
  return (
    <>
        {/* <LandingPage/> */}

        {/* NEW */}
        <NewLandingPage/>
        <VideoSection/>
        <GlobalAdAgency/>
        <FancyCompanyLogoSection/>
        <TestimonialSection/>
        
      
        <NewService/>

        <NewWhatWeOffer/>
        <BrandLogoSlider/> 

        <NewServ/>

        {/* NEW END */}


       
        {/* <ParallaxScrollSecondDemo/> */}
        <ServicesAnimationComponent/>
          
        {/* <WorkTogether/>   */}
      
        {/* <AboutUs/> */}
        
        <MacbookScrollDemo/>
        {/* <AnimatedTestimonialsDemo/> */}
        <GlobeDemo/>
        <Footer/>
        
    </>
  );
}
