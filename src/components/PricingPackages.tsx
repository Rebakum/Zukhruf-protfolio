import React from "react";
import { FileText, Image, Crown, Check } from "lucide-react";

export const PricingPackages: React.FC = React.memo(() => {
const plans = [
  {
    title: "Basic Pack",
    price: "50",
    icon: <FileText className="w-6 h-6 text-[#E10F0F]" />,
    bullets: [
      "1 Unique Logo Concept",
      "2 Free Design Revisions",
      "High Resolution PNG Files",
      "Editable Source File Included",
      "Delivery Within 3 Days",
    ],
  },
  {
    title: "Standard Pack",
    price: "70",
    icon: <Image className="w-6 h-6 text-[#E10F0F]" />,
    bullets: [
      "2 Creative Logo Concepts",
      "Unlimited Design Revisions",
      "High Resolution Source Files",
      "Social Media Logo Kit",
      "Delivery Within 5 Days",
    ],
  },
  {
    title: "Premium Pack",
    price: "100",
    icon: <Crown className="w-6 h-6 text-[#E10F0F]" />,
    bullets: [
      "3 Premium Logo Concepts",
      "Unlimited Design Revisions",
      "Complete Brand Guidelines PDF",
      "All Editable Source Files",
      "Delivery Within 7 Days",
    ],
  },
];

  return (
    <section className="py-10 bg-[#FAF9F9] rounded-2xl border border-slate-100 px-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
            Digital Design Packages
          </span>
          <h2 className="text-[18px] md:text-[20px] font-black tracking-tight text-slate-900 font-display">
            Choose Your Plan
          </h2>
        </div>

        {/* 3 columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col  justify-between shadow-lg hover:shadow-red-200/60 hover:border-red-200 transition-all duration-300 hover:scale-[1.03] group min-h-[340px]"
            >
              {/* Top part */}
              <div className="w-full flex flex-col items-center space-y-4">
                {/* Plan Icon */}
                <div className="w-12 h-12 rounded-full justify-center items-center bg-red-50 flex border border-red-100/50 group-hover:scale-105 transition-transform duration-200">
                  {plan.icon}
                </div>

                {/* Plan Title */}
                <span className="text-[13px] font-black text-slate-800 tracking-tight uppercase">
                  {plan.title}
                </span>

                {/* Price */}
                <div className="flex items-baseline text-[#E10F0F] font-display">
                  <span className="text-3xl font-black">{plan.price}</span>
                  <span className="text-[13px] font-black tracking-wider uppercase ml-0.5">USD</span>
                </div>

                {/* Bullets List */}
                <ul className="w-full space-y-2.5 py-4 border-t border-slate-50 text-left">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-[16px] font-bold text-slate-700">
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
});
