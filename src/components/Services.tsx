import React from "react";
import { Compass, ShieldCheck, Package, Share2, Printer, Shirt } from "lucide-react";
import { motion } from "motion/react";

export const Services: React.FC = React.memo(() => {
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
    <section id="services" className="scroll-mt-24 py-16  rounded-2xl shadow-slate-200/50 bg-slate-50 ">
      <div className="space-y-10 px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase">
            What I Do
          </span>
          <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-black tracking-tight text-slate-900 font-display">
            My Services
          </h2>
        </motion.div>

        {/* 3x2 Grid on large, 2x3 on medium, list on small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white hover:border-red-200 rounded-2xl p-7 text-center flex flex-col items-center space-y-4 transition-all duration-300 min-h-[220px] hover:shadow-red-200/60 shadow-lg hover:scale-[1.03] border border-slate-200 cursor-pointer group"
            >
              {/* Icon Holder */}
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h3 className="text-[18px] md:text-[20px] font-extrabold text-slate-900 tracking-tight uppercase transition-colors duration-300 group-hover:text-[#E10F0F]">
                  {service.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-slate-400 font-medium px-2 transition-colors duration-300 group-hover:text-slate-600">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
