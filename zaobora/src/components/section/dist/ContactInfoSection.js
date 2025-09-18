"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var fa6_1 = require("react-icons/fa6");
var ContactInfoSection = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = react_1.useState([]), visibleCards = _b[0], setVisibleCards = _b[1];
    var sectionRef = react_1.useRef(null);
    var contactInfo = [
        {
            icon: fa6_1.FaLocationDot,
            title: "Visit Our Office",
            subtitle: "Address",
            content: "Mbeya, Tanzania",
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50",
            hoverColor: "hover:bg-green-100",
            href: "https://maps.google.com/?q=Mbeya,Tanzania"
        },
        {
            icon: fa6_1.FaPhone,
            title: "Call Us Anytime",
            subtitle: "Talk to Us",
            content: "(+255) 752 563 361",
            color: "from-emerald-500 to-green-500",
            bgColor: "bg-emerald-50",
            hoverColor: "hover:bg-emerald-100",
            href: "tel:+255752563361"
        },
        {
            icon: fa6_1.FaEnvelope,
            title: "Send Email",
            subtitle: "Email Address",
            content: "info@zaobora.co.tz",
            color: "from-green-600 to-emerald-400",
            bgColor: "bg-green-50",
            hoverColor: "hover:bg-green-100",
            href: "mailto:info@zaobora.co.tz"
        }
    ];
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
                contactInfo.forEach(function (_, index) {
                    setTimeout(function () {
                        setVisibleCards(function (prev) { return __spreadArrays(prev, [index]); });
                    }, index * 200);
                });
            }
        }, { threshold: 0.2 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return function () { return observer.disconnect(); };
    }, []);
    return (React.createElement("section", { ref: sectionRef, id: "contact-us", className: "py-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 overflow-hidden pointer-events-none" },
            React.createElement("div", { className: "absolute top-10 left-10 w-20 h-20 bg-green-200/20 rounded-full animate-pulse" }),
            React.createElement("div", { className: "absolute bottom-20 right-20 w-16 h-16 bg-emerald-200/30 rounded-full animate-bounce", style: { animationDelay: "1s" } })),
        React.createElement("div", { className: "container mx-auto px-4 lg:px-6 relative z-10" },
            React.createElement("div", { className: "text-center mb-16 transform transition-all duration-1000 " + (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0') },
                React.createElement("div", { className: "flex items-center justify-center gap-3 mb-4" },
                    React.createElement("div", { className: "w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" }),
                    React.createElement("span", { className: "text-green-600 uppercase font-semibold text-sm tracking-wide" }, "Contact Information"),
                    React.createElement("div", { className: "w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" })),
                React.createElement("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" },
                    "Get in ",
                    React.createElement("span", { className: "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent" }, "Touch")),
                React.createElement("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto" }, "Ready to transform your farming? Reach out to us through any of these channels.")),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, contactInfo.map(function (info, index) { return (React.createElement("div", { key: index, className: "transform transition-all duration-700 " + (visibleCards.includes(index)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0') },
                React.createElement("a", { href: info.href, target: info.href.startsWith('http') ? '_blank' : '_self', rel: info.href.startsWith('http') ? 'noopener noreferrer' : undefined, className: "group block " + info.bgColor + " " + info.hoverColor + " rounded-2xl shadow-lg hover:shadow-2xl \n                          border border-gray-100 hover:border-green-200 transition-all duration-500 \n                          transform hover:-translate-y-2 p-8 h-full" },
                    React.createElement("div", { className: "mb-6" },
                        React.createElement("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br " + info.color + " \n                                 flex items-center justify-center shadow-lg transform \n                                 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500" },
                            React.createElement(info.icon, { className: "w-8 h-8 text-white" }))),
                    React.createElement("div", { className: "space-y-3" },
                        React.createElement("h3", { className: "text-xl font-bold text-gray-900 group-hover:text-green-700 \n                               transition-colors duration-300" }, info.title),
                        React.createElement("p", { className: "text-sm text-green-600 font-medium uppercase tracking-wide" }, info.subtitle),
                        React.createElement("p", { className: "text-gray-700 font-medium" }, info.content)),
                    React.createElement("div", { className: "mt-6 flex items-center gap-2 text-green-600 opacity-0 group-hover:opacity-100 \n                              transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" },
                        React.createElement("span", { className: "text-sm font-medium" }, "Connect now"),
                        React.createElement(fa6_1.FaArrowRight, { className: "w-4 h-4" })),
                    React.createElement("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r " + info.color + " \n                              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 \n                              rounded-b-2xl" })))); })))));
};
exports["default"] = ContactInfoSection;
