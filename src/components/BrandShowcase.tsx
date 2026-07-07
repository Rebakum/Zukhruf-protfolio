import { motion } from 'motion/react';
import { Eye, ArrowUpRight } from 'lucide-react';

type BrandShowcaseItem = {
  id: string;
  name: string;
  projectId: string;
  projectTitle: string;
  image: string;
  category?: string;
  colSpan: string;
  ratio: string;
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
      ratio: 'aspect-square',
    },
    {
      category: 'Print Design',
      id: 'business-card',
      name: 'Business Card',
      projectId: 'amanah',
      projectTitle: 'AMANAH Linen Card',
      image: '/src/assets/images/branding_bag_1783366638160.jpg',
      colSpan: 'md:col-span-8',
      ratio: 'aspect-[21/9]',
    },
    {
      category: 'Branding',
      id: 'mug',
      name: 'Ceramic Mug',
      projectId: 'barakah',
      projectTitle: 'BARAKAH Coffee Mug',
      image: '/src/assets/images/branding_mug_1783366599685.jpg',
      colSpan: 'md:col-span-6',
      ratio: 'aspect-video',
    },
    {
      category: 'Branding',
      id: 'notebook',
      name: 'Linen Notebook',
      projectId: 'barakah',
      projectTitle: 'BARAKAH Studio Planner',
      image: '/src/assets/images/branding_notebook_1783366650377.jpg',
      colSpan: 'md:col-span-6',
      ratio: 'aspect-video',
    },
    {
      category: 'Packaging',
      id: 'shopping-bag',
      name: 'Shopping Bag',
      projectId: 'bmfunding',
      projectTitle: 'BM FUNDING Tote Bag',
      image: '/src/assets/images/branding_bag_1783366638160.jpg',
      colSpan: 'md:col-span-4',
      ratio: 'aspect-square',
    },
    {
      category: 'Branding',
      id: 't-shirt',
      name: 'Oversized T-shirt',
      projectId: 'amanah',
      projectTitle: 'AMANAH Cotton Tee',
      image: '/src/assets/images/branding_tshirt_1783366612633.jpg',
      colSpan: 'md:col-span-4',
      ratio: 'aspect-square',
    },
    {
      category: 'Branding',
      id: 'signboard',
      name: 'Brass Signboard',
      projectId: 'empower',
      projectTitle: 'EMPOWER Building Sign',
      image: '/src/assets/images/branding_signboard_1783366626796.jpg',
      colSpan: 'md:col-span-4',
      ratio: 'aspect-square',
    },
  ];

function BrandShowcase({ items, onItemClick }: BrandShowcaseProps) {
  const itemsToRender = items ?? showcaseItems;

  return (
    <section id="showcase" className="bg-[#FAF5F5] py-24 border-b border-red-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E10F0F] uppercase block mb-3">
              Sensory Collaterals
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
              Brand Identity Showcase
            </h2>
          </div>
          <p className="text-[13px] text-slate-500 max-w-sm leading-relaxed text-left">
            A beautiful, immersive bento-grid display of bespoke physical and digital elements styled to demonstrate actual real-world visual consistency.
          </p>
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
              className={`${item.colSpan} relative rounded-3xl overflow-hidden bg-white border border-red-100 group cursor-pointer shadow-md`}
            >
              {/* Image Container */}
              <div className={`w-full ${item.ratio} relative overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-red-950/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-8 text-left z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-brand-green uppercase tracking-widest font-bold">
                      {item.name}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-white tracking-tight mb-2">
                      {item.projectTitle}
                    </h3>
                    <p className="text-[12px] text-red-200 flex items-center gap-1.5">
                      <Eye size={12} className="text-brand-green" />
                      Click to explore full Case Study details
                    </p>
                  </div>
                </div>

                {/* Subtle default indicator tag */}
                <div className="absolute bottom-4 left-4 bg-red-600 px-3 py-1.5 rounded-lg border border-red-500 z-0 group-hover:opacity-0 transition-opacity">
                  <span className="text-[10px] text-white font-bold uppercase tracking-wider">
                    {item.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const portfolioData = showcaseItems;
export { BrandShowcase };
