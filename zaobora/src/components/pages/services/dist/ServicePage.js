// src/components/services/ServicePage.tsx
"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var fa6_1 = require("react-icons/fa6");
var ContactInfoSection_1 = require("@/components/section/ContactInfoSection");
var GetInTouchSection_1 = require("@/components/section/GetInTouchSection");
function ServicePage(_a) {
    var serviceData = _a.serviceData;
    var _b = react_1.useState(false), isVisible = _b[0], setIsVisible = _b[1];
    var heroRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            return entry.isIntersecting && setIsVisible(true);
        }, { threshold: 0.1 });
        if (heroRef.current)
            observer.observe(heroRef.current);
        return function () { return observer.disconnect(); };
    }, []);
    return (React.createElement("div", { className: "min-h-screen bg-white" },
        React.createElement("section", { ref: heroRef, className: "relative pt-24 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden" },
            React.createElement("div", { className: "absolute inset-0 overflow-hidden pointer-events-none" },
                React.createElement("div", { className: "absolute top-20 left-20 w-32 h-32 bg-green-200/20 rounded-full animate-pulse" }),
                React.createElement("div", { className: "absolute bottom-20 right-20 w-24 h-24 bg-emerald-200/30 rounded-full animate-bounce", style: { animationDelay: "1s" } })),
            React.createElement("div", { className: "container mx-auto px-4 lg:px-6 relative z-10" },
                React.createElement("div", { className: "grid lg:grid-cols-2 gap-12 items-center" },
                    React.createElement("div", { className: "transform transition-all duration-1000 " + (isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0") },
                        React.createElement("nav", { className: "flex items-center gap-2 text-sm text-gray-600 mb-6" },
                            React.createElement(link_1["default"], { href: "/", className: "hover:text-green-600 transition-colors" }, "Home"),
                            React.createElement("span", null, "/"),
                            React.createElement(link_1["default"], { href: "/services", className: "hover:text-green-600 transition-colors" }, "Services"),
                            React.createElement("span", null, "/"),
                            React.createElement("span", { className: "text-green-600 font-medium" }, serviceData.title)),
                        React.createElement("div", { className: "inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6" },
                            React.createElement("span", { className: "text-xl" }, serviceData.emoji),
                            React.createElement("span", null, serviceData.category)),
                        React.createElement("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" }, serviceData.title),
                        React.createElement("p", { className: "text-xl text-gray-600 mb-8 leading-relaxed" }, serviceData.shortDescription)),
                    React.createElement("div", { className: "transform transition-all duration-1000 delay-300 " + (isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0") },
                        React.createElement("div", { className: "relative" },
                            React.createElement(image_1["default"], { src: "/assets/img/service/farmer-training.jpg", alt: serviceData.title, width: 600, height: 400, className: "rounded-2xl shadow-2xl" })))))),
        React.createElement("section", { id: "details", className: "py-20 container mx-auto px-4 lg:px-6" },
            React.createElement("div", { className: "max-w-4xl  mb-12 text-left" },
                React.createElement("h2", { className: "text-3xl font-bold text-gray-900 mb-6 text-left" }, "Overview"),
                React.createElement("p", { className: "text-lg text-gray-700 leading-relaxed text-left" }, serviceData.fullDescription)),
            serviceData.detailedServices && (React.createElement("div", { className: "mb-16" },
                React.createElement("h3", { className: "text-2xl font-semibold text-gray-900 mb-6" }, "What We Do"),
                React.createElement("div", { className: "space-y-6 max-w-4xl" }, serviceData.detailedServices.map(function (item, idx) { return (React.createElement("div", { key: idx, className: "flex items-start gap-4" },
                    React.createElement("div", { className: "flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-2xl" }, item.icon),
                    React.createElement("div", null,
                        React.createElement("h4", { className: "text-lg font-medium text-gray-800" }, item.title),
                        React.createElement("p", { className: "text-gray-600" }, item.description)))); })))),
            serviceData.keyBenefits && (React.createElement("div", { className: "mb-16" },
                React.createElement("h3", { className: "text-2xl font-semibold text-gray-900 mb-6" }, "Key Benefits"),
                React.createElement("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, serviceData.keyBenefits.map(function (benefit, idx) { return (React.createElement("li", { key: idx, className: "flex items-start text-gray-700 gap-3" },
                    React.createElement(fa6_1.FaCheck, { className: "text-green-600 mt-1" }),
                    React.createElement("span", null, benefit))); }))))),
        React.createElement(ContactInfoSection_1["default"], null),
        React.createElement(GetInTouchSection_1["default"], null)));
}
exports["default"] = ServicePage;
