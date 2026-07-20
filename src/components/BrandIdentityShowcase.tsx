import React from "react";
import { ZukhrufLogo } from "./Logos";

export const BrandIdentityShowcase: React.FC = () => {
  const items = [
    {
      label: "Logo Design",
      element: (
        <div className="w-full h-full bg-red-50/40 flex items-center justify-center">
          <ZukhrufLogo iconOnly className="scale-110" />
        </div>
      ),
    },
    {
      label: "Business Card",
      element: (
        <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center p-2 relative">
          <div className="w-16 h-10 bg-white border border-slate-100 rounded shadow-sm flex flex-col justify-between p-1.5 transform rotate-[-6deg] -translate-x-1.5 -translate-y-1">
            <div className="w-3 h-3 bg-[#E10F0F] rounded-sm" />
            <div className="w-6 h-1 bg-slate-200 rounded-sm" />
          </div>
          <div className="w-16 h-10 bg-[#E10F0F] text-white rounded shadow-sm flex flex-col justify-between p-1.5 transform rotate-[4deg] translate-x-1.5 translate-y-1">
            <div className="w-3 h-3 bg-white rounded-sm" />
            <div className="w-6 h-1 bg-white/30 rounded-sm" />
          </div>
        </div>
      ),
    },
    {
      label: "Mug Design",
      element: (
        <div className="w-full h-full bg-slate-50/50 flex items-center justify-center relative">
          <div className="relative flex items-center">
            {/* Handle */}
            <div className="absolute left-[24px] w-4 h-8 border-4 border-slate-200 rounded-r-lg" />
            {/* Body */}
            <div className="w-10 h-12 bg-white rounded-b-lg border border-slate-200 flex flex-col items-center justify-center relative shadow-sm overflow-hidden">
              <div className="absolute top-0 w-full h-1 bg-[#E10F0F]" />
              <span className="text-[10px] font-black text-[#E10F0F] font-display">Z</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Notebook Design",
      element: (
        <div className="w-full h-full bg-slate-50 flex items-center justify-center relative">
          <div className="flex">
            {/* Spiral binding */}
            <div className="flex flex-col gap-0.5 z-10 mr-[-2px] py-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-1 h-0.5 bg-slate-400 rounded-full" />
              ))}
            </div>
            {/* Notebook cover */}
            <div className="w-10 h-14 bg-[#E10F0F] rounded-r border-y border-r border-red-700 flex flex-col items-center justify-center shadow-md relative">
              <span className="text-white text-xs font-black font-display">Z</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Shopping Bag",
      element: (
        <div className="w-full h-full bg-slate-50/50 flex items-center justify-center relative">
          <div className="relative w-12 h-14 bg-white border border-slate-150 rounded-b-md shadow-sm flex flex-col items-center justify-center">
            {/* Handles */}
            <div className="absolute -top-2.5 w-6 h-3 border-2 border-dashed border-red-800 rounded-t-full" />
            {/* Brand Logo */}
            <span className="text-[#E10F0F] font-display font-black text-[10px] tracking-tight">ZUKHRUF</span>
          </div>
        </div>
      ),
    },
    {
      label: "T-Shirt Design",
      element: (
        <div className="w-full h-full bg-slate-50 flex items-center justify-center relative">
          <div className="relative w-14 h-14">
            {/* Sleeves */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-[#E10F0F] rounded-t-md" />
            {/* Body */}
            <div className="absolute top-1 left-1.5 right-1.5 bottom-0 bg-white border-x border-b border-slate-200 rounded-b shadow-sm flex flex-col items-center pt-1.5">
              <div className="w-3 h-1 bg-[#E10F0F] rounded-b-full absolute top-0" />
              <span className="text-[8px] font-black text-[#E10F0F] font-display">Z</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Signboard Design",
      element: (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center p-2">
          <div className="w-full h-10 bg-stone-800 rounded border border-stone-700 shadow flex items-center justify-center">
            <span className="text-white text-[7px] font-black font-display tracking-widest uppercase">ZUKHRUF ACADEMY</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 border-t border-slate-100 bg-white">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-1">
          <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
            Brand Identity Showcase
          </span>
          <h2 className="text-[18px] md:text-[20px] font-black tracking-tight text-slate-900 font-display">
            Bringing Brands To Life
          </h2>
        </div>

        {/* 7 columns responsive row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-100/80 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Main Visual Stage */}
              <div className="aspect-square w-full bg-slate-50 flex items-center justify-center p-3 relative overflow-hidden select-none">
                {item.element}
                
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Text Labels */}
              <div className="p-2.5 border-t border-slate-50 text-center bg-white">
                <h4 className="text-[10px] font-extrabold text-slate-800 tracking-tight truncate uppercase">
                  {item.label}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
