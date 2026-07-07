import React from "react";
import { Compass, ShieldCheck, Package, Share2, Printer, Shirt } from "lucide-react";
import { motion } from "motion/react";

export const Services: React.FC = () => {
  const servicesList = [
    {
      title: "Logo Design",
      desc: "Unique and professional logo that represents your brand identity.",
      icon: <Compass className="w-6 h-6 text-[#E10F0F]" />,
    },
    {
      title: "Brand Identity",
      desc: "Complete brand identity design to build strong brand recognition.",
      icon: <ShieldCheck className="w-6 h-6 text-[#E10F0F]" />,
    },
    {
      title: "Packaging Design",
      desc: "Eye-catching packaging design that stands out on the shelf.",
      icon: <Package className="w-6 h-6 text-[#E10F0F]" />,
    },
    {
      title: "Social Media Design",
      desc: "Creative social media posts and banners that engage your audience.",
      icon: <Share2 className="w-6 h-6 text-[#E10F0F]" />,
    },
    {
      title: "Print Design",
      desc: "Business cards, flyers, brochures and other print materials.",
      icon: <Printer className="w-6 h-6 text-[#E10F0F]" />,
    },
    {
      title: "Merchandise Design",
      desc: "T-shirt, mug, bag & other merchandise design for your brand.",
      icon: <Shirt className="w-6 h-6 text-[#E10F0F]" />,
    },
  ];

  return (
    <section id="services" className="py-16 border border-slate-200 rounded-2xl shadow-lg shadow-slate-200/50 bg-white hover:shadow-xl hover:shadow-[#E10F0F]/10 hover:border-[#E10F0F]/30 transition-all duration-300 group">
      <div className="space-y-10 px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
            My Services
          </h2>
        </motion.div>

        {/* 3x2 Grid on large, 2x3 on medium, list on small */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicesList.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border-2 border-slate-200 shadow-lg shadow-slate-200/60 rounded-2xl p-7 text-center flex flex-col items-center space-y-4 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300/60 min-h-[220px]"
            >
              {/* Icon Holder */}
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 transition-all duration-300">
                {service.icon}
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h3 className="text-[14px] font-extrabold text-slate-900 tracking-tight uppercase">
                  {service.title}
                </h3>
                <p className="text-[12px] leading-relaxed text-slate-400 font-medium px-2">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
