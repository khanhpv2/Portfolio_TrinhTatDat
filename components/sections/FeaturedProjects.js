"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Dự án tiêu biểu"
          title="Công trình nổi bật"
          subtitle="12+ dự án cao tầng, metro, khách sạn và khu phức hợp trên khắp Việt Nam."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 transition hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5"
              onClick={() => setSelected(project)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} - ${project.scope} tại ${project.location}`}
                  fill
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute right-3 top-3 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold text-slate-950">
                  {project.year}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{project.location}</p>
                <p className="mt-3 line-clamp-2 text-sm text-slate-300">{project.scope}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-700/50 px-2 py-0.5 text-xs text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
