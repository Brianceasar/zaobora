"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var about_1 = require("@/lib/constants/about");
var AboutSection = function () { return (React.createElement("section", { id: about_1.ABOUT_CONTENT.sectionId, className: "bg-white py-16" },
    React.createElement("div", { className: "container mx-auto px-4" },
        React.createElement("div", { className: "flex flex-col md:flex-row items-center justify-center g-8" },
            React.createElement("div", { className: "w-full md:w-6/12 flex justify-center order-1 md:order-0 mb-8 md:mb-0" },
                React.createElement("div", { className: "relative w-full max-w-md" },
                    React.createElement(image_1["default"], { src: about_1.ABOUT_CONTENT.image.src, alt: about_1.ABOUT_CONTENT.image.alt, width: about_1.ABOUT_CONTENT.image.width, height: about_1.ABOUT_CONTENT.image.height, className: "rounded-lg shadow-lg" }))),
            React.createElement("div", { className: "w-full md:w-6/12" },
                React.createElement("div", { className: "mb-8" },
                    React.createElement("h5", { className: "text-green-700 uppercase font-semibold mb-2" }, about_1.ABOUT_CONTENT.subtitle),
                    React.createElement("h2", { className: "text-3xl md:text-4xl font-bold mb-4" }, about_1.ABOUT_CONTENT.title),
                    React.createElement("p", { className: "text-gray-700 mb-6" }, about_1.ABOUT_CONTENT.description),
                    React.createElement(link_1["default"], { href: about_1.ABOUT_CONTENT.cta.href, className: "bg-green-700 text-white py-3 px-6 rounded-md hover:bg-green-800 transition-colors flex items-center gap-2 w-fit" },
                        about_1.ABOUT_CONTENT.cta.label,
                        " ",
                        React.createElement(about_1.ABOUT_CONTENT.cta.icon, null)))))))); };
exports["default"] = AboutSection;
