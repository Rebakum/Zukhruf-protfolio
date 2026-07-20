import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactInfoBanner: React.FC = React.memo(() => {
  const contactDetails = [
    {
      label: "Phone",
      value: "+880 1234-567890",
      icon: <Phone className="w-5 h-5 text-[#E10F0F] stroke-[2.5]" />,
    },
    {
      label: "Email",
      value: "hello@zukhruf.com",
      icon: <Mail className="w-5 h-5 text-[#E10F0F] stroke-[2.5]" />,
    },
    {
      label: "Location",
      value: "Dhaka, Bangladesh",
      icon: <MapPin className="w-5 h-5 text-[#E10F0F] stroke-[2.5]" />,
    },
  ];

  return (
    <section className="bg-[#E10F0F] text-white rounded-2xl p-7 shadow-lg shadow-red-500/10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {contactDetails.map((detail, i) => (
          <div
            key={detail.label}
            className={`flex items-center gap-4 justify-center sm:justify-start ${
              i > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
            }`}
          >
            {/* White Circle Icon Container */}
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
              {detail.icon}
            </div>
            
            {/* Text details */}
            <div className="text-left leading-tight">
              <div className="text-[13px] font-bold uppercase tracking-widest text-red-200">
                {detail.label}
              </div>
              <div className="text-[18px] font-extrabold tracking-tight mt-0.5 font-display">
                {detail.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
