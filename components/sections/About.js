"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const aboutPhotos = [
  {
    src: "/images/profile/me-1.jpg",
    alt: "Trịnh Tất Đạt tại công trường xây dựng - thay thế ảnh tại public/images/profile/about-1.svg",
  },
  {
    src: "/images/profile/me-2.jpg",
    alt: "Giám sát thi công móng sâu cao tầng - thay thế ảnh about-2.svg",
  },
  {
    src: "/images/profile/me-3.jpg",
    alt: "Đội ngũ quản lý dự án xây dựng - thay thế ảnh about-3.svg",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Giới thiệu"
          title="Về tôi"
          subtitle="Chuyên gia quản lý dự án xây dựng với kinh nghiệm sâu rộng trong lĩnh vực móng sâu và kết cấu hầm."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg leading-relaxed text-slate-300">{profile.summary}</p>
            <p className="mt-4 text-slate-400 leading-relaxed">{profile.summaryEn}</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-500">Ngày sinh</p>
                <p className="mt-1 font-medium text-white">{profile.dateOfBirth}</p>
              </div>
              <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-500">Quốc tịch</p>
                <p className="mt-1 font-medium text-white">{profile.nationality}</p>
              </div>
              <div className="col-span-2 rounded-xl border border-slate-700/50 bg-slate-800/30 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-500">Khu vực</p>
                <p className="mt-1 font-medium text-white">{profile.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="mb-4 text-xl font-bold text-white">Kỹ năng & Chuyên môn</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-lg border border-slate-600 bg-slate-800/50 px-3 py-2 text-sm text-slate-300 transition hover:border-amber-500/50 hover:text-amber-400"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <h3 className="mb-4 mt-8 text-xl font-bold text-white">Ngoại ngữ</h3>
            <div className="space-y-3">
              {profile.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between rounded-xl border border-slate-700/50 bg-slate-800/30 px-4 py-3"
                >
                  <span className="text-white">{lang.name}</span>
                  <span className="text-sm text-amber-400">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Photo gallery */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {aboutPhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-700/50"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
