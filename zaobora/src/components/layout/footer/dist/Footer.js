"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var socials_1 = require("@/lib/constants/socials");
var footer_1 = require("@/lib/constants/footer");
var fa_1 = require("react-icons/fa");
var react_1 = require("react");
var Footer = function () {
    var _a = react_1.useState(false), showScrollTop = _a[0], setShowScrollTop = _a[1];
    react_1.useEffect(function () {
        var handleScroll = function () {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    var scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (React.createElement("footer", { className: "relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 opacity-5" },
            React.createElement("div", { className: "absolute inset-0", style: {
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
                } })),
        React.createElement("div", { className: "relative z-10 pt-16 pb-8" },
            React.createElement("div", { className: "container mx-auto px-4 lg:px-6" },
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" },
                    React.createElement("div", { className: "lg:col-span-2" },
                        React.createElement("div", { className: "group" },
                            React.createElement(link_1["default"], { href: "/", className: "inline-block mb-6 transform transition-transform duration-300 hover:scale-105" },
                                React.createElement(image_1["default"], { src: "/img/logo/footer-logo.png", alt: "Zao Bora - Empowering Farmers", width: 180, height: 60, className: "brightness-0 invert" }))),
                        React.createElement("p", { className: "text-gray-300 mb-6 leading-relaxed max-w-md" }, "Empowering farmers through innovative agricultural solutions, sustainable practices, and comprehensive support services. Whether you need consultation, market linkage, or agroforestry expertise, we're here to help you grow."),
                        React.createElement("div", null,
                            React.createElement("h5", { className: "text-lg font-semibold mb-4 text-green-400" }, "Connect With Us"),
                            React.createElement("div", { className: "flex space-x-3" }, socials_1.SOCIAL_LINKS.map(function (social, i) { return (React.createElement("a", { key: i, href: social.href, "aria-label": social.label, target: "_blank", rel: "noopener noreferrer", className: "group relative w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center \n                               hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1" },
                                React.createElement(social.icon, { className: "text-lg group-hover:text-white transition-colors duration-300" }),
                                React.createElement("div", { className: "absolute inset-0 bg-green-400/20 rounded-full scale-0 group-hover:scale-100 \n                                    transition-transform duration-300" }))); })))),
                    React.createElement("div", null,
                        React.createElement("h4", { className: "text-lg font-semibold mb-6 text-green-400 relative" },
                            "Quick Links",
                            React.createElement("div", { className: "absolute bottom-0 left-0 w-12 h-0.5 bg-green-400 rounded-full" })),
                        React.createElement("ul", { className: "space-y-3" }, footer_1.FOOTER_QUICK_LINKS.map(function (link, i) { return (React.createElement("li", { key: i, className: "group" },
                            React.createElement(link_1["default"], { href: link.href, className: "text-gray-300 hover:text-green-400 transition-all duration-300 \n                               flex items-center space-x-2 group-hover:translate-x-1" },
                                React.createElement("div", { className: "w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 \n                                    transition-opacity duration-300" }),
                                React.createElement("span", null, link.label)))); }))),
                    React.createElement("div", null,
                        React.createElement("h4", { className: "text-lg font-semibold mb-6 text-green-400 relative" },
                            "Get In Touch",
                            React.createElement("div", { className: "absolute bottom-0 left-0 w-12 h-0.5 bg-green-400 rounded-full" })),
                        React.createElement("ul", { className: "space-y-4" },
                            React.createElement("li", { className: "group" },
                                React.createElement("div", { className: "flex items-start space-x-3 text-gray-300 hover:text-green-400 \n                                transition-colors duration-300" },
                                    React.createElement(fa_1.FaEnvelope, { className: "text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 \n                                        transition-transform duration-300" }),
                                    React.createElement("div", null,
                                        React.createElement("p", { className: "text-sm text-gray-400 mb-1" }, "Email"),
                                        React.createElement("a", { href: "mailto:" + footer_1.FOOTER_CONTACT.email, className: "hover:underline" }, footer_1.FOOTER_CONTACT.email)))),
                            React.createElement("li", { className: "group" },
                                React.createElement("div", { className: "flex items-start space-x-3 text-gray-300 hover:text-green-400 \n                                transition-colors duration-300" },
                                    React.createElement(fa_1.FaPhone, { className: "text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 \n                                     transition-transform duration-300" }),
                                    React.createElement("div", null,
                                        React.createElement("p", { className: "text-sm text-gray-400 mb-1" }, "Phone"),
                                        React.createElement("a", { href: "tel:" + footer_1.FOOTER_CONTACT.phone, className: "hover:underline" }, footer_1.FOOTER_CONTACT.phone)))),
                            React.createElement("li", { className: "group" },
                                React.createElement("div", { className: "flex items-start space-x-3 text-gray-300 hover:text-green-400 \n                                transition-colors duration-300" },
                                    React.createElement(fa_1.FaMapMarkerAlt, { className: "text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 \n                                            transition-transform duration-300" }),
                                    React.createElement("div", null,
                                        React.createElement("p", { className: "text-sm text-gray-400 mb-1" }, "Location"),
                                        React.createElement("p", null, footer_1.FOOTER_CONTACT.address))))))),
                React.createElement("div", { className: "mt-12 pt-8 border-t border-gray-700/50" },
                    React.createElement("div", { className: "text-center max-w-2xl mx-auto" },
                        React.createElement("h3", { className: "text-xl font-semibold mb-3 text-green-400" }, "Stay Updated"),
                        React.createElement("p", { className: "text-gray-300 mb-6" }, "Get the latest agricultural insights, tips, and updates delivered to your inbox."),
                        React.createElement("div", { className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto" },
                            React.createElement("input", { type: "email", placeholder: "Enter your email", className: "flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg \n                           text-white placeholder-gray-400 focus:outline-none focus:border-green-400 \n                           focus:ring-2 focus:ring-green-400/20 transition-all duration-300" }),
                            React.createElement("button", { className: "px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 \n                                 text-white rounded-lg font-semibold hover:from-green-700 \n                                 hover:to-emerald-700 transform hover:scale-105 transition-all \n                                 duration-300 shadow-lg hover:shadow-xl" }, "Subscribe")))),
                React.createElement("div", { className: "mt-12 pt-8 border-t border-gray-700/50" },
                    React.createElement("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" },
                        React.createElement("p", { className: "text-gray-400 text-sm" },
                            "\u00A9 ",
                            new Date().getFullYear(),
                            " Zao Bora. All Rights Reserved.",
                            React.createElement("span", { className: "mx-2" }, "\u2022"),
                            "Empowering farmers, nurturing growth."),
                        React.createElement("div", { className: "flex items-center space-x-6 text-sm text-gray-400" },
                            React.createElement(link_1["default"], { href: "/privacy", className: "hover:text-green-400 transition-colors duration-300" }, "Privacy Policy"),
                            React.createElement(link_1["default"], { href: "/terms", className: "hover:text-green-400 transition-colors duration-300" }, "Terms of Service"),
                            React.createElement(link_1["default"], { href: "/cookies", className: "hover:text-green-400 transition-colors duration-300" }, "Cookie Policy")))))),
        React.createElement("button", { onClick: scrollToTop, className: "fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 \n                   text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 \n                   flex items-center justify-center group " + (showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'), "aria-label": "Scroll to top" },
            React.createElement(fa_1.FaArrowUp, { className: "group-hover:-translate-y-1 transition-transform duration-300" }),
            React.createElement("div", { className: "absolute inset-0 bg-green-400/20 rounded-full scale-0 group-hover:scale-100 \n                      transition-transform duration-300" })),
        React.createElement("div", { className: "absolute bottom-0 left-0 w-32 h-32 bg-green-400/10 rounded-full -translate-x-16 translate-y-16" }),
        React.createElement("div", { className: "absolute top-0 right-0 w-48 h-48 bg-emerald-400/5 rounded-full translate-x-24 -translate-y-24" })));
};
exports["default"] = Footer;
