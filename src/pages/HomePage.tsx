import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Statistics } from "../components/Statistics";
import { TrustedLogos } from "../components/TrustedLogos";
import { Services } from "../components/Services";
import { DesignProcess } from "../components/DesignProcess";
import { PricingPackages } from "../components/PricingPackages";
import { Testimonials } from "../components/Testimonials";
import { ContactInfoBanner } from "../components/ContactInfoBanner";
import { SideCaseStudy } from "../components/SideCaseStudy";
import { Newsletter } from "../components/Newsletter";
import { BrandShowcase } from "../components/BrandShowcase";
import { PortfolioGallery } from "../components/PortfolioGallery";
import { LatestCaseStudy } from "../components/LatestCaseStudy";
import { Blog } from "../components/Blog";
import { FAQ } from "../components/FAQ";
import Contact from "../components/Contact";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Zukhruf - Creative Design Academy";
  }, []);

  return (
    <>
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
      <BrandShowcase />
      <PortfolioGallery />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-10">
        <LatestCaseStudy />
        <Blog />
        <FAQ />
        <Contact />
      </div>
    </>
  );
}
