import React, { useState } from "react";
import { FeaturedProjects } from "./FeaturedProjects";
import { ArrowRight } from "lucide-react";

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
  render: () => React.ReactNode;
};

const portfolioItems: PortfolioItem[] = [
  { id: "logo-1", projectTitle: "Brand AMANAH", category: "LOGO DESIGN", render: () => <img src={logo1} alt="Logo 1" className="w-full h-full hover:scale-105 object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-2", projectTitle: "Brand B.M FUNDING", category: "LOGO DESIGN", render: () => <img src={logo2} alt="Logo 2" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-3", projectTitle: "Brand DLOGY", category: "LOGO DESIGN", render: () => <img src={logo3} alt="Logo 3" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-4", projectTitle: "Brand FARAH", category: "LOGO DESIGN", render: () => <img src={logo4} alt="Logo 4" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-5", projectTitle: "Brand AMANAH ", category: "LOGO DESIGN", render: () => <img src={logo5} alt="Logo 5" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-6", projectTitle: "Brand BARAKAH", category: "LOGO DESIGN", render: () => <img src={logo6} alt="Logo 6" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-7", projectTitle: "Brand BARAKAH", category: "LOGO DESIGN", render: () => <img src={logo7} alt="Logo 7" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-8", projectTitle: "Brand ONE UMMA HEART", category: "LOGO DESIGN", render: () => <img src={logo8} alt="Logo 8" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-9", projectTitle: "Brand MAKHZAAN", category: "LOGO DESIGN", render: () => <img src={logo9} alt="Logo 9" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-10", projectTitle: "Brand MAKHZAAN", category: "LOGO DESIGN", render: () => <img src={logo10} alt="Logo 10" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-11", projectTitle: "Brand MAKHZAAN", category: "LOGO DESIGN", render: () => <img src={logo11} alt="Logo 11" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-12", projectTitle: "Brand MAKHZAAN", category: "LOGO DESIGN", render: () => <img src={logo12} alt="Logo 12" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-13", projectTitle: "Brand AN NOOR", category: "LOGO DESIGN", render: () => <img src={logo13} alt="Logo 13" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-14", projectTitle: "Brand AN NOOR", category: "LOGO DESIGN", render: () => <img src={logo14} alt="Logo 14" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-15", projectTitle: "Brand ARAF", category: "LOGO DESIGN", render: () => <img src={logo15} alt="Logo 15" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-16", projectTitle: "Brand ARAF", category: "LOGO DESIGN", render: () => <img src={logo16} alt="Logo 16" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-17", projectTitle: "Brand ZAFA ", category: "LOGO DESIGN", render: () => <img src={logo17} alt="Logo 17" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-18", projectTitle: "Brand MAKHZAAN", category: "LOGO DESIGN", render: () => <img src={logo18} alt="Logo 18" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "logo-19", projectTitle: "Brand MAKHZAAN", category: "LOGO DESIGN", render: () => <img src={log19} alt="Logo 19" className="w-full hover:scale-105 h-full object-contain rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "print-10", projectTitle: "ZAFA", category: "PRINT DESIGN", render: () => <img src={img10} alt="Print Design 1" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "print-11", projectTitle: "AN-NOOR", category: "PRINT DESIGN", render: () => <img src={img11} alt="Print Design 2" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "print-12", projectTitle: "GRAFITY", category: "PRINT DESIGN", render: () => <img src={img12} alt="Print Design 3" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "print-13", projectTitle: "GRAFITY", category: "PRINT DESIGN", render: () => <img src={img13} alt="Print Design 4" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "print-14", projectTitle: "BARAKAH", category: "PRINT DESIGN", render: () => <img src={img14} alt="Print Design 5" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "social-1", projectTitle: "EVENING GAZA", category: "SOCIAL MEDIA", render: () => <img src={social1} alt="Social Media 1" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "social-2", projectTitle: "EVENING GAZA", category: "SOCIAL MEDIA", render: () => <img src={social2} alt="Social Media 2" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "social-3", projectTitle: "EVENING GAZA", category: "SOCIAL MEDIA", render: () => <img src={social3} alt="Social Media 3" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "social-4", projectTitle: "EVENING GAZA", category: "SOCIAL MEDIA", render: () => <img src={social4} alt="Social Media 4" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "social-5", projectTitle: "EVENING GAZA", category: "SOCIAL MEDIA", render: () => <img src={social5} alt="Social Media 5" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "brand-1", projectTitle: "Branded Bag", category: "BRANDING", render: () => <img src={branding_bag} alt="Branded Bag" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "brand-2", projectTitle: "Branded Mug", category: "BRANDING", render: () => <img src={branding_mug} alt="Branded Mug" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "brand-3", projectTitle: "Branded Notebook", category: "BRANDING", render: () => <img src={branding_notebook} alt="Branded Notebook" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "brand-4", projectTitle: "Branded Signboard", category: "BRANDING", render: () => <img src={branding_signboard} alt="Branded Signboard" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "brand-5", projectTitle: "Branded T-Shirt", category: "BRANDING", render: () => <img src={branding_tshirt} alt="Branded T-Shirt" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "pack-1", projectTitle: "Tote Bag", category: "PACKAGING", render: () => <img src={bag1} alt="Tote Bag" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "pack-2", projectTitle: "Merch Bag", category: "PACKAGING", render: () => <img src={bag2} alt="Merch Bag" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
  { id: "pack-3", projectTitle: "Canvas Bag", category: "PACKAGING", render: () => <img src={bag3} alt="Canvas Bag" className="w-full hover:scale-105 h-full object-cover rounded-xl border border-gray-300" referrerPolicy="no-referrer" /> },
];

export const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category.toUpperCase() === activeCategory.toUpperCase()
        );

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Headers */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase">
            My Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
            Explore My Work
          </h2>
        </div>

        {/* Categories Pills */}
        <FeaturedProjects
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Uniform card grid  */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl transition-all duration-300 cursor-pointer group shadow-sm border border-slate-100 group-hover:shadow-lg group-hover:shadow-slate-200/60 group-hover:-translate-y-1 group-hover:border-slate-200 p-2"
            >
              <div className="bg-white rounded-lg h-40 flex items-center justify-center p-4 ">
                {item.render()}
              </div>

              <h4 className="mt-3 text-[13px]  text-center font-bold text-slate-800 tracking-tight truncate group-hover:text-[#E10F0F] transition-colors duration-200">
                {item.projectTitle}
              </h4>

              <div className="text-[9px] flex justify-center items-center font-extrabold text center text-slate-400 uppercase tracking-wider mt-1 group-hover:text-[#E10F0F] transition-colors duration-200">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div className="flex justify-center pt-6">
          <button 
            onClick={() => setActiveCategory("All")}
            className="inline-flex items-center gap-2 bg-[#E10F0F] hover:bg-[#C90D0D] text-white text-[12px] font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md shadow-red-500/10 hover:shadow-lg hover:shadow-red-500/20 hover:scale-[1.03] active:scale-[0.98] group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
