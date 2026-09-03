import HeroSection from "@/components/HeroSection/HeroSection";
import StatsSection from "@/components/StatsSection/StatsSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection/WhyChooseUsSection";
import Services from "@/components/Services/Services";
import CoursesSection from "@/components/CoursesSection/CoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection/PartnersSection";
import ContactSection from "@/components/ContactSection/ContactSection";

/* =========================================================
   FAQ SCHEMA
========================================================= */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What courses does Doric Skills offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Doric Skills offers a wide range of courses including Full Stack Web Development, Mobile App Development, UI/UX Design, Data Science & Analytics, Cloud Architecture & DevOps, and Cybersecurity Essentials.",
      },
    },
    {
      "@type": "Question",
      name: "Are the courses at Doric Skills certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all courses at Doric Skills are industry-recognized and certified.",
      },
    },
    {
      "@type": "Question",
      name: "Does Doric Skills provide job placement support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Doric Skills provides job placement support including resume building, interview preparation, portfolio development, and career guidance.",
      },
    },
    {
      "@type": "Question",
      name: "How long are the courses at Doric Skills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our courses generally range from 8 to 14 weeks depending on the program.",
      },
    },
    {
      "@type": "Question",
      name: "Is there any prerequisite for joining courses at Doric Skills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prerequisites vary by course. We offer programs for beginners, intermediate, and advanced learners.",
      },
    },
    {
      "@type": "Question",
      name: "What is the success rate of students at Doric Skills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Doric Skills has a 95% career transition success rate.",
      },
    },
    {
      "@type": "Question",
      name: "Does Doric Skills offer online courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our courses are available online with flexible learning options.",
      },
    },
    {
      "@type": "Question",
      name: "How can I enroll in a course at Doric Skills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can enroll by visiting our Courses page and selecting your desired course, or by contacting Doric Skills directly.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Doric Skills different from other training institutes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Doric Skills focuses on expert mentors, hands-on projects, industry-relevant training, personalized learning, and career support.",
      },
    },
  ],
};

/* =========================================================
   BREADCRUMB SCHEMA
========================================================= */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://doricskills.com/",
    },
  ],
};

/* =========================================================
   WEBSITE SCHEMA
========================================================= */

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Doric Skills",
  url: "https://doricskills.com/",
  description:
    "Doric Skills is a premier training institute offering industry-leading courses in Web Development, Mobile Apps, UI/UX Design, Data Science, Cloud Computing, and Cybersecurity.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://doricskills.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

/* =========================================================
   ORGANIZATION SCHEMA
========================================================= */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Doric Skills",
  image: "https://doricskills.com/images/logo.png",
  url: "https://doricskills.com/",
  telephone: "+91-9876543210",
  email: "info@doricskills.com",

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "First Floor, Gulati Market, Hargobind Marg, Near CMC Chowk",
    addressLocality: "Ludhiana",
    addressRegion: "Punjab",
    postalCode: "141008",
    addressCountry: "IN",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.900965",
    longitude: "75.857275",
  },

  openingHours: "Mo-Sa 09:00-18:00",

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
};

/* =========================================================
   COURSE SCHEMA
========================================================= */

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Full Stack Web Development",
        description:
          "Master MERN stack with real-world projects and expert mentorship.",
        provider: {
          "@type": "Organization",
          name: "Doric Skills",
        },
        offers: {
          "@type": "Offer",
          price: "499",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "200",
        },
      },
    },

    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Mobile App Development",
        description:
          "Build native and cross-platform mobile applications for iOS and Android.",
        provider: {
          "@type": "Organization",
          name: "Doric Skills",
        },
        offers: {
          "@type": "Offer",
          price: "449",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "150",
        },
      },
    },

    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "UI/UX Design Masterclass",
        description:
          "Learn UI/UX design principles, Figma, Adobe XD, and prototyping.",
        provider: {
          "@type": "Organization",
          name: "Doric Skills",
        },
        offers: {
          "@type": "Offer",
          price: "399",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.7",
          reviewCount: "120",
        },
      },
    },

    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Course",
        name: "Data Science & Analytics",
        description:
          "Master data analysis, machine learning, and AI with hands-on projects.",
        provider: {
          "@type": "Organization",
          name: "Doric Skills",
        },
        offers: {
          "@type": "Offer",
          price: "599",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "100",
        },
      },
    },

    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Course",
        name: "Cloud Architecture & DevOps",
        description:
          "Master cloud platforms and modern DevOps practices.",
        provider: {
          "@type": "Organization",
          name: "Doric Skills",
        },
        offers: {
          "@type": "Offer",
          price: "549",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "80",
        },
      },
    },

    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Course",
        name: "Cybersecurity Essentials",
        description:
          "Learn network security, penetration testing, and cybersecurity fundamentals.",
        provider: {
          "@type": "Organization",
          name: "Doric Skills",
        },
        offers: {
          "@type": "Offer",
          price: "449",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.6",
          reviewCount: "60",
        },
      },
    },
  ],
};

/* =========================================================
   HOME PAGE
========================================================= */

export default function Home() {
  return (
    <>
      {/* =======================================================
          STRUCTURED DATA
      ======================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      {/* =======================================================
          PREMIUM HOMEPAGE
      ======================================================== */}

      <main className="relative overflow-hidden bg-[#f7f4ef] text-[#171513]">

        {/* =====================================================
            01. HERO
        ====================================================== */}

        <section
          id="home"
          className="relative"
        >
          <HeroSection />
        </section>


       


        {/* =====================================================
            03. ABOUT DORIC SKILLS
        ====================================================== */}

        <section
          id="about"
          className="relative overflow-hidden bg-[#f7f4ef]"
        >
          <AboutSection />
        </section>

 {/* =====================================================
            02. STATS / IMPACT
        ====================================================== */}

        <section
          id="impact"
          className="relative z-10 bg-[#f7f4ef]"
        >
          <StatsSection />
        </section>

        {/* =====================================================
            04. WHY CHOOSE DORIC SKILLS
        ====================================================== */}

        <section
          id="why-doric"
          className="relative overflow-hidden bg-white"
        >
          <WhyChooseUsSection />
        </section>


        {/* =====================================================
            05. TRAINING PROGRAMS / SERVICES
        ====================================================== */}

        <section
          id="services"
          className="relative overflow-hidden bg-white"
        >
          {/* Section transition */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c5a880]/30 to-transparent" />

          <Services />
        </section>


        {/* =====================================================
            06. FEATURED COURSES
        ====================================================== */}

        <section
          id="courses"
          className="relative overflow-hidden bg-[#f7f4ef]"
        >
          <CoursesSection />
        </section>


        {/* =====================================================
            07. STUDENT TESTIMONIALS
        ====================================================== */}

        <section
          id="testimonials"
          className="relative overflow-hidden bg-[#171513]"
        >
          <TestimonialsSection />
        </section>


        {/* =====================================================
            08. INDUSTRY PARTNERS
        ====================================================== */}

        <section
          id="partners"
          className="relative overflow-hidden bg-[#f7f4ef]"
        >
          <PartnersSection />
        </section>


        {/* =====================================================
            09. FINAL CTA / CONTACT
        ====================================================== */}

        <section
          id="contact"
          className="relative overflow-hidden bg-[#171513]"
        >
          <ContactSection />
        </section>

      </main>
    </>
  );
}