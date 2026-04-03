"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section id="about" ref={containerRef} className="py-32 px-6 md:px-12 relative bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center will-change-transform"
        >
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] glass border-[12px] border-white/90 relative">
              <Image
                src="/img/vinay-1.jpg"
                alt="Vinay's Story"
                fill
                className="object-cover filter sepia-[0.1] contrast-[1.05] group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-primary-100/30 rounded-[4rem] blur-3xl -z-10 group-hover:scale-110 transition-all duration-1000" />
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <motion.span
                className="text-primary-600 font-bold tracking-[0.4em] uppercase text-[11px]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                A Personal Glimpse
              </motion.span>
              <h2 className="text-6xl md:text-8xl font-bold font-playfair text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                Rooted in <span className="gradient-text italic">Culture</span>, Driven by <span className="gradient-text italic">Purpose</span>
              </h2>
            </div>

            <div className="space-y-8 text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
              <p>
                I believe that life is a delicate weave of the traditional values we inherit and the modern innovations we create. Born in the serene landscapes of <span className="text-primary-800 dark:text-primary-400 font-medium italic underline decoration-primary/20">Biskhan Betul, MP</span>, I carry with me a deep respect for my heritage while thriving in the fast-paced tech heart of Bangalore.
              </p>
              <p>
                As a person, I value clarity, compassion, and continuous growth. Whether I'm architecting a complex mobile application or spending a quiet evening with family, I strive for <span className="text-primary-700 dark:text-primary-400 font-semibold underline decoration-primary/20 underline-offset-4">authenticity</span> in everything I do.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {[
                { label: "Date of Birth", val: "26 Oct 1998" },
                { label: "Place of Birth", val: "Biskhan Betul, MP" },
                { label: "Religion & Caste", val: "Hindu / OBC" },
                { label: "Gothra", val: "Pawar" },
                { label: "Dietary Habits", val: "Veg & Non-Veg" },
                { label: "Education", val: "B.E. in CSE" },
              ].map((item, idx) => (
                <div key={idx} className="p-6 glass-card rounded-[3rem] group hover:bg-primary-50/50 dark:hover:bg-primary-950/20 transition-all duration-500 border-primary/10">
                  <span className="block text-[10px] uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400 mb-2 font-bold">{item.label}</span>
                  <span className="font-bold text-slate-900 dark:text-white text-base leading-tight block font-playfair">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

