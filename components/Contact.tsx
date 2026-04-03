"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail, MessageCircle, Phone, Sparkles } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-transparent overflow-hidden relative">
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-50/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-primary-600 mb-4"
              >
                <Sparkles size={18} />
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase">Connect with Care</span>
              </motion.div>
              <h2 className="text-6xl md:text-8xl font-bold font-playfair text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                Let&apos;s Begin a <span className="gradient-text italic opacity-90">Conversation</span>
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-xl leading-relaxed max-w-md font-serif italic opacity-90 transition-colors">
                I believe that every deep connection starts with a simple, honest conversation. I look forward to hearing from you and exploring our shared horizons.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919981298922"
                className="flex items-center justify-center gap-4 px-12 py-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-[3rem] shadow-2xl shadow-[#25D366]/20 transition-all duration-700 font-bold text-lg overflow-hidden group relative"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <MessageCircle size={24} className="relative z-10" />
                <span className="relative z-10">WhatsApp with Love</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919981298922"
                className="flex items-center justify-center gap-4 px-12 py-6 glass-card text-slate-950 dark:text-white rounded-[3rem] transition-all duration-700 font-bold text-lg bg-white/40 dark:bg-slate-900/40 border-primary/10 shadow-xl border backdrop-blur-md"
              >
                <Phone size={24} />
                <span>Hear My Voice</span>
              </motion.a>
            </div>

            <div className="pt-12 flex gap-12">
              {[
                { icon: <Linkedin size={32} />, link: "https://www.linkedin.com/in/vinayparihar26", label: "LinkedIn" },
                { icon: <Github size={32} />, link: "https://github.com/vinayparihar26", label: "GitHub" },
                { icon: <Mail size={32} />, link: "mailto:pariharvinaytaurush@gmail.com", label: "Email" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ scale: 1.3, rotate: 5, y: -10 }} 
                  href={social.link} 
                  target="_blank" 
                  className="text-slate-400 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-500 flex flex-col items-center gap-2"
                >
                  {social.icon}
                  <span className="text-[9px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="p-16 glass-card rounded-[5rem] relative z-10 overflow-hidden bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl shadow-2xl border border-primary/10"
            >
              <h3 className="text-3xl font-bold text-slate-950 dark:text-white mb-16 font-playfair tracking-tight text-center">Digital Call-Card</h3>
              <ul className="space-y-12">
                {[
                  { label: "Reach out via", val: "+91 9981298922", link: "tel:+919981298922", icon: <Phone size={20} /> },
                  { label: "Write to me at", val: "pariharvinaytaurush@gmail.com", link: "mailto:pariharvinaytaurush@gmail.com", icon: <Mail size={20} /> },
                  { label: "Home Base", val: "Biskhan Betul, MP | Bangalore", link: null, icon: <Sparkles size={20} /> }
                ].map((item, idx) => (
                  <li key={idx} className="flex flex-col gap-3 group">
                    <span className="text-[10px] font-bold tracking-[0.4em] text-primary-600 uppercase flex items-center gap-2">
                       {item.label}
                    </span>
                    {item.link ? (
                      <a href={item.link} className="font-bold text-slate-950 dark:text-white text-2xl hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-between transition-all duration-700 group-hover:translate-x-2 font-playfair tracking-tight">
                        <span>{item.val}</span> <ExternalLink size={24} className="opacity-0 group-hover:opacity-60 transition-all" />
                      </a>
                    ) : (
                      <span className="font-bold text-slate-950 dark:text-white text-2xl font-playfair tracking-tight">{item.val}</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-20 pt-12 border-t border-primary/10 text-center">
                <p className="text-slate-600 dark:text-slate-400 text-sm italic font-serif leading-relaxed opacity-80 transition-colors">
                  "Respect is the heart of a home, and laughter is its soul."
                </p>
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary-500/5 to-transparent rounded-bl-[10rem] -z-10" />
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="mt-48 pt-20 border-t border-primary/5 text-center relative z-10 pb-20">
        <div className="container mx-auto px-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary-600/60 text-[10px] font-bold tracking-[0.6em] uppercase"
          >
            Vinay Parihar | Matrimonial Portfolio &copy; 2026
          </motion.p>
          <div className="mt-8 flex justify-center gap-3">
             {[1, 2, 3].map((_, i) => (
               <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/20" />
             ))}
          </div>
        </div>
      </footer>
    </section>
  );
};
