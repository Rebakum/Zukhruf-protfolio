import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AmanahLogo, BarakahLogo, BMFundingLogo } from "./Logos";

export const FeaturedProjectsSection: React.FC = () => {
  const featured = [
    {
      title: "Amanah Foundation",
      subtitle: "Brand Identity Design",
      logo: <AmanahLogo className="scale-110" />,
      bgColor: "bg-teal-50/30",
      borderColor: "border-teal-100/50",
    },
    {
      title: "Barakah Foundation",
      subtitle: "Brand Identity Design",
      logo: <BarakahLogo className="scale-110" />,
      bgColor: "bg-emerald-50/30",
      borderColor: "border-emerald-100/50",
    },
    {
      title: "BM Funding",
      subtitle: "Brand Identity Design",
      logo: <BMFundingLogo className="scale-110" />,
      bgColor: "bg-red-50/20",
      borderColor: "border-red-100/30",
    },
  ];

  return (
    <section className="py-12 border-t border-slate-100 bg-white">
      <div className="space-y-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-left space-y-1">
            <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
              Featured Branding Projects
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 font-display">
              My Featured Projects
            </h2>
          </div>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-1.5 bg-[#E10F0F] hover:bg-[#C90D0D] text-white text-[11px] font-extrabold py-2.5 px-5 rounded-lg transition-colors duration-200 uppercase tracking-wider shadow-sm shadow-red-500/10"
          >
            View All Projects
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Column Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Visual Logo Stage */}
              <div className={`aspect-[4/3] ${item.bgColor} border-b border-slate-50 flex items-center justify-center p-6 relative overflow-hidden`}>
                <div className="transform transition-transform duration-500 group-hover:scale-110">
                  {item.logo}
                </div>
                {/* Visual grid pattern accent */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
              </div>

              {/* Text Area */}
              <div className="p-5 text-left space-y-3">
                <div className="space-y-1">
                  <h3 className="text-base font-black text-slate-950 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400">
                    {item.subtitle}
                  </p>
                </div>

                {/* Case Study Link */}
                <div className="pt-2">
                  <a
                    href="#portfolio"
                    className="inline-flex items-center gap-1 text-[#E10F0F] hover:text-[#C90D0D] text-[11px] font-extrabold uppercase tracking-wider group/link"
                  >
                    View Case Study
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
