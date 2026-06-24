"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Liên hệ"
          title="Kết nối với tôi"
          subtitle="Sẵn sàng thảo luận về cơ hội hợp tác, dự án xây dựng hoặc tư vấn kỹ thuật."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                Họ và tên
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                Nội dung
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                placeholder="Mô tả dự án hoặc yêu cầu của bạn..."
              />
            </div>
            <Button variant="primary" type="submit" className="w-full sm:w-auto">
              Gửi tin nhắn
            </Button>
            {status === "success" && (
              <p className="text-sm text-green-400">
                Cảm ơn bạn! Tin nhắn đã được ghi nhận. (Demo — kết nối API email thật khi deploy)
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6">
              <h3 className="font-bold text-white">Thông tin liên hệ</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>
                  <span className="text-slate-500">Email: </span>
                  <a href={profile.social.email} className="hover:text-amber-400 transition">
                    {profile.email}
                  </a>
                </li>
                <li>
                  <span className="text-slate-500">Điện thoại: </span>
                  {profile.phone}
                </li>
                <li>
                  <span className="text-slate-500">Khu vực: </span>
                  {profile.location}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6">
              <h3 className="font-bold text-white">Mạng xã hội</h3>
              <div className="mt-4 flex gap-3">
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300 transition hover:border-amber-500 hover:text-amber-400"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.social.email}
                  className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300 transition hover:border-amber-500 hover:text-amber-400"
                >
                  Email
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6">
              <h3 className="mb-4 font-bold text-white">QR Code liên hệ</h3>
              {/* Replace: upload QR code to /public/images/contact/qr-code.svg */}
              <div className="relative h-40 w-40 overflow-hidden rounded-xl border border-slate-600">
                <Image
                  src="/images/contact/qr-code.svg"
                  alt="QR Code liên hệ Trịnh Tất Đạt - thay thế bằng mã QR thật"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <p className="mt-3 text-center text-xs text-slate-500">
                Quét mã để lưu thông tin liên hệ
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
