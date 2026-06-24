"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryImages, galleryCategories } from "@/data/gallery";

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="relative bg-slate-900/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Thư viện ảnh"
          title="Hình ảnh công trường"
          subtitle="Công trường, thiết bị thi công và đội ngũ — thay thế bằng ảnh thật trong public/images/gallery/"
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                activeCategory === cat.id
                  ? "bg-amber-500 text-slate-950"
                  : "border border-slate-600 text-slate-300 hover:border-amber-500 hover:text-amber-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="mb-4 break-inside-avoid"
            >
              <div className="group relative overflow-hidden rounded-2xl border border-slate-700/50">
                <div
                  className={`relative w-full ${
                    image.height === "tall"
                      ? "aspect-[3/4]"
                      : image.height === "short"
                        ? "aspect-[4/3]"
                        : "aspect-square"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <p className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
                    {image.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
