import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home/HomePage";
import HomeLayout from "../pages/Home/layout";

import AboutPage from "../pages/About/AboutPage";
import AboutLayout from "../pages/About/layout";

import ServicesPage from "../pages/Services/ServicesPage";
import ServicesLayout from "../pages/Services/layout";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout><HomePage /></HomeLayout>} />
        <Route path="/about" element={<AboutLayout><AboutPage /></AboutLayout>} />
        <Route path="/services" element={<ServicesLayout><ServicesPage /></ServicesLayout>} />
        {/* more routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
