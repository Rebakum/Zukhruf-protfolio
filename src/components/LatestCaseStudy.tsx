import React from "react";
import { ArrowRight } from "lucide-react";
import latestCaseStudyImg from "../assets/images/latest_case_study_1783403341928.jpg";

export const LatestCaseStudy: React.FC = React.memo(() => {
  return (
    <div className="space-y-6 text-left bg-white border border-gray-200 p-7 rounded-2xl shadow-lg hover:shadow-red-200/60 hover:border-red-200 transition-all duration-300 cursor-pointer group">
      <div className="space-y-2">
        <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
          Latest Case Study
        </span>
        <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-black tracking-tight text-slate-900 font-display">
          Amanah Foundation <br />
          Brand Identity Design
        </h2>
      </div>

      <p className="text-[16px] leading-relaxed text-slate-500 font-medium">
        Complete brand identity design for Amanah Foundation. From logo concept to brand guidelines and stationery design.
      </p>

      <div>
        <button className="inline-flex items-center gap-2.5 bg-[#E10F0F] hover:bg-[#C90D0D] text-white text-[13px] font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md shadow-red-500/5 hover:shadow-lg hover:shadow-red-500/25 hover:scale-[1.05] active:scale-[0.98] group-hover:translate-x-1">
          View Case Study
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Mockup Showcase Image */}
      <div className="rounded-xl overflow-hidden border border-slate-100/80 shadow-sm relative group mt-4">
        <img
          src={latestCaseStudyImg}
          alt="Amanah Foundation brand identity mockups"
          loading="lazy"
          className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.03]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/5 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
});
