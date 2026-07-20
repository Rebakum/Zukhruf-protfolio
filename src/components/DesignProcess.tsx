import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";

const steps = [
  {
    num: "01", title: "Research",
    desc: "I dive deep into your brand identity, competitive landscape, and target demographics to uncover actionable insights.",
  },
  {
    num: "02", title: "Sketch",
    desc: "Transforming research into tangible ideas through rapid sketching and iterative concept development.",
  },
  {
    num: "03", title: "Design",
    desc: "Bringing concepts to life with pixel-perfect execution, thoughtful typography, and cohesive color systems.",
  },
  {
    num: "04", title: "Revision",
    desc: "Collaborative refinement cycles where your feedback shapes the design into a polished final product.",
  },
  {
    num: "05", title: "Launch",
    desc: "Handing off polished assets with meticulous preparation for a seamless, high-quality launch experience.",
  },
];

const N = steps.length;

const LAYOUT = [
  { x: 0, scale: 1, opacity: 1, zIndex: 50 },
  { x: -220, scale: 0.82, opacity: 0.55, zIndex: 40 },
  { x: -390, scale: 0.65, opacity: 0.35, zIndex: 30 },
  { x: 220, scale: 0.82, opacity: 0.55, zIndex: 40 },
  { x: 390, scale: 0.65, opacity: 0.35, zIndex: 30 },
];

const nextPos = [3, 0, 1, 4, 2];

const perm: number[][] = [];
for (let s = 0; s <= N; s++) {
  const row: number[] = [];
  for (let c = 0; c < N; c++) {
    let p = c;
    for (let k = 0; k < s; k++) p = nextPos[p];
    row.push(p);
  }
  perm.push(row);
}

const StepCard = React.memo(({ step, active }: { step: (typeof steps)[0]; active: boolean }) => (
  <div className={`bg-white border ${active ? "border-[#E10F0F]/40 shadow-lg shadow-red-100/60" : "border-slate-400 shadow-sm shadow-slate-200/60"} rounded-2xl p-4 sm:p-6 text-center flex flex-col items-center space-y-3 sm:space-y-4 w-[200px] sm:w-[280px] shrink-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-200/60 hover:border-[#E10F0F]/40`}>
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E10F0F] to-[#ff4d4d] flex items-center justify-center text-white text-lg font-black shadow-lg mb-2">
      {step.num}
    </div>
    <h3 className={`text-[18px] md:text-[20px] font-extrabold ${active ? "text-[#E10F0F]" : "text-slate-900"} tracking-tight font-display transition-colors duration-300`}>
      {step.title}
    </h3>
    <p className="text-[14px] leading-relaxed text-center w-full text-slate-600 font-medium transition-colors duration-300">
      {step.desc}
    </p>
  </div>
));

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

const ScrollCard = React.memo(({
  step,
  cardIdx,
  progress,
}: {
  step: (typeof steps)[0];
  cardIdx: number;
  progress: React.MotionValue<number>;
}) => {
  const x = useTransform(progress, (v) => {
    const s = Math.min(Math.max(Math.floor(v), 0), N);
    const f = Math.min(Math.max(v - s, 0), 1);
    const fromPos = perm[s][cardIdx];
    const toPos = perm[Math.min(s + 1, N)][cardIdx];
    return lerp(LAYOUT[fromPos].x, LAYOUT[toPos].x, f);
  });

  const scale = useTransform(progress, (v) => {
    const s = Math.min(Math.max(Math.floor(v), 0), N);
    const f = Math.min(Math.max(v - s, 0), 1);
    const fromPos = perm[s][cardIdx];
    const toPos = perm[Math.min(s + 1, N)][cardIdx];
    return lerp(LAYOUT[fromPos].scale, LAYOUT[toPos].scale, f);
  });

  const opacity = useTransform(progress, (v) => {
    const s = Math.min(Math.max(Math.floor(v), 0), N);
    const f = Math.min(Math.max(v - s, 0), 1);
    const fromPos = perm[s][cardIdx];
    const toPos = perm[Math.min(s + 1, N)][cardIdx];
    return lerp(LAYOUT[fromPos].opacity, LAYOUT[toPos].opacity, f);
  });

  const zIndexVal = useTransform(progress, (v) => {
    const s = Math.min(Math.max(Math.floor(v), 0), N);
    const f = Math.min(Math.max(v - s, 0), 1);
    const fromPos = perm[s][cardIdx];
    const toPos = perm[Math.min(s + 1, N)][cardIdx];
    return Math.round(lerp(LAYOUT[fromPos].zIndex, LAYOUT[toPos].zIndex, f));
  });

  const rotateZ = useTransform(progress, (v) => {
    const s = Math.min(Math.max(Math.floor(v), 0), N);
    const f = Math.min(Math.max(v - s, 0), 1);
    const fromPos = perm[s][cardIdx];
    if (fromPos !== 0) return 0;
    return 2 * f;
  });

  const activeMV = useTransform(progress, (v) => {
    const s = Math.min(Math.max(Math.floor(v), 0), N);
    const f = Math.min(Math.max(v - s, 0), 1);
    const fromPos = perm[s][cardIdx];
    const toPos = perm[Math.min(s + 1, N)][cardIdx];
    return f < 0.5 ? fromPos === 0 : toPos === 0;
  });

  const [isActive, setIsActive] = useState(false);
  useMotionValueEvent(activeMV, "change", setIsActive);

  return (
    <motion.div
      className="col-start-1 row-start-1 select-none relative"
      style={{ zIndex: zIndexVal, x, scale, opacity, rotateZ }}
    >
      <StepCard step={step} active={isActive} />
    </motion.div>
  );
});

export const DesignProcess: React.FC = React.memo(() => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardProgress = useTransform(scrollYProgress, [0, 1], [0, N]);

  if (isMobile) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
              My Design Process
            </span>
            <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-black tracking-tight text-slate-900 font-display">
              How I Work
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white border border-slate-400 rounded-2xl p-6 text-center flex flex-col items-center space-y-4 w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-200/60 hover:border-[#E10F0F]/40">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E10F0F] to-[#ff4d4d] flex items-center justify-center text-white text-lg font-black shadow-lg mb-2">
                  {step.num}
                </div>
                <h3 className="text-[18px] font-extrabold text-slate-900 tracking-tight font-display">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-center w-full text-slate-600 font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div className="w-full space-y-10">
          <div className="text-center space-y-2 px-4 sm:px-6 lg:px-8">
            <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
              My Design Process
            </span>
            <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-black tracking-tight text-slate-900 font-display">
              How I Work
            </h2>
          </div>

          <div className="grid place-items-center h-[360px] relative">
            {steps.map((step, i) => (
              <ScrollCard
                key={i}
                step={step}
                cardIdx={i}
                progress={cardProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

