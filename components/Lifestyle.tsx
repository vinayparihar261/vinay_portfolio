"use client";
import { motion } from "framer-motion";
import { Camera, Layout, Sparkles, Trophy } from "lucide-react";
import Image from "next/image";

const gallery = [
  { src: "/img/vinay-3.jpg", alt: "Outing", span: "row-span-2 col-span-2" },
  { src: "/img/vinay-4.jpg", alt: "Office", span: "col-span-1" },
  { src: "/img/vinay-5.jpg", alt: "Christmas", span: "col-span-1" },
];

export const Lifestyle = () => {
  return (
    <section id="lifestyle" className="py-32 px-6 md:px-12 bg-transparent overflow-hidden relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.span
                className="text-primary-600 font-bold tracking-[0.4em] uppercase text-[11px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                A Life in Harmony
              </motion.span>
              <h2 className="text-6xl md:text-[5.5rem] font-bold font-playfair text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                Moments & <span className="gradient-text italic opacity-90">Passions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: 1, icon: <Trophy />, label: "Sports & Spirit", desc: "Finding focus and energy on the cricket turf." },
                { id: 2, icon: <Camera />, label: "The Joy of Discovery", desc: "Exploring new horizons and local stories alike." },
                { id: 3, icon: <Sparkles />, label: "Celebrating Roots", desc: "Honoring our vibrant traditions and festivals." },
                { id: 4, icon: <Layout />, label: "Creative Focus", desc: "Finding beauty in design and balance." },
              ].map((hobby, idx) => (
                <motion.div
                  key={hobby.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="p-10 glass-card rounded-[3.5rem] group hover:bg-primary-50/50 transition-all duration-700 border-primary/5 shadow-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-all duration-500">
                    {hobby.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-3 font-playfair tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {hobby.label}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-normal">
                    {hobby.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[700px] relative">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full aspect-square bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />

            {gallery.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, ease: [0.16, 1, 0.3, 1], duration: 1.5 }}
                className={`relative rounded-[4rem] overflow-hidden border-[15px] border-white dark:border-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-1000 brightness-[1.02] contrast-[1.02]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
