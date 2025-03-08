import { HeroSection } from "./HeroSection"
import { FeatureGrid } from "./FeatureGrid"
import { AiFlowchart } from "./AI-Flowchart"
import { VideoSection } from "./VideoSection"
import { CtaSection } from "../Common/cta-section"
import { StatsSection } from "./StatSection"
import { ClientTestimonials } from "../Common/CommonTestimonials"
import { FocusCard } from "../Common/FocusCard"
const Cards = [
  {
    title: "AI-Powered Chatbots",
    src: "/Image/chatbot.jpg",
  },
  {
    title: "Predictive Analytics",
    src: "/Image/analysis.jpg",
  },
  {
    title: "Smart Content Curation",
    src: "/Image/curation.jpg",
  },
  {
    title: "Automated Content Creation",
    src: "/Image/autoContentGenerate.jpg",
  },
  {
    title: "Precision Targeting",
    src: "/Image/targeting.jpg",
  },
  {
    title: "Personalized User Journeys",
    src: "/Image/userjou.jpg",
  },
];

export default function AiAutomationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <FeatureGrid />
      <AiFlowchart />
      <VideoSection />
      <StatsSection />
      <ClientTestimonials />
      <div className="mt-8 mb-8">
      <FocusCard cards={Cards}/>
      </div>
      <CtaSection highlightedWord="AI"/>
    </main>
  )
}

