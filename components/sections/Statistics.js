"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";
import { statistics } from "@/data/profile";

export default function Statistics() {
  return (
    <section id="statistics" className="relative bg-slate-900/50 py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Thành tích"
          title="Con số biết nói"
          subtitle="Kết quả thực tế từ hơn 17 năm quản lý và thi công công trình xây dựng."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <StatCounter key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
