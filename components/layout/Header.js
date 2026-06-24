"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#experience", label: "Kinh nghiệm" },
  { href: "#projects", label: "Dự án" },
  { href: "#gallery", label: "Thư viện" },
  { href: "#certifications", label: "Chứng chỉ" },
  { href: "#contact", label: "Liên hệ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 font-bold text-slate-950">
            TD
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-white group-hover:text-amber-400 transition">
              Trịnh Tất Đạt
            </p>
            <p className="text-xs text-slate-400">Project Manager</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="primary" className="ml-2 !px-4 !py-2">
            Liên hệ
          </Button>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-slate-800 bg-slate-950/95 px-4 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
}
