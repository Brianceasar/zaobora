"use strict";
exports.__esModule = true;
// import Preloader from "../components/ui/Preloader";
// import ScrollToTop from "../components/ui/ScrollToTop";
var HeroSection_1 = require("../components/section/HeroSection");
var AboutSection_1 = require("../components/section/AboutSection");
var ServiceSection_1 = require("../components/section/ServiceSection");
// import ContactInfoSection from "../components/section/ContactInfoSection";
// import GetInTouchSection from "../components/section/GetInTouchSection";
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("main", null,
            React.createElement(HeroSection_1["default"], null),
            React.createElement(AboutSection_1["default"], null),
            React.createElement(ServiceSection_1["default"], null))));
}
exports["default"] = Home;
