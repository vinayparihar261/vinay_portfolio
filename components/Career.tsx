"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const experience = [
  {
    company: "Kods Technologies",
    role: "Junior Flutter Developer",
    period: "09/2025 – Present",
    desc: "Built scalable Android & iOS apps using MVVM and Clean Architecture. Integrated RESTful APIs, Firebase notifications, and real-time geolocation.",
    apps: ["Rehotra (Rent and House Track)"],
    color: "bg-blue-100/50 text-blue-600"
  },
  {
    company: "Communities Heritage",
    role: "Junior Flutter Developer",
    period: "01/2025 – 09/2025",
    desc: "Developed cross-platform mobile apps for Android & iOS. Managed offline storage with Hive and designed responsive UIs using Flutter Material Design.",
    apps: ["MyCo - Your Business App"],
    color: "bg-indigo-100/50 text-indigo-600"
  },
  {
    company: "Vaanara Technologies",
    role: "Junior Software Engineer",
    period: "11/2023 – 04/2024",
    desc: "Engineered Java-based database migration systems and microservices, ensuring 100% on-time delivery for US clients.",
    apps: [],
    color: "bg-neutral-100/50 text-neutral-600"
  }
];

export const Career = () => {
  return (
    <section id="career" className="py-32 px-6 md:px-12 relative overflow-hidden bg-transparent">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.span
            className="text-primary-600 font-bold tracking-[0.4em] uppercase text-[11px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            A Purposeful Journey
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-bold font-playfair text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
            Education & <span className="gradient-text italic">Professional Path</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Work Experience */}
          <div className="lg:col-span-8 space-y-10">
            <h3 className="text-3xl font-bold font-playfair flex items-center gap-4 text-slate-900 dark:text-white">
              <span className="w-10 h-[1px] bg-primary/40 block"></span>
              The Professional Arc
            </h3>
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-12 glass-card rounded-[4rem] relative group border-primary/5 hover:border-primary/20 transition-all duration-700 hover:bg-primary-50/20 will-change-transform"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight font-playfair">{exp.company}</h4>
                      <p className="text-primary-600 dark:text-primary-400 font-bold uppercase text-[10px] tracking-[0.3em]">{exp.role}</p>
                    </div>
                    <span className="text-[11px] font-bold text-primary-800 dark:text-primary-200 bg-primary-100/50 dark:bg-primary-900/30 border border-primary/10 px-6 py-2.5 rounded-full w-fit uppercase tracking-widest whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-normal text-lg mb-8">
                    {exp.desc}
                  </p>
                  {exp.apps.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-primary/10">
                      {exp.apps.map((app, i) => (
                        <span key={i} className="text-[10px] font-bold px-6 py-2.5 bg-white/80 dark:bg-slate-900/40 text-primary-700 dark:text-primary-300 rounded-full uppercase tracking-widest border border-primary/10 shadow-sm transition-colors">
                          {app}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Values */}
          <div className="lg:col-span-4 space-y-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold font-playfair flex items-center gap-4 text-slate-900 dark:text-white">
                <span className="w-10 h-[1px] bg-primary/40 block"></span> Academic Foundation
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-12 glass-card rounded-[4rem] border-primary/5 bg-primary-50/10 dark:bg-primary-950/10"
              >
                <div className="mb-8 p-5 bg-white dark:bg-slate-900 rounded-full w-fit shadow-inner transition-colors">
                  <GraduationCap className="text-primary-600 dark:text-primary-400 w-8 h-8" />
                </div>
                <h4 className="font-bold text-2xl text-slate-900 dark:text-white mb-3 font-playfair">B.E. in Computer Science</h4>
                <p className="text-slate-600 dark:text-slate-400 text-base mb-8 leading-relaxed font-serif italic transition-colors">Dr. A.P.J Abdul Kalam University</p>
                <div className="flex items-center gap-4 text-primary-700 dark:text-primary-400 font-bold transition-colors">
                  <span className="text-4xl font-playfair tracking-tighter">81.4%</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-80 leading-none">Aggregate<br />Score</span>
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold font-playfair flex items-center gap-4 text-slate-900 dark:text-white">
                <span className="w-10 h-[1px] bg-primary/40 block"></span> Core Values
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Intellectual Curiosity",
                  "Problem-Solving Mindset",
                  "Ethical Foundation",
                  "Balance of Logic & Heart",
                  "Constant Growth",
                ].map((skill, i) => (
                  <div key={i} className="px-8 py-6 glass-card rounded-full text-base font-bold flex items-center gap-4 group hover:bg-primary-500 dark:hover:bg-primary-600 hover:text-white dark:text-slate-200 transition-all duration-500 cursor-default">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary-400 group-hover:bg-white transition-all duration-500" />
                    <span className="tracking-tight">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

