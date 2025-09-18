"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.SERVICE_PAGES = exports.SERVICES_CONTENT = void 0;
// src/lib/constants/services.tsx
var fa6_1 = require("react-icons/fa6");
var fa_1 = require("react-icons/fa");
exports.SERVICES_CONTENT = {
    sectionId: "services",
    subtitle: "Our Services",
    title: "Integrated Agricultural Solutions",
    description: "We provide comprehensive agricultural solutions that support farmers from knowledge and training to inputs, finance, technology, and research. Our goal is to improve productivity, profitability, and sustainability while making farmers more resilient and prosperous.",
    backgroundImage: "/assets/img/service/tree-background.png",
    cards: [
        {
            id: "farmer-advisory",
            icon: fa6_1.FaUserGraduate,
            emoji: "👩🏾‍🌾",
            title: "Farmer Advisory & Training",
            shortDescription: "Empowering farmers with knowledge and skills.",
            description: "We provide farmers with practical, tailored advice and hands-on training to improve productivity, profitability, and resilience. Our advisory services bridge the gap between agricultural research and everyday farming practices.",
            href: "/services/farmer-advisory-training",
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
            icon: fa6_1.FaSeedling,
            emoji: "🌾",
            title: "Agro-Inputs Supply",
            shortDescription: "Reliable inputs for higher yields.",
            description: "We provide farmers with high-quality agricultural inputs that boost productivity and ensure sustainable farming practices. Our agro-input supply system guarantees timely access to fertilizers, seeds, and crop protection products tailored to local needs.",
            href: "/services/agro-inputs-supply",
            features: [
                "Organic & Inorganic Fertilizers",
                "High-quality Climate-resilient Seeds",
                "Crop Protection Products",
                "Timely Supply Chain"
            ],
            bgColor: "from-emerald-600 to-green-600",
            category: "Input Supply"
        },
        {
            id: "credit-loans",
            icon: fa6_1.FaCreditCard,
            emoji: "💳",
            title: "Access to Credit & Agro-Input Loans",
            shortDescription: "Affordable input financing for organized farmer groups.",
            description: "We empower farmers to increase productivity by improving access to credit and agro-inputs. Through partnerships with banks and cooperatives, we provide organized farmer groups with loans in the form of fertilizers and seeds.",
            href: "/services/credit-agro-input-loans",
            features: [
                "Group-Based Agro-Input Loans",
                "Financial Partnerships with Banks",
                "Farmer Profiling for Risk Reduction",
                "Financial Literacy Training"
            ],
            bgColor: "from-blue-500 to-green-500",
            category: "Finance & Credit"
        },
        {
            id: "soil-health",
            icon: fa6_1.FaFlask,
            emoji: "🧪",
            title: "Soil Health & Measurement",
            shortDescription: "Know your soil, grow better.",
            description: "We help farmers make informed decisions by providing accurate soil testing and fertility assessments. Our services ensure that farmers understand their soil conditions and apply the right practices to maximize productivity.",
            href: "/services/soil-health-measurement",
            features: [
                "Soil Testing & Fertility Analysis",
                "Fertility Mapping",
                "Soil Improvement Recommendations",
                "Environmental Protection Guidance"
            ],
            bgColor: "from-orange-500 to-yellow-500",
            category: "Soil Management"
        },
        {
            id: "irrigation-systems",
            icon: fa_1.FaTint,
            emoji: "💧",
            title: "Irrigation Systems",
            shortDescription: "Smart water management solutions.",
            description: "We design and install efficient irrigation systems that save water, improve crop performance, and reduce costs. Our team provides end-to-end support, from consultancy and design to installation and maintenance.",
            href: "/services/irrigation-systems",
            features: [
                "Consultancy & System Design",
                "Drip & Sprinkler Installation",
                "Water Use Optimization",
                "Operation & Maintenance Services"
            ],
            bgColor: "from-cyan-500 to-blue-500",
            category: "Water Management"
        },
        {
            id: "research-data",
            icon: fa6_1.FaChartBar,
            emoji: "🔬",
            title: "Research & Farmer Data Systems",
            shortDescription: "Turning data into actionable insights.",
            description: "We collect and analyze real-time data on farmers to improve decision-making, deliver tailored advice, and build farmer profiles that enhance bankability. By combining agronomic monitoring and financial analysis, we empower farmers with evidence-based insights.",
            href: "/services/research-farmer-data-systems",
            features: [
                "Farmer Profiling & Asset Recording",
                "Agronomic Monitoring",
                "Financial & Credit Analysis",
                "On-Field Experiments & Testing"
            ],
            bgColor: "from-purple-500 to-indigo-500",
            category: "Research & Analytics"
        },
        {
            id: "information-access",
            icon: fa6_1.FaRadio,
            emoji: "📡",
            title: "Access to Information & Linkages",
            shortDescription: "Bringing knowledge closer to farmers.",
            description: "We improve farmers' access to vital agricultural information through innovative, localized channels. By combining farm radio programs, mobile information centers, and partnerships with trained agro-dealers, we ensure farmers receive practical, timely advice.",
            href: "/services/access-information-linkages",
            features: [
                "Farm Radio Programs",
                "Mobile & Local Information Centers",
                "Agro-Dealer Training",
                "Localized Exhibitions & Events"
            ],
            bgColor: "from-red-500 to-pink-500",
            category: "Information & Communication"
        },
        {
            id: "investment-management",
            icon: fa6_1.FaHandshake,
            emoji: "🌍",
            title: "Agricultural Investment & Farm Management",
            shortDescription: "Supporting investors to succeed in Tanzanian agriculture.",
            description: "We provide end-to-end support for investors looking to develop agricultural projects in the Southern Highlands of Tanzania. From legal land access to on-site consultancy and farm management, we ensure investments are compliant and productive.",
            href: "/services/agricultural-investment-farm-management",
            features: [
                "Land Access & Legal Support",
                "Onsite Consultancy",
                "Day-to-day Farm Management",
                "Southern Highlands Expertise"
            ],
            bgColor: "from-emerald-600 to-teal-600",
            category: "Investment & Management"
        }
    ]
};
// Individual Service Page Data
exports.SERVICE_PAGES = {
    "farmer-advisory": __assign(__assign({}, exports.SERVICES_CONTENT.cards[0]), { fullDescription: "We provide farmers with practical, tailored advice and hands-on training to improve productivity, profitability, and resilience. Our advisory services bridge the gap between agricultural research and everyday farming practices, ensuring farmers adopt proven, sustainable solutions.\n\nOur approach combines traditional farming wisdom with modern agricultural science, delivering personalized guidance that addresses the unique challenges faced by farmers in the Southern Highlands of Tanzania.", keyBenefits: [
            "Increased crop yields through improved farming practices",
            "Enhanced financial planning and resource management",
            "Reduced production costs through efficient input use",
            "Improved resilience to climate change and market fluctuations",
            "Access to latest agricultural research and innovations"
        ], detailedServices: [
            {
                title: "Tailored Agronomic Advice",
                description: "Personalized guidance on seeds, fertilizers, and crop management based on your specific farm conditions and goals.",
                icon: "🌱"
            },
            {
                title: "Farm Financial Management Training",
                description: "Comprehensive training to help farmers plan, budget, and manage resources effectively for maximum profitability.",
                icon: "💰"
            },
            {
                title: "Capacity-Building Workshops",
                description: "Interactive training sessions, demonstrations, and farmer field days to strengthen practical skills and knowledge transfer.",
                icon: "🎓"
            },
            {
                title: "Climate-Smart & Agroecological Practices",
                description: "Training on sustainable practices like legume-maize rotations that enrich soil nitrogen, reduce pests and diseases, and lower input costs.",
                icon: "🌿"
            }
        ], processSteps: [
            {
                step: 1,
                title: "Farm Assessment",
                description: "We conduct a comprehensive evaluation of your farm's current practices, soil conditions, and production challenges."
            },
            {
                step: 2,
                title: "Customized Plan",
                description: "Based on the assessment, we develop a tailored advisory plan that addresses your specific needs and goals."
            },
            {
                step: 3,
                title: "Training Implementation",
                description: "We deliver hands-on training through workshops, field demonstrations, and one-on-one consultations."
            },
            {
                step: 4,
                title: "Ongoing Support",
                description: "Continuous monitoring and support to ensure successful implementation and adaptation of new practices."
            }
        ], caseStudy: {
            title: "Success Story: Legume-Maize Rotation Impact",
            description: "Our on-farm experiments with legume-maize rotations have demonstrated remarkable results:",
            results: [
                "40% reduction in chemical fertilizer costs",
                "25% increase in maize yields",
                "Improved soil nitrogen levels",
                "Reduced pest and disease pressure",
                "Enhanced long-term soil fertility"
            ],
            location: "Southern Highlands, Tanzania",
            duration: "2-year study period"
        }, pricing: {
            title: "Service Packages",
            packages: [
                {
                    name: "Basic Advisory",
                    price: "Contact for pricing",
                    features: [
                        "Farm assessment",
                        "Basic agronomic advice",
                        "Seasonal planning guidance"
                    ]
                },
                {
                    name: "Comprehensive Training",
                    price: "Contact for pricing",
                    features: [
                        "Full farm assessment",
                        "Customized training program",
                        "Financial management training",
                        "Ongoing support for 6 months"
                    ]
                },
                {
                    name: "Group Training",
                    price: "Contact for pricing",
                    features: [
                        "Group workshops",
                        "Field demonstrations",
                        "Resource materials",
                        "Follow-up sessions"
                    ]
                }
            ]
        } })
    // Add similar detailed data for other services...
};
