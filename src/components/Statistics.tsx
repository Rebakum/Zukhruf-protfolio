import React from "react";
import { Layers, Heart, Award, Globe } from "lucide-react";

export const Statistics: React.FC = React.memo(() => {
  const stats = [
    {
      value: "150+",
      label: "Projects Completed",
      icon: <Layers className="w-6 h-6 text-[#E10F0F]" />,
    },
    {
      value: "80+",
      label: "Happy Clients",
      icon: <Heart className="w-6 h-6 text-[#E10F0F]" />,
    },
    {
      value: "5+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6 text-[#E10F0F]" />,
    },
    {
      value: "20+",
      label: "Brands Served",
      icon: <Globe className="w-6 h-6 text-[#E10F0F]" />,
    },
  ];

  return (
    <section className="md:py-10 border-y border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              {stat.icon}
            </div>
            <div className="text-left">
              <div className="text-2xl font-extrabold text-slate-900 leading-none transition-colors duration-300 group-hover:text-[#E10F0F]">
                {stat.value}
              </div>
              <div className="text-[16px] group-hover:text-slate-900  text-slate-700 mt-1.5 uppercase tracking-tight transition-colors duration-300 ">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
