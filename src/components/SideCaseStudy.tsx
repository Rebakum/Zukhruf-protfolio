import React from "react";
import { ArrowUpRight } from "lucide-react";
import sideCaseStudyImg from "../assets/images/side_case_study_1783403303358.jpg";

export const SideCaseStudy: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
        {/* Left Side: Mockup Image */}
        <div className="sm:col-span-5 h-full min-h-[200px] relative overflow-hidden">
          <img
            src={sideCaseStudyImg}
            alt="Zukhruf design case studies"
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Dark Overlay gradient for crisp integration */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-slate-950/10 to-transparent sm:block hidden" />
        </div>

        {/* Right Side: Content */}
        <div className="sm:col-span-7 p-7 text-left space-y-4">
          <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
            Case Study
          </span>
          <h3 className="text-lg font-black tracking-tight leading-snug font-display">
            See How I Transform <br />
            Ideas Into Powerful Brands
          </h3>
          <p className="text-[12px] leading-relaxed text-slate-400 font-medium">
            Check out our detailed case studies and see the process behind the final design.
          </p>
          <div className="pt-1">
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 text-[12px] font-extrabold py-2.5 px-5 rounded-xl transition-colors duration-200"
            >
              View Case Studies
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
