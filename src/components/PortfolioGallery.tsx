import React, { useState } from "react";
import { FeaturedProjects } from "./FeaturedProjects";
import { ArrowRight } from "lucide-react";

type PortfolioItem = {
  id: string;
  projectTitle: string;
  category: string;
  render: () => React.ReactNode;
};

const AmanahLogo = () => (
  <div className="flex flex-col items-center gap-1">
    <span className="text-2xl font-bold text-teal-800 tracking-tighter" style={{ fontFamily: "serif" }}>
      idl:
    </span>
    <span className="text-[8px] font-bold text-teal-800 tracking-[0.25em] uppercase">
      Amanah Foundation
    </span>
  </div>
);

const BarakahTreeLogo = () => (
  <div className="flex flex-col items-center gap-1">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="14" r="6" stroke="#2d6a4f" strokeWidth="1.5" fill="none" />
      <line x1="20" y1="20" x2="20" y2="34" stroke="#2d6a4f" strokeWidth="1.5" />
      <circle cx="20" cy="14" r="2" fill="#2d6a4f" />
    </svg>
    <span className="text-[7px] font-bold text-teal-800 tracking-[0.15em] uppercase text-center leading-tight">
      Barakah<br />Foundation
    </span>
  </div>
);

const BMFundingLogo = () => (
  <div className="flex flex-col items-center gap-1">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="18" r="8" stroke="#d4380d" strokeWidth="1.5" fill="none" />
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={20 + 10 * Math.cos(angle)}
            y1={18 + 10 * Math.sin(angle)}
            x2={20 + 13 * Math.cos(angle)}
            y2={18 + 13 * Math.sin(angle)}
            stroke="#d4380d"
            strokeWidth="1.5"
          />
        );
      })}
      <circle cx="20" cy="18" r="3" fill="#d4380d" />
    </svg>
    <span className="text-[7px] font-bold text-red-700 tracking-[0.1em] uppercase text-center leading-tight">
      B.M.Funding<br />Foundation
    </span>
  </div>
);

const EmpowerLogo = () => (
  <div className="flex flex-col items-center gap-1">
    <svg width="40" height="36" viewBox="0 0 40 36" fill="none">
      <path d="M20 4L36 32H4L20 4Z" stroke="#1a3a5c" strokeWidth="1.5" fill="none" />
      <path d="M20 12L28 28H12L20 12Z" stroke="#d4380d" strokeWidth="1" fill="none" />
    </svg>
    <span className="text-[7px] font-bold text-slate-700 tracking-[0.15em] uppercase text-center leading-tight">
      Empower<br />World
    </span>
  </div>
);

const BusinessCardsSpread = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute" style={{ transform: "rotate(-8deg) translateX(-10px)", top: "20%" }}>
      <div className="w-16 h-10 bg-teal-700 rounded shadow-md" />
    </div>
    <div className="absolute" style={{ transform: "rotate(4deg) translateX(8px)", top: "25%" }}>
      <div className="w-16 h-10 bg-white border border-slate-200 rounded shadow-md flex items-center justify-center">
        <div className="w-6 h-1 bg-slate-300 rounded" />
      </div>
    </div>
  </div>
);

const AmanahMug = () => (
  <div className="flex items-center justify-center">
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <rect x="8" y="12" width="24" height="28" rx="3" stroke="#999" strokeWidth="1.5" fill="white" />
      <path d="M32 18C32 18 38 18 38 25C38 32 32 32 32 32" stroke="#999" strokeWidth="1.5" fill="none" />
      <rect x="13" y="36" width="14" height="3" rx="1" fill="#e5e5e5" />
    </svg>
  </div>
);

const MinimalistPackaging = () => (
  <div className="flex items-center justify-center">
    <div className="w-20 h-20 bg-emerald-700 rounded-lg shadow-md flex items-center justify-center" style={{ transform: "rotate(-5deg)" }}>
      <div className="w-6 h-6 border-2 border-white/40 rounded-sm" />
    </div>
  </div>
);

const BarakahGiftBag = () => (
  <div className="flex items-center justify-center">
    <svg width="50" height="55" viewBox="0 0 50 55" fill="none">
      <rect x="5" y="18" width="40" height="34" rx="2" stroke="#8b7355" strokeWidth="1.5" fill="#f5f0e8" />
      <path d="M15 18C15 10 20 6 25 6C30 6 35 10 35 18" stroke="#8b7355" strokeWidth="1.5" fill="none" />
      <line x1="25" y1="6" x2="25" y2="18" stroke="#8b7355" strokeWidth="1" />
    </svg>
  </div>
);

const ZukhrufTshirt = () => (
  <div className="flex items-center justify-center">
    <svg width="55" height="50" viewBox="0 0 55 50" fill="none">
      <path d="M15 10L5 18L12 22L12 44L43 44L43 22L50 18L40 10L35 16H20L15 10Z" fill="#d4380d" stroke="#b72d1e" strokeWidth="1" />
      <path d="M20 16H35" stroke="white" strokeWidth="0.5" />
    </svg>
  </div>
);

