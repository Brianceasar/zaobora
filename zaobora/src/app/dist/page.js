"use strict";
exports.__esModule = true;
var HeroSection_1 = require("../components/section/HeroSection");
var AboutSection_1 = require("../components/section/AboutSection");
var ServiceSection_1 = require("../components/section/ServiceSection");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("main", null,
            React.createElement(HeroSection_1["default"], null),
            React.createElement(AboutSection_1["default"], null),
            React.createElement(ServiceSection_1["default"], null))));
}
exports["default"] = Home;
