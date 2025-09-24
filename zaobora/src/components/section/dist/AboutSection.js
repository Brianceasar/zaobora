"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var about_1 = require("@/lib/constants/about");
var AboutSection = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = react_1.useState(false), imageLoaded = _b[0], setImageLoaded = _b[1];
    var sectionRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.2 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return function () { return observer.disconnect(); };
    }, []);
    return (React.createElement("section", { ref: sectionRef, id: about_1.ABOUT_CONTENT.sectionId, className: "relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 overflow-hidden pointer-events-none" },
            React.createElement("div", { className: "absolute top-20 -left-20 w-40 h-40 bg-green-100 rounded-full opacity-30 animate-pulse" }),
            React.createElement("div", { className: "absolute bottom-20 -right-20 w-32 h-32 bg-emerald-100 rounded-full opacity-40 animate-bounce", style: { animationDelay: "1s" } }),
            React.createElement("div", { className: "absolute inset-0 opacity-3" },
                React.createElement("div", { className: "absolute inset-0", style: {
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2334d399' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E\")"
                    } }))),
        React.createElement("div", { className: "container mx-auto px-4 lg:px-6 relative z-10" },
            React.createElement("div", { className: "grid md:grid-cols-2 gap-12 lg:gap-16 items-center" },
                React.createElement("div", { className: "transform transition-all duration-1000 " + (isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0') },
                    React.createElement("div", { className: "relative group" },
                        React.createElement("div", { className: "relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-green-100 to-emerald-100" },
                            React.createElement(image_1["default"], { src: about_1.ABOUT_CONTENT.image.src, alt: about_1.ABOUT_CONTENT.image.alt, width: about_1.ABOUT_CONTENT.image.width, height: about_1.ABOUT_CONTENT.image.height, className: "w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-700 " + (imageLoaded ? 'opacity-100' : 'opacity-0'), onLoad: function () { return setImageLoaded(true); } }),
                            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-tr from-green-600/10 via-transparent to-emerald-600/10 \n                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" })),
                        React.createElement("div", { className: "absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-green-100 \n                            transform rotate-3 hover:rotate-0 transition-transform duration-300 group-hover:scale-110" },
                            React.createElement("div", { className: "text-center" },
                                React.createElement("div", { className: "text-2xl font-bold text-green-600" }, "2020"),
                                React.createElement("div", { className: "text-sm text-gray-600" }, "Founded"))),
                        React.createElement("div", { className: "absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-500 to-green-500 text-white \n                            rounded-xl shadow-lg p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300 \n                            group-hover:scale-110" },
                            React.createElement("div", { className: "text-center" },
                                React.createElement("div", { className: "text-xl font-bold" }, "1000+"),
                                React.createElement("div", { className: "text-xs opacity-90" }, "Farmers Empowered"))),
                        React.createElement("div", { className: "absolute -top-2 -left-2 w-20 h-20 bg-green-200/30 rounded-full animate-ping", style: { animationDuration: "3s" } }),
                        React.createElement("div", { className: "absolute -bottom-4 -right-4 w-16 h-16 bg-emerald-300/40 rounded-full animate-pulse", style: { animationDelay: "1.5s" } }))),
                React.createElement("div", { className: "transform transition-all duration-1000 delay-300 " + (isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0') },
                    React.createElement("div", { className: "mb-8" },
                        React.createElement("div", { className: "flex items-center gap-3 mb-4" },
                            React.createElement("div", { className: "w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" }),
                            React.createElement("span", { className: "text-green-600 uppercase font-semibold text-sm tracking-wide" }, about_1.ABOUT_CONTENT.subtitle)),
                        React.createElement("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6" },
                            React.createElement("span", { className: "block" }, about_1.ABOUT_CONTENT.title.split(' ').slice(0, 2).join(' ')),
                            React.createElement("span", { className: "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent" }, about_1.ABOUT_CONTENT.title.split(' ').slice(2).join(' '))),
                        React.createElement("p", { className: "text-lg text-gray-600 leading-relaxed mb-8" }, about_1.ABOUT_CONTENT.description)),
                    React.createElement("div", { className: "grid grid-cols-2 gap-6 mb-8" },
                        React.createElement("div", { className: "group" },
                            React.createElement("div", { className: "flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-100 \n                              hover:bg-green-100 hover:border-green-200 transition-all duration-300" },
                                React.createElement("div", { className: "w-10 h-10 bg-green-500 rounded-full flex items-center justify-center \n                                group-hover:scale-110 transition-transform duration-300" },
                                    React.createElement("svg", { className: "w-5 h-5 text-white", fill: "currentColor", viewBox: "0 0 20 20" },
                                        React.createElement("path", { fillRule: "evenodd", d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }))),
                                React.createElement("div", null,
                                    React.createElement("div", { className: "font-semibold text-gray-900" }, "Sustainable"),
                                    React.createElement("div", { className: "text-sm text-gray-600" }, "Farming Methods")))),
                        React.createElement("div", { className: "group" },
                            React.createElement("div", { className: "flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100 \n                              hover:bg-emerald-100 hover:border-emerald-200 transition-all duration-300" },
                                React.createElement("div", { className: "w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center \n                                group-hover:scale-110 transition-transform duration-300" },
                                    React.createElement("svg", { className: "w-5 h-5 text-white", fill: "currentColor", viewBox: "0 0 20 20" },
                                        React.createElement("path", { d: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" }))),
                                React.createElement("div", null,
                                    React.createElement("div", { className: "font-semibold text-gray-900" }, "Community"),
                                    React.createElement("div", { className: "text-sm text-gray-600" }, "Focused Support")))),
                        React.createElement("div", { className: "group" },
                            React.createElement("div", { className: "flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-100 \n                              hover:bg-green-100 hover:border-green-200 transition-all duration-300" },
                                React.createElement("div", { className: "w-10 h-10 bg-green-500 rounded-full flex items-center justify-center \n                                group-hover:scale-110 transition-transform duration-300" },
                                    React.createElement("svg", { className: "w-5 h-5 text-white", fill: "currentColor", viewBox: "0 0 20 20" },
                                        React.createElement("path", { fillRule: "evenodd", d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }))),
                                React.createElement("div", null,
                                    React.createElement("div", { className: "font-semibold text-gray-900" }, "Expert"),
                                    React.createElement("div", { className: "text-sm text-gray-600" }, "Guidance")))),
                        React.createElement("div", { className: "group" },
                            React.createElement("div", { className: "flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100 \n                              hover:bg-emerald-100 hover:border-emerald-200 transition-all duration-300" },
                                React.createElement("div", { className: "w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center \n                                group-hover:scale-110 transition-transform duration-300" },
                                    React.createElement("svg", { className: "w-5 h-5 text-white", fill: "currentColor", viewBox: "0 0 20 20" },
                                        React.createElement("path", { fillRule: "evenodd", d: "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z", clipRule: "evenodd" }))),
                                React.createElement("div", null,
                                    React.createElement("div", { className: "font-semibold text-gray-900" }, "Proven"),
                                    React.createElement("div", { className: "text-sm text-gray-600" }, "Results"))))),
                    React.createElement("div", { className: "mt-8 p-6 bg-gradient-to-r from-gray-50 to-green-50 rounded-xl border border-green-100" },
                        React.createElement("div", { className: "flex items-start gap-4" },
                            React.createElement("div", { className: "w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0" },
                                React.createElement("svg", { className: "w-6 h-6 text-green-600", fill: "currentColor", viewBox: "0 0 20 20" },
                                    React.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }))),
                            React.createElement("div", null,
                                React.createElement("h4", { className: "font-semibold text-gray-900 mb-2" }, "Our Mission"),
                                React.createElement("p", { className: "text-sm text-gray-600 leading-relaxed" }, "Building sustainable agricultural value chains that uplift rural communities while promoting environmental stewardship and climate-smart farming practices.")))))))));
};
exports["default"] = AboutSection;
