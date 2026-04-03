"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, Home, Heart } from "lucide-react";

const familyTree = [
  { label: "Father", desc: "Bhivji Parihar", icon: <Users /> },
  { label: "Mother", desc: "Sunita Parihar", icon: <Heart /> },
  { label: "Brother", desc: "Vishal Parihar", icon: <Home /> },
];

export const Family = () => {
  const scrollRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section id="family" ref={scrollRef} className="py-32 px-6 md:px-12 bg-transparent overflow-hidden relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.span 
            className="text-primary-600 font-bold tracking-[0.4em] uppercase text-[11px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            My Foundation
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-bold font-playfair text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
            Roots & <span className="gradient-text italic">Foundation</span>
          </h2>
        </div>

        <div className="relative">
          {/* Elegant Center Line */}
          <motion.div 
            style={{ scaleY: pathLength }}
            className="absolute left-1/2 -ml-px top-0 w-px h-full bg-gradient-to-b from-primary-200 via-primary-500 to-primary-200 origin-top hidden md:block opacity-40 shadow-sm" 
          />

          <div className="space-y-16">
            {familyTree.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 w-full text-center md:text-left">
                  <div className={`p-12 glass-card rounded-[4rem] group hover:border-primary/20 transition-all duration-700 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm shadow-xl ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`mb-10 text-primary-600 ${idx % 2 === 0 ? "md:float-right md:ml-6" : "md:float-left md:mr-6"}`}>
                      {item.label === "Father" ? <Users className="w-10 h-10" /> : item.label === "Mother" ? <Heart className="w-10 h-10" /> : <Home className="w-10 h-10" />}
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400 mb-2 font-bold">{item.label}</span>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-950 dark:text-white mb-3 font-playfair tracking-tight">{item.desc}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-normal italic font-serif transition-colors">
                        {item.label === "Father" ? "Guided by strength and wisdom." : item.label === "Mother" ? "The heart and warmth of our home." : "A companion in every adventure."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full bg-primary-500 z-10 hidden md:block outline outline-12 outline-primary-100 dark:outline-primary-900/30 shadow-lg group-hover:scale-125 transition-all duration-500" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center p-12 glass-card rounded-[4rem] bg-amber-50/10 dark:bg-primary-950/10 border-primary/5">
          <p className="text-2xl text-slate-700 dark:text-slate-300 font-serif italic max-w-2xl mx-auto transition-colors">
            "Family is where our story begins, and where our values are nurtured for a lifetime."
          </p>
          <div className="mt-6 flex justify-center gap-2">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-primary/40 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
