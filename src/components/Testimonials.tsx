import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    text: "Amazing experience working with him. He understood our vision and delivered beyond expectations.",
    name: "Mahmudul Hasan",
    role: "Amanah Foundation",
    avatar: "https://picsum.photos/seed/mahmud/80/80",
  },
  {
    text: "Very professional and creative designer. Highly recommended for any brand identity project!",
    name: "Sadia Afrin",
    role: "Barakah Foundation",
    avatar: "https://picsum.photos/seed/sadia/80/80",
  },
  {
    text: "Great communication and fast delivery. Will work again in the future.",
    name: "Rashed Khan",
    role: "B.M. Funding",
    avatar: "https://picsum.photos/seed/rashed/80/80",
  },
  {
    text: "Outstanding branding work! He truly understands how to build a memorable brand.",
    name: "Fatima Noor",
    role: "Empower World",
    avatar: "https://picsum.photos/seed/fatima/80/80",
  },
  {
    text: "His attention to detail is incredible. Every element was thoughtfully designed.",
    name: "Ariful Islam",
    role: "Sabab Organization",
    avatar: "https://picsum.photos/seed/arif/80/80",
  },
  {
    text: "Delivered on time with exceptional quality. A true professional to work with.",
    name: "Nusrat Jahan",
    role: "GoodDeeds Foundation",
    avatar: "https://picsum.photos/seed/nusrat/80/80",
  },
];

const STACK_SPRING = { type: "spring", stiffness: 260, damping: 28, mass: 0.9 } as const;
const FLIP_SPRING = { type: "spring", stiffness: 300, damping: 24, mass: 0.8 } as const;

interface FlipCardProps {
  review: (typeof reviews)[0];
  isActive: boolean;
}

