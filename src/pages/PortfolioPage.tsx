import { useEffect } from "react";
import { BrandShowcase } from "../components/BrandShowcase";
import { PortfolioGallery } from "../components/PortfolioGallery";
import { LatestCaseStudy } from "../components/LatestCaseStudy";
import { FeaturedProjectsSection } from "../components/FeaturedProjectsSection";

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Portfolio - Zukhruf Creative Design Academy";
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-16">
        <FeaturedProjectsSection />
      </div>
      <BrandShowcase />
      <PortfolioGallery />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-10">
        <LatestCaseStudy />
      </div>
    </>
  );
}
