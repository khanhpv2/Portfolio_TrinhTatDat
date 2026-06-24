"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-slate-900/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Kinh nghiệm"
          title="Lộ trình sự nghiệp"
          subtitle="Hơn 17 năm phát triển từ Kỹ sư công trường đến Giám đốc Dự án tại các công trình landmark."
        />

        <div className="space-y-8 md:space-y-0">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
