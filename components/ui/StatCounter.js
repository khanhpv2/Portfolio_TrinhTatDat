"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function StatCounter({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40 p-8 text-center backdrop-blur-sm transition hover:border-amber-500/40 hover:bg-slate-800/60"
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-amber-500/5 transition group-hover:bg-amber-500/10" />
      <p className="text-4xl font-bold text-amber-400 md:text-5xl lg:text-6xl">
        <AnimatedNumber value={stat.value} suffix={stat.suffix} />
      </p>
      <p className="mt-3 text-lg font-medium text-white">{stat.label}</p>
      <p className="mt-1 text-sm text-slate-500">{stat.labelEn}</p>
    </motion.div>
  );
}
