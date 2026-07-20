import React from "react";
import { Award, Palette, Users, Coffee } from "lucide-react";

export const About: React.FC = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Palette, label: "Projects Done", value: "150+" },
    { icon: Users, label: "Happy Clients", value: "80+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase">
            About Me
          </span>
          <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-black tracking-tight text-slate-900 font-display">
            Creative Designer <br />
            Based in <span className="text-[#E10F0F]">Bangladesh</span>
          </h2>
          <p className="text-[16px] leading-relaxed text-slate-700">
            I'm a passionate graphic designer with over 5 years of experience in creating
            memorable brand identities. I help businesses stand out through thoughtful design
            that connects with their audience.
          </p>
          <p className="text-[16px] leading-relaxed text-slate-700">
            From logo design to complete brand packages, I deliver creative solutions
            that elevate your brand and leave a lasting impression.
          </p>
        </div>

        {/* Right Column - Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-slate-100 rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-[#E10F0F] mx-auto mb-3" />
              <p className="text-3xl font-black text-slate-900 font-display">{stat.value}</p>
              <p className="text-[12px] text-slate-500 font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
