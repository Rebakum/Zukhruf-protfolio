import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, ArrowUpRight } from 'lucide-react';

import brandingBag from '../assets/images/branding_bag_1783366638160.jpg';
import brandingMug from '../assets/images/branding_mug_1783366599685.jpg';
import brandingNotebook from '../assets/images/branding_notebook_1783366650377.jpg';
import brandingTshirt from '../assets/images/branding_tshirt_1783366612633.jpg';
import brandingSignboard from '../assets/images/branding_signboard_1783366626796.jpg';
import tShirt1 from '../assets/images/t-shirt1.jpg';
import tShirt2 from '../assets/images/t-shirt2.jpg';
import tShirt3 from '../assets/images/t-shirt3.jpg';
import tShirt4 from '../assets/images/t-shirt4.jpg';
import tShirt5 from '../assets/images/t-shirt5.jpg';
import hod1 from '../assets/images/hod1.jpg';
import hodi2 from '../assets/images/hodi2.jpg';
import hodi3 from '../assets/images/hodi3.jpg';
import hodi4 from '../assets/images/hodi4.jpg';
import hodi5 from '../assets/images/hodi5.jpg';
import hodi6 from '../assets/images/hodi6.jpg';
import hodi7 from '../assets/images/hodi7.jpg';
import bag1 from '../assets/images/bag-1.jpg';
import bag2 from '../assets/images/bag2.jpg';
import bag3 from '../assets/images/bag-3.jpg';

type BrandShowcaseItem = {
  id: string;
  name: string;
  projectId: string;
  projectTitle: string;
  image: string;
  category?: string;
  colSpan: string;
};

interface BrandShowcaseProps {
  items?: BrandShowcaseItem[];
  onItemClick?: (projectId: string) => void;
}

const showcaseItems: BrandShowcaseItem[] = [
    {
      id: 'logo',
      category: 'Logo Design',
      name: 'Logo Mark',
      projectId: 'barakah',
      projectTitle: 'BARAKAH Arch Monogram',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
      colSpan: 'md:col-span-4',
    },
    {
      category: 'Print Design',
      id: 'business-card',
      name: 'Business Card',
      projectId: 'amanah',
      projectTitle: 'AMANAH Linen Card',
      image: brandingBag,
      colSpan: 'md:col-span-8',
    },
    {
      category: 'Branding',
      id: 'mug',
      name: 'Ceramic Mug',
      projectId: 'barakah',
      projectTitle: 'BARAKAH Coffee Mug',
      image: brandingMug,
      colSpan: 'md:col-span-6',
    },
    {
      category: 'Branding',
      id: 'notebook',
      name: 'Linen Notebook',
      projectId: 'barakah',
      projectTitle: 'BARAKAH Studio Planner',
      image: brandingNotebook,
      colSpan: 'md:col-span-6',
    },
    {
      category: 'Packaging',
      id: 'shopping-bag',
      name: 'Shopping Bag',
      projectId: 'bmfunding',
      projectTitle: 'BM FUNDING Tote Bag',
      image: brandingBag,
      colSpan: 'md:col-span-4',
    },
    {
      category: 'Branding',
      id: 't-shirt',
      name: 'Oversized T-shirt',
      projectId: 'amanah',
      projectTitle: 'AMANAH Cotton Tee',
      image: brandingTshirt,
      colSpan: 'md:col-span-4',
    },
    {
      category: 'Branding',
      id: 'signboard',
      name: 'Brass Signboard',
      projectId: 'empower',
      projectTitle: 'EMPOWER Building Sign',
      image: brandingSignboard,
      colSpan: 'md:col-span-4',
    },
    {
      category: 'Apparel',
      id: 'tshirt-1',
      name: 'Premium Tee',
      projectId: 'amanah',
      projectTitle: 'AMANAH Premium Tee',
      image: tShirt1,
      colSpan: 'md:col-span-4',
    },
    {
      category: 'Apparel',
      id: 'tshirt-2',
      name: 'Graphic Tee',
      projectId: 'barakah',
      projectTitle: 'BARAKAH Graphic Tee',
      image: tShirt2,
      colSpan: 'md:col-span-4',
    },
    {
      category: 'Apparel',
      id: 'tshirt-3',
      name: 'Urban Tee',
      projectId: 'bmfunding',
      projectTitle: 'BARAKAH Graphic Tee',
      image: tShirt3,
      colSpan: 'md:col-span-4',
    },
    {
      category: 'Apparel',
      id: 'tshirt-4',
      name: 'Statement Tee',
      projectId: 'empower',
      projectTitle: 'EMPOWER Statement Tee',
      image: tShirt4,
      colSpan: 'md:col-span-4',
    },
    {
      category: 'Apparel',
      id: 'tshirt-5',
      name: 'Classic Tee',
      projectId: 'amanah',
      projectTitle: 'AMANAH Classic Tee',
      image: tShirt5,
      colSpan: 'md:col-span-4',
    },
    {
      category: 'Apparel',
      id: 'hoodie-1',
      name: 'Street Hoodie',
      projectId: 'barakah',
      projectTitle: 'BARAKAH Street Hoodie',
      image: hod1,
      colSpan: 'md:col-span-4',
    },
    {
      category: 'Apparel',
      id: 'hoodie-2',
      name: 'Urban Hoodie',
      projectId: 'bmfunding',
      projectTitle: 'BARAKAH Street Hoodie',
      image: hodi2,
      colSpan: 'md:col-span-6',
    },
    {
      category: 'Apparel',
      id: 'hoodie-3',
      name: 'Campus Hoodie',
      projectId: 'amanah',
      projectTitle: 'BARAKAH Street Hoodie',
      image: hodi3,
      colSpan: 'md:col-span-6',
    },
    {
      category: 'Apparel',
      id: 'hoodie-4',
      name: 'Sport Hoodie',
      projectId: 'barakah',
      projectTitle: 'BARAKAH Street Hoodie',
      image: hodi4,
      colSpan: 'md:col-span-6',
    },
    {
      category: 'Apparel',
      id: 'hoodie-5',
      name: 'Premium Hoodie',
      projectId: 'barakah',
      projectTitle: 'BARAKAH Premium Hoodie',
      image: hodi5,
      colSpan: 'md:col-span-6',
    },
    {
      category: 'Apparel',
      id: 'hoodie-6',
      name: 'Designer Hoodie',
      projectId: 'bmfunding',
      projectTitle: 'BARAKAH Street Hoodie',
      image: hodi6,
      colSpan: 'md:col-span-6',
    },
    {
      category: 'Apparel',
      id: 'hoodie-7',
      name: 'empower',
      projectId: 'amanah',
      projectTitle: 'AMANAH Studio Hoodie',
      image: hodi7,
      colSpan: 'md:col-span-6',
    },
    {
      category: 'Packaging',
      id: 'bag-1',
      name: 'Tote Bag',
      projectId:  'empower',
      projectTitle: ' EMPOWER WORLD, Tote Bag',
      image: bag1,
      colSpan: 'md:col-span-4',
    },
    {
      category: 'Packaging',
      id: 'bag-2',
      name: 'Merch Bag',
      projectId: 'barakah',
      projectTitle: 'BARAKAH Bag',
      image: bag2,
      colSpan: 'md:col-span-4',
    },
    {
      category: 'Packaging',
      id: 'bag-3',
      name: 'Canvas Bag',
      projectId: 'amanah',
      projectTitle: 'ONE UMMAH HEART ...!',
      image: bag3,
      colSpan: 'md:col-span-4',
    },
  ];

