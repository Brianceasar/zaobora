// src/app/services/page.tsx
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
var link_1 = require("next/link");
var fa6_1 = require("react-icons/fa6");
var fa_1 = require("react-icons/fa");
var icons_1 = require("@/lib/constants/icons");
var service_list_1 = require("@/lib/constants/service-list");
var ServicesPage = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = react_1.useState([]), visibleCards = _b[0], setVisibleCards = _b[1];
    var _c = react_1.useState('all'), selectedCategory = _c[0], setSelectedCategory = _c[1];
    var _d = react_1.useState('grid'), viewMode = _d[0], setViewMode = _d[1];
    var heroRef = react_1.useRef(null);
    // Get unique categories
    var categories = __spreadArrays(['all'], new Set(service_list_1.SERVICES_CONTENT.cards.map(function (service) { return service.category; })));
    // Filter services based on selected category
    var filteredServices = selectedCategory === 'all'
        ? service_list_1.SERVICES_CONTENT.cards
        : service_list_1.SERVICES_CONTENT.cards.filter(function (service) { return service.category === selectedCategory; });
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.1 });
        if (heroRef.current) {
            observer.observe(heroRef.current);
        }
        return function () { return observer.disconnect(); };
    }, []);
    // Animate cards when visible or category changes
    react_1.useEffect(function () {
        if (!isVisible)
            return;
        setVisibleCards([]);
        filteredServices.forEach(function (_, index) {
            setTimeout(function () {
                setVisibleCards(function (prev) { return __spreadArrays(prev, [index]); });
            }, index * 100);
        });
    }, [isVisible, selectedCategory]);
    return (react_1["default"].createElement("div", { className: "min-h-screen bg-white" },
        react_1["default"].createElement("section", { ref: heroRef, className: "relative pt-20 md:pt-24 pb-16 md:pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden" },
            react_1["default"].createElement("div", { className: "absolute inset-0 overflow-hidden pointer-events-none" },
                react_1["default"].createElement("div", { className: "absolute top-10 md:top-20 left-4 md:left-20 w-16 md:w-32 h-16 md:h-32 bg-green-200/20 rounded-full animate-pulse" }),
                react_1["default"].createElement("div", { className: "absolute bottom-10 md:bottom-20 right-4 md:right-20 w-12 md:w-24 h-12 md:h-24 bg-emerald-200/30 rounded-full animate-bounce", style: { animationDelay: "1s" } }),
                react_1["default"].createElement("div", { className: "absolute top-1/2 left-1/4 w-8 md:w-16 h-8 md:h-16 bg-green-300/25 rounded-full animate-ping", style: { animationDuration: "4s" } })),
            react_1["default"].createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },
                react_1["default"].createElement("div", { className: "max-w-4xl mx-auto text-center" },
                    react_1["default"].createElement("nav", { className: "flex items-center justify-center gap-2 text-sm text-gray-600 mb-6 transform transition-all duration-1000 " + (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0') },
                        react_1["default"].createElement(link_1["default"], { href: "/", className: "hover:text-green-600 transition-colors" }, "Home"),
                        react_1["default"].createElement("span", null, "/"),
                        react_1["default"].createElement("span", { className: "text-green-600 font-medium" }, "Services")),
                    react_1["default"].createElement("div", { className: "mb-8 transform transition-all duration-1000 delay-200 " + (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0') },
                        react_1["default"].createElement("div", { className: "flex items-center justify-center gap-3 mb-6" },
                            react_1["default"].createElement("div", { className: "w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" }),
                            react_1["default"].createElement("span", { className: "text-green-600 uppercase font-semibold text-sm tracking-wide" }, service_list_1.SERVICES_CONTENT.subtitle),
                            react_1["default"].createElement("div", { className: "w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" })),
                        react_1["default"].createElement("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" },
                            react_1["default"].createElement("span", { className: "block" }, service_list_1.SERVICES_CONTENT.title.split(' ').slice(0, 2).join(' ')),
                            react_1["default"].createElement("span", { className: "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent" }, service_list_1.SERVICES_CONTENT.title.split(' ').slice(2).join(' '))),
                        react_1["default"].createElement("p", { className: "text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" }, service_list_1.SERVICES_CONTENT.description)),
                    react_1["default"].createElement("div", { className: "grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-400 " + (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0') },
                        react_1["default"].createElement("div", { className: "text-center" },
                            react_1["default"].createElement("div", { className: "text-2xl md:text-3xl font-bold text-green-600" }, service_list_1.SERVICES_CONTENT.cards.length),
                            react_1["default"].createElement("div", { className: "text-sm md:text-base text-gray-600" }, "Services")),
                        react_1["default"].createElement("div", { className: "text-center" },
                            react_1["default"].createElement("div", { className: "text-2xl md:text-3xl font-bold text-emerald-600" }, "1000+"),
                            react_1["default"].createElement("div", { className: "text-sm md:text-base text-gray-600" }, "Farmers Served")),
                        react_1["default"].createElement("div", { className: "text-center" },
                            react_1["default"].createElement("div", { className: "text-2xl md:text-3xl font-bold text-green-600" }, "5+"),
                            react_1["default"].createElement("div", { className: "text-sm md:text-base text-gray-600" }, "Years Experience")))))),
        react_1["default"].createElement("section", { className: "bg-white border-b border-gray-200 top-16 md:top-20 z-40" },
            react_1["default"].createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-4" },
                react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4" },
                    react_1["default"].createElement("div", { className: "flex items-center gap-3 flex-wrap" },
                        react_1["default"].createElement(fa6_1.FaFilter, { className: "text-gray-500 w-4 h-4" }),
                        react_1["default"].createElement("span", { className: "text-sm font-medium text-gray-700" }, "Filter by:"),
                        categories.map(function (category) { return (react_1["default"].createElement("button", { key: category, onClick: function () { return setSelectedCategory(category); }, className: "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap " + (selectedCategory === category
                                ? 'bg-green-100 text-green-700 border-2 border-green-300'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-transparent') }, category === 'all' ? 'All Services' : category)); })),
                    react_1["default"].createElement("div", { className: "flex items-center gap-2 bg-gray-100 p-1 rounded-lg" },
                        react_1["default"].createElement("button", { onClick: function () { return setViewMode('grid'); }, className: "p-2 rounded-md transition-all duration-300 " + (viewMode === 'grid'
                                ? 'bg-white text-green-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700') },
                            react_1["default"].createElement(fa_1.FaThLarge, { className: "w-4 h-4" })),
                        react_1["default"].createElement("button", { onClick: function () { return setViewMode('list'); }, className: "p-2 rounded-md transition-all duration-300 " + (viewMode === 'list'
                                ? 'bg-white text-green-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700') },
                            react_1["default"].createElement(fa6_1.FaList, { className: "w-4 h-4" })))))),
        react_1["default"].createElement("section", { className: "py-12 md:py-20" },
            react_1["default"].createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8" },
                react_1["default"].createElement("div", { className: "mb-8 text-center" },
                    react_1["default"].createElement("p", { className: "text-gray-600" },
                        "Showing ",
                        react_1["default"].createElement("span", { className: "font-semibold text-green-600" }, filteredServices.length),
                        selectedCategory === 'all' ? ' services' : " services in " + selectedCategory)),
                react_1["default"].createElement("div", { className: "" + (viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'
                        : 'space-y-6') }, filteredServices.map(function (service, index) { return (react_1["default"].createElement("div", { key: service.id, className: "transform transition-all duration-700 " + (visibleCards.includes(index)
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'), style: { transitionDelay: index * 50 + "ms" } }, viewMode === 'grid' ? (
                // Grid Card View
                react_1["default"].createElement(link_1["default"], { href: service.href, className: "group block bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 \n                             hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden" },
                    react_1["default"].createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/50 \n                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                    react_1["default"].createElement("div", { className: "relative z-10 p-6 md:p-8" },
                        react_1["default"].createElement("div", { className: "mb-6" },
                            react_1["default"].createElement("div", { className: "relative w-16 h-16 mx-auto" },
                                react_1["default"].createElement("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br " + service.bgColor + " \n                                         flex items-center justify-center shadow-lg transform \n                                         group-hover:rotate-6 group-hover:scale-110 transition-all duration-500" }, service.icon && icons_1.ICONS[service.icon] ? (react_1["default"].createElement(icons_1.ICONS[service.icon], { className: "w-8 h-8 text-white" })) : (react_1["default"].createElement("span", { className: "text-2xl" }, service.emoji))))),
                        react_1["default"].createElement("div", { className: "text-center mb-3" },
                            react_1["default"].createElement("span", { className: "inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium" }, service.category)),
                        react_1["default"].createElement("h3", { className: "text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-green-700 \n                                   transition-colors duration-300 line-clamp-2" }, service.title),
                        react_1["default"].createElement("p", { className: "text-gray-600 text-center mb-6 leading-relaxed line-clamp-3" }, service.shortDescription),
                        service.features && (react_1["default"].createElement("ul", { className: "space-y-1 mb-6" }, service.features.slice(0, 2).map(function (feature, idx) { return (react_1["default"].createElement("li", { key: idx, className: "flex items-center text-sm text-gray-600" },
                            react_1["default"].createElement("div", { className: "w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0" }),
                            react_1["default"].createElement("span", { className: "line-clamp-1" }, feature))); }))),
                        react_1["default"].createElement("div", { className: "text-center" },
                            react_1["default"].createElement("span", { className: "inline-flex items-center gap-2 text-green-600 font-semibold \n                                       transition-all duration-300 group-hover:gap-3" },
                                react_1["default"].createElement("span", null, "Learn More"),
                                react_1["default"].createElement(fa6_1.FaArrowRight, { className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" })))),
                    react_1["default"].createElement("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r " + service.bgColor + " \n                                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" }))) : (
                // List View
                react_1["default"].createElement(link_1["default"], { href: service.href, className: "group block bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 \n                             hover:border-green-200 transition-all duration-300 overflow-hidden" },
                    react_1["default"].createElement("div", { className: "p-6 md:p-8" },
                        react_1["default"].createElement("div", { className: "grid md:grid-cols-4 gap-6 items-center" },
                            react_1["default"].createElement("div", { className: "text-center md:text-left" },
                                react_1["default"].createElement("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br " + service.bgColor + " \n                                         flex items-center justify-center shadow-lg mx-auto md:mx-0 mb-3 \n                                         transform group-hover:scale-110 transition-all duration-500" }, service.icon && icons_1.ICONS[service.icon] ? (react_1["default"].createElement(icons_1.ICONS[service.icon], { className: "w-8 h-8 text-white" })) : (react_1["default"].createElement("span", { className: "text-2xl" }, service.emoji))),
                                react_1["default"].createElement("span", { className: "inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium" }, service.category)),
                            react_1["default"].createElement("div", { className: "md:col-span-2 text-center md:text-left" },
                                react_1["default"].createElement("h3", { className: "text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 \n                                       transition-colors duration-300" }, service.title),
                                react_1["default"].createElement("p", { className: "text-gray-600 leading-relaxed line-clamp-2" }, service.shortDescription)),
                            react_1["default"].createElement("div", { className: "text-center md:text-right" },
                                react_1["default"].createElement("span", { className: "inline-flex items-center gap-2 text-green-600 hover:text-green-700 \n                                         font-semibold transition-all duration-300 group-hover:gap-3" },
                                    react_1["default"].createElement("span", null, "Learn More"),
                                    react_1["default"].createElement(fa6_1.FaArrowRight, { className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" }))))))))); })),
                filteredServices.length === 0 && (react_1["default"].createElement("div", { className: "text-center py-16" },
                    react_1["default"].createElement("div", { className: "w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4" },
                        react_1["default"].createElement(fa6_1.FaFilter, { className: "w-8 h-8 text-gray-400" })),
                    react_1["default"].createElement("h3", { className: "text-xl font-semibold text-gray-900 mb-2" }, "No Services Found"),
                    react_1["default"].createElement("p", { className: "text-gray-600 mb-6" }, "Try selecting a different category or view all services."),
                    react_1["default"].createElement("button", { onClick: function () { return setSelectedCategory('all'); }, className: "bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300" }, "View All Services"))))),
        react_1["default"].createElement("section", { className: "bg-gradient-to-r from-green-600 to-emerald-600 py-12 md:py-16" },
            react_1["default"].createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center" },
                react_1["default"].createElement("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4" }, "Need Help Choosing the Right Service?"),
                react_1["default"].createElement("p", { className: "text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto" }, "Our agricultural experts are here to help you find the perfect solution for your farming needs."),
                react_1["default"].createElement("div", { className: "flex flex-col sm:flex-row gap-4 justify-center" },
                    react_1["default"].createElement(link_1["default"], { href: "/contact", className: "inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" },
                        react_1["default"].createElement("span", null, "Get Consultation"),
                        react_1["default"].createElement(fa6_1.FaArrowRight, { className: "w-5 h-5" })),
                    react_1["default"].createElement("a", { href: "tel:+255752563361", className: "inline-flex items-center justify-center gap-3 bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300" },
                        react_1["default"].createElement("span", null, "Call Now")))))));
};
exports["default"] = ServicesPage;
