import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-white">{profile.fullName}</p>
            <p className="text-sm text-slate-400">
              {profile.position} · {profile.yearsOfExperience}+ năm kinh nghiệm
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-amber-400"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={profile.social.email}
              className="text-slate-400 transition hover:text-amber-400"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {year} {profile.fullName}. Civil Construction Project Manager Portfolio.
        </div>
      </div>
    </footer>
  );
}
