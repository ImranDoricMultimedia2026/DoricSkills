"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  MessageCircle,
  Globe,
  Award,
  Shield,
  Heart,
  ChevronDown,
  ChevronUp,
  User,
  Users,
  Building2,
  Calendar,
  Star,
} from "lucide-react";

// Contact Info
const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Us",
    details: "First Floor, Gulati Market, Hargobind Marg, Near CMC Chowk, Ludhiana 141008",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    details: "+91-9888696300",
    subDetails: "Mon-Sat, 9:00 AM - 6:00 PM",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    details: "mail@doricmultimedia.com",
    subDetails: "We respond within 24 hours",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Working Hours",
    details: "Monday - Saturday",
    subDetails: "9:00 AM - 6:00 PM",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
];

// Social Links
const socialLinks = [
  {
    icon: <Facebook className="h-5 w-5" />,
    label: "Facebook",
    href: "https://www.facebook.com/doricmultimedialdh/",
    color: "bg-[#1877F2]",
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    label: "Twitter",
    href: "https://twitter.com/doricskills",
    color: "bg-[#1DA1F2]",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/doric-multimedia-priv-limited",
    color: "bg-[#0A66C2]",
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
    href: "https://www.instagram.com/doricmultimedia/",
    color: "bg-gradient-to-r from-[#E4405F] to-[#F58529]",
  },
  {
    icon: <Youtube className="h-5 w-5" />,
    label: "YouTube",
    href: "https://www.youtube.com/doricskills",
    color: "bg-[#FF0000]",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    label: "WhatsApp",
    href: "https://wa.me/919886966300",
    color: "bg-[#25D366]",
  },
];

// Trust Badges
const trustBadges = [
  {
    icon: <Users className="h-5 w-5" />,
    number: "10K+",
    label: "Students Trained",
  },
  {
    icon: <Star className="h-5 w-5" />,
    number: "4.9/5",
    label: "Average Rating",
  },
  {
    icon: <Award className="h-5 w-5" />,
    number: "50+",
    label: "Industry Awards",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    number: "30+",
    label: "Countries Served",
  },
];

