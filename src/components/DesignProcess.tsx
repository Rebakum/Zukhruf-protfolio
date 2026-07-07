import React from "react";
import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Research",
    desc: "Understanding your business, target audience & market.",
  },
  {
    num: "02",
    title: "Sketch",
    desc: "Hand sketching ideas and preparing concepts.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Creating visual concepts and digital designs.",
  },
  {
    num: "04",
    title: "Revision",
    desc: "Revisions and refinements until perfect.",
  },
  {
    num: "05",
    title: "Final Delivery",
    desc: "Delivering final files with all required formats.",
  },
];

const StepCard = ({ step }: { step: typeof steps[0] }) => (
  <div className="bg-white border-2 border-slate-200 shadow-lg shadow-slate-200/60 rounded-2xl p-6 text-center flex flex-col items-center space-y-4 min-w-[220px] shrink-0 mx-3">
    <div className="w-14 h-14 rounded-full border-2 border-slate-300 flex items-center justify-center font-display text-lg font-black text-slate-700 bg-slate-50">
      {step.num}
    </div>
    <div className="space-y-1.5">
      <h3 className="text-[14px] font-extrabold text-slate-900 tracking-tight">
        {step.title}
      </h3>
      <p className="text-[12px] leading-relaxed text-slate-400 font-medium px-1">
        {step.desc}
      </p>
    </div>
  </div>
);

export const DesignProcess: React.FC = () => {
  const doubledSteps = [...steps, ...steps];

  return (
    <section className="py-16 overflow-hidden">
      <div className="space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
            My Design Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
            How I Work
          </h2>
        </motion.div>

        {/* Auto-sliding infinite carousel */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {doubledSteps.map((step, i) => (
              <StepCard key={i} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
