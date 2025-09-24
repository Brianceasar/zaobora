"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var fa6_1 = require("react-icons/fa6");
var Header_1 = require("@/components/layout/header/Header");
var Footer_1 = require("@/components/layout/footer/Footer");
var ContactInfoSection_1 = require("@/components/section/ContactInfoSection");
var GetInTouchSection_1 = require("@/components/section/GetInTouchSection");
var DonatePage = function () {
    var _a = react_1.useState("$"), selectedCurrency = _a[0], setSelectedCurrency = _a[1];
    var _b = react_1.useState("Planting trees"), selectedPurpose = _b[0], setSelectedPurpose = _b[1];
    var _c = react_1.useState(""), donationAmount = _c[0], setDonationAmount = _c[1];
    var _d = react_1.useState(false), isSubmitting = _d[0], setIsSubmitting = _d[1];
    var _e = react_1.useState('idle'), submitStatus = _e[0], setSubmitStatus = _e[1];
    var _f = react_1.useState(false), showModal = _f[0], setShowModal = _f[1];
    var _g = react_1.useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    }), formData = _g[0], setFormData = _g[1];
    var currencies = [
        { symbol: "$", label: "USD" },
        { symbol: "€", label: "Euro" },
        { symbol: "Tsh", label: "Tsh" }
    ];
    var donationPurposes = [
        {
            id: "trees",
            label: "Planting trees",
            description: "For every dollar you donate, a tree is planted and nurtured, fueling our impactful tree-planting initiatives.",
            icon: "/assets/img/donate/icon-for-tree-nurturing-donation.png"
        },
        {
            id: "farmers",
            label: "Farmer service delivery",
            description: "For every $5 donation, you support the delivery of tailored services to one farmer in remote areas.",
            icon: "/assets/img/donate/icon-for-farmer-lifestyle-improve.png"
        }
    ];
    var handleInputChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var donationData, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setIsSubmitting(true);
                    setSubmitStatus('idle');
                    donationData = __assign(__assign({}, formData), { amount: donationAmount, currency: selectedCurrency, donationPurpose: selectedPurpose });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, fetch('https://formspree.io/f/xwpklkgl', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(donationData)
                        })];
                case 2:
                    response = _a.sent();
                    if (response.ok) {
                        setSubmitStatus('success');
                        setShowModal(true);
                        setFormData({ firstName: "", lastName: "", email: "", message: "" });
                        setDonationAmount("");
                        // Hide success message after 5 seconds
                        setTimeout(function () { return setSubmitStatus('idle'); }, 5000);
                    }
                    else {
                        setSubmitStatus('error');
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    setSubmitStatus('error');
                    return [3 /*break*/, 5];
                case 4:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "min-h-screen bg-white" },
        React.createElement(Header_1["default"], null),
        React.createElement("section", { className: "relative pt-20 md:pt-24 pb-12 md:pb-16 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden" },
            React.createElement("div", { className: "absolute inset-0 overflow-hidden pointer-events-none" },
                React.createElement("div", { className: "absolute top-20 left-20 w-32 h-32 bg-green-200/20 rounded-full animate-pulse" }),
                React.createElement("div", { className: "absolute bottom-20 right-20 w-24 h-24 bg-emerald-200/30 rounded-full animate-bounce", style: { animationDelay: "1s" } })),
            React.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },
                React.createElement("div", { className: "max-w-4xl mx-auto text-center" },
                    React.createElement("nav", { className: "flex items-center justify-center gap-2 text-sm text-gray-600 mb-6" },
                        React.createElement(link_1["default"], { href: "/", className: "hover:text-green-600 transition-colors" }, "Home"),
                        React.createElement("span", null, "/"),
                        React.createElement("span", { className: "text-green-600 font-medium" }, "Donate")),
                    React.createElement("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" },
                        "Your donation creates a",
                        " ",
                        React.createElement("span", { className: "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent" }, "lasting change"))))),
        React.createElement("section", { className: "py-16 md:py-20 bg-white" },
            React.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "grid md:grid-cols-2 gap-8" },
                    React.createElement("div", { className: "relative bg-gradient-to-br from-green-600 to-emerald-600 rounded-[2rem] md:rounded-[4rem] p-8 md:p-12 text-white overflow-hidden" },
                        React.createElement("div", { className: "absolute inset-0 bg-black/10 rounded-[2rem] md:rounded-[4rem]" }),
                        React.createElement("div", { className: "relative z-10" },
                            React.createElement("div", { className: "flex justify-center mb-6" },
                                React.createElement("div", { className: "w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm" },
                                    React.createElement(image_1["default"], { src: "/img/donate/icon-for-tree-nurturing-donation.png", alt: "Tree planting", width: 120, height: 120, className: "w-20 h-20 md:w-28 md:h-28" }))),
                            React.createElement("h3", { className: "text-2xl md:text-3xl font-bold mb-4 text-center" }, "Tree Planting Initiative"),
                            React.createElement("p", { className: "text-white/90 leading-relaxed text-center" }, "For every dollar you donate, a tree is planted and nurtured, fueling our impactful tree-planting initiatives. This improves the environment and secures sustainable livelihoods for farmers. We empower local farmers with tools and knowledge to plant and nurture trees suited to their environments, enriching soil, preventing erosion, and absorbing carbon emissions."))),
                    React.createElement("div", { className: "relative bg-gradient-to-br from-emerald-600 to-green-600 rounded-[2rem] md:rounded-[4rem] p-8 md:p-12 text-white overflow-hidden" },
                        React.createElement("div", { className: "absolute inset-0 bg-black/10 rounded-[2rem] md:rounded-[4rem]" }),
                        React.createElement("div", { className: "relative z-10" },
                            React.createElement("div", { className: "flex justify-center mb-6" },
                                React.createElement("div", { className: "w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm" },
                                    React.createElement(image_1["default"], { src: "/img/donate/icon-for-farmer-lifestyle-improve.png", alt: "Farmer support", width: 120, height: 120, className: "w-20 h-20 md:w-28 md:h-28" }))),
                            React.createElement("h3", { className: "text-2xl md:text-3xl font-bold mb-4 text-center" }, "Farmer Service Delivery"),
                            React.createElement("p", { className: "text-white/90 leading-relaxed text-center" }, "For every $5 donation, you support the delivery of tailored services to one farmer in remote areas, including inputs and expert advice on best practices. These services enhance small farm productivity and resilience, empowering farmers to achieve sustainable success in their communities.")))))),
        React.createElement("section", { className: "py-16 md:py-20 bg-gray-50" },
            React.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "max-w-4xl mx-auto" },
                    React.createElement("div", { className: "text-center mb-12" },
                        React.createElement("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4" },
                            "Fill out the donation form and join us in planting the seeds for a",
                            " ",
                            React.createElement("span", { className: "text-green-600" }, "sustainable Future"))),
                    submitStatus === 'success' && (React.createElement("div", { className: "mb-8 p-4 bg-green-50 border border-green-200 rounded-xl" },
                        React.createElement("div", { className: "flex items-center gap-3 text-green-800" },
                            React.createElement(fa6_1.FaCheck, { className: "w-5 h-5 text-green-600" }),
                            React.createElement("span", { className: "font-medium" }, "Thank you for your donation! We'll process it shortly.")))),
                    submitStatus === 'error' && (React.createElement("div", { className: "mb-8 p-4 bg-red-50 border border-red-200 rounded-xl" },
                        React.createElement("div", { className: "text-red-800" },
                            React.createElement("span", { className: "font-medium" }, "There was an error processing your donation. Please try again.")))),
                    React.createElement("form", { onSubmit: handleSubmit, className: "bg-white rounded-2xl shadow-lg p-8 md:p-12" },
                        React.createElement("div", { className: "mb-8" },
                            React.createElement("h3", { className: "text-xl font-semibold text-green-600 mb-4" }, "How Much Would You Like To Donate?"),
                            React.createElement("div", { className: "flex gap-3 mb-4" }, currencies.map(function (currency) { return (React.createElement("button", { key: currency.symbol, type: "button", onClick: function () { return setSelectedCurrency(currency.symbol); }, className: "px-4 py-2 rounded-lg font-medium transition-all duration-300 " + (selectedCurrency === currency.symbol
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200') }, currency.label)); })),
                            React.createElement("div", { className: "flex" },
                                React.createElement("span", { className: "inline-flex items-center px-4 text-gray-600 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg" }, selectedCurrency),
                                React.createElement("input", { type: "number", value: donationAmount, onChange: function (e) { return setDonationAmount(e.target.value); }, placeholder: "Amount", required: true, min: "1", className: "flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" }))),
                        React.createElement("div", { className: "mb-8" },
                            React.createElement("h3", { className: "text-xl font-semibold text-green-600 mb-4" }, "Choose where you'd like your donation to go"),
                            React.createElement("div", { className: "grid sm:grid-cols-2 gap-4" }, donationPurposes.map(function (purpose) { return (React.createElement("button", { key: purpose.id, type: "button", onClick: function () { return setSelectedPurpose(purpose.label); }, className: "p-4 rounded-xl text-left transition-all duration-300 " + (selectedPurpose === purpose.label
                                    ? 'bg-green-100 border-2 border-green-500 text-green-700'
                                    : 'bg-gray-50 border-2 border-gray-200 text-gray-600 hover:bg-gray-100') },
                                React.createElement("div", { className: "font-medium" }, purpose.label))); }))),
                        React.createElement("div", { className: "mb-8" },
                            React.createElement("h3", { className: "text-xl font-semibold text-green-600 mb-4" }, "Personal Info"),
                            React.createElement("div", { className: "grid sm:grid-cols-2 gap-4 mb-4" },
                                React.createElement("input", { type: "text", name: "firstName", value: formData.firstName, onChange: handleInputChange, placeholder: "Your First Name", className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" }),
                                React.createElement("input", { type: "text", name: "lastName", value: formData.lastName, onChange: handleInputChange, placeholder: "Your Last Name", className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" })),
                            React.createElement("input", { type: "email", name: "email", value: formData.email, onChange: handleInputChange, placeholder: "Your Email Address", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" })),
                        React.createElement("div", { className: "mb-8" },
                            React.createElement("h3", { className: "text-xl font-semibold text-green-600 mb-4" }, "Message"),
                            React.createElement("textarea", { name: "message", value: formData.message, onChange: handleInputChange, placeholder: "Leave a message (optional)", rows: 4, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none" })),
                        React.createElement("button", { type: "submit", disabled: isSubmitting || !donationAmount, className: "w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3" }, isSubmitting ? (React.createElement(React.Fragment, null,
                            React.createElement(fa6_1.FaSpinner, { className: "w-5 h-5 animate-spin" }),
                            React.createElement("span", null, "Processing Donation..."))) : (React.createElement(React.Fragment, null,
                            React.createElement("span", null, "Send Donation"),
                            React.createElement(fa6_1.FaArrowRight, { className: "w-5 h-5" })))))))),
        React.createElement(ContactInfoSection_1["default"], null),
        React.createElement(GetInTouchSection_1["default"], null),
        showModal && (React.createElement("div", { className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" },
            React.createElement("div", { className: "bg-white rounded-2xl p-8 max-w-md w-full mx-4" },
                React.createElement("div", { className: "text-center" },
                    React.createElement("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" },
                        React.createElement(fa6_1.FaCheck, { className: "w-8 h-8 text-green-600" })),
                    React.createElement("h3", { className: "text-2xl font-bold text-gray-900 mb-4" }, "Thank You!"),
                    React.createElement("p", { className: "text-gray-600 mb-6" }, "Your donation has been submitted. Thank you for supporting our mission! Our team will get back to you shortly with next steps."),
                    React.createElement("button", { onClick: function () { return setShowModal(false); }, className: "w-full bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300" }, "Close"))))),
        React.createElement(Footer_1["default"], null)));
};
exports["default"] = DonatePage;
