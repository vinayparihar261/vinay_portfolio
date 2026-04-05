"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-transparent px-6 md:px-12 py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
          }}
          className="text-left order-2 lg:order-1 bg-white/35 dark:bg-slate-900/35 backdrop-blur-md border border-primary/20 rounded-[3rem] p-8 md:p-10 shadow-[0_30px_60px_rgba(20,34,64,0.15)]"
        >
          <div className="mb-8 flex flex-wrap items-center gap-3">
            {["2026", "Wedding Portfolio"].map((item) => (
              <motion.span
                key={item}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="inline-flex items-center gap-2 py-2 px-5 rounded-full border border-primary/35 bg-white/45 dark:bg-slate-950/35 text-[11px] font-semibold tracking-[0.24em] uppercase text-primary-800 dark:text-primary-200"
              >
                {item}
              </motion.span>
            ))}
          </div>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            className="font-playfair text-6xl md:text-[7rem] lg:text-[8.5rem] font-bold mb-10 tracking-tight leading-[0.88] flex flex-col"
          >
            <span className="text-slate-900 dark:text-white border-b-4 border-primary/30 w-fit pb-2">Vinay</span>
            <span className="gradient-text italic opacity-90">Parihar</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-light leading-relaxed mb-12 max-w-2xl font-serif italic"
          >
            "A balance of <span className="text-primary-700 dark:text-primary-400 font-semibold">innovation</span> and <span className="text-primary-700 dark:text-primary-400 font-semibold">tradition</span>, dedicated to a life of growth, empathy, and shared joy."
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-wrap gap-5"
          >
            <motion.a
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="#about"
              className="px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-[0_20px_50px_-10px_rgba(212,175,55,0.4)] transition-all duration-500 font-bold text-lg tracking-wide flex items-center gap-2"
            >
              Our Story
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="/docs/vinay-parihar-biodata.pdf"
              target="_blank"
              className="px-10 py-5 glass text-primary-900 dark:text-primary-50 rounded-full border border-primary/30 transition-all duration-500 hover:bg-primary-50 dark:hover:bg-primary-900/10 font-bold text-lg flex items-center gap-3 group shadow-xl"
            >
              Digital Bio-data
              <span className="w-10 h-[1px] bg-primary group-hover:w-14 transition-all duration-500" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative group">
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-80 h-[30rem] md:w-[450px] md:h-[40rem] rounded-[6rem] overflow-hidden border-[15px] border-white/80 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 bg-white/40 backdrop-blur-sm p-4"
            >
              <div className="relative w-full h-full rounded-[4.5rem] overflow-hidden">
                <Image 
                  src="/img/vinay-2.jpg" 
                  alt="Vinay Parihar" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 brightness-110"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Elegant Accents */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-sky-100/30 dark:bg-sky-900/20 rounded-full blur-[100px]" />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-44 h-44 border-[0.5px] border-primary/20 rounded-full border-dashed flex items-center justify-center opacity-40"
            >
              <div className="w-32 h-32 border-[0.5px] border-primary/30 rounded-full border-solid" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

