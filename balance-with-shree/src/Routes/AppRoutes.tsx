import { Routes, Route, Navigate } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import NutritionPage from "../pages/NutritionPage";
import YogaPage from "../pages/YogaPage";
import AyurvedaPage from "../pages/AyurvedaPage";
import ScrollToTop from "../components/ScrollToTop";

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/yoga" element={<YogaPage />} />
        <Route path="/ayurveda" element={<AyurvedaPage />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
