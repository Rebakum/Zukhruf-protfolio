import React from "react";
import { ArrowRight } from "lucide-react";
import latestCaseStudyImg from "../assets/images/latest_case_study_1783403341928.jpg";

export const LatestCaseStudy: React.FC = () => {
  return (
    <div className="space-y-6 text-left bg-white border border-slate-100 p-7 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="space-y-2">
        <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
          Latest Case Study
        </span>
        <h3 className="text-2xl font-black tracking-tight text-slate-900 leading-tight font-display">
          Amanah Foundation <br />
          Brand Identity Design
        </h3>
      </div>

      <p className="text-[13px] leading-relaxed text-slate-500 font-medium">
        Complete brand identity design for Amanah Foundation. From logo concept to brand guidelines and stationery design.
      </p>

      <div>
        <button className="inline-flex items-center gap-2.5 bg-[#E10F0F] hover:bg-[#C90D0D] text-white text-[12px] font-bold py-3 px-6 rounded-xl transition-colors duration-200 shadow-md shadow-red-500/5">
          View Case Study
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Mockup Showcase Image */}
      <div className="rounded-xl overflow-hidden border border-slate-100/80 shadow-sm relative group mt-4">
        <img
          src={latestCaseStudyImg}
          alt="Amanah Foundation brand identity mockups"
          className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.03]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/5 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
