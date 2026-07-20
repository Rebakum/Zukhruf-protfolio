import { useEffect } from "react";
import { About } from "../components/About";
import { Statistics } from "../components/Statistics";
import { TrustedLogos } from "../components/TrustedLogos";
import { DesignProcess } from "../components/DesignProcess";
import { Testimonials } from "../components/Testimonials";
import { Newsletter } from "../components/Newsletter";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About - Zukhruf Creative Design Academy";
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-16">
      <About />
      <Statistics />
      <TrustedLogos />
      <DesignProcess />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
