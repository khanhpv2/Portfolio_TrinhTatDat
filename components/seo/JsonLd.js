import { profile } from "@/data/profile";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    alternateName: profile.fullNameEn,
    jobTitle: profile.position,
    description: profile.summaryEn,
    nationality: profile.nationality,
    knowsAbout: profile.skills,
    url: "https://trinhtatdat.dev",
    sameAs: [profile.social.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
