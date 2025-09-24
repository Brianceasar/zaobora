"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaSpinner, FaCheck } from "react-icons/fa6";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import ContactInfoSection from "@/components/section/ContactInfoSection";
import GetInTouchSection from "@/components/section/GetInTouchSection";

const PartnerWithUsPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    organization: "",
    contactName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xwpklkgl", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setShowModal(true);
        setFormData({ organization: "", contactName: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <span className="text-green-600 font-medium">Partner with Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Partner with us to{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              create impact
            </span>
          </h1>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Partner With Us?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We collaborate with organizations, institutions, and changemakers to scale up
            solutions for sustainable agriculture, climate action, and community development.
            By partnering with us, your organization contributes to meaningful change
            while gaining visibility, trust, and shared knowledge.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Partnership Application Form
            </h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                ✅ Your request has been submitted. We’ll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                placeholder="Organization / Company Name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                placeholder="Contact Person Name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Contact Email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your partnership interests"
                rows={4}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
              >
                {isSubmitting ? <><FaSpinner className="animate-spin" /> Submitting...</> : <>Submit <FaArrowRight /></>}
              </button>
            </form>
          </div>
        </div>
      </section>

      <ContactInfoSection />
      <GetInTouchSection />
      <Footer />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
            <FaCheck className="w-10 h-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your partnership application has been submitted. Our team will reach out shortly.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerWithUsPage;
