"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400">
            Civil Construction · Foundation Works
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {profile.fullName}
          </h1>
          <p className="mt-2 text-xl text-amber-400 md:text-2xl">{profile.position}</p>
          <p className="mt-1 text-lg text-slate-400">{profile.positionVi}</p>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50">
              <span className="text-2xl font-bold text-amber-400">
                {profile.yearsOfExperience}+
              </span>
            </div>
            <div>
              <p className="font-semibold text-white">Năm kinh nghiệm</p>
              <p className="text-sm text-slate-400">Xây dựng dân dụng & hạ tầng</p>
            </div>
          </div>

          <p className="mt-6 max-w-lg text-slate-400 leading-relaxed">
            {profile.summaryEn}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={profile.cvPath} download variant="primary">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Tải CV
            </Button>
            <Button href="#contact" variant="secondary">
              Liên hệ ngay
            </Button>
          </div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-700/50 shadow-2xl shadow-amber-500/10">
            {/* Replace: upload real photo to /public/images/profile/dat.png */}
            <Image
              src="/images/profile/dat.png"
              alt={`Ảnh chân dung ${profile.fullName} - Project Manager xây dựng dân dụng`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 backdrop-blur">
            <p className="text-xs text-slate-400">Hiện tại</p>
            <p className="font-semibold text-white">Bachy Soletanche Vietnam</p>
          </div>
          <div className="absolute -right-4 -top-4 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 backdrop-blur">
            <p className="text-2xl font-bold text-amber-400">25+</p>
            <p className="text-xs text-slate-300">Dự án</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
