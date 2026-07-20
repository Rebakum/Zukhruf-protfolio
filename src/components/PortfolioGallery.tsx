import React, { useState, useMemo, useCallback } from "react";
import { FeaturedProjects } from "./FeaturedProjects";
import { ArrowRight, X } from "lucide-react";

import logo1 from "../assets/images/logo1.jpg";
import logo2 from "../assets/images/logo2.jpg";
import logo3 from "../assets/images/logo3.jpg";
import logo4 from "../assets/images/logo4.jpg";
import logo5 from "../assets/images/logo5.jpg";
import logo6 from "../assets/images/logo6.jpg";
import logo7 from "../assets/images/logo7.jpg";
import logo8 from "../assets/images/logo8.jpg";
import logo9 from "../assets/images/logo9.jpg";
import logo10 from "../assets/images/logo10.jpg";
import logo11 from "../assets/images/logo11.jpg";
import logo12 from "../assets/images/logo12.jpg";
import logo13 from "../assets/images/logo13.jpg";
import logo14 from "../assets/images/logo14.jpg";
import logo15 from "../assets/images/logo15.jpg";
import logo16 from "../assets/images/logo16.jpg";
import logo17 from "../assets/images/logo17.jpg";
import logo18 from "../assets/images/logo18.jpg";
import log19 from "../assets/images/log19.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.jpg";
import social1 from "../assets/images/social1.jpg";
import social2 from "../assets/images/social2.jpg";
import social3 from "../assets/images/social3.jpg";
import social4 from "../assets/images/social4.jpg";
import social5 from "../assets/images/social5.jpg";
import branding_bag from "../assets/images/branding_bag_1783366638160.jpg";
import branding_mug from "../assets/images/branding_mug_1783366599685.jpg";
import branding_notebook from "../assets/images/branding_notebook_1783366650377.jpg";
import branding_signboard from "../assets/images/branding_signboard_1783366626796.jpg";
import branding_tshirt from "../assets/images/branding_tshirt_1783366612633.jpg";
import bag1 from "../assets/images/bag-1.jpg";
import bag2 from "../assets/images/bag2.jpg";
import bag3 from "../assets/images/bag-3.jpg";

type PortfolioItem = {
  id: string;
  projectTitle: string;
  category: string;
  company?: string;
  render: () => React.ReactNode;
};

