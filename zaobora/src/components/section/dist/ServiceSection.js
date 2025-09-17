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
exports.__esModule = true;
var ServiceCard_1 = require("../ui/ServiceCard");
var services_1 = require("@/lib/constants/services");
var ServiceSection = function () { return (React.createElement("section", { id: services_1.SERVICES_CONTENT.sectionId, className: "bg-cover bg-center py-16", style: { backgroundImage: "url('" + services_1.SERVICES_CONTENT.backgroundImage + "')" } },
    React.createElement("div", { className: "container mx-auto px-4" },
        React.createElement("div", { className: "flex justify-center text-center" },
            React.createElement("div", { className: "w-full sm:w-11/12 md:w-8/12 xl:w-6/12 mb-12" },
                React.createElement("h5", { className: "text-green-700 uppercase font-semibold mb-2" }, services_1.SERVICES_CONTENT.subtitle),
                React.createElement("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900" }, services_1.SERVICES_CONTENT.title))),
        React.createElement("div", { className: "flex flex-wrap justify-center gap-8" }, services_1.SERVICES_CONTENT.cards.map(function (service, index) { return (React.createElement(ServiceCard_1["default"], __assign({ key: index }, service))); }))))); };
exports["default"] = ServiceSection;
