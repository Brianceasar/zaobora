"use client";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var service_list_1 = require("@/lib/constants/service-list");
var fa6_1 = require("react-icons/fa6");
var fa_1 = require("react-icons/fa");
var ICONS = {
    FaUserGraduate: fa6_1.FaUserGraduate,
    FaSeedling: fa6_1.FaSeedling,
    FaCreditCard: fa6_1.FaCreditCard,
    FaFlask: fa6_1.FaFlask,
    FaChartBar: fa6_1.FaChartBar,
    FaRadio: fa6_1.FaRadio,
    FaHandshake: fa6_1.FaHandshake,
    FaTint: fa_1.FaTint
};
// Enhanced ServiceCard Component
var ServiceCard = function (_a) {
    var IconComponent = _a.icon, title = _a.title, description = _a.description, href = _a.href, features = _a.features;
    var _b = react_1.useState(false), isHovered = _b[0], setIsHovered = _b[1];
    return (React.createElement("div", { className: "group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 \n                 hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2 \n                 overflow-hidden", onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); } },
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/50 \n                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
        React.createElement("div", { className: "relative z-10 p-8" },
            React.createElement("div", { className: "mb-6" },
                React.createElement("div", { className: "relative w-16 h-16 mx-auto mb-4" },
                    React.createElement("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 \n                           flex items-center justify-center shadow-lg transform transition-all duration-500\n                           " + (isHovered ? 'rotate-6 scale-110' : 'rotate-0 scale-100') }, IconComponent ? (React.createElement(IconComponent, { className: "w-8 h-8 text-white" })) : (React.createElement("svg", { className: "w-8 h-8 text-white", fill: "currentColor", viewBox: "0 0 20 20" },
                        React.createElement("path", { fillRule: "evenodd", d: "M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z", clipRule: "evenodd" })))),
                    React.createElement("div", { className: "absolute inset-0 rounded-2xl border-2 border-green-400 transition-all duration-500\n                           " + (isHovered ? 'scale-125 opacity-0' : 'scale-100 opacity-0') }))),
            React.createElement("h3", { className: "text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-green-700 \n                     transition-colors duration-300" }, title),
            React.createElement("p", { className: "text-gray-600 text-center mb-6 leading-relaxed" }, description),
            features && features.length > 0 && (React.createElement("ul", { className: "space-y-2 mb-6" }, features.slice(0, 3).map(function (feature, idx) { return (React.createElement("li", { key: idx, className: "flex items-center text-sm text-gray-600" },
                React.createElement("svg", { className: "w-4 h-4 text-green-500 mr-2 flex-shrink-0", fill: "currentColor", viewBox: "0 0 20 20" },
                    React.createElement("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" })),
                React.createElement("span", null, feature))); }))),
            React.createElement("div", { className: "text-center" },
                React.createElement("a", { href: href, className: "inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold \n                     transition-all duration-300 group-hover:gap-3" },
                    React.createElement("span", null, "Learn More"),
                    React.createElement("svg", { className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 8l4 4m0 0l-4 4m4-4H3" }))))),
        React.createElement("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 \n                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" })));
};
var ServiceSection = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = react_1.useState([]), visibleCards = _b[0], setVisibleCards = _b[1];
    var sectionRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Stagger card animations
                service_list_1.SERVICES_CONTENT.cards.forEach(function (_, index) {
                    setTimeout(function () {
                        setVisibleCards(function (prev) { return __spreadArrays(prev, [index]); });
                    }, index * 150);
                });
            }
        }, { threshold: 0.1 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return function () { return observer.disconnect(); };
    }, []);
    return (React.createElement("section", { ref: sectionRef, id: service_list_1.SERVICES_CONTENT.sectionId, className: "relative py-20 overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 bg-cover bg-center bg-fixed", style: { backgroundImage: "url('" + service_list_1.SERVICES_CONTENT.backgroundImage + "')" } }),
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-b from-white/95 via-green-50/90 to-white/95" }),
        React.createElement("div", { className: "absolute inset-0 overflow-hidden pointer-events-none" },
            React.createElement("div", { className: "absolute top-20 left-20 w-32 h-32 bg-green-200/20 rounded-full animate-pulse" }),
            React.createElement("div", { className: "absolute bottom-20 right-20 w-24 h-24 bg-emerald-200/30 rounded-full animate-bounce", style: { animationDelay: "2s" } }),
            React.createElement("div", { className: "absolute top-1/2 left-1/4 w-16 h-16 bg-green-300/25 rounded-full animate-ping", style: { animationDuration: "4s" } })),
        React.createElement("div", { className: "container mx-auto px-4 lg:px-6 relative z-10" },
            React.createElement("div", { className: "text-center mb-16 transform transition-all duration-1000 " + (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0') },
                React.createElement("div", { className: "max-w-4xl mx-auto" },
                    React.createElement("div", { className: "flex items-center justify-center gap-3 mb-4" },
                        React.createElement("div", { className: "w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" }),
                        React.createElement("span", { className: "text-green-600 uppercase font-semibold text-sm tracking-wide" }, service_list_1.SERVICES_CONTENT.subtitle),
                        React.createElement("div", { className: "w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" })),
                    React.createElement("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" },
                        React.createElement("span", { className: "block" }, service_list_1.SERVICES_CONTENT.title.split(' ').slice(0, 2).join(' ')),
                        React.createElement("span", { className: "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent" }, service_list_1.SERVICES_CONTENT.title.split(' ').slice(2).join(' '))),
                    React.createElement("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" }, "We provide integrated agricultural solutions that support farmers from knowledge and training to inputs, finance, technology, and research. Our goal is to improve productivity, profitability, and sustainability while making farmers more resilient and prosperous."))),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" }, service_list_1.SERVICES_CONTENT.cards.map(function (service, index) { return (React.createElement("div", { key: index, className: "transform transition-all duration-700 " + (visibleCards.includes(index)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'), style: { transitionDelay: index * 100 + "ms" } },
                React.createElement(ServiceCard, __assign({}, service, { icon: ICONS[service.icon] })))); })))));
};
exports["default"] = ServiceSection;