const portfolioItems: PortfolioItem[] = [
  { id: "logo-1", projectTitle: "Brand AMANAH", category: "LOGO DESIGN", company: "AMANAH", render: () => <img src={logo1} alt="Logo 1" loading="lazy" className="w-full h-full hover:scale-105 object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-2", projectTitle: "Brand B.M FUNDING", category: "LOGO DESIGN", company: "B.M FUNDING", render: () => <img src={logo2} alt="Logo 2" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-3", projectTitle: "Brand DLOGY", category: "LOGO DESIGN", company: "DLOGY", render: () => <img src={logo3} alt="Logo 3" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-4", projectTitle: "Brand FARAH", category: "LOGO DESIGN", company: "FARAH", render: () => <img src={logo4} alt="Logo 4" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-5", projectTitle: "Brand AMANAH ", category: "LOGO DESIGN", company: "AMANAH", render: () => <img src={logo5} alt="Logo 5" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-6", projectTitle: "Brand BARAKAH", category: "LOGO DESIGN", company: "BARAKAH", render: () => <img src={logo6} alt="Logo 6" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-7", projectTitle: "Brand BARAKAH", category: "LOGO DESIGN", company: "BARAKAH", render: () => <img src={logo7} alt="Logo 7" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-8", projectTitle: "Brand ONE UMMA HEART", category: "LOGO DESIGN", company: "ONE UMMA HEART", render: () => <img src={logo8} alt="Logo 8" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-9", projectTitle: "Brand MAKHZAAN", category: "LOGO DESIGN", company: "MAKHZAAN", render: () => <img src={logo9} alt="Logo 9" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-10", projectTitle: "Brand MAKHZAAN", category: "LOGO DESIGN", company: "MAKHZAAN", render: () => <img src={logo10} alt="Logo 10" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-11", projectTitle: "Brand MAKHZAAN", category: "LOGO DESIGN", company: "MAKHZAAN", render: () => <img src={logo11} alt="Logo 11" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-12", projectTitle: "Brand MAKHZAAN", category: "LOGO DESIGN", company: "MAKHZAAN", render: () => <img src={logo12} alt="Logo 12" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-13", projectTitle: "Brand AN NOOR", category: "LOGO DESIGN", company: "AN NOOR", render: () => <img src={logo13} alt="Logo 13" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-14", projectTitle: "Brand AN NOOR", category: "LOGO DESIGN", company: "AN NOOR", render: () => <img src={logo14} alt="Logo 14" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-15", projectTitle: "Brand ARAF", category: "LOGO DESIGN", company: "ARAF", render: () => <img src={logo15} alt="Logo 15" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-16", projectTitle: "Brand ARAF", category: "LOGO DESIGN", company: "ARAF", render: () => <img src={logo16} alt="Logo 16" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-17", projectTitle: "Brand ZAFA ", category: "LOGO DESIGN", company: "ZAFA", render: () => <img src={logo17} alt="Logo 17" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-18", projectTitle: "Brand MAKHZAAN", category: "LOGO DESIGN", company: "MAKHZAAN", render: () => <img src={logo18} alt="Logo 18" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-19", projectTitle: "Brand MAKHZAAN", category: "LOGO DESIGN", company: "MAKHZAAN", render: () => <img src={log19} alt="Logo 19" loading="lazy" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "print-10", projectTitle: "ZAFA", category: "PRINT DESIGN", company: "ZAFA", render: () => <img src={img10} alt="Print Design 1" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "print-11", projectTitle: "AN-NOOR", category: "PRINT DESIGN", company: "AN NOOR", render: () => <img src={img11} alt="Print Design 2" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "print-12", projectTitle: "GRAFITY", category: "PRINT DESIGN", company: "GRAFITY", render: () => <img src={img12} alt="Print Design 3" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "print-13", projectTitle: "GRAFITY", category: "PRINT DESIGN", company: "GRAFITY", render: () => <img src={img13} alt="Print Design 4" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "print-14", projectTitle: "BARAKAH", category: "PRINT DESIGN", company: "BARAKAH", render: () => <img src={img14} alt="Print Design 5" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "social-1", projectTitle: "EVENING GAZA", category: "SOCIAL MEDIA", company: "EVENING GAZA", render: () => <img src={social1} alt="Social Media 1" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "social-2", projectTitle: "EVENING GAZA", category: "SOCIAL MEDIA", company: "EVENING GAZA", render: () => <img src={social2} alt="Social Media 2" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "social-3", projectTitle: "EVENING GAZA", category: "SOCIAL MEDIA", company: "EVENING GAZA", render: () => <img src={social3} alt="Social Media 3" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "social-4", projectTitle: "EVENING GAZA", category: "SOCIAL MEDIA", company: "EVENING GAZA", render: () => <img src={social4} alt="Social Media 4" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "social-5", projectTitle: "EVENING GAZA", category: "SOCIAL MEDIA", company: "EVENING GAZA", render: () => <img src={social5} alt="Social Media 5" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "brand-1", projectTitle: "Branded Bag", category: "BRANDING", render: () => <img src={branding_bag} alt="Branded Bag" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "brand-2", projectTitle: "Branded Mug", category: "BRANDING", render: () => <img src={branding_mug} alt="Branded Mug" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "brand-3", projectTitle: "Branded Notebook", category: "BRANDING", render: () => <img src={branding_notebook} alt="Branded Notebook" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "brand-4", projectTitle: "Branded Signboard", category: "BRANDING", render: () => <img src={branding_signboard} alt="Branded Signboard" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "brand-5", projectTitle: "Branded T-Shirt", category: "BRANDING", render: () => <img src={branding_tshirt} alt="Branded T-Shirt" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "pack-1", projectTitle: "Tote Bag", category: "PACKAGING", render: () => <img src={bag1} alt="Tote Bag" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "pack-2", projectTitle: "Merch Bag", category: "PACKAGING", render: () => <img src={bag2} alt="Merch Bag" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "pack-3", projectTitle: "Canvas Bag", category: "PACKAGING", render: () => <img src={bag3} alt="Canvas Bag" loading="lazy" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
];

type Company = string;

export const PortfolioGallery: React.FC = React.memo(() => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCompany, setActiveCompany] = useState<Company | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredItems = useMemo(() => {
    let items = activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category.toUpperCase() === activeCategory.toUpperCase()
        );
    if (activeCompany) {
      items = items.filter((item) => item.company === activeCompany);
    }
    return items;
  }, [activeCategory, activeCompany]);

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
    setActiveCompany(null);
    setShowAll(false);
  }, []);

  const handleCompanyChange = useCallback((company: Company | null) => {
    setActiveCompany(company);
    setShowAll(false);
  }, []);

  const toggleShowAll = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 12);

  return (
    <section id="portfolio" className="scroll-mt-24 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Headers */}
        <div className="text-center space-y-3">
          <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase">
            My Portfolio
          </span>
          <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-black tracking-tight text-slate-900 font-display">
            Explore My Work
          </h2>
        </div>

        {/* Categories Pills */}
        <FeaturedProjects
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
        />

        {/* Active company filter indicator */}
        {activeCompany && (
          <div className="flex justify-center">
            <button
              onClick={() => handleCompanyChange(null)}
              className="inline-flex items-center gap-2 text-[12px] font-extrabold bg-[#E10F0F]/10 text-[#E10F0F] px-4 py-2 rounded-full hover:bg-[#E10F0F]/20 transition-colors"
            >
             SHOWING: <span className="underline underline-offset-2">{activeCompany}</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Uniform card grid  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl transition-all duration-300 cursor-pointer group shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-red-200/60 hover:-translate-y-1 hover:border-red-200 p-2 min-w-0"
            >
              <div className="bg-white rounded-lg h-28 sm:h-40 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                {item.render()}
              </div>

              <h4
                className={`mt-2 sm:mt-3 text-[13px] sm:text-[16px] text-center font-bold text-slate-900 tracking-tight truncate transition-colors duration-200 ${item.company ? "cursor-pointer hover:text-[#E10F0F]" : "group-hover:text-[#E10F0F]"}`}
                onClick={() => item.company && handleCompanyChange(activeCompany === item.company ? null : item.company)}
                title={item.company ? `Click to show all ${item.company} work` : ""}
              >
                {item.projectTitle}
              </h4>

              <div className="text-[11px] sm:text-[13px] flex justify-center items-center font-extrabold text-slate-600 uppercase tracking-wider mt-1 group-hover:text-[#E10F0F] transition-colors duration-200 truncate">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA Button */}
        {filteredItems.length > 12 && (
          <div className="flex justify-center pt-6">
            <button 
              onClick={toggleShowAll}
              className="inline-flex items-center gap-2 bg-[#E10F0F] hover:bg-[#C90D0D] text-white text-[13px] font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md shadow-red-500/10 hover:shadow-lg hover:shadow-red-500/20 hover:scale-[1.03] active:scale-[0.98] group"
            >
              {showAll ? "Show Less" : "View All Projects"}
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${showAll ? "rotate-90" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
});
