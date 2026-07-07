import React from "react";
import { Navbar } from "./components/Navbar";

import { Statistics } from "./components/Statistics";
import { TrustedLogos } from "./components/TrustedLogos";
import { Services } from "./components/Services";
import { DesignProcess } from "./components/DesignProcess";
import { PricingPackages } from "./components/PricingPackages";
import { Testimonials } from "./components/Testimonials";
import { ContactInfoBanner } from "./components/ContactInfoBanner";
import { SideCaseStudy } from "./components/SideCaseStudy";
import { Newsletter } from "./components/Newsletter";
import { PortfolioGallery } from "./components/PortfolioGallery";
import { LatestCaseStudy } from "./components/LatestCaseStudy";
import { FAQ } from "./components/FAQ";

import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import Contact from "./components/Contact";
import { BrandShowcase } from "./components/BrandShowcase";



export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <Hero />
          <Statistics />
          <TrustedLogos />
          <Services />
          <DesignProcess />
          <PricingPackages />
          <Testimonials />
          <ContactInfoBanner />
          <SideCaseStudy />
          <Newsletter />
        </div>
        <BrandShowcase/>

        <PortfolioGallery />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-10">
          <LatestCaseStudy />
          <FAQ />
          <Contact />
        </div>
      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
