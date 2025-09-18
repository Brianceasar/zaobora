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
exports.SERVICE_PAGES = void 0;
// Individual Service Page Data
var service_list_1 = require("./service-list");
exports.SERVICE_PAGES = {
    "farmer-advisory": __assign(__assign({}, service_list_1.SERVICES_CONTENT.cards.find(function (s) { return s.slug === "farmer-advisory"; })), { fullDescription: "We provide farmers with practical, tailored advice and hands-on training to improve productivity, profitability, and resilience...", keyBenefits: [
            "Increased crop yields",
            "Enhanced financial planning",
            "Reduced production costs",
            "Improved resilience to climate change",
            "Access to latest research"
        ], detailedServices: [
            { title: "Tailored Agronomic Advice", description: "Guidance on seeds, fertilizers, and crop management.", icon: "🌱" },
            { title: "Farm Financial Management", description: "Helping farmers plan, budget, and manage resources effectively.", icon: "💰" },
            { title: "Capacity-Building Workshops", description: "Training sessions, demonstrations, and farmer field days to strengthen practical skills.", icon: "🎓" },
            { title: "Climate-Smart Practices", description: "For example, our on-farm experiments with legume–maize rotations have shown how legumes enrich soil nitrogen and reduce pests and diseases, practices that lower chemical input costs and build resilience.", icon: "🌿" }
        ], processSteps: [
            { step: 1, title: "Farm Assessment", description: "Evaluate farm practices, soil, and challenges." },
            { step: 2, title: "Customized Plan", description: "Develop a tailored advisory roadmap." },
            { step: 3, title: "Training Implementation", description: "Hands-on workshops, field demos, consultations." },
            { step: 4, title: "Ongoing Support", description: "Continuous monitoring and improvement." }
        ], caseStudy: {
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
        }, pricing: {
            title: "Service Packages",
            packages: [
                { name: "Basic Advisory", price: "Contact for pricing", features: ["Farm assessment", "Basic agronomic advice", "Seasonal planning"] },
                { name: "Comprehensive Training", price: "Contact for pricing", features: ["Full assessment", "Customized program", "Financial training", "6 months support"] },
                { name: "Group Training", price: "Contact for pricing", features: ["Workshops", "Demonstrations", "Resource materials", "Follow-ups"] }
            ]
        } }),
    "agro-inputs": __assign(__assign({}, service_list_1.SERVICES_CONTENT.cards.find(function (s) { return s.slug === "agro-inputs"; })), { fullDescription: "We provide farmers with high-quality agricultural inputs that boost productivity and ensure sustainable farming practices. Our agro-input supply system guarantees timely access to fertilizers, seeds, and crop protection products tailored to local needs.", keyBenefits: ["Improved crop yields", "Resilient seeds and fertilizers", "Timely supply chains", "Better soil management"], detailedServices: [
            { title: "Organic & Inorganic Fertilizers", description: "Supply of climate-smart fertilizers.", icon: "🧪" },
            { title: "Climate-Resilient Seeds", description: "High-quality seeds for diverse conditions.", icon: "🌾" },
            { title: "Crop Protection", description: "Safe products for pest & disease control.", icon: "🛡️" }
        ], processSteps: [
            { step: 1, title: "Needs Assessment", description: "Identify input needs per region." },
            { step: 2, title: "Input Delivery", description: "Ensure timely and affordable supply." },
            { step: 3, title: "Farmer Training", description: "Guide farmers on correct usage." }
        ] }),
    "credit-loans": __assign(__assign({}, service_list_1.SERVICES_CONTENT.cards.find(function (s) { return s.slug === "credit-loans"; })), { fullDescription: "We empower farmers to increase productivity by improving access to credit and agro-inputs. Through partnerships with banks and cooperatives, and with our own input supply system, we provide organized farmer groups with loans in the form of fertilizers and seeds.\n", keyBenefits: ["Improved access to credit", "Group-based lending security", "Financial literacy", "Reduced input barriers"], detailedServices: [
            { title: "Group Input Loans", description: "Provide fertilizers and seeds as credit to farmer groups.", icon: "💳" },
            { title: "Financial Partnerships", description: "Collaborate with banks and MFIs to expand farmers’ access to affordable credit.", icon: "🏦" },
            { title: "Farmer Profiling for Risk Reduction", description: "Use our database to ensure transparency and strengthen bankability.", icon: "📊" },
            { title: "Repayment Support & Training", description: "Build financial literacy and repayment discipline through advisory programs.", icon: "📈" }
        ], processSteps: [
            { step: 1, title: "Farmer Group Registration", description: "Organize groups into cooperatives." },
            { step: 2, title: "Loan Processing", description: "Facilitate access to loans in inputs." },
            { step: 3, title: "Repayment Monitoring", description: "Support repayment and tracking." }
        ] }),
    "soil-health": __assign(__assign({}, service_list_1.SERVICES_CONTENT.cards.find(function (s) { return s.slug === "soil-health"; })), { fullDescription: "We help farmers make informed decisions by providing accurate soil testing and fertility assessments. Our services ensure that farmers understand their soil conditions and apply the right practices to maximize productivity while protecting the environment.", keyBenefits: ["Better soil fertility", "Informed fertilizer use", "Sustainable land management"], detailedServices: [
            { title: "Soil Testing", description: "Scientific analysis of soil nutrients.", icon: "🧪" },
            { title: "Fertility Mapping", description: "Identifying nutrient strengths and deficiencies across fields.", icon: "🗺️" },
            { title: "Soil Improvement Recommendations", description: "Tailored advice to restore and maintain soil fertility.", icon: "🌱" }
        ], processSteps: [
            { step: 1, title: "Sample Collection", description: "Collect soil samples from farms." },
            { step: 2, title: "Lab Analysis", description: "Run fertility tests." },
            { step: 3, title: "Action Plan", description: "Share soil management plan." }
        ] }),
    "irrigation-systems": __assign(__assign({}, service_list_1.SERVICES_CONTENT.cards.find(function (s) { return s.slug === "irrigation-systems"; })), { fullDescription: "We design and install efficient irrigation systems that save water, improve crop performance, and reduce costs. Our team provides end-to-end support, from consultancy and design to installation and long-term maintenance.", keyBenefits: ["Water efficiency", "Improved yields", "Reduced water costs"], detailedServices: [
            { title: "Consultancy & System Design", description: "Customized solutions for different crops and landscapes.", icon: "📐" },
            { title: "Drip & Sprinkler Installation", description: "Modern systems that optimize water use.", icon: "💧" },
            { title: "Operation & Maintenance Services", description: "Ongoing support to ensure system efficiency and durability.", icon: "🔧" }
        ], processSteps: [
            { step: 1, title: "Farm Survey", description: "Assess farm water needs." },
            { step: 2, title: "Design & Installation", description: "Implement irrigation systems." },
            { step: 3, title: "Training & Maintenance", description: "Train farmers on upkeep." }
        ] }),
    "research-data": __assign(__assign({}, service_list_1.SERVICES_CONTENT.cards.find(function (s) { return s.slug === "research-data"; })), { fullDescription: "We collect and analyze real-time data on farmers to improve decision-making, deliver tailored advice, and build farmer profiles that enhance bankability. By combining agronomic monitoring, financial analysis, and on-field experiments, we empower farmers and stakeholders with evidence-based insights.", keyBenefits: ["Better planning", "Stronger creditworthiness", "Evidence-based farming"], detailedServices: [
            { title: "Farmer Profiling", description: "Record farm assets, production practices, and financial performance.", icon: "📝" },
            { title: "Agronomic Monitoring", description: "Track seed, fertilizer, irrigation, and crop yields over time.", icon: "📊" },
            { title: "Financial & Asset Data", description: "Generate profiles that demonstrate creditworthiness.", icon: "💹" },
            { title: "On-Field Experiments", description: "Test new seed varieties, fertilizer blends, and irrigation methods, supported by photos and geotagged records.", icon: "🔬" },
            { title: "Bankability Support", description: "Provide farmer scorecards and evidence for banks and cooperatives.", icon: "📈" }
        ], processSteps: [
            { step: 1, title: "Data Collection", description: "Gather data via field surveys." },
            { step: 2, title: "Analysis", description: "Turn data into insights." },
            { step: 3, title: "Reporting", description: "Share actionable insights." }
        ] }),
    "information-access": __assign(__assign({}, service_list_1.SERVICES_CONTENT.cards.find(function (s) { return s.slug === "information-access"; })), { fullDescription: "We improve farmers\u2019 access to vital agricultural information through innovative, localized channels. By combining farm radio programs, mobile information centers, and partnerships with trained agro-dealers, we ensure that farmers receive practical, timely, and reliable advice. Local exhibitions further strengthen linkages between farmers, input providers, and stakeholders.", keyBenefits: ["Timely farming advice", "Improved market linkages", "Community knowledge sharing"], detailedServices: [
            { title: "Farm Radio Programs", description: "Share timely tips, market updates, and expert advice.", icon: "📻" },
            { title: "Mobile & Local Information Centers", description: "Provide on-the-ground access to knowledge and services.", icon: "📱" },
            { title: "Agro-Dealer Training", description: "Equip local dealers with information so they serve as farmer knowledge hubs.", icon: "🎪" },
            { title: "Local Exhibitions & Events", description: "Showcase innovations and promote farmer–stakeholder connections.", icon: "🤝" }
        ], processSteps: [
            { step: 1, title: "Content Development", description: "Prepare farmer-oriented messages." },
            { step: 2, title: "Dissemination", description: "Deliver info via radio, SMS, events." },
            { step: 3, title: "Feedback Loop", description: "Incorporate farmer feedback." }
        ] }),
    "investment-management": __assign(__assign({}, service_list_1.SERVICES_CONTENT.cards.find(function (s) { return s.slug === "investment-management"; })), { fullDescription: "We provide end-to-end support for investors looking to develop agricultural projects in the Southern Highlands of Tanzania. From legal land access to on-site consultancy and farm management, we ensure investments are compliant, efficient, and productive.", keyBenefits: ["Secure land access", "Efficient farm operations", "High ROI"], detailedServices: [
            { title: "Land Access & Legal Support", description: "Facilitate acquisition and ensure all legal requirements are met.", icon: "📜" },
            { title: "Farm Management Services", description: "Provide day-to-day management, monitoring, and optimization to maximize productivity.", icon: "🚜" },
            { title: "Onsite Consultancy", description: "Advise on crop selection, agronomic practices, and infrastructure planning.", icon: "🤝" },
            { title: "Regional Expertise", description: "Specialized knowledge of the Southern Highlands’ soils, climate, and farming systems.", icon: "🌍" }
        ], processSteps: [
            { step: 1, title: "Investment Planning", description: "Align investor goals with opportunities." },
            { step: 2, title: "Farm Setup", description: "Land prep and infrastructure setup." },
            { step: 3, title: "Ongoing Management", description: "Farm operations and monitoring." }
        ] })
};
