import { useEffect } from "react";
import { PricingPackages } from "../components/PricingPackages";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { ContactInfoBanner } from "../components/ContactInfoBanner";
import { Newsletter } from "../components/Newsletter";

export default function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pricing - Zukhruf Creative Design Academy";
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-16">
      <PricingPackages />
      <Testimonials />
      <FAQ />
      <ContactInfoBanner />
      <Newsletter />
    </div>
  );
}
