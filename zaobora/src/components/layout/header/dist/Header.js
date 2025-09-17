"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var fa_1 = require("react-icons/fa");
var navigation_1 = require("next/navigation");
var navigation_2 = require("@/lib/constants/navigation");
var react_1 = require("react");
var Header = function () {
    var pathname = navigation_1.usePathname();
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = react_1.useState(false), isScrolled = _b[0], setIsScrolled = _b[1];
    // Handle scroll effect
    react_1.useEffect(function () {
        var handleScroll = function () {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    // Close mobile menu when clicking outside
    react_1.useEffect(function () {
        var handleClickOutside = function (event) {
            var target = event.target;
            if (isOpen && !target.closest('.mobile-menu') && !target.closest('.menu-toggle')) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
            document.body.style.overflow = "hidden"; // Prevent background scroll
        }
        else {
            document.body.style.overflow = "unset";
        }
        return function () {
            document.removeEventListener("click", handleClickOutside);
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: "fixed w-full top-0 z-50 transition-all duration-300 " + (isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
                : "bg-white/90 backdrop-blur-sm shadow-sm py-4") },
            React.createElement("div", { className: "container mx-auto px-4 lg:px-6" },
                React.createElement("div", { className: "flex justify-between items-center" },
                    React.createElement(link_1["default"], { href: "/", className: "logo group relative overflow-hidden rounded-lg" },
                        React.createElement("div", { className: "transform transition-transform duration-300 group-hover:scale-105" },
                            React.createElement(image_1["default"], { src: "/assets/img/logo/footer-logo.png", alt: "Zao Bora - Empowering Farmers", width: isScrolled ? 130 : 150, height: isScrolled ? 40 : 50, className: "transition-all duration-300", priority: true })),
                        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" })),
                    React.createElement("nav", { className: "hidden xl:block" },
                        React.createElement("ul", { className: "flex items-center space-x-1" },
                            navigation_2.NAV_LINKS.map(function (link, i) { return (React.createElement("li", { key: i, className: "relative group" }, !link.children ? (React.createElement(link_1["default"], { href: link.href, className: "\n                          relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 \n                          hover:bg-green-50 hover:shadow-sm\n                          " + (pathname === link.href
                                    ? "text-green-700 bg-green-50 shadow-sm"
                                    : "text-gray-700 hover:text-green-600") + "\n                        " },
                                React.createElement("span", { className: "relative z-10" }, link.label),
                                pathname === link.href && (React.createElement("div", { className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-600 rounded-full" })))) : (React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer hover:text-green-600 \n                                   hover:bg-green-50 rounded-lg transition-all duration-300 flex items-center space-x-1" },
                                    React.createElement("span", null, link.label),
                                    React.createElement("svg", { className: "w-4 h-4 transition-transform duration-200 group-hover:rotate-180", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                                        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }))),
                                React.createElement("div", { className: "absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-gray-100 \n                                      rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible \n                                      transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50" },
                                    React.createElement("div", { className: "py-2" }, link.children.map(function (child, j) { return (React.createElement(link_1["default"], { key: j, href: child.href, className: "block px-4 py-3 text-sm text-gray-700 hover:text-green-600 \n                                         hover:bg-green-50/80 transition-colors duration-200 \n                                         border-l-2 border-transparent hover:border-green-400" },
                                        React.createElement("div", { className: "flex items-center space-x-2" },
                                            React.createElement("div", { className: "w-1.5 h-1.5 bg-green-400 rounded-full opacity-0 hover:opacity-100 transition-opacity" }),
                                            React.createElement("span", null, child.label)))); }))))))); }),
                            React.createElement("li", { className: "ml-4" },
                                React.createElement(link_1["default"], { href: "/contact", className: "bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2.5 \n                             rounded-full text-sm font-semibold shadow-lg hover:shadow-xl \n                             transform hover:scale-105 transition-all duration-300 \n                             hover:from-green-700 hover:to-emerald-700" }, "Get Started")))),
                    React.createElement("button", { "aria-label": isOpen ? "Close menu" : "Open menu", onClick: function () { return setIsOpen(!isOpen); }, className: "xl:hidden menu-toggle relative p-2 rounded-lg hover:bg-gray-100 \n                       transition-colors duration-200 group" },
                        React.createElement("div", { className: "w-6 h-6 flex items-center justify-center" },
                            React.createElement(fa_1.FaBars, { className: "text-xl text-gray-700 transition-all duration-300 " + (isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100') }),
                            React.createElement(fa_1.FaTimes, { className: "text-xl text-gray-700 absolute transition-all duration-300 " + (isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0') })))))),
        React.createElement("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 xl:hidden transition-all duration-300 " + (isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'), onClick: function () { return setIsOpen(false); } }),
        React.createElement("div", { className: "mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 xl:hidden \n                   transform transition-transform duration-300 ease-out shadow-2xl " + (isOpen ? 'translate-x-0' : 'translate-x-full') },
            React.createElement("div", { className: "p-6 border-b border-gray-100 bg-gradient-to-r from-green-50 to-emerald-50" },
                React.createElement("div", { className: "flex items-center justify-between" },
                    React.createElement(image_1["default"], { src: "/assets/img/logo/footer-logo.png", alt: "Zao Bora", width: 120, height: 40 }),
                    React.createElement("button", { onClick: function () { return setIsOpen(false); }, className: "p-2 rounded-full hover:bg-white/80 transition-colors", "aria-label": "Close menu" },
                        React.createElement(fa_1.FaTimes, { className: "text-gray-600" })))),
            React.createElement("nav", { className: "p-6 overflow-y-auto h-[calc(100vh-140px)]" },
                React.createElement("ul", { className: "space-y-2" }, navigation_2.NAV_LINKS.map(function (link, i) { return (React.createElement("li", { key: i }, !link.children ? (React.createElement(link_1["default"], { href: link.href, onClick: function () { return setIsOpen(false); }, className: "\n                      block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200\n                      " + (pathname === link.href
                        ? "text-green-700 bg-green-50 shadow-sm"
                        : "text-gray-700 hover:text-green-600 hover:bg-green-50/50") + "\n                    " }, link.label)) : (React.createElement("div", { className: "space-y-1" },
                    React.createElement("p", { className: "px-4 py-3 font-semibold text-gray-800 bg-gray-50 rounded-xl" }, link.label),
                    React.createElement("ul", { className: "ml-4 space-y-1" }, link.children.map(function (child, j) { return (React.createElement("li", { key: j },
                        React.createElement(link_1["default"], { href: child.href, onClick: function () { return setIsOpen(false); }, className: "block px-4 py-2 text-gray-600 hover:text-green-600 \n                                     hover:bg-green-50/50 rounded-lg transition-colors duration-200\n                                     border-l-2 border-transparent hover:border-green-300" }, child.label))); })))))); })),
                React.createElement("div", { className: "mt-8 pt-6 border-t border-gray-100" },
                    React.createElement(link_1["default"], { href: "/contact", onClick: function () { return setIsOpen(false); }, className: "block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white \n                       text-center px-6 py-4 rounded-xl font-semibold shadow-lg \n                       hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300" }, "Get Started Today"))))));
};
exports["default"] = Header;
