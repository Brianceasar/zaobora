"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var fa6_1 = require("react-icons/fa6");
var navigation_1 = require("next/navigation");
var navigation_2 = require("@/lib/constants/navigation");
var react_1 = require("react");
var Header = function () {
    var pathname = navigation_1.usePathname();
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    return (React.createElement("header", { className: "bg-white py-4 shadow-sm fixed w-full top-0 z-30" },
        React.createElement("div", { className: "container mx-auto px-4 flex justify-between items-center" },
            React.createElement(link_1["default"], { href: "/", className: "logo" },
                React.createElement(image_1["default"], { src: "/assets/img/logo/footer-logo.png", alt: "logo-img", width: 150, height: 50 })),
            React.createElement("nav", { className: "hidden xl:block" },
                React.createElement("ul", { className: "flex space-x-6" }, navigation_2.NAV_LINKS.map(function (link, i) { return (React.createElement("li", { key: i, className: "relative group" }, !link.children ? (React.createElement(link_1["default"], { href: link.href, className: "transition-colors " + (pathname === link.href
                        ? "text-green-700 font-bold"
                        : "text-gray-700 hover:text-green-900") }, link.label)) : (React.createElement(React.Fragment, null,
                    React.createElement("span", { className: "text-gray-700 cursor-pointer hover:text-green-900" }, link.label),
                    React.createElement("ul", { className: "absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40" }, link.children.map(function (child, j) { return (React.createElement("li", { key: j },
                        React.createElement(link_1["default"], { href: child.href, className: "block px-4 py-2 text-gray-700 hover:bg-gray-100" }, child.label))); })))))); }))),
            React.createElement("button", { "aria-label": "Open mobile menu", onClick: function () { return setIsOpen(!isOpen); }, className: "xl:hidden text-gray-700 text-2xl" },
                React.createElement(fa6_1.FaBars, null))),
        isOpen && (React.createElement("div", { className: "xl:hidden bg-white shadow-md absolute w-full left-0 top-[70px] z-40" },
            React.createElement("ul", { className: "flex flex-col divide-y divide-gray-200" }, navigation_2.NAV_LINKS.map(function (link, i) { return (React.createElement("li", { key: i, className: "p-4" }, !link.children ? (React.createElement(link_1["default"], { href: link.href }, link.label)) : (React.createElement("div", null,
                React.createElement("p", { className: "font-medium" }, link.label),
                React.createElement("ul", { className: "pl-4 mt-2 space-y-2" }, link.children.map(function (child, j) { return (React.createElement("li", { key: j },
                    React.createElement(link_1["default"], { href: child.href }, child.label))); })))))); }))))));
};
exports["default"] = Header;
