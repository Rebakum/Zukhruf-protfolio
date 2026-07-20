import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle, Lightbulb, Target, BarChart3 } from "lucide-react";

import latestCaseStudyImg from "../assets/images/latest_case_study_1783403341928.jpg";
import brandingBag from "../assets/images/branding_bag_1783366638160.jpg";
import brandingMug from "../assets/images/branding_mug_1783366599685.jpg";
import brandingNotebook from "../assets/images/branding_notebook_1783366650377.jpg";
import brandingSignboard from "../assets/images/branding_signboard_1783366626796.jpg";
import newsletterMug from "../assets/images/newsletter_mug_1783403322712.jpg";

const caseStudy = {
  title: "Amanah Foundation",
  subtitle: "Complete Brand Identity Design",
  tagline: "Building Trust Through Thoughtful Design",
  category: "Brand Identity",
  client: "Amanah Foundation",
  duration: "6 Weeks",
  deliverables: ["Logo Design", "Brand Guidelines", "Stationery", "Packaging", "Social Media Assets"],
  challenge: "Amanah Foundation, a growing non-profit organization, needed a complete brand identity that would communicate trust, transparency, and community impact. Their existing brand was inconsistent across channels and failed to resonate with their target audience of donors, volunteers, and beneficiaries.",
  approach: "Through deep research into the foundation's mission and values, we developed a visual identity rooted in authenticity and warmth. The design system uses a calming teal palette complemented by warm neutrals, with a custom geometric wordmark that conveys stability and approachability.",
  results: [
    { metric: "40%", label: "Increase in Brand Recognition" },
    { metric: "3x", label: "Social Media Engagement Growth" },
    { metric: "25+", label: "Brand Assets Delivered" },
  ],
};

export const CaseStudy: React.FC = React.memo(() => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 text-white rounded-2xl border border-slate-800 shadow-xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
                Case Study
              </span>
              <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] font-black tracking-tight leading-tight font-display">
                {caseStudy.title}
                <br />
                <span className="text-slate-400">{caseStudy.subtitle}</span>
              </h1>
              <p className="text-[18px] leading-relaxed text-slate-400 font-medium max-w-lg">
                {caseStudy.tagline}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="text-[12px] font-bold bg-white/10 text-white px-4 py-2 rounded-full border border-white/10">
                  {caseStudy.category}
                </span>
                <span className="text-[12px] font-bold bg-white/10 text-white px-4 py-2 rounded-full border border-white/10">
                  {caseStudy.duration}
                </span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl">
              <img
                src={latestCaseStudyImg}
                alt="Amanah Foundation Brand Identity Mockup"
                loading="lazy"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-lg hover:shadow-red-200/60 hover:border-red-200 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-[#E10F0F]" />
          </div>
          <h3 className="text-[18px] font-black text-slate-900 font-display mb-2">The Challenge</h3>
          <p className="text-[15px] leading-relaxed text-slate-500 font-medium">
            {caseStudy.challenge}
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-lg hover:shadow-red-200/60 hover:border-red-200 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
            <Lightbulb className="w-6 h-6 text-[#E10F0F]" />
          </div>
          <h3 className="text-[18px] font-black text-slate-900 font-display mb-2">Our Approach</h3>
          <p className="text-[15px] leading-relaxed text-slate-500 font-medium">
            {caseStudy.approach}
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-lg hover:shadow-red-200/60 hover:border-red-200 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
            <BarChart3 className="w-6 h-6 text-[#E10F0F]" />
          </div>
          <h3 className="text-[18px] font-black text-slate-900 font-display mb-2">Deliverables</h3>
          <ul className="space-y-2">
            {caseStudy.deliverables.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[15px] text-slate-500 font-medium">
                <CheckCircle className="w-4 h-4 text-[#E10F0F] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Visual Gallery */}
      <section>
        <div className="text-center space-y-3 mb-12">
          <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
            Visual Showcase
          </span>
          <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-black tracking-tight text-slate-900 font-display">
            Brand Elements Gallery
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg group"
          >
            <div className="relative overflow-hidden">
              <img
                src={brandingMug}
                alt="Branded Ceramic Mug"
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4">
                <span className="text-[13px] font-bold text-white">Ceramic Mug</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg group"
          >
            <div className="relative overflow-hidden">
              <img
                src={brandingNotebook}
                alt="Branded Linen Notebook"
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4">
                <span className="text-[13px] font-bold text-white">Linen Notebook</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg group"
          >
            <div className="relative overflow-hidden">
              <img
                src={brandingBag}
                alt="Branded Shopping Bag"
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4">
                <span className="text-[13px] font-bold text-white">Shopping Bag</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg group"
          >
            <div className="relative overflow-hidden">
              <img
                src={brandingSignboard}
                alt="Brass Signboard"
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4">
                <span className="text-[13px] font-bold text-white">Brass Signboard</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg group"
          >
            <div className="relative overflow-hidden">
              <img
                src={newsletterMug}
                alt="Branded Merchandise"
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4">
                <span className="text-[13px] font-bold text-white">Branded Merchandise</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg group"
          >
            <div className="relative overflow-hidden">
              <img
                src={latestCaseStudyImg}
                alt="Full Brand Mockup"
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4">
                <span className="text-[13px] font-bold text-white">Full Brand Mockup</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-slate-900 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-3 mb-14">
            <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
              Impact & Results
            </span>
            <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-black tracking-tight font-display">
              Measurable Outcomes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-3 p-8 rounded-xl bg-white/5 border border-slate-800 hover:border-[#E10F0F]/30 transition-colors duration-300"
              >
                <span className="text-[42px] sm:text-[52px] font-black text-[#E10F0F] font-display block leading-none">
                  {result.metric}
                </span>
                <p className="text-[16px] font-medium text-slate-400">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 bg-gradient-to-br from-slate-50 to-red-50/30 border border-red-100 rounded-2xl p-12 shadow-lg">
        <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
          Let's Work Together
        </span>
        <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-black tracking-tight text-slate-900 font-display">
          Ready to Transform Your Brand?
        </h2>
        <p className="text-[16px] leading-relaxed text-slate-500 font-medium max-w-xl mx-auto">
          Let's create a brand identity that tells your unique story and connects with your audience.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E10F0F] hover:bg-[#C90D0D] text-white text-[13px] font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-md shadow-red-500/10 hover:shadow-xl hover:shadow-red-500/20 hover:scale-[1.05] active:scale-[0.98]"
          >
            Start Your Project
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>
    </>
  );
});
