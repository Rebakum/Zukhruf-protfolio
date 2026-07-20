import React from "react";
import { ArrowUpRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "The Importance of Brand Identity for Startups",
    excerpt: "Discover why a strong brand identity is crucial for new businesses looking to make an impact.",
    date: "Jan 15, 2024",
    tag: "Branding",
  },
  {
    title: "Top Logo Design Trends in 2024",
    excerpt: "Explore the latest trends shaping the world of logo design this year.",
    date: "Feb 20, 2024",
    tag: "Design",
  },
  {
    title: "How to Choose the Perfect Color Palette",
    excerpt: "A guide to selecting colors that resonate with your brand and audience.",
    date: "Mar 10, 2024",
    tag: "Tips",
  },
];

export const Blog: React.FC = React.memo(() => {
  return (
    <section id="blog" className="scroll-mt-24 py-16 lg:py-24">
      <div className="text-center mb-12">
        <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase">
          Latest Articles
        </span>
        <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-black tracking-tight text-slate-900 mt-3 font-display">
          From My Blog
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.title}
            className="bg-white border border-slate-200 shadow-lg hover:shadow-xl rounded-2xl p-6 hover:shadow-red-200/60 hover:border-red-200 transition-all duration-300 cursor-pointer group"
          >
            <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase">
              {post.tag}
            </span>
            <h3 className="text-[18px] md:text-[20px] font-bold tracking-tight text-slate-900 mt-2 mb-3 font-display group-hover:text-[#E10F0F] transition-colors">
              {post.title}
            </h3>
            <p className="text-[16px] leading-relaxed text-slate-500 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-400">
                <Calendar className="w-4 h-4" />
                <span className="text-[13px]">{post.date}</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#E10F0F] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
