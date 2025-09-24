"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var hero_1 = require("@/lib/constants/hero");
var HeroSection = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = react_1.useState(0), scrollY = _b[0], setScrollY = _b[1];
    react_1.useEffect(function () {
        setIsVisible(true);
        var handleScroll = function () { return setScrollY(window.scrollY); };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    return (React.createElement("section", { className: "relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50" },
        React.createElement("div", { className: "absolute inset-0 overflow-hidden" },
            React.createElement("div", { className: "absolute top-20 left-10 w-32 h-32 bg-green-200/30 rounded-full animate-pulse" }),
            React.createElement("div", { className: "absolute top-40 right-20 w-24 h-24 bg-emerald-200/20 rounded-full animate-bounce", style: { animationDelay: "1s" } }),
            React.createElement("div", { className: "absolute bottom-40 left-20 w-16 h-16 bg-green-300/40 rounded-full animate-pulse", style: { animationDelay: "2s" } }),
            React.createElement("div", { className: "absolute inset-0 opacity-5" },
                React.createElement("div", { className: "absolute inset-0", style: {
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d399' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
                    } }))),
        React.createElement("div", { className: "container mx-auto px-4 lg:px-6 relative z-10" },
            React.createElement("div", { className: "grid lg:grid-cols-2 gap-12 items-center" },
                React.createElement("div", { className: "space-y-8 transform transition-all duration-1000 " + (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0') },
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("h1", { className: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900" },
                            React.createElement("span", { className: "block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent" }, "Empowering"),
                            React.createElement("span", { className: "block" }, "Farmers to enhance"),
                            React.createElement("span", { className: "block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent" }, "livelihoods")),
                        React.createElement("div", { className: "w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" })),
                    React.createElement("p", { className: "text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl" }, hero_1.HERO_CONTENT.description),
                    React.createElement("div", { className: "grid grid-cols-3 gap-6 py-6" },
                        React.createElement("div", { className: "text-center" },
                            React.createElement("div", { className: "text-2xl md:text-3xl font-bold text-green-600" }, "1000+"),
                            React.createElement("div", { className: "text-sm text-gray-600" }, "Farmers Helped")),
                        React.createElement("div", { className: "text-center" },
                            React.createElement("div", { className: "text-2xl md:text-3xl font-bold text-emerald-600" }, "50+"),
                            React.createElement("div", { className: "text-sm text-gray-600" }, "Success Stories")),
                        React.createElement("div", { className: "text-center" },
                            React.createElement("div", { className: "text-2xl md:text-3xl font-bold text-green-600" }, "95%"),
                            React.createElement("div", { className: "text-sm text-gray-600" }, "Satisfaction Rate")))),
                React.createElement("div", { className: "relative transform transition-all duration-1000 delay-300 " + (isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0') },
                    React.createElement("div", { className: "relative", style: { transform: "translateY(" + scrollY * 0.1 + "px)" } },
                        React.createElement("div", { className: "relative overflow-hidden rounded-2xl shadow-2xl" },
                            React.createElement(image_1["default"], { src: hero_1.HERO_CONTENT.image.src, alt: hero_1.HERO_CONTENT.image.alt, width: hero_1.HERO_CONTENT.image.width, height: hero_1.HERO_CONTENT.image.height, className: "w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500", priority: true }),
                            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent" })),
                        React.createElement("div", { className: "absolute -left-6 top-1/4 bg-white rounded-xl shadow-lg p-4 border border-green-100 \n                            transform hover:scale-105 transition-all duration-300 animate-float" },
                            React.createElement("div", { className: "flex items-center gap-3" },
                                React.createElement("div", { className: "w-10 h-10 bg-green-100 rounded-full flex items-center justify-center" },
                                    React.createElement("svg", { className: "w-5 h-5 text-green-600", fill: "currentColor", viewBox: "0 0 20 20" },
                                        React.createElement("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }))),
                                React.createElement("div", null,
                                    React.createElement("div", { className: "font-semibold text-gray-900" }, "Success Rate"),
                                    React.createElement("div", { className: "text-sm text-gray-600" }, "98% Growth")))),
                        React.createElement("div", { className: "absolute -right-6 bottom-1/4 bg-white rounded-xl shadow-lg p-4 border border-emerald-100 \n                            transform hover:scale-105 transition-all duration-300 animate-float", style: { animationDelay: "1s" } },
                            React.createElement("div", { className: "flex items-center gap-3" },
                                React.createElement("div", { className: "w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center" },
                                    React.createElement("svg", { className: "w-5 h-5 text-emerald-600", fill: "currentColor", viewBox: "0 0 20 20" },
                                        React.createElement("path", { fillRule: "evenodd", d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z", clipRule: "evenodd" }))),
                                React.createElement("div", null,
                                    React.createElement("div", { className: "font-semibold text-gray-900" }, "Revenue"),
                                    React.createElement("div", { className: "text-sm text-gray-600" }, "+150% Boost")))),
                        React.createElement("div", { className: "absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 \n                            rounded-full opacity-20 animate-pulse" }),
                        React.createElement("div", { className: "absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-400 \n                            rounded-full opacity-30 animate-bounce" }))))),
        React.createElement("div", { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" },
            React.createElement("div", { className: "flex flex-col items-center gap-2 text-gray-400" },
                React.createElement("span", { className: "text-sm" }, "Scroll to explore"),
                React.createElement("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }))))));
};
// Add custom CSS for animations
var styles = "\n  @keyframes float {\n    0%, 100% { transform: translateY(0px); }\n    50% { transform: translateY(-10px); }\n  }\n  \n  .animate-float {\n    animation: float 3s ease-in-out infinite;\n  }\n";
exports["default"] = HeroSection;
