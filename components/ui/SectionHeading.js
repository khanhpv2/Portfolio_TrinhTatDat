"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ label, title, subtitle, align = "center" }) {
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 flex flex-col gap-3 ${alignClass}`}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
        {label}
      </span>
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-slate-400 md:text-lg">{subtitle}</p>
      )}
      <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-amber-500 to-amber-300" />
    </motion.div>
  );
}
