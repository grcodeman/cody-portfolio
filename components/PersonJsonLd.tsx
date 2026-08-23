import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/site";

const WMU = {
  "@type": "CollegeOrUniversity",
  name: "Western Michigan University",
  url: "https://wmich.edu/",
};

const data = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      jobTitle: "IT and Software Developer",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}/pfp.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kalamazoo",
        addressRegion: "MI",
        addressCountry: "US",
      },
      sameAs: SOCIAL_LINKS,
      knowsAbout: [
        "Software Development",
        "IT Systems Administration",
        "Python",
        "TypeScript",
        "Next.js",
        "Flutter",
        "Active Directory",
        "Oracle EBS",
      ],
      alumniOf: [
        WMU,
        {
          "@type": "CollegeOrUniversity",
          name: "Grand Rapids Community College",
          url: "https://www.grcc.edu/",
        },
      ],
      worksFor: {
        "@type": "Organization",
        name: "WMU CAE Center",
        url: "https://wmich.edu/",
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "IT Graduate Manager",
        occupationLocation: {
          "@type": "City",
          name: "Kalamazoo, MI",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${SITE_NAME} Portfolio`,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
