export default function sitemap() {
  const baseUrl = "https://trinhtatdat.dev"; // Replace with your domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
