"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var products_1 = require("@/lib/constants/products");
function ProductsPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "bg-gradient-to-r from-green-50 to-white py-20" },
            React.createElement("div", { className: "container mx-auto px-6 text-center" },
                React.createElement("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900" }, "Our Products"),
                React.createElement("p", { className: "mt-4 max-w-2xl mx-auto text-gray-600" }, "We offer a wide range of products designed to meet your unique needs and tastes. From farm-fresh produce to natural delights, every product reflects our commitment to quality and sustainability."))),
        React.createElement("section", { className: "py-20" },
            React.createElement("div", { className: "container mx-auto px-6" },
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, products_1.PRODUCTS.map(function (product) { return (React.createElement("div", { key: product.id, className: "bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col" },
                    React.createElement(image_1["default"], { src: product.image, alt: product.title, width: 400, height: 300, className: "rounded-xl object-contain h-56 mx-auto" }),
                    React.createElement("div", { className: "mt-4 flex-1 flex flex-col" },
                        React.createElement("h3", { className: "text-lg font-semibold text-gray-900" }, product.title),
                        React.createElement("p", { className: "mt-2 text-gray-600 text-sm flex-1" }, product.description),
                        React.createElement(link_1["default"], { href: "/products/" + product.id, className: "mt-4 inline-block text-green-700 font-medium hover:underline" }, "Read More \u2192")))); }))))));
}
exports["default"] = ProductsPage;
