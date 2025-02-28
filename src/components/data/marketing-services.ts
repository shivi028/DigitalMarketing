import { BarChart3, Search, Mail, Share2, Smartphone, Video, PenTool, TrendingUp, type LucideIcon } from "lucide-react"

interface MarketingService {
  id: string
  title: string
  description: string
  icon: ElementType
}

export const marketingServices: MarketingService[] = [
  {
    id: "seo",
    title: "SEO",
    description: "Optimize your website to rank higher in search engines and drive organic traffic.",
    icon: Search,
  },
  {
    id: "social-media",
    title: "Social Media",
    description: "Engage with your audience across platforms and build brand awareness.",
    icon: Share2,
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description: "Create targeted campaigns that convert leads and retain customers.",
    icon: Mail,
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Develop compelling content that resonates with your target audience.",
    icon: PenTool,
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Track performance metrics to optimize your marketing strategies.",
    icon: BarChart3,
  },
  {
    id: "mobile-marketing",
    title: "Mobile Marketing",
    description: "Reach customers on their mobile devices with targeted campaigns.",
    icon: Smartphone,
  },
  {
    id: "video-marketing",
    title: "Video Marketing",
    description: "Create engaging video content to boost engagement and conversions.",
    icon: Video,
  },
  {
    id: "growth-hacking",
    title: "Growth Hacking",
    description: "Implement innovative strategies to accelerate business growth.",
    icon: TrendingUp,
  },
]

