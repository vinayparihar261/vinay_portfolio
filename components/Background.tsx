"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Background = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-1000">
      <div className="absolute inset-0 bg-background" />

      {/* Top ornamental ribbon inspired by wedding invitation art */}
      <div className="absolute inset-x-0 top-0 h-[36vh] bg-[#1f2e53] dark:bg-[#15203a]" />
      <div className="absolute inset-x-0 top-0 h-[36vh] bg-[radial-gradient(circle_at_center,rgba(199,161,87,0.45)_0%,rgba(199,161,87,0.2)_24%,transparent_62%)]" />
      <div
        className="absolute inset-x-0 top-0 h-[36vh] opacity-70 dark:opacity-50"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='1200' height='320' viewBox='0 0 1200 320' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23c9a45f' stroke-opacity='0.65' stroke-width='2'%3E%3Cpath d='M120 42C210 18 300 14 390 42C450 60 510 98 600 96C690 98 750 60 810 42C900 14 990 18 1080 42'/%3E%3Cpath d='M180 96C260 68 340 66 420 92C475 110 540 146 600 146C660 146 725 110 780 92C860 66 940 68 1020 96'/%3E%3Cpath d='M250 148C330 126 410 124 490 146C540 160 575 182 600 182C625 182 660 160 710 146C790 124 870 126 950 148'/%3E%3Ccircle cx='600' cy='134' r='90'/%3E%3Ccircle cx='600' cy='134' r='64'/%3E%3Cpath d='M600 72V198M538 134H662M556 90L644 178M556 178L644 90'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Watercolor atmosphere */}
      <motion.div
        animate={{
          x: [0, 80, -20, 0],
          y: [0, 40, 80, 0],
          scale: [1, 1.16, 0.96, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[22%] left-[-12%] w-[88vw] h-[88vw] bg-[#bfd1e8]/45 dark:bg-[#2a3e66]/35 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-soft-light will-change-transform"
      />

      <motion.div
        animate={{
          x: [0, -100, 65, 0],
          y: [0, 80, -45, 0],
          scale: [1, 1.07, 1.2, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-16%] right-[-8%] w-[90vw] h-[90vw] bg-[#d8e2f1]/50 dark:bg-[#32476f]/35 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-soft-light will-change-transform"
      />

      <motion.div
        animate={{
          x: [0, 50, -20, 0],
          y: [0, -70, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[25%] right-[8%] w-[44vw] h-[44vw] bg-[#ead9bd]/30 dark:bg-[#8f7240]/10 rounded-full blur-[105px] mix-blend-multiply dark:mix-blend-soft-light will-change-transform"
      />

      <div
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.1]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cg fill='none' stroke='%23364868' stroke-opacity='0.22' stroke-width='1.4'%3E%3Cpath d='M38 62c22-21 60-23 84-5 18 14 27 40 19 62-6 18-21 33-39 38-24 8-53-2-67-23-18-25-15-63 3-89z'/%3E%3Cpath d='M82 70c8 18 25 34 46 39 15 4 29 2 44-3M264 56c16-14 44-11 57 6 11 13 13 34 4 49-11 20-37 31-58 25-18-5-34-20-38-39-4-15 0-31 10-41 6-7 15-11 25-12z'/%3E%3Cpath d='M215 228c26-23 70-26 99-8 23 15 33 47 24 73-8 24-31 44-55 49-30 7-63-7-79-34-20-33-15-81 11-110z'/%3E%3Cpath d='M28 260c11-10 29-10 40 1 12 12 12 31 1 43-11 11-30 12-42 1-11-11-12-30 1-45z'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "400px 400px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,_var(--background)_78%)] opacity-60" />
    </div>
  );
};
