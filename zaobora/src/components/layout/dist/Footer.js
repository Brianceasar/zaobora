"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var socials_1 = require("@/lib/constants/socials");
var footer_1 = require("@/lib/constants/footer");
var Footer = function () { return (React.createElement("footer", { className: "bg-gray-800 text-white py-16" },
    React.createElement("div", { className: "container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" },
        React.createElement("div", null,
            React.createElement(link_1["default"], { href: "/" },
                React.createElement(image_1["default"], { src: "/assets/img/logo/logo_2.png", alt: "logo-img", width: 150, height: 50 })),
            React.createElement("p", { className: "text-gray-400 mt-6" }, "Whether you\u2019re looking for consultation, market linkage, or more information on agroforestry, the Zao Bora team is ready to help."),
            React.createElement("h5", { className: "mt-6 mb-3 text-lg font-normal" }, "Follow Us"),
            React.createElement("div", { className: "flex space-x-4" }, socials_1.SOCIAL_LINKS.map(function (social, i) { return (React.createElement("a", { key: i, href: social.href, "aria-label": social.label, className: "text-white hover:text-green-400 transition-colors" },
                React.createElement(social.icon, null))); }))),
        React.createElement("div", null,
            React.createElement("h4", { className: "font-semibold mb-4" }, "Quick Links"),
            React.createElement("ul", { className: "space-y-2 text-gray-400" }, footer_1.FOOTER_QUICK_LINKS.map(function (link, i) { return (React.createElement("li", { key: i },
                React.createElement(link_1["default"], { href: link.href }, link.label))); }))),
        React.createElement("div", null,
            React.createElement("h4", { className: "font-semibold mb-4" }, "Contact"),
            React.createElement("ul", { className: "space-y-2 text-gray-400" },
                React.createElement("li", null,
                    "Email: ",
                    footer_1.FOOTER_CONTACT.email),
                React.createElement("li", null,
                    "Phone: ",
                    footer_1.FOOTER_CONTACT.phone),
                React.createElement("li", null,
                    "Location: ",
                    footer_1.FOOTER_CONTACT.address)))),
    React.createElement("div", { className: "text-center text-gray-500 mt-10" },
        "\u00A9 ",
        new Date().getFullYear(),
        " Zao Bora. All Rights Reserved."))); };
exports["default"] = Footer;
