import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CaseStudyPage from "./pages/CaseStudyPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-slate-700 antialiased selection:bg-red-500 selection:text-white">
        <Navbar />
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/CaseStudy" element={<CaseStudyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
