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
      
      {/* Elegant Warm Blobs */}
      <motion.div
        animate={{
          x: [0, 100, -30, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-soft-light will-change-transform"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 70, 0],
          y: [0, 70, -50, 0],
          scale: [1, 1.05, 1.2, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-15%] right-[-5%] w-[90vw] h-[90vw] bg-rose-100/20 dark:bg-rose-900/10 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-soft-light will-change-transform"
      />

      {/* Floating Gold Accents */}
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
        className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-yellow-100/10 dark:bg-yellow-900/5 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-soft-light will-change-transform"
      />

      {/* Premium Texture & Artistic Pattern */}
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzvxs72ko/image/upload/v1712128854/noise_fkgf6s.png')] opacity-[0.02] dark:opacity-[0.04] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--background)_100%)] opacity-40" />
    </div>
  );
};
