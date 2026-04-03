"use client";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Heart, ShieldCheck } from "lucide-react";

const expectationCards = [
  { icon: <ShieldCheck />, label: "Values & Respect", desc: "A person with a kind and empathetic heart that values shared laughter and emotional partnership." },
  { icon: <MessageCircle />, label: "Intellectual Growth", desc: "A person with a growth mindset who is passionate about her career or interests." },
  { icon: <Heart />, label: "Compassion", desc: "A shared journey of understanding, care, and mutual respect for our families and roots." },
  { icon: <Sparkles />, label: "Modern & Grounded", desc: "A balance of modern perspectives with a deep understanding of our cultural heritage." },
];

export const Expectations = () => {
  return (
    <section id="expectations" className="py-32 px-6 md:px-12 bg-transparent relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 py-2 px-6 glass rounded-full border border-primary/20 mb-4 bg-white/50"
          >
            <Sparkles className="text-primary-600" size={16} />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary-600">
               A Shared Vision
            </span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-bold font-playfair text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
            A Journey of <span className="gradient-text italic opacity-90">Partnership</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {expectationCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="p-12 glass-card rounded-[4rem] group hover:bg-primary-50/30 dark:hover:bg-primary-950/20 transition-all duration-700 border-primary/5 shadow-xl bg-white/40 dark:bg-slate-950/40 backdrop-blur-md"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                <div className="w-20 h-20 rounded-[2.5rem] bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-inner">
                  {card.icon}
                </div>
                <div className="text-center md:text-left space-y-4">
                  <h3 className="text-3xl font-bold text-slate-950 dark:text-white font-playfair tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{card.label}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-normal italic font-serif transition-colors opacity-90">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-16 glass-card rounded-[5rem] text-center max-w-4xl mx-auto border border-primary/10 relative overflow-hidden bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
          <p className="text-2xl text-slate-700 dark:text-slate-300 font-serif italic leading-[1.8] relative z-10 transition-colors">
             "I believe a successful partnership is built on the foundation of being each other's best friend. I'm looking for a simple, respectful, and joyful soul with whom I can build a life of growth, laughter, and shared dreams."
          </p>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
