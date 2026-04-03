"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Career", href: "#career" },
    { name: "Lifestyle", href: "#lifestyle" },
    { name: "Expectations", href: "#expectations" },
    { name: "Contact", href: "#contact" },
  ];

  if (!mounted) return null;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
        ? "py-4 bg-white/80 dark:bg-black/80 backdrop-blur-2xl border-b border-primary/10 shadow-2xl" 
        : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold font-playfair tracking-tighter text-slate-900 dark:text-white flex items-center gap-2 group"
        >
          <Sparkles className="text-primary-500 group-hover:rotate-12 transition-transform" size={24} />
          <span>Vinay Parihar</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {navLinks.map((link, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <a 
                  href={link.href} 
                  className="text-[11px] font-bold tracking-[0.3em] uppercase text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-500 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary-500 transition-all duration-500 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-white/50 border border-primary/10 overflow-hidden shadow-xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={resolvedTheme === "dark" ? "moon" : "sun"}
                initial={{ y: 20, opacity: 0, rotate: -40 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -20, opacity: 0, rotate: 40 }}
                transition={{ duration: 0.5, ease: "backOut" }}
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-5 h-5 text-amber-500" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-800" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/50 border border-primary/10"
          >
            {resolvedTheme === "dark" ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-800" />}
          </button>
          
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/50 border border-primary/10"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl overflow-hidden flex flex-col items-center justify-center text-slate-900 dark:text-white"
          >
            <ul className="space-y-10 text-center">
              {navLinks.map((link, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    onClick={() => setMobileOpen(false)}
                    className="text-4xl font-bold font-playfair hover:text-primary-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-20 p-8 text-center text-primary-600 dark:text-primary-400 font-serif italic text-xl max-w-xs transition-colors">
              "Respect is the heart of a home, and laughter is its soul."
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
