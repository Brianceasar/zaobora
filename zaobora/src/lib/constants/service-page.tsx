// Individual Service Page Data
import { SERVICES_CONTENT } from "./service-list";
import { ServiceCardType } from "@/types/service";

interface DetailedService extends ServiceCardType {
  fullDescription: string;
  keyBenefits: string[];
  detailedServices: { title: string; description: string; icon: string }[];
  processSteps: { step: number; title: string; description: string }[];
  caseStudy?: {
    title: string;
    description: string;
    results: string[];
    location: string;
    duration: string;
  };
  pricing?: {
    title: string;
    packages: {
      name: string;
      price: string;
      features: string[];
    }[];
  };
}

export const SERVICE_PAGES: Record<string, DetailedService> = {
  "farmer-advisory": {
    ...SERVICES_CONTENT.cards.find(s => s.slug === "farmer-advisory")!,
    fullDescription: `We provide farmers with practical, tailored advice and hands-on training to improve productivity, profitability, and resilience...`,
    keyBenefits: [
      "Increased crop yields",
      "Enhanced financial planning",
      "Reduced production costs",
      "Improved resilience to climate change",
      "Access to latest research"
    ],
    detailedServices: [
      { title: "Tailored Agronomic Advice", description: "Personalized guidance on seeds, fertilizers, and crop management.", icon: "🌱" },
      { title: "Farm Financial Management", description: "Training on planning, budgeting, and managing resources effectively.", icon: "💰" },
      { title: "Capacity-Building Workshops", description: "Interactive farmer field days and skill-building sessions.", icon: "🎓" },
      { title: "Climate-Smart Practices", description: "Training on agroecological methods like legume-maize rotations.", icon: "🌿" }
    ],
    processSteps: [
      { step: 1, title: "Farm Assessment", description: "Evaluate farm practices, soil, and challenges." },
      { step: 2, title: "Customized Plan", description: "Develop a tailored advisory roadmap." },
      { step: 3, title: "Training Implementation", description: "Hands-on workshops, field demos, consultations." },
      { step: 4, title: "Ongoing Support", description: "Continuous monitoring and improvement." }
    ],
    caseStudy: {
      title: "Legume-Maize Rotation Impact",
      description: "On-farm experiments showed:",
      results: [
        "40% reduction in fertilizer costs",
        "25% increase in yields",
        "Improved soil fertility",
        "Reduced pest pressure"
      ],
      location: "Southern Highlands, Tanzania",
      duration: "2 years"
    },
    pricing: {
      title: "Service Packages",
      packages: [
        { name: "Basic Advisory", price: "Contact for pricing", features: ["Farm assessment", "Basic agronomic advice", "Seasonal planning"] },
        { name: "Comprehensive Training", price: "Contact for pricing", features: ["Full assessment", "Customized program", "Financial training", "6 months support"] },
        { name: "Group Training", price: "Contact for pricing", features: ["Workshops", "Demonstrations", "Resource materials", "Follow-ups"] }
      ]
    }
  },

  "agro-inputs": {
    ...SERVICES_CONTENT.cards.find(s => s.slug === "agro-inputs")!,
    fullDescription: `We supply high-quality agro-inputs tailored to farmer needs...`,
    keyBenefits: ["Improved crop yields", "Resilient seeds and fertilizers", "Timely supply chains", "Better soil management"],
    detailedServices: [
      { title: "Organic & Inorganic Fertilizers", description: "Supply of climate-smart fertilizers.", icon: "🧪" },
      { title: "Climate-Resilient Seeds", description: "High-quality seeds for diverse conditions.", icon: "🌾" },
      { title: "Crop Protection", description: "Safe products for pest & disease control.", icon: "🛡️" }
    ],
    processSteps: [
      { step: 1, title: "Needs Assessment", description: "Identify input needs per region." },
      { step: 2, title: "Input Delivery", description: "Ensure timely and affordable supply." },
      { step: 3, title: "Farmer Training", description: "Guide farmers on correct usage." }
    ]
  },

  "credit-loans": {
    ...SERVICES_CONTENT.cards.find(s => s.slug === "credit-loans")!,
    fullDescription: `We facilitate affordable input financing for farmer groups...`,
    keyBenefits: ["Improved access to credit", "Group-based lending security", "Financial literacy", "Reduced input barriers"],
    detailedServices: [
      { title: "Group Input Loans", description: "Affordable loans for farmer cooperatives.", icon: "💳" },
      { title: "Financial Partnerships", description: "Linkages with banks and SACCOs.", icon: "🏦" },
      { title: "Farmer Profiling", description: "Data-driven risk assessment.", icon: "📊" }
    ],
    processSteps: [
      { step: 1, title: "Farmer Group Registration", description: "Organize groups into cooperatives." },
      { step: 2, title: "Loan Processing", description: "Facilitate access to loans in inputs." },
      { step: 3, title: "Repayment Monitoring", description: "Support repayment and tracking." }
    ]
  },

  "soil-health": {
    ...SERVICES_CONTENT.cards.find(s => s.slug === "soil-health")!,
    fullDescription: `Healthy soils = healthy yields. We provide soil testing and fertility mapping...`,
    keyBenefits: ["Better soil fertility", "Informed fertilizer use", "Sustainable land management"],
    detailedServices: [
      { title: "Soil Testing", description: "Scientific analysis of soil nutrients.", icon: "🧪" },
      { title: "Fertility Mapping", description: "Digital maps for informed management.", icon: "🗺️" },
      { title: "Improvement Recommendations", description: "Tailored soil fertility strategies.", icon: "🌱" }
    ],
    processSteps: [
      { step: 1, title: "Sample Collection", description: "Collect soil samples from farms." },
      { step: 2, title: "Lab Analysis", description: "Run fertility tests." },
      { step: 3, title: "Action Plan", description: "Share soil management plan." }
    ]
  },

  "irrigation-systems": {
    ...SERVICES_CONTENT.cards.find(s => s.slug === "irrigation-systems")!,
    fullDescription: `We design and install irrigation systems that optimize water usage...`,
    keyBenefits: ["Water efficiency", "Improved yields", "Reduced water costs"],
    detailedServices: [
      { title: "System Design", description: "Custom irrigation designs.", icon: "📐" },
      { title: "Drip & Sprinkler Installation", description: "Efficient irrigation systems.", icon: "💧" },
      { title: "Maintenance Services", description: "Operation and servicing of systems.", icon: "🔧" }
    ],
    processSteps: [
      { step: 1, title: "Farm Survey", description: "Assess farm water needs." },
      { step: 2, title: "Design & Installation", description: "Implement irrigation systems." },
      { step: 3, title: "Training & Maintenance", description: "Train farmers on upkeep." }
    ]
  },

  "research-data": {
    ...SERVICES_CONTENT.cards.find(s => s.slug === "research-data")!,
    fullDescription: `We turn farmer data into insights for better decisions...`,
    keyBenefits: ["Better planning", "Stronger creditworthiness", "Evidence-based farming"],
    detailedServices: [
      { title: "Farmer Profiling", description: "Comprehensive data collection.", icon: "📝" },
      { title: "Agronomic Monitoring", description: "Track field performance.", icon: "📊" },
      { title: "Financial Analysis", description: "Assess profitability and risks.", icon: "💹" }
    ],
    processSteps: [
      { step: 1, title: "Data Collection", description: "Gather data via field surveys." },
      { step: 2, title: "Analysis", description: "Turn data into insights." },
      { step: 3, title: "Reporting", description: "Share actionable insights." }
    ]
  },

  "information-access": {
    ...SERVICES_CONTENT.cards.find(s => s.slug === "information-access")!,
    fullDescription: `We bridge the information gap by improving farmer access to localized knowledge...`,
    keyBenefits: ["Timely farming advice", "Improved market linkages", "Community knowledge sharing"],
    detailedServices: [
      { title: "Farm Radio", description: "Localized agricultural radio.", icon: "📻" },
      { title: "Mobile Info Centers", description: "Field-based knowledge hubs.", icon: "📱" },
      { title: "Exhibitions & Events", description: "Practical demonstrations for farmers.", icon: "🎪" }
    ],
    processSteps: [
      { step: 1, title: "Content Development", description: "Prepare farmer-oriented messages." },
      { step: 2, title: "Dissemination", description: "Deliver info via radio, SMS, events." },
      { step: 3, title: "Feedback Loop", description: "Incorporate farmer feedback." }
    ]
  },

  "investment-management": {
    ...SERVICES_CONTENT.cards.find(s => s.slug === "investment-management")!,
    fullDescription: `We support agricultural investors with end-to-end services...`,
    keyBenefits: ["Secure land access", "Efficient farm operations", "High ROI"],
    detailedServices: [
      { title: "Land Access & Legal Support", description: "Assist with compliance and acquisition.", icon: "📜" },
      { title: "Farm Management", description: "Daily farm management services.", icon: "🚜" },
      { title: "Consultancy", description: "Expert support for investors.", icon: "🤝" }
    ],
    processSteps: [
      { step: 1, title: "Investment Planning", description: "Align investor goals with opportunities." },
      { step: 2, title: "Farm Setup", description: "Land prep and infrastructure setup." },
      { step: 3, title: "Ongoing Management", description: "Farm operations and monitoring." }
    ]
  }
};
