"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var fa6_1 = require("react-icons/fa6");
var fa_1 = require("react-icons/fa");
var ICONS = {
    FaUserGraduate: fa6_1.FaUserGraduate,
    FaSeedling: fa6_1.FaSeedling,
    FaCreditCard: fa6_1.FaCreditCard,
    FaFlask: fa6_1.FaFlask,
    FaChartBar: fa6_1.FaChartBar,
    FaRadio: fa6_1.FaRadio,
    FaHandshake: fa6_1.FaHandshake,
    FaTint: fa_1.FaTint
};
var ServiceCard = function (_a) {
    var href = _a.href, title = _a.title, description = _a.description, bgColor = _a.bgColor, icon = _a.icon;
    var Icon = ICONS[icon];
    return (React.createElement("div", { className: "w-full sm:w-11/12 md:w-full lg:w-5/12 xl:w-5/12" },
        React.createElement("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full" },
            React.createElement("div", { className: "w-full h-48 " + bgColor + " flex items-center justify-center text-5xl" }, Icon && React.createElement(Icon, null)),
            React.createElement("div", { className: "p-6 flex flex-col justify-between flex-grow" },
                React.createElement(link_1["default"], { href: href },
                    React.createElement("h3", { className: "text-xl font-semibold text-gray-800 hover:text-green-700 transition-colors mb-2" }, title)),
                React.createElement("p", { className: "text-gray-600 flex-grow mb-4" }, description),
                React.createElement(link_1["default"], { href: href, className: "text-green-700 hover:text-green-900 transition-colors font-medium flex items-center gap-2" },
                    "More ",
                    React.createElement(fa6_1.FaArrowRight, null))))));
};
exports["default"] = ServiceCard;
