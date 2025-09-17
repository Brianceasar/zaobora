"use strict";
exports.__esModule = true;
var Header_1 = require("../components/layout/Header");
var Footer_1 = require("../components/layout/Footer");
// import Preloader from "../components/ui/Preloader";
// import ScrollToTop from "../components/ui/ScrollToTop";
var HeroSection_1 = require("../components/section/HeroSection");
var AboutSection_1 = require("../components/section/AboutSection");
var ServiceSection_1 = require("../components/section/ServiceSection");
var ContactInfoSection_1 = require("../components/section/ContactInfoSection");
var GetInTouchSection_1 = require("../components/section/GetInTouchSection");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header_1["default"], null),
        React.createElement("main", null,
            React.createElement(HeroSection_1["default"], null),
            React.createElement(AboutSection_1["default"], null),
            React.createElement(ServiceSection_1["default"], null),
            React.createElement(ContactInfoSection_1["default"], null),
            React.createElement(GetInTouchSection_1["default"], null)),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
