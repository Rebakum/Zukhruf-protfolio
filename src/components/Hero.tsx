import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import heroMockup from "../assets/images/img.jpg";
import mugImg from "../assets/images/branding_mug_1783366599685.jpg";
import tshirtImg from "../assets/images/img1.jpg";
import signboardImg from "../assets/images/img2.jpg";
import bagImg from "../assets/images/img3.jpg";
import notebookImg from "../assets/images/img4.jpg";
import bfFounder from "../assets/images/img5.jpg";
import bfFounderImg from "../assets/images/img6.jpg";
import sunAmanahkImg from "../assets/images/img7.jpg";

const slides = [
  { image: heroMockup, title: "Zukhruf Creative", tag: "Brand Identity" },
  { image: mugImg, title: "BARAKAH Coffee", tag: "Branding / Merchandise" },
  { image: tshirtImg, title: "AMANAH Apparel", tag: "Packaging / Fashion" },
  { image: signboardImg, title: "AMANAH Building", tag: "Signage / Print" },
  { image: bagImg, title: "BM FUNDING Tote", tag: "Logo / Identity" },
  { image: notebookImg, title: "MAKHZAAN Planner", tag: "Branding / Print" },
  { image: bfFounder, title: "BM FUNDING Tote", tag: "Logo / Identity"},
  { image: bfFounderImg,  title: "BM FUNDING Tote", tag: "Packaging / Fashion" },
  { image: sunAmanahkImg, title: "AMANAH Apparel", tag: "Packaging / Fashion" },
];

export const Hero: React.FC = () => {
  const checkmarks = [
    "Logo Design",
    "Brand Identity",
    "Packaging",
    "Social Media Design",
  ];

  return (
    <section id="home" className="py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-7 text-left">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase">
            Graphic Designer
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight text-slate-900 leading-[1.08] font-display">
            Build Strong Brands <br />
            That <span className="text-[#E10F0F]">People Remember</span>
          </h1>
          <p className="text-[15px] leading-relaxed text-slate-500 max-w-xl">
            I create modern logos and brand identities that help businesses stand out and stay memorable.
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 max-w-md pt-2">
            {checkmarks.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#E10F0F] fill-red-50 stroke-2 shrink-0" />
                <span className="text-[13px] font-semibold text-slate-700 tracking-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2.5 bg-[#E10F0F] hover:bg-[#C90D0D] text-white text-[14px] font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-md shadow-red-500/10 hover:shadow-xl hover:shadow-red-500/25 hover:scale-[1.05] active:scale-[0.98] group"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-[14px] font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:scale-[1.05] active:scale-[0.98] group"
            >
              Hire Me
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column - Swiper Slider */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="relative w-full max-w-[480px]">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              className="rounded-2xl overflow-hidden shadow-xl border border-slate-100"
            >
              {slides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative aspect-square w-full bg-slate-50">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pt-16">
                      <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest mb-1">
                        {slide.tag}
                      </p>
                      <h3 className="text-white font-display font-bold text-lg">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
