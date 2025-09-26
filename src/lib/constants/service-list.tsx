
// import { 
//   FaUserGraduate, 
//   FaSeedling, 
//   FaCreditCard, 
//   FaFlask,  
//   FaChartBar, 
//   FaRadio, 
//   FaHandshake 
// } from 'react-icons/fa6';
// import { FaTint } from 'react-icons/fa';
import { ServiceSectionType } from "@/types/service";

export const SERVICES_CONTENT: ServiceSectionType = {
  sectionId: "services",
  subtitle: "Our Services",
  title: "Integrated Agricultural Solutions",
  description: "We provide comprehensive agricultural solutions that support farmers from knowledge and training to inputs, finance, technology, and research. Our goal is to improve productivity, profitability, and sustainability while making farmers more resilient and prosperous.",
  backgroundImage: "/img/service/tree-background.png",
  cards: [
    {
      id: "farmer-advisory",
      slug: "farmer-advisory",
  icon: "FaUserGraduate",
      emoji: "👩🏾‍🌾",
      title: "Farmer Advisory & Training",
      shortDescription: "Empowering farmers with knowledge and skills.",
      description: "We provide farmers with practical, tailored advice and hands-on training to improve productivity, profitability, and resilience. Our advisory services bridge the gap between agricultural research and everyday farming practices.",
  href: `/services/farmer-advisory`,
      features: [
        "Tailored Agronomic Advice",
        "Farm Financial Management Training", 
        "Capacity-Building Workshops",
        "Climate-Smart & Agroecological Practices"
      ],
  bgColor: "from-green-500 to-emerald-500",
      category: "Training & Education"
    },
    {
      id: "agro-inputs",
      slug: "agro-inputs",
  icon: "FaSeedling",
      emoji: "🌾",
      title: "Agro-Inputs Supply",
      shortDescription: "Reliable inputs for higher yields.",
      description: "We provide farmers with high-quality agricultural inputs that boost productivity and ensure sustainable farming practices. Our agro-input supply system guarantees timely access to fertilizers, seeds, and crop protection products tailored to local needs.",
  href: `/services/agro-inputs`,
      features: [
        "Organic & Inorganic Fertilizers",
        "High-quality Climate-resilient Seeds",
        "Crop Protection Products",
        "Timely Supply Chain"
      ],
  bgColor: "from-green-500 to-emerald-500",
      category: "Input Supply"
    },
    {
      id: "credit-loans",
      slug: "credit-loans",
  icon: "FaCreditCard",
      emoji: "💳",
      title: "Access to Credit & Agro-Input Loans",
      shortDescription: "Affordable input financing for organized farmer groups.",
      description: "We empower farmers to increase productivity by improving access to credit and agro-inputs. Through partnerships with banks and cooperatives, we provide organized farmer groups with loans in the form of fertilizers and seeds.",
  href: `/services/credit-loans`,
      features: [
        "Group-Based Agro-Input Loans",
        "Financial Partnerships with Banks",
        "Farmer Profiling for Risk Reduction",
        "Financial Literacy Training"
      ],
  bgColor: "from-green-500 to-emerald-500",
      category: "Finance & Credit"
    },
    {
      id: "soil-health",
      slug: "soil-health",
  icon: "FaFlask",
      emoji: "🧪",
      title: "Soil Health & Measurement",
      shortDescription: "Know your soil, grow better.",
      description: "We help farmers make informed decisions by providing accurate soil testing and fertility assessments. Our services ensure that farmers understand their soil conditions and apply the right practices to maximize productivity.",
  href: `/services/soil-health`,
      features: [
        "Soil Testing & Fertility Analysis",
        "Fertility Mapping",
        "Soil Improvement Recommendations",
        "Environmental Protection Guidance"
      ],
  bgColor: "from-green-500 to-emerald-500",
      category: "Soil Management"
    },
    {
      id: "irrigation-systems",
      slug: "irrigation-systems",
  icon: "FaTint",
      emoji: "💧",
      title: "Irrigation Systems",
      shortDescription: "Smart water management solutions.",
      description: "We design and install efficient irrigation systems that save water, improve crop performance, and reduce costs. Our team provides end-to-end support, from consultancy and design to installation and maintenance.",
  href: `/services/irrigation-systems`,
      features: [
        "Consultancy & System Design",
        "Drip & Sprinkler Installation",
        "Water Use Optimization",
        "Operation & Maintenance Services"
      ],
  bgColor: "from-green-500 to-emerald-500",
      category: "Water Management"
    },
    {
      id: "research-data",
      slug: "research-data",
  icon: "FaChartBar",
      emoji: "🔬",
      title: "Research & Farmer Data Systems",
      shortDescription: "Turning data into actionable insights.",
      description: "We collect and analyze real-time data on farmers to improve decision-making, deliver tailored advice, and build farmer profiles that enhance bankability. By combining agronomic monitoring and financial analysis, we empower farmers with evidence-based insights.",
  href: `/services/research-data`,
      features: [
        "Farmer Profiling & Asset Recording",
        "Agronomic Monitoring",
        "Financial & Credit Analysis",
        "On-Field Experiments & Testing"
      ],
  bgColor: "from-green-500 to-emerald-500",
      category: "Research & Analytics"
    },
    {
      id: "information-access",
      slug: "information-access",
  icon: "FaRadio",
      emoji: "📡",
      title: "Access to Information & Linkages",
      shortDescription: "Bringing knowledge closer to farmers.",
      description: "We improve farmers' access to vital agricultural information through innovative, localized channels. By combining farm radio programs, mobile information centers, and partnerships with trained agro-dealers, we ensure farmers receive practical, timely advice.",
  href: `/services/information-access`,
      features: [
        "Farm Radio Programs",
        "Mobile & Local Information Centers",
        "Agro-Dealer Training",
        "Localized Exhibitions & Events"
      ],
  bgColor: "from-green-500 to-emerald-500",
      category: "Information & Communication"
    },
    {
      id: "investment-management",
      slug: "investment-management",
  icon: "FaHandshake",
      emoji: "🌍",
      title: "Agricultural Investment & Farm Management",
      shortDescription: "Supporting investors to succeed in Tanzanian agriculture.",
      description: "We provide end-to-end support for investors looking to develop agricultural projects in the Southern Highlands of Tanzania. From legal land access to on-site consultancy and farm management, we ensure investments are compliant and productive.",
  href: `/services/investment-management`,
      features: [
        "Land Access & Legal Support",
        "Onsite Consultancy",
        "Day-to-day Farm Management",
        "Southern Highlands Expertise"
      ],
  bgColor: "from-green-500 to-emerald-500",
      category: "Investment & Management"
    }
  ]
};

