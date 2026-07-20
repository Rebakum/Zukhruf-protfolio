import { useEffect } from "react";
import { Services } from "../components/Services";
import { DesignProcess } from "../components/DesignProcess";
import { PricingPackages } from "../components/PricingPackages";
import { Testimonials } from "../components/Testimonials";
import { ContactInfoBanner } from "../components/ContactInfoBanner";
import { Newsletter } from "../components/Newsletter";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services - Zukhruf Creative Design Academy";
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-16">
      <Services />
      <DesignProcess />
      <PricingPackages />
      <Testimonials />
      <ContactInfoBanner />
      <Newsletter />
    </div>
  );
}
