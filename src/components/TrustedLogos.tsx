import React, { useRef, useEffect, useCallback, useState } from "react";
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

const LogoItem = ({ logo }: { logo: (typeof logos)[0] }) => (
  <div className="bg-white border border-slate-200 shadow-lg shadow-slate-200/60 rounded-xl p-5 w-[180px] shrink-0 mx-2 flex items-center justify-center transition-all duration-300 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/50 hover:scale-105 cursor-pointer">
    {logo.component}
  </div>
);

export const TrustedLogos: React.FC = React.memo(() => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const doubledLogos = [...logos, ...logos];

  const getHalfWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    return trackRef.current.scrollWidth / 2;
  }, []);

  const applyTransform = useCallback((offset: number) => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offset}px)`;
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    let raf: number;
    let last = 0;
    const speed = 0.1;

    const tick = (now: number) => {
      if (last) {
        const delta = now - last;
        offsetRef.current += speed * delta;
        const halfWidth = getHalfWidth();
        if (halfWidth > 0 && offsetRef.current >= halfWidth) {
          offsetRef.current -= halfWidth;
        }
        applyTransform(offsetRef.current);
      }
      last = now;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isPaused, getHalfWidth, applyTransform]);

  return (
    <section className="py-10 overflow-hidden">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 px-4 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block"
          >
            Trusted By
          </motion.span>
        </div>

        {/* Carousel */}
        <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden">
            <div ref={trackRef} className="flex will-change-transform">
              {doubledLogos.map((logo, i) => (
                <LogoItem key={i} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
