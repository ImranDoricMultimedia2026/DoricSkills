// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Doric Skills - Premier Training Institute | Courses & Certification",
  description:
    "Doric Skills offers industry-leading courses in Web Development, Mobile Apps, UI/UX Design, Data Science, Cloud Computing, and Cybersecurity. Join 10,000+ successful students.",
  keywords:
    "training institute, web development courses, app development, UI/UX design, data science, cloud computing, cybersecurity, certification, career training",
  authors: [{ name: "Doric Skills" }],
  openGraph: {
    title: "Doric Skills - Premier Training Institute",
    description:
      "Transform your career with industry-leading courses. 95% success rate, 10,000+ students trained.",
    url: "https://doricskills.com/",
    siteName: "Doric Skills",
    images: [
      {
        url: "https://doricskills.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Doric Skills - Premier Training Institute",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doric Skills - Premier Training Institute",
    description:
      "Transform your career with industry-leading courses. 95% success rate, 10,000+ students trained.",
    images: ["https://doricskills.com/images/twitter-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ============================================
            SCHEMA 1: ORGANIZATION SCHEMA
            ============================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Doric Skills",
              "url": "https://doricskills.com/",
              "logo": "https://doricskills.com/images/logo.png",
              "description": "Doric Skills is a premier training institute offering industry-leading courses in Web Development, Mobile Apps, UI/UX Design, Data Science, Cloud Computing, and Cybersecurity.",
              "foundingDate": "2018",
              "numberOfEmployees": 50,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9876543210",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/doricskills",
                "https://www.instagram.com/doricskills",
                "https://in.linkedin.com/company/doricskills",
                "https://twitter.com/doricskills",
                "https://www.youtube.com/doricskills"
              ]
            })
          }}
        />

        {/* ============================================
            SCHEMA 2: LOCAL BUSINESS SCHEMA
            ============================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Doric Skills",
              "image": "https://doricskills.com/images/logo.png",
              "url": "https://doricskills.com/",
              "telephone": "+91-9876543210",
              "email": "info@doricskills.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "First Floor, Gulati Market, Hargobind Marg, Near CMC Chowk",
                "addressLocality": "Ludhiana",
                "addressRegion": "Punjab",
                "postalCode": "141008",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "30.900965",
                "longitude": "75.857275"
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500"
              }
            })
          }}
        />

        {/* ============================================
            SCHEMA 3: WEBSITE SCHEMA
            ============================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Doric Skills",
              "url": "https://doricskills.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://doricskills.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}