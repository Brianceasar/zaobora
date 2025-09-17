"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var hero_1 = require("@/lib/constants/hero");
var HeroSection = function () { return (React.createElement("section", { className: "relative pt-24 md:pt-32 pb-16 overflow-hidden" },
    React.createElement("div", { className: "container mx-auto px-4" },
        React.createElement("div", { className: "relative z-10" },
            React.createElement("div", { className: "row flex flex-wrap -mx-4 items-center" },
                React.createElement("div", { className: "w-full lg:w-7/12 md:w-9/12 px-4" },
                    React.createElement("div", { className: "hero-contentv03" },
                        React.createElement("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" }, hero_1.HERO_CONTENT.title),
                        React.createElement("p", { className: "text-lg text-gray-700 mb-8" }, hero_1.HERO_CONTENT.description),
                        React.createElement("div", { className: "flex items-center gap-4" },
                            React.createElement(link_1["default"], { href: hero_1.HERO_CONTENT.cta.href, className: "bg-green-700 text-white py-3 px-6 rounded-md hover:bg-green-800 transition-colors flex items-center gap-2" },
                                hero_1.HERO_CONTENT.cta.label,
                                " ",
                                React.createElement(hero_1.HERO_CONTENT.cta.icon, null)))))))),
    React.createElement(image_1["default"], { src: hero_1.HERO_CONTENT.image.src, alt: hero_1.HERO_CONTENT.image.alt, width: hero_1.HERO_CONTENT.image.width, height: hero_1.HERO_CONTENT.image.height, className: "absolute right-0 bottom-0 max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl -z-0" }))); };
exports["default"] = HeroSection;
