"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var Preloader = function () { return (React.createElement("div", { id: "preloader", className: "preloader flex items-center justify-center h-screen w-screen fixed top-0 left-0 bg-white z-50" },
    React.createElement("div", { className: "box flex flex-col gap-4" },
        React.createElement("span", { className: "man-pre mx-auto" },
            React.createElement(image_1["default"], { src: "/assets/img/banner/preloader.png", alt: "img", width: 100, height: 100 }))))); };
exports["default"] = Preloader;
