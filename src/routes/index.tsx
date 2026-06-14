import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shri Vishwakar Ayurved Super Speciality Hospital | Pure Health for Humanity" },
      { name: "description", content: "Authentic Panchakarma & Ayurvedic super speciality care. 100+ beds, 10,000+ patients treated, 15+ years of holistic healing. Book your consultation today." },
      { property: "og:title", content: "Shri Vishwakar Ayurved Super Speciality Hospital" },
      { property: "og:description", content: "Ancient Wisdom. Modern Care. Global Vision. Holistic Ayurvedic healing for body, mind & soul." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hospital",
          name: "Shri Vishwakar Ayurved Super Speciality Hospital",
          medicalSpecialty: ["Ayurveda", "Panchakarma", "Holistic Medicine"],
          telephone: "+91-90227-41538",
          slogan: "Pure Health for Humanity",
        }),
      },
    ],
  }),
  component: HomePage,
});
