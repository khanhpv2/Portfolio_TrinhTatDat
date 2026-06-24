"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  primary:
    "bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-lg shadow-amber-500/25",
  secondary:
    "border border-slate-600 text-white hover:border-amber-500 hover:text-amber-400 bg-transparent",
  outline:
    "border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-950",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  download,
  external,
  type = "button",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external || download) {
      return (
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href={href}
          download={download}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
