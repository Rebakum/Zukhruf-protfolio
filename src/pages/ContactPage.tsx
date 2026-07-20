import { useEffect } from "react";
import Contact from "../components/Contact";
import { ContactInfoBanner } from "../components/ContactInfoBanner";
import { Newsletter } from "../components/Newsletter";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact - Zukhruf Creative Design Academy";
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-16">
      <ContactInfoBanner />
      <Contact />
      <Newsletter />
    </div>
  );
}
