import React from "react";

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

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="bg-white border-2 border-slate-200 shadow-lg shadow-slate-200/60 rounded-2xl p-6 flex flex-col justify-between min-w-[320px] max-w-[350px] shrink-0 mx-3">
    <div>
      <div className="text-3xl font-serif font-black text-[#E10F0F] leading-none mb-2">
        &ldquo;
      </div>
      <p className="text-[13px] leading-relaxed text-slate-500 font-medium italic mb-5">
        {review.text}
      </p>
    </div>
    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
      <img
        src={review.avatar}
        alt={review.name}
        className="w-10 h-10 rounded-full object-cover border border-slate-200"
        referrerPolicy="no-referrer"
      />
      <div className="text-left leading-tight">
        <div className="text-[12px] font-extrabold text-slate-800">
          {review.name}
        </div>
        <div className="text-[10px] font-bold text-slate-400">
          {review.role}
        </div>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="py-10 overflow-hidden">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block">
            Client Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 font-display">
            What My Clients Say
          </h2>
        </div>

        {/* Auto-sliding infinite carousel */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {doubledReviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
