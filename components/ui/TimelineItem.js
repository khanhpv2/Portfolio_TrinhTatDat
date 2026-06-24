"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TimelineItem({ item, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex gap-6 pb-10 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-amber-500 bg-slate-900 shadow-lg shadow-amber-500/20">
          <Image
            src={item.logo}
            alt={`Logo công ty ${item.company}`}
            width={32}
            height={32}
            className="rounded object-contain"
          />
        </div>
        {!isLast && (
          <div className="mt-2 w-0.5 flex-1 bg-gradient-to-b from-amber-500/50 to-slate-700" />
        )}
      </div>

      <div className="flex-1 rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 backdrop-blur-sm transition hover:border-amber-500/30">
        <span className="text-sm font-medium text-amber-400">{item.period}</span>
        <h3 className="mt-1 text-lg font-bold text-white">{item.role}</h3>
        <p className="text-slate-400">{item.company}</p>
        <ul className="mt-4 space-y-2">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
