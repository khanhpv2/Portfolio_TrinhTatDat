import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://trinhtatdat.dev"), // Replace with your domain
  title: {
    default: "Trịnh Tất Đạt | Project Manager - Xây dựng Dân dụng",
    template: "%s | Trịnh Tất Đạt",
  },
  description:
    "Portfolio của Trịnh Tất Đạt - Project Manager với 17+ năm kinh nghiệm thi công tường vây, cọc barrette, cọc đại trà tại các dự án cao tầng, metro và khách sạn tại Việt Nam.",
  keywords: [
    "Trịnh Tất Đạt",
    "Project Manager",
    "Giám đốc Dự án",
    "Xây dựng dân dụng",
    "Diaphragm Wall",
    "Tường vây",
    "Bachy Soletanche",
    "Civil Construction",
    "Foundation Works",
    "Vietnam Construction",
  ],
  authors: [{ name: "Trịnh Tất Đạt" }],
  creator: "Trịnh Tất Đạt",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://trinhtatdat.civil-engineer",
    siteName: "Trịnh Tất Đạt Portfolio",
    title: "Trịnh Tất Đạt | Civil Construction Project Manager",
    description:
      "17+ năm kinh nghiệm quản lý dự án xây dựng cao tầng, metro, khách sạn tại Việt Nam.",
    images: [
      {
        url: "/images/profile/dat.png",
        width: 800,
        height: 1000,
        alt: "Trịnh Tất Đạt - Project Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trịnh Tất Đạt | Project Manager",
    description: "Civil Construction Project Manager Portfolio",
    images: ["/images/profile/dat.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased"
        suppressHydrationWarning
      >
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
