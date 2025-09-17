"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var HomePage_1 = require("../pages/Home/HomePage");
var layout_1 = require("../pages/Home/layout");
var AboutPage_1 = require("../pages/About/AboutPage");
var layout_2 = require("../pages/About/layout");
var ServicesPage_1 = require("../pages/Services/ServicesPage");
var layout_3 = require("../pages/Services/layout");
var AppRoutes = function () {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(layout_1["default"], null,
                    react_1["default"].createElement(HomePage_1["default"], null)) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/about", element: react_1["default"].createElement(layout_2["default"], null,
                    react_1["default"].createElement(AboutPage_1["default"], null)) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/services", element: react_1["default"].createElement(layout_3["default"], null,
                    react_1["default"].createElement(ServicesPage_1["default"], null)) }))));
};
exports["default"] = AppRoutes;
