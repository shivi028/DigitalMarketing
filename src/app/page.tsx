import BrandLogoSlider from "@/components/BrandLogoSection/BrandLogoSection";
import YourMission from "@/components/BrandLogoSection/YourMission";
import ContactPage from "@/components/Contact/Contact-Us";
import Footer from "@/components/Footer/Footer";
import LandingPage from "@/components/LandingPage/LandingPage";
import Services from "@/components/Services/Services";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <>
        <LandingPage/>
        <Services/>
        <YourMission/>
        
        <BrandLogoSlider/>
      
        <WhatWeDo/>
        <ContactPage/>
        <Footer/>
        
    </>
  );
}
