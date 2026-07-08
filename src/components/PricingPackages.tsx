import React from "react";
import { FileText, Image, Crown, Check } from "lucide-react";

export const PricingPackages: React.FC = () => {
  const plans = [
    {
      title: "Basic Pack",
      price: "50",
      icon: <FileText className="w-6 h-6 text-[#E10F0F]" />,
      bullets: ["1 Logo Concept", "2 Revisions", "Delivery in 3 Days", "Source File"],
    },
    {
      title: "Standard Pack",
      price: "70",
      icon: <Image className="w-6 h-6 text-[#E10F0F]" />,
      bullets: ["2 Logo Concepts", "Unlimited Revisions", "Delivery in 5 Days", "Source File"],
    },
    {
      title: "Premium Pack",
      price: "100",
      icon: <Crown className="w-6 h-6 text-[#E10F0F]" />,
      bullets: ["3 Logo Concepts", "Unlimited Revisions", "Delivery in 7 Days", "Brand Guidelines"],
    },
  ];

  return (
    <section className="py-10 bg-[#FAF9F9] rounded-2xl border border-slate-100 px-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
            Digital Design Packages
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 font-display">
            Choose Your Plan
          </h2>
        </div>

        {/* 3 columns grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-white border border-slate-150 rounded-2xl p-6 flex flex-col items-center justify-between shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:scale-[1.03] hover:border-[#E10F0F]/30 group min-h-[340px]"
            >
              {/* Top part */}
              <div className="w-full flex flex-col items-center space-y-4">
                {/* Plan Icon */}
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center border border-red-100/50 group-hover:scale-105 transition-transform duration-200">
                  {plan.icon}
                </div>

                {/* Plan Title */}
                <span className="text-[12px] font-black text-slate-800 tracking-tight uppercase">
                  {plan.title}
                </span>

                {/* Price */}
                <div className="flex items-baseline text-[#E10F0F] font-display">
                  <span className="text-3xl font-black">{plan.price}</span>
                  <span className="text-[9px] font-black tracking-wider uppercase ml-0.5">USD</span>
                </div>

                {/* Bullets List */}
                <ul className="w-full space-y-2.5 py-4 border-t border-slate-50 text-left">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-[11px] font-bold text-slate-500">
                      <Check className="w-3.5 h-3.5 text-[#E10F0F] stroke-[3.5] shrink-0" />
                      <span className="truncate">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className="w-full mt-4 bg-[#E10F0F] hover:bg-[#C90D0D] text-white text-[11px] font-extrabold py-3 px-6 rounded-xl transition-all duration-300 uppercase tracking-wider shadow-sm shadow-red-500/10 hover:shadow-lg hover:shadow-red-500/25 hover:scale-[1.02] active:scale-[0.98]">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
