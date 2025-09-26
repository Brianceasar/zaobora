"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
function EngagementLayout(_a) {
    var breadcrumbLabel = _a.breadcrumbLabel, _b = _a.breadcrumbColor, breadcrumbColor = _b === void 0 ? "green-600" : _b, _c = _a.gradientFrom, gradientFrom = _c === void 0 ? "green-50" : _c, _d = _a.gradientTo, gradientTo = _d === void 0 ? "emerald-100" : _d, title = _a.title, highlight = _a.highlight, children = _a.children;
    return (React.createElement("div", { className: "min-h-screen bg-white" },
        React.createElement("section", { className: "relative pt-20 md:pt-24 pb-12 text-center md:pb-16 bg-gradient-to-br from-" + gradientFrom + " via-white to-" + gradientTo },
            React.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center" },
                React.createElement("nav", { className: "flex justify-center gap-2 text-sm text-gray-600 mb-6" },
                    React.createElement(link_1["default"], { href: "/", className: "hover:text-${breadcrumbColor}" }, "Home"),
                    React.createElement("span", null, "/"),
                    React.createElement("span", { className: "text-" + breadcrumbColor + " font-medium" }, breadcrumbLabel)),
                React.createElement("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" },
                    title,
                    " ",
                    React.createElement("span", { className: "bg-gradient-to-r from-" + breadcrumbColor + " to-" + gradientTo.replace("-100", "-600") + " bg-clip-text text-transparent" }, highlight)))),
        React.createElement("main", null, children)));
}
exports["default"] = EngagementLayout;
