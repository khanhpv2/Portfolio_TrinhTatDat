"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications, education } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Bằng cấp & Chứng chỉ"
          title="Chứng nhận chuyên môn"
          subtitle="Văn bằng, chứng chỉ giám sát hạng I và giấy phép hành nghề xây dựng."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 md:p-8"
        >
          <h3 className="text-lg font-bold text-white">Học vấn</h3>
          <p className="mt-2 text-amber-400">{education.degree}</p>
          <p className="text-slate-300">{education.school}</p>
          <p className="mt-1 text-sm text-slate-500">Tốt nghiệp {education.year}</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 transition hover:border-amber-500/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Replace: upload real certificate to public/images/certificates/ */}
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-amber-400">{cert.year}</span>
                <h3 className="mt-1 font-bold text-white">{cert.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
