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
var fa6_1 = require("react-icons/fa6");
var GetInTouchSection = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = react_1.useState(false), isSubmitting = _b[0], setIsSubmitting = _b[1];
    var _c = react_1.useState('idle'), submitStatus = _c[0], setSubmitStatus = _c[1];
    var _d = react_1.useState({
        firstName: '',
        email: '',
        subject: '',
        message: ''
    }), formData = _d[0], setFormData = _d[1];
    var _e = react_1.useState({}), errors = _e[0], setErrors = _e[1];
    var sectionRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.2 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return function () { return observer.disconnect(); };
    }, []);
    var validateForm = function () {
        var newErrors = {};
        if (!formData.firstName.trim()) {
            newErrors.firstName = "Full name is required.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        }
        else {
            var validTLDs = [
                "com", "org", "net", "edu", "gov", "mil", "int", "co", "io", "ai", "biz", "info", "me", "us", "uk", "ca", "de", "fr", "jp", "au", "in", "za", "ng", "tz"
            ];
            var emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(formData.email.trim())) {
                newErrors.email = "Please enter a valid email address.";
            }
            else {
                var domain = formData.email.split('@')[1];
                var tld = domain.split('.').pop();
                if (!tld || !validTLDs.includes(tld.toLowerCase())) {
                    newErrors.email = "Please enter an email with a valid domain.";
                }
                if (/^(test|example|email|localhost)\./i.test(domain)) {
                    newErrors.email = "Please enter an email with a valid domain.";
                }
            }
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message cannot be empty.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    var handleInputChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
        // clear error when typing
        if (errors[name]) {
            setErrors(function (prev) {
                var updated = __assign({}, prev);
                delete updated[name];
                return updated;
            });
        }
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    if (!validateForm())
                        return [2 /*return*/];
                    setIsSubmitting(true);
                    setSubmitStatus('idle');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, fetch('https://formspree.io/f/mdkoebpr', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formData)
                        })];
                case 2:
                    response = _b.sent();
                    if (response.ok) {
                        setSubmitStatus('success');
                        setFormData({ firstName: '', email: '', subject: '', message: '' });
                        // Reset success message after 5 seconds
                        setTimeout(function () { return setSubmitStatus('idle'); }, 5000);
                    }
                    else {
                        setSubmitStatus('error');
                    }
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setSubmitStatus('error');
                    return [3 /*break*/, 5];
                case 4:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("section", { ref: sectionRef, id: "getintouch", className: "py-20 relative overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-emerald-700" },
            React.createElement("div", { className: "absolute inset-0 opacity-10" },
                React.createElement("div", { className: "absolute inset-0", style: {
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
                    } }))),
        React.createElement("div", { className: "absolute inset-0 overflow-hidden pointer-events-none" },
            React.createElement("div", { className: "absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse" }),
            React.createElement("div", { className: "absolute bottom-20 right-20 w-24 h-24 bg-yellow-400/20 rounded-full animate-bounce", style: { animationDelay: "2s" } }),
            React.createElement("div", { className: "absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-ping", style: { animationDuration: "3s" } })),
        React.createElement("div", { className: "container mx-auto px-4 lg:px-6 relative z-10" },
            React.createElement("div", { className: "bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl \n                       p-8 md:p-12 transform transition-all duration-1000 " + (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0') },
                React.createElement("div", { className: "grid lg:grid-cols-2 gap-12 items-center" },
                    React.createElement("div", { className: "text-white" },
                        React.createElement("div", { className: "mb-8" },
                            React.createElement("div", { className: "flex items-center gap-3 mb-4" },
                                React.createElement("div", { className: "w-8 h-0.5 bg-yellow-400 rounded-full" }),
                                React.createElement("span", { className: "text-yellow-400 uppercase font-semibold text-sm tracking-wide" }, "Get In Touch")),
                            React.createElement("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" },
                                "Have a Question? Send Us a",
                                " ",
                                React.createElement("span", { className: "text-yellow-400" }, "Message")),
                            React.createElement("p", { className: "text-white/90 text-lg leading-relaxed mb-8" }, "We're here to help you grow your agricultural business. Reach out to us for consultation, support, or any questions about our services.")),
                        React.createElement("div", { className: "grid grid-cols-2 gap-6" },
                            React.createElement("div", { className: "text-center" },
                                React.createElement("div", { className: "text-2xl font-bold text-yellow-400 mb-1" }, "24/7"),
                                React.createElement("div", { className: "text-sm text-white/80" }, "Support Available")),
                            React.createElement("div", { className: "text-center" },
                                React.createElement("div", { className: "text-2xl font-bold text-yellow-400 mb-1" }, "<2hrs"),
                                React.createElement("div", { className: "text-sm text-white/80" }, "Response Time")))),
                    React.createElement("div", { className: "bg-white rounded-2xl shadow-xl p-8" },
                        submitStatus === 'success' && (React.createElement("div", { className: "mb-6 p-4 bg-green-50 border border-green-200 rounded-xl" },
                            React.createElement("div", { className: "flex items-center gap-3 text-green-800" },
                                React.createElement(fa6_1.FaCheck, { className: "w-5 h-5 text-green-600" }),
                                React.createElement("span", { className: "font-medium" }, "Message sent successfully! We'll get back to you soon.")))),
                        submitStatus === 'error' && (React.createElement("div", { className: "mb-6 p-4 bg-red-50 border border-red-200 rounded-xl" },
                            React.createElement("div", { className: "flex items-center gap-3 text-red-800" },
                                React.createElement("span", { className: "font-medium" }, "Failed to send message. Please try again or contact us directly.")))),
                        React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6" },
                            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
                                React.createElement("div", null,
                                    React.createElement("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-700 mb-2" }, "Full Name *"),
                                    React.createElement("input", { type: "text", name: "firstName", id: "firstName", value: formData.firstName, onChange: handleInputChange, placeholder: "Enter your name", required: true, className: "w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 \n                               placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 \n                               focus:border-green-500 transition-all duration-300\n                               " + (errors.firstName ? "border-red-500 focus:ring-red-500" : "bg-gray-50 border-gray-200 focus:ring-green-500 focus:border-green-500") }),
                                    errors.firstName && React.createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.firstName)),
                                React.createElement("div", null,
                                    React.createElement("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-2" }, "Email Address *"),
                                    React.createElement("input", { type: "email", name: "email", id: "email", value: formData.email, onChange: handleInputChange, placeholder: "Enter your email", required: true, className: "w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 \n                               placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 \n                               focus:border-green-500 transition-all duration-300\n                                " + (errors.email ? "border-red-500 focus:ring-red-500" : "bg-gray-50 border-gray-200 focus:ring-green-500 focus:border-green-500") }),
                                    errors.email && React.createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.email))),
                            React.createElement("div", null,
                                React.createElement("label", { htmlFor: "subject", className: "block text-sm font-medium text-gray-700 mb-2" }, "Subject"),
                                React.createElement("input", { type: "text", name: "subject", id: "subject", value: formData.subject, onChange: handleInputChange, placeholder: "What's this about?", className: "w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 \n                             placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 \n                             focus:border-green-500 transition-all duration-300" })),
                            React.createElement("div", null,
                                React.createElement("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-2" }, "Message *"),
                                React.createElement("textarea", { name: "message", id: "message", value: formData.message, onChange: handleInputChange, placeholder: "Tell us how we can help...", required: true, rows: 5, className: "w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 \n                             placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 \n                             focus:border-green-500 transition-all duration-300 resize-none\n                             " + (errors.message ? "border-red-500 focus:ring-red-500" : "bg-gray-50 border-gray-200 focus:ring-green-500 focus:border-green-500") }),
                                errors.message && React.createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.message)),
                            React.createElement("button", { type: "submit", disabled: isSubmitting || Object.keys(errors).length > 0, className: "group w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white \n                           font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl \n                           transform hover:scale-[1.02] transition-all duration-300 \n                           disabled:opacity-50 disabled:cursor-not-allowed \n                           disabled:transform-none flex items-center justify-center gap-3" }, isSubmitting ? (React.createElement(React.Fragment, null,
                                React.createElement(fa6_1.FaSpinner, { className: "w-5 h-5 animate-spin" }),
                                React.createElement("span", null, "Sending Message..."))) : (React.createElement(React.Fragment, null,
                                React.createElement("span", null, "Send Message"),
                                React.createElement(fa6_1.FaArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" })))),
                            React.createElement("p", { className: "text-sm text-gray-600 text-center" }, "By sending this message, you agree to our privacy policy and terms of service."))))))));
};
exports["default"] = GetInTouchSection;
