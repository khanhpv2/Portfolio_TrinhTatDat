"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
      >
        <div className="relative aspect-video w-full">
          <Image
            src={project.image}
            alt={`${project.name} - ${project.location}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              <p className="mt-1 text-slate-400">{project.location}</p>
            </div>
            <span className="rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400">
              {project.year}
            </span>
          </div>

          <p className="mb-6 text-slate-300">{project.description}</p>

          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-800/50 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">Phạm vi</p>
              <p className="mt-1 text-sm text-white">{project.scope}</p>
            </div>
            <div className="rounded-xl bg-slate-800/50 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">Vai trò</p>
              <p className="mt-1 text-sm text-white">{project.details.role}</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
              Công nghệ / Kỹ thuật
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-600 bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.details.achievements?.length > 0 && (
            <div>
              <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
                Thành tựu
              </p>
              <ul className="space-y-2">
                {project.details.achievements.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur transition hover:bg-slate-800"
          aria-label="Đóng modal"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}
