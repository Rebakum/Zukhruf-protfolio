import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-5 text-left font-display text-[13px] font-extrabold text-slate-800 hover:bg-slate-50 transition-colors focus:outline-none"
      >
        <span>{question}</span>
        <span className="text-[#E10F0F] shrink-0 ml-3">
          {isOpen ? <Minus className="w-5 h-5 stroke-[3]" /> : <Plus className="w-5 h-5 stroke-[3]" />}
        </span>
      </button>

      {/* Answer Dropdown Panel */}
      <div
        className={`overflow-hidden transition-all duration-350 ease-in-out ${
          isOpen ? "max-h-40 border-t border-slate-50 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-5 text-[12px] leading-relaxed text-slate-500 font-medium bg-slate-50/50">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "How many revisions do you provide?",
      answer: "We provide unlimited revisions for our Standard and Premium packages, and 2 rounds of revisions for the Basic package, to ensure you are 100% happy with the final designs.",
    },
    {
      question: "What is the delivery time?",
      answer: "Delivery times range from 3 days for the Basic package up to 7 days for the Premium package. Urgent delivery is also available upon request.",
    },
    {
      question: "Do you provide source files?",
      answer: "Yes! All packages include full high-resolution source files (AI, EPS, PSD, PDF, and PNG formats) once the project is completed and approved.",
    },
    {
      question: "Do you create brand guidelines?",
      answer: "Yes, our Premium package includes a comprehensive brand style guidelines document covering logo usage, color palettes, typography, and rules of application.",
    },
  ];

  return (
    <div className="space-y-6 text-left bg-white border border-slate-100 p-7 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="space-y-2">
        <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
          FAQ
        </span>
        <h3 className="text-2xl font-black tracking-tight text-slate-900 leading-tight font-display">
          Frequently Asked <br />
          Questions
        </h3>
      </div>

      <div className="space-y-3 pt-2">
        {faqData.map((item, i) => (
          <FAQItem
            key={i}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
};
