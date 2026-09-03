"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  MessageCircle,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Globe,
  Users,
  Award,
  Star,
} from "lucide-react";

// Contact Info
const contactInfo = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Visit Us",
    details: "123, Business Park, Mumbai, India - 400001",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Call Us",
    details: "+91 98765 43210",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email Us",
    details: "info@doricskills.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Working Hours",
    details: "Mon - Sat, 9:00 AM - 6:00 PM",
    color: "from-green-500 to-emerald-500",
  },
];

// Social Links
const socialLinks = [
  {
    icon: <Twitter className="h-5 w-5" />,
    label: "Twitter",
    href: "https://twitter.com",
    color: "bg-[#1DA1F2]",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "bg-[#0A66C2]",
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
    href: "https://instagram.com",
    color: "bg-gradient-to-r from-[#E4405F] to-[#F58529]",
  },
  {
    icon: <Youtube className="h-5 w-5" />,
    label: "YouTube",
    href: "https://youtube.com",
    color: "bg-[#FF0000]",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    label: "WhatsApp",
    href: "https://wa.me",
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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#faf9f7] py-16 md:py-24">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#9d3526]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#c5a880]/5 blur-3xl" />
      <div className="absolute right-10 top-20 h-40 w-40 rounded-full border border-[#c5a880]/10 bg-[#c5a880]/5 blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* ============ Section Header ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#9d3526]/10 px-4 py-1.5 text-sm font-semibold text-[#9d3526] mb-4">
            <Sparkles className="h-4 w-4" />
            Contact Us
          </span>
          <h2 className="text-3xl font-bold text-[#111111] md:text-4xl lg:text-5xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-[#c5a880] to-[#9d3526] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond within 24 hours.
          </p>
        </motion.div>

        {/* ============ Main Grid ============ */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* ======== Left - Contact Info ======== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-lg border border-[#c5a880]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`rounded-xl bg-gradient-to-r ${info.color} p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">
                    {info.title}
                  </p>
                  <p className="text-sm text-gray-600">{info.details}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="rounded-2xl bg-white p-6 shadow-lg border border-[#c5a880]/10">
              <h4 className="text-sm font-semibold text-[#111111] mb-4">
                Connect With Us
              </h4>
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
                    className={`group flex h-12 w-12 items-center justify-center rounded-xl ${social.color} text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
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
                  className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-lg border border-[#c5a880]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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

          {/* ======== Right - Contact Form ======== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-white p-6 md:p-8 shadow-2xl shadow-[#9d3526]/5 border border-[#c5a880]/10">
              <h3 className="text-2xl font-bold text-[#111111] mb-2">
                Send Us a{" "}
                <span className="text-[#9d3526]">Message</span>
              </h3>
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
                        className="w-full rounded-xl border border-[#c5a880]/20 px-4 py-3 text-gray-700 transition-all duration-300 focus:border-[#9d3526] focus:outline-none focus:ring-2 focus:ring-[#9d3526]/20"
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
                        className="w-full rounded-xl border border-[#c5a880]/20 px-4 py-3 text-gray-700 transition-all duration-300 focus:border-[#9d3526] focus:outline-none focus:ring-2 focus:ring-[#9d3526]/20"
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
                        className="w-full rounded-xl border border-[#c5a880]/20 px-4 py-3 text-gray-700 transition-all duration-300 focus:border-[#9d3526] focus:outline-none focus:ring-2 focus:ring-[#9d3526]/20"
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
                        className="w-full rounded-xl border border-[#c5a880]/20 px-4 py-3 text-gray-700 transition-all duration-300 focus:border-[#9d3526] focus:outline-none focus:ring-2 focus:ring-[#9d3526]/20"
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
                      rows={4}
                      className="w-full rounded-xl border border-[#c5a880]/20 px-4 py-3 text-gray-700 transition-all duration-300 focus:border-[#9d3526] focus:outline-none focus:ring-2 focus:ring-[#9d3526]/20 resize-none"
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
        </div>
      </div>
    </section>
  );
}