const BMSignboard = () => (
  <div className="flex items-center justify-center">
    <div className="w-full h-full bg-[#1a2332] rounded flex flex-col items-center justify-center gap-1">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#3a8a6e" strokeWidth="1" fill="none" />
        <circle cx="12" cy="12" r="6" stroke="#3a8a6e" strokeWidth="0.5" fill="none" />
        <circle cx="12" cy="12" r="2" fill="#3a8a6e" />
      </svg>
      <span className="text-[6px] text-white/80 tracking-[0.2em] uppercase font-semibold">
        Barakah
      </span>
    </div>
  </div>
);

const CorporateStationery = () => (
  <div className="flex items-center justify-center relative">
    <div className="absolute" style={{ transform: "rotate(-10deg) translateX(-8px)" }}>
      <div className="w-14 h-10 bg-white border border-slate-200 rounded shadow-sm flex items-center justify-center">
        <div className="w-4 h-1 bg-red-400 rounded" />
      </div>
    </div>
    <div className="absolute" style={{ transform: "rotate(5deg) translateX(8px)", top: "5px" }}>
      <div className="w-14 h-10 bg-red-500 rounded shadow-sm flex items-center justify-center">
        <div className="w-4 h-1 bg-white/50 rounded" />
      </div>
    </div>
  </div>
);

const ZukhrufNotebook = () => (
  <div className="flex items-center justify-center">
    <svg width="45" height="50" viewBox="0 0 45 50" fill="none">
      <rect x="5" y="2" width="32" height="44" rx="2" fill="#d4380d" stroke="#b72d1e" strokeWidth="1" />
      <rect x="5" y="2" width="32" height="44" rx="2" fill="none" stroke="#c9341c" strokeWidth="0.5" />
      <line x1="8" y1="2" x2="8" y2="46" stroke="#b72d1e" strokeWidth="0.5" />
      <path d="M37 8H40L42 10V40L40 42H37" stroke="#b72d1e" strokeWidth="1" fill="#c9341c" />
      <text x="21" y="28" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="serif">
        Z
      </text>
    </svg>
  </div>
);

const portfolioItems: PortfolioItem[] = [
  { id: "amanah-identity", projectTitle: "Amanah Identity", category: "LOGO DESIGN", render: () => <AmanahLogo /> },
  { id: "barakah-tree", projectTitle: "Barakah Tree", category: "LOGO DESIGN", render: () => <BarakahTreeLogo /> },
  { id: "bm-funding-brand", projectTitle: "B.M. Funding Brand", category: "LOGO DESIGN", render: () => <BMFundingLogo /> },
  { id: "empower-world", projectTitle: "Empower World", category: "LOGO DESIGN", render: () => <EmpowerLogo /> },
  { id: "business-cards", projectTitle: "Business Cards Spread", category: "PRINT DESIGN", render: () => <BusinessCardsSpread /> },
  { id: "amanah-mug", projectTitle: "Amanah Premium Mug", category: "BRANDING", render: () => <AmanahMug /> },
  { id: "minimalist-packaging", projectTitle: "Minimalist Packaging", category: "PACKAGING", render: () => <MinimalistPackaging /> },
  { id: "barakah-gift-bag", projectTitle: "Barakah Gift Bag", category: "PACKAGING", render: () => <BarakahGiftBag /> },
  { id: "zukhruf-tshirt", projectTitle: "Zukhruf Red T-Shirt", category: "BRANDING", render: () => <ZukhrufTshirt /> },
  { id: "bm-signboard", projectTitle: "B.M. Wood Signboard", category: "BRANDING", render: () => <BMSignboard /> },
  { id: "corporate-stationery", projectTitle: "Corporate Stationery", category: "PRINT DESIGN", render: () => <CorporateStationery /> },
  { id: "zukhruf-notebook", projectTitle: "Zukhruf Notebook", category: "BRANDING", render: () => <ZukhrufNotebook /> },
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
    <section id="portfolio" className="py-20 border-t border-slate-100/60 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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

        {/* Uniform card grid (matches provided screenshot) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-slate-50 p-4 border-2 border-transparent hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 cursor-pointer group"
            >
              <div className="bg-white rounded-lg h-40 flex items-center justify-center p-4 shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300">
                {item.render()}
              </div>

              <h4 className="mt-3 text-sm font-black text-slate-800 tracking-tight truncate group-hover:text-slate-900 transition-colors duration-300">
                {item.projectTitle}
              </h4>

              <div className="text-[9px] font-extrabold text-[#E10F0F] uppercase tracking-wider mt-1">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div className="flex justify-center pt-8">
          <button className="inline-flex items-center gap-2.5 bg-[#E10F0F] hover:bg-[#C90D0D] text-white text-[13px] font-extrabold py-4 px-10 rounded-xl transition-all duration-300 shadow-md shadow-red-500/10 hover:scale-[1.02] active:scale-[0.98]">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
