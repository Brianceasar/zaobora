"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var Header_1 = require("@/components/layout/header/Header");
var Footer_1 = require("@/components/layout/footer/Footer");
var ContactInfoSection_1 = require("@/components/section/ContactInfoSection");
var GetInTouchSection_1 = require("@/components/section/GetInTouchSection");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Zao Bora Website",
    description: "Empowering Farmers to enhance their livelihoods"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className },
            React.createElement(Header_1["default"], null),
            React.createElement("main", { className: "min-h-screen" }, children),
            React.createElement(ContactInfoSection_1["default"], null),
            React.createElement(GetInTouchSection_1["default"], null),
            React.createElement(Footer_1["default"], null))));
}
exports["default"] = RootLayout;
