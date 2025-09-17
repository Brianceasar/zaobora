"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ServiceCard_1 = require("../../components/ui/ServiceCard");
var services_1 = require("../../data/services");
var ServicesPage = function () {
    return (react_1["default"].createElement("section", { className: "container py-10" },
        react_1["default"].createElement("h1", { className: "text-3xl font-bold mb-6" }, "Our Services"),
        react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, services_1.services.map(function (service) { return (react_1["default"].createElement(ServiceCard_1["default"], { key: service.id, service: service })); }))));
};
exports["default"] = ServicesPage;
