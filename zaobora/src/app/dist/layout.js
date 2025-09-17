"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var inter = google_1.Inter({ subsets: ['latin'] });
exports.metadata = {
    title: 'Zao Bora Website',
    description: 'Empowering Farmers to enhance their livelihoods'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className }, children)));
}
exports["default"] = RootLayout;
