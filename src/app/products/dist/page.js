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
var image_1 = require("next/image");
var link_1 = require("next/link");
var fa6_1 = require("react-icons/fa6");
var fa_1 = require("react-icons/fa");
var products_1 = require("@/lib/constants/products");
var Header_1 = require("@/components/layout/header/Header");
function ProductsPage() {
    var _a = react_1.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = react_1.useState([]), visibleCards = _b[0], setVisibleCards = _b[1];
    var _c = react_1.useState("all"), selectedCategory = _c[0], setSelectedCategory = _c[1];
    var _d = react_1.useState("grid"), viewMode = _d[0], setViewMode = _d[1];
    var _e = react_1.useState(""), searchTerm = _e[0], setSearchTerm = _e[1];
    var heroRef = react_1.useRef(null);
    // ✅ Get unique categories only once
    var categories = react_1.useMemo(function () { return __spreadArrays(["all"], new Set(products_1.PRODUCTS.map(function (product) { return product.category || "Other"; }))); }, []);
    // ✅ Memoize filtered products to avoid re-creating array each render
    var filteredProducts = react_1.useMemo(function () {
        return products_1.PRODUCTS.filter(function (product) {
            var matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
            var matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchTerm]);
    // ✅ Hero visibility observer
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            return setIsVisible(entry.isIntersecting);
        }, { threshold: 0.1 });
        if (heroRef.current)
            observer.observe(heroRef.current);
        return function () { return observer.disconnect(); };
    }, []);
    // ✅ Animate card reveal when filteredProducts changes
    react_1.useEffect(function () {
        setVisibleCards([]); // reset
        var timeouts = [];
        filteredProducts.forEach(function (_, index) {
            var t = setTimeout(function () {
                setVisibleCards(function (prev) { return __spreadArrays(prev, [index]); });
            }, index * 100);
            timeouts.push(t);
        });
        return function () {
            timeouts.forEach(clearTimeout); // ✅ cleanup to avoid memory leaks
        };
    }, [filteredProducts]);
    return (React.createElement("div", { className: "min-h-screen bg-white" },
        React.createElement(Header_1["default"], null),
        React.createElement("section", { ref: heroRef, className: "relative pt-20 md:pt-24 pb-16 md:pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden" },
            React.createElement("div", { className: "absolute inset-0 overflow-hidden pointer-events-none" },
                React.createElement("div", { className: "absolute top-10 md:top-20 left-4 md:left-20 w-16 md:w-32 h-16 md:h-32 bg-green-200/20 rounded-full animate-pulse" }),
                React.createElement("div", { className: "absolute bottom-10 md:bottom-20 right-4 md:right-20 w-12 md:w-24 h-12 md:h-24 bg-emerald-200/30 rounded-full animate-bounce", style: { animationDelay: "1s" } }),
                React.createElement("div", { className: "absolute top-1/2 left-1/4 w-8 md:w-16 h-8 md:h-16 bg-green-300/25 rounded-full animate-ping", style: { animationDuration: "4s" } })),
            React.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },
                React.createElement("div", { className: "max-w-4xl mx-auto text-center" },
                    React.createElement("nav", { className: "flex items-center justify-center gap-2 text-sm text-gray-600 mb-6 transform transition-all duration-1000 " + (isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0") },
                        React.createElement(link_1["default"], { href: "/", className: "hover:text-green-600 transition-colors" }, "Home"),
                        React.createElement("span", null, "/"),
                        React.createElement("span", { className: "text-green-600 font-medium" }, "Products")),
                    React.createElement("div", { className: "mb-8 transform transition-all duration-1000 delay-200 " + (isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0") },
                        React.createElement("div", { className: "flex items-center justify-center gap-3 mb-6" },
                            React.createElement(fa6_1.FaLeaf, { className: "w-6 h-6 text-green-500" }),
                            React.createElement("span", { className: "text-green-600 uppercase font-semibold text-sm tracking-wide" }, "Farm Fresh Products"),
                            React.createElement(fa6_1.FaSeedling, { className: "w-6 h-6 text-emerald-500" })),
                        React.createElement("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" },
                            "Our",
                            " ",
                            React.createElement("span", { className: "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent" }, "Products")),
                        React.createElement("p", { className: "text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" }, "Discover our wide range of farm-fresh products designed to meet your unique needs. From sustainably grown produce to natural delights, every product reflects our commitment to quality and environmental stewardship.")),
                    React.createElement("div", { className: "grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-400 " + (isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0") },
                        React.createElement("div", { className: "text-center" },
                            React.createElement("div", { className: "text-2xl md:text-3xl font-bold text-green-600" },
                                products_1.PRODUCTS.length,
                                "+"),
                            React.createElement("div", { className: "text-sm md:text-base text-gray-600" }, "Products")),
                        React.createElement("div", { className: "text-center" },
                            React.createElement("div", { className: "text-2xl md:text-3xl font-bold text-emerald-600" }, "100%"),
                            React.createElement("div", { className: "text-sm md:text-base text-gray-600" }, "Natural")),
                        React.createElement("div", { className: "text-center" },
                            React.createElement("div", { className: "text-2xl md:text-3xl font-bold text-green-600" }, "Fresh"),
                            React.createElement("div", { className: "text-sm md:text-base text-gray-600" }, "Daily")))))),
        React.createElement("section", { className: "bg-white border-b border-gray-200 py-6" },
            React.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "max-w-2xl mx-auto mb-6" },
                    React.createElement("div", { className: "relative" },
                        React.createElement("input", { type: "text", placeholder: "Search products...", value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, className: "w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50" }),
                        React.createElement("div", { className: "absolute left-4 top-1/2 transform -translate-y-1/2" },
                            React.createElement("svg", { className: "w-5 h-5 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }))))),
                React.createElement("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4" },
                    React.createElement("div", { className: "flex items-center gap-3 flex-wrap" },
                        React.createElement(fa6_1.FaFilter, { className: "text-gray-500 w-4 h-4" }),
                        React.createElement("span", { className: "text-sm font-medium text-gray-700" }, "Filter by:"),
                        categories.map(function (category) { return (React.createElement("button", { key: category, onClick: function () { return setSelectedCategory(category); }, className: "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap " + (selectedCategory === category
                                ? 'bg-green-100 text-green-700 border-2 border-green-300'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-transparent') }, category === 'all' ? 'All Products' : category)); })),
                    React.createElement("div", { className: "flex items-center gap-2 bg-gray-100 p-1 rounded-lg" },
                        React.createElement("button", { onClick: function () { return setViewMode('grid'); }, className: "p-2 rounded-md transition-all duration-300 " + (viewMode === 'grid'
                                ? 'bg-white text-green-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700') },
                            React.createElement(fa_1.FaThLarge, { className: "w-4 h-4" })),
                        React.createElement("button", { onClick: function () { return setViewMode('list'); }, className: "p-2 rounded-md transition-all duration-300 " + (viewMode === 'list'
                                ? 'bg-white text-green-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700') },
                            React.createElement(fa6_1.FaList, { className: "w-4 h-4" })))))),
        React.createElement("section", { className: "py-12 md:py-20" },
            React.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "mb-8 text-center" },
                    React.createElement("p", { className: "text-gray-600" },
                        "Showing ",
                        React.createElement("span", { className: "font-semibold text-green-600" }, filteredProducts.length),
                        selectedCategory === 'all' ? ' products' : " products in " + selectedCategory,
                        searchTerm && " matching \"" + searchTerm + "\"")),
                React.createElement("div", { className: "" + (viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'
                        : 'space-y-6') }, filteredProducts.map(function (product, index) { return (React.createElement("div", { key: product.id, className: "transform transition-all duration-700 " + (visibleCards.includes(index)
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'), style: { transitionDelay: index * 50 + "ms" } }, viewMode === 'grid' ? (
                // Grid Card View
                React.createElement(link_1["default"], { href: "/products/" + product.id, className: "group block bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 \n                             hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full" },
                    React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/50 \n                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                    React.createElement("div", { className: "relative overflow-hidden" },
                        React.createElement(image_1["default"], { src: product.image, alt: product.title, width: 400, height: 300, className: "w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" }),
                        React.createElement("div", { className: "absolute top-4 left-4" },
                            React.createElement("span", { className: "inline-block px-3 py-1 bg-green-100/90 backdrop-blur-sm text-green-700 rounded-full text-xs font-medium" }, product.category || 'Product')),
                        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent \n                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" })),
                    React.createElement("div", { className: "relative z-10 p-6 flex flex-col h-full" },
                        React.createElement("h3", { className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 \n                                   transition-colors duration-300 line-clamp-2" }, product.title),
                        React.createElement("p", { className: "text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow" }, product.description),
                        React.createElement("div", { className: "mt-auto" },
                            React.createElement("span", { className: "inline-flex items-center gap-2 text-green-600 font-semibold \n                                       transition-all duration-300 group-hover:gap-3" },
                                React.createElement("span", null, "Learn More"),
                                React.createElement(fa6_1.FaArrowRight, { className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" })))),
                    React.createElement("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 \n                                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" }))) : (
                // List View
                React.createElement(link_1["default"], { href: "/products/" + product.id, className: "group block bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 \n                             hover:border-green-200 transition-all duration-300 overflow-hidden" },
                    React.createElement("div", { className: "p-6 md:p-8" },
                        React.createElement("div", { className: "grid md:grid-cols-4 gap-6 items-center" },
                            React.createElement("div", { className: "text-center md:text-left" },
                                React.createElement("div", { className: "relative" },
                                    React.createElement(image_1["default"], { src: product.image, alt: product.title, width: 200, height: 150, className: "w-full h-32 object-cover rounded-xl mx-auto md:mx-0 mb-3 \n                                       transform group-hover:scale-105 transition-transform duration-500" })),
                                React.createElement("span", { className: "inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium" }, product.category || 'Product')),
                            React.createElement("div", { className: "md:col-span-2 text-center md:text-left" },
                                React.createElement("h3", { className: "text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 \n                                       transition-colors duration-300" }, product.title),
                                React.createElement("p", { className: "text-gray-600 leading-relaxed line-clamp-3" }, product.description)),
                            React.createElement("div", { className: "text-center md:text-right" },
                                React.createElement("span", { className: "inline-flex items-center gap-2 text-green-600 hover:text-green-700 \n                                         font-semibold transition-all duration-300 group-hover:gap-3" },
                                    React.createElement("span", null, "Learn More"),
                                    React.createElement(fa6_1.FaArrowRight, { className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" }))))))))); })),
                filteredProducts.length === 0 && (React.createElement("div", { className: "text-center py-16" },
                    React.createElement("div", { className: "w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4" },
                        React.createElement(fa6_1.FaFilter, { className: "w-8 h-8 text-gray-400" })),
                    React.createElement("h3", { className: "text-xl font-semibold text-gray-900 mb-2" }, "No Products Found"),
                    React.createElement("p", { className: "text-gray-600 mb-6" }, searchTerm
                        ? "No products found matching \"" + searchTerm + "\". Try a different search term."
                        : 'Try selecting a different category or search for specific products.'),
                    React.createElement("div", { className: "flex flex-col sm:flex-row gap-3 justify-center" },
                        searchTerm && (React.createElement("button", { onClick: function () { return setSearchTerm(''); }, className: "bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300" }, "Clear Search")),
                        React.createElement("button", { onClick: function () { return setSelectedCategory('all'); }, className: "bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors duration-300" }, "View All Products")))))),
        React.createElement("section", { className: "bg-gradient-to-r from-green-600 to-emerald-600 py-12 md:py-16" },
            React.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center" },
                React.createElement("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4" }, "Interested in Our Products?"),
                React.createElement("p", { className: "text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto" }, "Get in touch with us to learn more about our farm-fresh products and how we can meet your needs."),
                React.createElement("div", { className: "flex flex-col sm:flex-row gap-4 justify-center" },
                    React.createElement(link_1["default"], { href: "/contact", className: "inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" },
                        React.createElement("span", null, "Contact Us"),
                        React.createElement(fa6_1.FaArrowRight, { className: "w-5 h-5" })),
                    React.createElement(link_1["default"], { href: "/services", className: "inline-flex items-center justify-center gap-3 bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300" },
                        React.createElement("span", null, "View Services")))))));
}
exports["default"] = ProductsPage;
