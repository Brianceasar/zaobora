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
var link_1 = require("next/link");
var fa6_1 = require("react-icons/fa6");
var Header_1 = require("@/components/layout/header/Header");
var Footer_1 = require("@/components/layout/footer/Footer");
var ContactInfoSection_1 = require("@/components/section/ContactInfoSection");
var GetInTouchSection_1 = require("@/components/section/GetInTouchSection");
var VolunteerPage = function () {
    var _a = react_1.useState(false), isSubmitting = _a[0], setIsSubmitting = _a[1];
    var _b = react_1.useState("idle"), submitStatus = _b[0], setSubmitStatus = _b[1];
    var _c = react_1.useState(false), showModal = _c[0], setShowModal = _c[1];
    var _d = react_1.useState({
        name: "",
        email: "",
        skills: "",
        message: ""
    }), formData = _d[0], setFormData = _d[1];
    var handleInputChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    setIsSubmitting(true);
                    setSubmitStatus("idle");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, fetch("https://formspree.io/f/xwpklkgl", {
                            method: "POST",
                            headers: { "Accept": "application/json", "Content-Type": "application/json" },
                            body: JSON.stringify(formData)
                        })];
                case 2:
                    response = _b.sent();
                    if (response.ok) {
                        setSubmitStatus("success");
                        setShowModal(true);
                        setFormData({ name: "", email: "", skills: "", message: "" });
                    }
                    else {
                        setSubmitStatus("error");
                    }
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setSubmitStatus("error");
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
        React.createElement("section", { className: "relative pt-20 md:pt-24 pb-12 md:pb-16 bg-gradient-to-br from-green-50 via-white to-green-100" },
            React.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center" },
                React.createElement("nav", { className: "flex justify-center gap-2 text-sm text-gray-600 mb-6" },
                    React.createElement(link_1["default"], { href: "/", className: "hover:text-green-600" }, "Home"),
                    React.createElement("span", null, "/"),
                    React.createElement("span", { className: "text-green-600 font-medium" }, "Volunteer")),
                React.createElement("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" },
                    "Join Us as a",
                    " ",
                    React.createElement("span", { className: "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent" }, "Volunteer")))),
        React.createElement("section", { className: "py-16 md:py-20 bg-white" },
            React.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl" },
                React.createElement("h2", { className: "text-3xl font-bold text-gray-900 mb-6 text-center" }, "Where You Can Help"),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
                    React.createElement("div", { className: "p-6 border rounded-xl shadow-sm hover:shadow-md transition" },
                        React.createElement("h3", { className: "text-xl font-semibold text-gray-800" }, "Community Training"),
                        React.createElement("p", { className: "text-gray-600 mt-2" }, "Help conduct workshops and skill-building activities for farmers.")),
                    React.createElement("div", { className: "p-6 border rounded-xl shadow-sm hover:shadow-md transition" },
                        React.createElement("h3", { className: "text-xl font-semibold text-gray-800" }, "Research & Data"),
                        React.createElement("p", { className: "text-gray-600 mt-2" }, "Support data collection and analysis for better decision-making.")),
                    React.createElement("div", { className: "p-6 border rounded-xl shadow-sm hover:shadow-md transition" },
                        React.createElement("h3", { className: "text-xl font-semibold text-gray-800" }, "Events & Outreach"),
                        React.createElement("p", { className: "text-gray-600 mt-2" }, "Assist with organizing events, campaigns, and field visits.")),
                    React.createElement("div", { className: "p-6 border rounded-xl shadow-sm hover:shadow-md transition" },
                        React.createElement("h3", { className: "text-xl font-semibold text-gray-800" }, "Communications"),
                        React.createElement("p", { className: "text-gray-600 mt-2" }, "Help with content creation, social media, and storytelling."))))),
        React.createElement("section", { className: "py-16 md:py-20 bg-gray-50" },
            React.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl" },
                React.createElement("div", { className: "bg-white rounded-2xl shadow-lg p-8 md:p-12" },
                    React.createElement("h2", { className: "text-2xl font-bold text-gray-900 mb-8 text-center" }, "Volunteer Sign-Up Form"),
                    submitStatus === "success" && (React.createElement("div", { className: "mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700" }, "\u2705 Thank you for signing up to volunteer!")),
                    submitStatus === "error" && (React.createElement("div", { className: "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700" }, "\u274C Something went wrong. Please try again.")),
                    React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6" },
                        React.createElement("input", { type: "text", name: "name", value: formData.name, onChange: handleInputChange, placeholder: "Full Name", required: true, className: "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" }),
                        React.createElement("input", { type: "email", name: "email", value: formData.email, onChange: handleInputChange, placeholder: "Email Address", required: true, className: "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" }),
                        React.createElement("input", { type: "text", name: "skills", value: formData.skills, onChange: handleInputChange, placeholder: "Skills / Areas of Interest", className: "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" }),
                        React.createElement("textarea", { name: "message", value: formData.message, onChange: handleInputChange, placeholder: "Why do you want to volunteer with us?", rows: 4, className: "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 resize-none" }),
                        React.createElement("button", { type: "submit", disabled: isSubmitting, className: "w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3" }, isSubmitting ? React.createElement(React.Fragment, null,
                            React.createElement(fa6_1.FaSpinner, { className: "animate-spin" }),
                            " Submitting...") : React.createElement(React.Fragment, null,
                            "Join Us ",
                            React.createElement(fa6_1.FaArrowRight, null))))))),
        React.createElement(ContactInfoSection_1["default"], null),
        React.createElement(GetInTouchSection_1["default"], null),
        React.createElement(Footer_1["default"], null),
        showModal && (React.createElement("div", { className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" },
            React.createElement("div", { className: "bg-white rounded-2xl p-8 max-w-md w-full text-center" },
                React.createElement(fa6_1.FaCheck, { className: "w-10 h-10 text-green-600 mx-auto mb-4" }),
                React.createElement("h3", { className: "text-xl font-bold text-gray-900 mb-2" }, "Thank You!"),
                React.createElement("p", { className: "text-gray-600 mb-6" }, "Your volunteer application has been submitted. We\u2019ll reach out with next steps."),
                React.createElement("button", { onClick: function () { return setShowModal(false); }, className: "w-full bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700" }, "Close"))))));
};
exports["default"] = VolunteerPage;