// FAQs
const faqs = [
  {
    question: "How can I enroll in a course?",
    answer:
      "You can enroll by visiting our website and selecting your desired course. Alternatively, you can contact us directly at +91-9888696300 or email us at mail@doricmultimedia.com.",
  },
  {
    question: "What are the course fees?",
    answer:
      "Course fees vary depending on the program. Please contact our team for detailed pricing information and available payment plans.",
  },
  {
    question: "Do you offer online courses?",
    answer:
      "Yes, all our courses are available online with flexible learning options. You can learn from anywhere in the world with our expert instructors.",
  },
  {
    question: "What is the duration of courses?",
    answer:
      "Our courses range from 8 to 14 weeks depending on the program. We offer flexible learning options including part-time and full-time schedules.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Yes, all courses at Doric Skills are industry-recognized and certified. Our certificates are valued by top companies worldwide.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ============================================
          SCHEMA: CONTACT PAGE
          ============================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Doric Skills",
            "description": "Get in touch with Doric Skills. We're here to help you with your learning journey.",
            "url": "https://doricskills.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Doric Skills",
              "telephone": "+91-9888696300",
              "email": "mail@doricmultimedia.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "First Floor, Gulati Market, Hargobind Marg, Near CMC Chowk",
                "addressLocality": "Ludhiana",
                "addressRegion": "Punjab",
                "postalCode": "141008",
                "addressCountry": "IN"
              }
            }
          })
        }}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#9d3526] via-[#8c3023] to-[#6f241b] pt-32 pb-20 md:pt-40 md:pb-28" style={{marginTop:"70px"}}>
        <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#c5a880]/10 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#c5a880]/20 px-4 py-1.5 text-sm font-semibold text-[#c5a880] mb-4">
              <Sparkles className="h-4 w-4" />
              Get in Touch
            </span>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Let's{" "}
              <span className="bg-gradient-to-r from-[#c5a880] to-[#f5e6d3] bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Have questions? We'd love to hear from you. Reach out to us and
              we'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          CONTACT INFO CARDS
          ============================================ */}
      <section className="relative -mt-10 z-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group rounded-2xl ${info.bgColor} p-6 border ${info.borderColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#9d3526]/10`}
              >
                <div className={`inline-flex rounded-xl bg-gradient-to-r ${info.color} p-3 text-white shadow-lg transition-all duration-500 group-hover:scale-110`}>
                  {info.icon}
                </div>
                <h3 className="mt-4 font-semibold text-[#111111]">
                  {info.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{info.details}</p>
                {info.subDetails && (
                  <p className="text-xs text-gray-500 mt-1">{info.subDetails}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          MAIN CONTENT - FORM + MAP
          ============================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* ======== LEFT - Contact Form ======== */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl bg-[#faf9f7] p-6 md:p-8 border border-[#c5a880]/10">
                <h2 className="text-2xl font-bold text-[#111111] mb-2">
                  Send Us a{" "}
                  <span className="text-[#9d3526]">Message</span>
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Fill in the form below and we'll get back to you soon.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center rounded-2xl bg-green-50 p-8 border border-green-200"
                  >
                    <div className="rounded-full bg-green-100 p-3">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="mt-4 text-xl font-bold text-green-700">
                      Message Sent!
                    </h4>
                    <p className="mt-1 text-sm text-green-600 text-center">
                      Thank you for reaching out. We'll respond within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-[#c5a880]/20 bg-white px-4 py-3 text-gray-700 transition-all duration-300 focus:border-[#9d3526] focus:outline-none focus:ring-2 focus:ring-[#9d3526]/20"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-[#c5a880]/20 bg-white px-4 py-3 text-gray-700 transition-all duration-300 focus:border-[#9d3526] focus:outline-none focus:ring-2 focus:ring-[#9d3526]/20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-[#c5a880]/20 bg-white px-4 py-3 text-gray-700 transition-all duration-300 focus:border-[#9d3526] focus:outline-none focus:ring-2 focus:ring-[#9d3526]/20"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-[#c5a880]/20 bg-white px-4 py-3 text-gray-700 transition-all duration-300 focus:border-[#9d3526] focus:outline-none focus:ring-2 focus:ring-[#9d3526]/20"
                          placeholder="Course Inquiry"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full rounded-xl border border-[#c5a880]/20 bg-white px-4 py-3 text-gray-700 transition-all duration-300 focus:border-[#9d3526] focus:outline-none focus:ring-2 focus:ring-[#9d3526]/20 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#9d3526] to-[#7a2a1e] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#9d3526]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#9d3526]/50 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-gray-500">
                      We respect your privacy. Your information is safe with us.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* ======== RIGHT - Map & Info ======== */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="overflow-hidden rounded-3xl shadow-xl border border-[#c5a880]/10">
                <div className="relative h-64 md:h-72 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.456789012345!2d75.857275!3d30.900965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU0JzAzLjUiTiA3NcKwNTEnMjYuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                    title="Doric Skills Location"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-3xl bg-[#faf9f7] p-6 border border-[#c5a880]/10">
                <h3 className="text-sm font-semibold text-[#111111] mb-4">
                  Connect With Us
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className={`group flex h-12 w-12 items-center justify-center rounded-xl ${social.color} text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-110`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 rounded-xl bg-[#faf9f7] p-3 border border-[#c5a880]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="rounded-full bg-[#9d3526]/10 p-1.5 text-[#9d3526]">
                      {badge.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#111111]">
                        {badge.number}
                      </p>
                      <p className="text-xs text-gray-500">{badge.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      <section className="relative overflow-hidden bg-[#faf9f7] py-16 md:py-24">
        <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#9d3526]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#c5a880]/5 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#9d3526]/10 px-4 py-1.5 text-sm font-semibold text-[#9d3526] mb-4">
              <Sparkles className="h-4 w-4" />
              FAQ's
            </span>
            <h2 className="text-3xl font-bold text-[#111111] md:text-4xl">
              Frequently Asked{" "}
              <span className="text-[#9d3526]">Questions</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Find answers to common questions about our courses, enrollment,
              and more.
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white shadow-lg border border-[#c5a880]/10 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-[#faf9f7]"
                >
                  <span className="font-semibold text-[#111111]">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-[#9d3526]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#9d3526] to-[#7a2a1e] py-16 md:py-20">
        <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to Start Your{" "}
              <span className="text-[#c5a880]">Journey</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#c5a880]">
              Join 10,000+ students who have already transformed their careers
              with Doric Skills.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/courses"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-[#9d3526] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20"
              >
                Explore Courses
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}