function BrandShowcase({ items, onItemClick }: BrandShowcaseProps) {
  const [showAll, setShowAll] = useState(false);
  const allItems = items ?? showcaseItems;
  const itemsToRender = showAll ? allItems : allItems.slice(0, 7);

  const handleToggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section id="showcase" className="scroll-mt-24 bg-[#FAF5F5] py-24 border-b border-red-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-6 ">
            <span className="text-[13px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block mb-3">
              Sensory Collaterals
            </span>
            <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-black tracking-tight text-slate-900 font-display">
              Brand Identity Showcase

            </h2>
             <p className="text-[16px]  text-left leading-relaxed text-slate-500 font-medium">
            A beautiful, immersive bento-grid display of bespoke physical and digital elements styled to demonstrate actual real-world visual consistency.
          </p>
          </div>
      
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {itemsToRender.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              onClick={() => onItemClick?.(item.projectId)}
              className={`${item.colSpan} relative rounded-3xl overflow-hidden bg-white border border-red-100 group cursor-pointer shadow-md hover:shadow-xl hover:shadow-red-100/50 hover:border-[#E10F0F]/30 transition-all duration-300`}
            >
              {/* Image Container */}
              <div className="w-full h-64 sm:h-72 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                  <div className="w-full opacity-35 h-full bg-gradient-to-t from-red-950 via-red-950/98 to-red-950/90 flex flex-col justify-between p-8 text-left">
                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-50 transition-all duration-500 ease-out delay-200">
                      <span className="text-[13px] text-white uppercase tracking-widest font-bold">
                        {item.name}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-white/20 transition-colors duration-300">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-300">
                      <h3 className="font-display font-extrabold text-2xl text-white tracking-tight mb-2">
                        {item.projectTitle}
                      </h3>
                      <p className="text-[15px] text-red-200 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-[400ms]">
                        <Eye size={12} className="text-brand-green" />
                        Click to explore full Case Study details
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle default indicator tag */}
                <div className="absolute bottom-4 left-4 bg-red-600 px-3 py-1.5 rounded-lg border border-red-500 z-0 group-hover:opacity-0 group-hover:scale-95 transition-all duration-500 ease-out">
                  <span className="text-[13px] text-white font-bold uppercase tracking-wider">
                    {item.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All / Show Less Button */}
        {allItems.length > 7 && (
          <div className="flex justify-center mt-12">
            <button
              type="button"
              onClick={handleToggleShowAll}
              className="inline-flex items-center gap-2 bg-[#E10F0F] hover:bg-[#C90D0D] text-white text-[13px] font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md shadow-red-500/10 hover:shadow-lg hover:shadow-red-500/20 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              {showAll ? 'Show Less' : 'View All'}
              <ArrowUpRight size={16} className={`transition-transform duration-300 ${showAll ? 'rotate-90' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export const portfolioData = showcaseItems;
export { BrandShowcase };