const FlipCard = React.memo(({ review, isActive }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile && isActive) {
      setIsFlipped(true);
    } else if (!isActive && isFlipped) {
      setIsFlipped(false);
    }
  }, [isActive, isMobile, isFlipped]);

  const handleEnter = useCallback(() => {
    if (isActive) setIsFlipped(true);
  }, [isActive]);

  const handleLeave = useCallback(() => setIsFlipped(false), []);

  const handleClick = useCallback(() => {
    if (isMobile) setIsFlipped((prev) => !prev);
  }, [isMobile]);

  return (
    <div
      className="relative h-[260px] sm:h-[340px] w-full perspective-[1200px]"
      onMouseEnter={isMobile ? undefined : handleEnter}
      onMouseLeave={isMobile ? undefined : handleLeave}
      onClick={isMobile ? handleClick : undefined}
    >
      <motion.div
        className="relative w-full h-full rounded-3xl"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={FLIP_SPRING}
      >
        {/* Front — Avatar + Name */}
        <div
          className={`absolute inset-0 rounded-3xl bg-white/80 backdrop-blur-xl border shadow-xl flex-col items-center justify-center text-center p-4 sm:p-8 transition-colors duration-300 ${isMobile ? "hidden" : "flex"} ${isActive ? "border-[#E10F0F]/40 shadow-red-100/60" : "border-white/40"}`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={review.avatar}
            alt={review.name}
            loading="lazy"
            className={`w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover border-2 shadow-lg mb-3 sm:mb-4 transition-all duration-300 ${isActive ? "border-[#E10F0F] shadow-red-200/50" : "border-slate-200"}`}
            referrerPolicy="no-referrer"
          />
          <h3 className={`text-[18px] sm:text-[20px] font-extrabold tracking-tight mb-1 transition-colors duration-300 ${isActive ? "text-[#E10F0F]" : "text-slate-900"}`}>
            {review.name}
          </h3>
          <p className="text-[13px] font-bold text-slate-400">
            {review.role}
          </p>
        </div>

        {/* Back — Testimonial Text */}
        <div
          className={`absolute inset-0 rounded-3xl bg-white/80 backdrop-blur-xl border shadow-xl p-4 sm:p-8 flex flex-col justify-center transition-colors duration-300 ${isActive ? "border-[#E10F0F]/40 shadow-red-100/60" : "border-white/40"}`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-3xl font-serif font-black text-[#E10F0F] leading-none mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]">
            &ldquo;
          </div>
          <p className="text-[15px] sm:text-[16px] leading-relaxed text-slate-700 font-medium italic">
            {review.text}
          </p>
          <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100">
            <img
              src={review.avatar}
              alt={review.name}
              loading="lazy"
              className="w-8 h-8 rounded-full object-cover border border-slate-200"
              referrerPolicy="no-referrer"
            />
            <div className="text-left leading-tight">
              <div className="text-[13px] font-extrabold text-slate-800">
                {review.name}
              </div>
              <div className="text-[12px] font-bold text-slate-400">
                {review.role}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

interface StackProps {
  scale: number;
  opacity: number;
  zIndex: number;
  x: number;
  rotateZ: number;
  translateZ: number;
}

export const Testimonials: React.FC = React.memo(() => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", duration: 40 },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const reviewCount = reviews.length;

  const getStackProps = useCallback(
    (idx: number): StackProps => {
      const n = reviewCount;
      const rawOffset = ((idx - selectedIndex) % n + n) % n;
      const dist = Math.min(rawOffset, n - rawOffset);

      if (dist === 0) {
        return { scale: 1, opacity: 1, zIndex: 30, x: 0, rotateZ: 0, translateZ: 0 };
      }

      const isLeft = rawOffset > n / 2;

      if (dist === 1) {
        return {
          scale: 0.9,
          opacity: 0.75,
          zIndex: 20,
          x: isLeft ? -40 : 40,
          rotateZ: isLeft ? -6 : 6,
          translateZ: -60,
        };
      }

      return {
        scale: 0.8,
        opacity: 0.45,
        zIndex: 10,
        x: isLeft ? -70 : 70,
        rotateZ: isLeft ? -10 : 10,
        translateZ: -120,
      };
    },
    [selectedIndex, reviewCount]
  );

  const stackLayout = useMemo(
    () => reviews.map((_, idx) => getStackProps(idx)),
    [getStackProps]
  );

  return (
    <section id="testimonials" className="scroll-mt-24 py-16 overflow-hidden">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-2 px-4 sm:px-6 lg:px-8">
          <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
            Client Testimonials
          </span>
          <h2 className="text-[18px] md:text-[20px] font-black tracking-tight text-slate-900 font-display">
            What My Clients Say
          </h2>
        </div>

        {/* Stacked Carousel */}
        <div className="relative">
          <div
            className="px-4 sm:px-6 lg:px-8 select-none py-4 perspective-[1600px]"
            ref={emblaRef}
          >
            <div className="flex items-stretch" style={{ transformStyle: "preserve-3d" }}>
              {reviews.map((review, idx) => {
                const props = stackLayout[idx];
                const isActive = idx === selectedIndex;
                return (
                  <div
                    key={idx}
                    className="grow-0 shrink-0 basis-[90%] sm:basis-[48%] lg:basis-[32%] px-2 sm:px-3"
                  >
                    <motion.div
                      animate={{
                        scale: props.scale,
                        opacity: props.opacity,
                        x: props.x,
                        rotateZ: props.rotateZ,
                        z: props.translateZ,
                      }}
                      transition={STACK_SPRING}
                      style={{
                        zIndex: props.zIndex,
                        transformStyle: "preserve-3d",
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <FlipCard review={review} isActive={isActive} />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Manual nav arrows */}
          <button
            type="button"
            aria-label="Previous review"
            onClick={scrollPrev}
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-center text-slate-700 hover:bg-white hover:text-[#E10F0F] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={scrollNext}
            className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-center text-slate-700 hover:bg-white hover:text-[#E10F0F] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
});
