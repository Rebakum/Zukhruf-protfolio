import { useState, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Check, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

interface ContactProps {
  initialProjectType?: string;
}

export default function Contact({ initialProjectType = '' }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: initialProjectType || 'Brand Identity',
    budget: '$5,000 - $10,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectTypes = [
    'Logo Design',
    'Brand Identity',
    'Packaging Design',
    'Social Media Design',
    'Print Design',
    'Merchandise Design',
  ];

  const budgets = [
    'Under $3,000',
    '$3,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          projectType: 'Brand Identity',
          budget: '$5,000 - $10,000',
          message: '',
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-[#FAF5F5] py-24 border-b border-red-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase px-3 py-1 bg-red-50 border border-red-100 rounded-full mb-6">
              Connect
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-display mb-6 leading-none">
              Let's Work <br />
              Together
            </h2>
            <p className="text-[13px] text-slate-500 max-w-sm leading-relaxed mb-10">
              Have a revolutionary business concept or product launch on the horizon? Let's build a timeless visual system to secure your market victory.
            </p>

            {/* Contact details cards */}
            <div className="space-y-6 w-full max-w-md">
              <a
                href="mailto:hello@barakahstudio.com"
                className="flex items-center gap-4 p-4 border border-red-100/50 bg-white hover:border-[#E10F0F]/30 hover:bg-red-50/20 rounded-xl transition-all duration-300 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E10F0F]/10 flex items-center justify-center text-[#E10F0F]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                    EMAIL INQUIRIES
                  </p>
                  <p className="font-display font-semibold text-sm text-slate-900 group-hover:text-[#E10F0F] transition-colors">
                    hello@barakahstudio.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+15552345678"
                className="flex items-center gap-4 p-4 border border-red-100/50 bg-white hover:border-[#E10F0F]/30 hover:bg-red-50/20 rounded-xl transition-all duration-300 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E10F0F]/10 flex items-center justify-center text-[#E10F0F]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                    CALL THE STUDIO
                  </p>
                  <p className="font-display font-semibold text-sm text-slate-900 group-hover:text-[#E10F0F] transition-colors">
                    +1 (555) 234-5678
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 border border-red-100/50 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#E10F0F]/10 flex items-center justify-center text-[#E10F0F]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                    STUDIO BASE
                  </p>
                  <p className="font-display font-semibold text-sm text-slate-900">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form Panel */}
          <div className="lg:col-span-7 bg-white border border-red-100 p-8 md:p-12 rounded-3xl shadow-xl relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Farhan Al-Mutawa"
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-[#E10F0F]/80 rounded-xl px-5 py-4 text-slate-950 text-sm focus:outline-none focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. farhan@amanahorganics.com"
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-[#E10F0F]/80 rounded-xl px-5 py-4 text-slate-950 text-sm focus:outline-none focus:bg-white transition-all"
                    />
                  </div>

                  {/* Project Type Grid Selector */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {projectTypes.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`py-3 rounded-xl border font-bold text-xs tracking-wide transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-[#E10F0F] text-white border-[#E10F0F] shadow-lg shadow-[#E10F0F]/15'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-[#E10F0F] hover:border-red-200'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector Row */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                      Estimated Project Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((budget) => {
                        const isSelected = formData.budget === budget;
                        return (
                          <button
                            type="button"
                            key={budget}
                            onClick={() => setFormData({ ...formData, budget: budget })}
                            className={`px-4 py-2.5 rounded-xl border font-bold text-xs tracking-wide transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-[#E10F0F] text-white border-[#E10F0F] shadow-md shadow-[#E10F0F]/10'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-[#E10F0F] hover:border-red-200'
                            }`}
                          >
                            {budget}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message textarea field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                      Project Message / Context
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your goals, timeline requirements, and scope details..."
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-[#E10F0F]/80 rounded-xl px-5 py-4 text-slate-950 text-sm focus:outline-none focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="magnetic-btn w-full py-4.5 bg-[#E10F0F] hover:bg-[#C90D0D] text-white font-display font-black text-sm uppercase tracking-widest rounded-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-xl shadow-[#E10F0F]/10 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 rounded-full border-2 border-white/25 border-t-white animate-spin" />
                        Transmitting Scope...
                      </>
                    ) : (
                      <>
                        Launch Project Inquiry
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-16 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E10F0F]/10 border border-[#E10F0F]/20 flex items-center justify-center text-[#E10F0F] mb-6 animate-bounce">
                    <Check size={32} />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-slate-950 mb-2 tracking-tight">
                    Inquiry Safely Received!
                  </h3>
                  <p className="text-[13px] text-slate-500 max-w-sm leading-relaxed mb-6">
                    Thank you, <span className="text-slate-950 font-bold">{formData.name}</span>. Our lead strategist will review your <span className="text-[#E10F0F] font-bold">{formData.projectType}</span> scope request and reach back within 24 hours.
                  </p>
                  <div className="p-4 bg-red-50/30 border border-red-100 rounded-xl border-l-2 border-[#E10F0F] flex items-start gap-3 max-w-xs text-left">
                    <Sparkles size={16} className="text-[#E10F0F] shrink-0 mt-0.5" />
                    <span className="text-[10px] text-slate-500">
                      A copy of this proposal draft has been safely indexed inside our studio dashboard.
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
