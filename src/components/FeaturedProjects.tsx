import React from "react";

interface CategoryPillProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const CategoryPill: React.FC<CategoryPillProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-[12px] font-extrabold px-6 py-3 rounded-full transition-all duration-300 focus:outline-none border tracking-tight ${
        active
          ? "bg-[#E10F0F] text-white border-[#E10F0F] shadow-md"
          : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-800"
      }`}
    >
      {label}
    </button>
  );
};

interface FeaturedProjectsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = React.memo(({
  activeCategory,
  setActiveCategory,
}) => {
  const categories = ["All", "Logo Design", "Branding", "Packaging", "Social Media", "Print Design"];

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      {/* Category Pills Slider/Container */}
      <div className="flex-wrap justify-center items-center gap-3 py-1 flex w-full">
        {categories.map((cat) => (
          <CategoryPill
            key={cat}
            label={cat}
            active={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          />
        ))}
      </div>
    </div>
  );
});
