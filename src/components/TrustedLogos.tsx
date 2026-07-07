import React from "react";
import { motion } from "motion/react";
import {
  AmanahLogo,
  BarakahLogo,
  BMFundingLogo,
  EmpowerLogo,
  SababLogo,
  GoodDeedsLogo,
} from "./Logos";

const logos = [
  { component: <AmanahLogo className="scale-90" /> },
  { component: <BarakahLogo className="scale-90" /> },
  { component: <BMFundingLogo className="scale-90" /> },
  { component: <EmpowerLogo className="scale-90" /> },
  { component: <SababLogo className="scale-90" /> },
  { component: <GoodDeedsLogo className="scale-90" /> },
];

const LogoItem = ({ logo }: { logo: typeof logos[0] }) => (
  <div className="bg-white border-2 border-slate-200 shadow-lg shadow-slate-200/60 rounded-xl p-5 min-w-[160px] shrink-0 mx-3 flex items-center justify-center">
    {logo.component}
  </div>
);

export const TrustedLogos: React.FC = () => {
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="py-10 overflow-hidden">
      <div className="space-y-6">
        {/* Header */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[11px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block text-center"
        >
          Trusted By
        </motion.span>

        {/* Auto-sliding infinite carousel */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {doubledLogos.map((logo, i) => (
              <LogoItem key={i} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
