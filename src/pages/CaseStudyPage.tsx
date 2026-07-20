import { useEffect } from "react";
import { CaseStudy } from "../components/CaseStudy";
import { ContactInfoBanner } from "../components/ContactInfoBanner";
import { Newsletter } from "../components/Newsletter";

export default function CaseStudyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Case Study - Zukhruf Creative Design Academy";
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-16">
      <CaseStudy />
      <ContactInfoBanner />
      <Newsletter />
    </div>
  );
}
