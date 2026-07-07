import React from "react";

// Zukhruf Brand Logo (Red "Z" + Text)
export const ZukhrufLogo: React.FC<{ className?: string; iconOnly?: boolean }> = ({
  className = "",
  iconOnly = false,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon: Red Stylized Z */}
      <svg
        width="52"
        height="52"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M15 15H85V30H45L85 70V85H15V70H55L15 30V15Z"
          fill="#E10F0F"
          stroke="#E10F0F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Subtle white gap/design cut to match the 3D aesthetic */}
        <path d="M40 30L45 25L50 30H40Z" fill="white" />
        <path d="M60 70L55 75L50 70H60Z" fill="white" />
      </svg>
      
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-black tracking-tighter text-slate-900 font-display">
            ZUKHRUF
          </span>
          <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mt-0.5">
            Creative Design Academy
          </span>
        </div>
      )}
    </div>
  );
};

// 1. Amanah Foundation Logo (Green calligraphic style)
export const AmanahLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-[#0F5A47] ${className}`}>
      {/* Calligraphy-like geometric icon */}
      <svg
        width="56"
        height="28"
        viewBox="0 0 80 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 30H15V15H20V30H25V10H30V30H35V18H40V30H45V5H50V30H55V22H60V30H70V35H10V30Z" />
        <circle cx="20" cy="8" r="3" />
        <circle cx="40" cy="12" r="3" />
        <circle cx="60" cy="15" r="3" />
      </svg>
      <span className="text-xs font-black tracking-widest mt-1 uppercase text-center font-display">
        AMANAH FOUNDATION
      </span>
    </div>
  );
};

// 2. Barakah Foundation Logo (Green tree + crescent style)
export const BarakahLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-[#1B4D3E] ${className}`}>
      {/* Tree & Crescent Symbol */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        <path
          d="M50 80V45M50 45L35 30M50 45L65 30M50 35L40 25M50 35L60 25M50 55L30 45M50 55L70 45"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="35" cy="30" r="4" fill="#D4AF37" />
        <circle cx="65" cy="30" r="4" fill="#D4AF37" />
        <circle cx="40" cy="25" r="3" fill="#D4AF37" />
        <circle cx="60" cy="25" r="3" fill="#D4AF37" />
        <circle cx="50" cy="18" r="5" fill="#D4AF37" />
      </svg>
      <span className="text-[10px] font-bold tracking-[0.2em] mt-1 text-center font-display uppercase">
        BARAKAH
      </span>
      <span className="text-[7px] tracking-[0.3em] text-[#D4AF37] font-semibold uppercase">
        FOUNDATION
      </span>
    </div>
  );
};

// 3. B.M. Funding Foundation Logo (Red gear / target style)
export const BMFundingLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-slate-900 ${className}`}>
      {/* Red Radial Gear/Target Icon */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="30" stroke="#E10F0F" strokeWidth="3" />
        <circle cx="50" cy="50" r="15" fill="#E10F0F" />
        {/* Gear teeth/radial notches */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 50 + 30 * Math.cos(angle);
          const y1 = 50 + 30 * Math.sin(angle);
          const x2 = 50 + 38 * Math.cos(angle);
          const y2 = 50 + 38 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#E10F0F"
              strokeWidth="4"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
      <span className="text-[11px] font-black tracking-wider mt-1 font-display">
        B.M.FUNDING
      </span>
      <span className="text-[8px] font-bold tracking-[0.25em] text-[#E10F0F] uppercase leading-none">
        FOUNDATION
      </span>
    </div>
  );
};

// 4. Empower World Logo (Hands forming house + sun style)
export const EmpowerLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-[#1E3A8A] ${className}`}>
      {/* Hands holding house style */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* House roof outline formed by hands */}
        <path
          d="M20 60L50 25L80 60"
          stroke="#1E3A8A"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Foundation/Hands below */}
        <path
          d="M30 65C30 65 40 75 50 75C60 75 70 65 70 65"
          stroke="#F97316"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Sun in the center */}
        <circle cx="50" cy="48" r="10" fill="#F97316" />
        <path d="M50 30V34" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 62V66" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
        <path d="M35 48H39" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
        <path d="M61 48H65" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="text-xs font-black tracking-widest mt-1 uppercase text-center font-display text-[#1E3A8A]">
        EMPOWER
      </span>
      <span className="text-[9px] font-bold tracking-[0.3em] text-[#F97316] uppercase leading-none">
        WORLD
      </span>
    </div>
  );
};

// 5. Sabab Logo (Elegant Arabic calligraphy in black)
export const SababLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-slate-950 ${className}`}>
      {/* Sabab Calligraphy Style */}
      <svg
        width="56"
        height="32"
        viewBox="0 0 100 50"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 25C15 25 20 20 25 15C30 20 35 30 45 30C55 30 60 15 65 20C70 25 80 35 90 30" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M30 10C35 15 45 10 50 15" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <circle cx="25" cy="38" r="3" />
        <circle cx="65" cy="38" r="3" />
      </svg>
      <span className="text-sm font-black tracking-[0.25em] mt-1 font-display">
        SABAB
      </span>
    </div>
  );
};

// 6. GoodDeeds Foundation Logo (Circular decorative target style)
export const GoodDeedsLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 text-[#3B82F6] ${className}`}>
      {/* Decorative Stamp/Ring Icon */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" />
        <circle cx="50" cy="50" r="30" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
        <path
          d="M40 50L47 57L62 42"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-xs font-black tracking-tight text-slate-800 font-display">
          GoodDeeds
        </span>
        <span className="text-[8px] font-bold tracking-[0.15em] text-[#10B981] uppercase">
          FOUNDATION
        </span>
      </div>
    </div>
  );
};
