"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Hero_1 = require("../../components/shared/Hero");
var About_1 = require("../../components/shared/About");
var Services_1 = require("../../components/shared/Services");
var Testimonials_1 = require("../../components/shared/Testimonials");
var HomePage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Hero_1["default"], null),
        react_1["default"].createElement(About_1["default"], null),
        react_1["default"].createElement(Services_1["default"], null),
        react_1["default"].createElement(Testimonials_1["default"], null)));
};
exports["default"] = HomePage;
