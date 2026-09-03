"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
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
  ChevronRight,
} from "lucide-react";

// Quick Links
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

// Resources
const resources = [
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
];

// Social Links
const socialLinks = [
  {
    icon: <Facebook className="h-5 w-5" />,
    label: "Facebook",
    href: "https://facebook.com",
    color: "bg-[#1877F2]",
  },
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
    icon: <Award className="h-5 w-5" />,
    label: "ISO Certified",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    label: "100% Secure",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    label: "Global Network",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    label: "10K+ Students",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate subscription
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#9d3526]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#c5a880]/5 blur-3xl" />
      
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* ============ Main Footer Content ============ */}
        <div className="py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* ======== Column 1 - Brand ======== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Logo */}
           <Link href="/" className="group inline-flex items-center">
  <Image
    src="/images/Doric skills logo png.png"
    alt="Doric Skills"
    width={180}
    height={60}
    className="h-auto w-[180px] object-contain"
    priority
  />
</Link>

              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                Transforming lives through quality education and skill development. 
                Building future leaders since 2018.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {trustBadges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 border border-white/10"
                  >
                    <span className="text-[#c5a880]">{badge.icon}</span>
                    <span className="text-xs text-gray-400">{badge.label}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-2 pt-2">
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
                    className={`group flex h-10 w-10 items-center justify-center rounded-xl ${social.color} text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ======== Column 2 - Quick Links ======== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 hover:text-[#c5a880] hover:translate-x-1"
                    >
                      <ChevronRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ======== Column 3 - Resources ======== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 hover:text-[#c5a880] hover:translate-x-1"
                    >
                      <ChevronRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ======== Column 4 - Newsletter ======== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                Newsletter
              </h4>
              <p className="text-sm text-gray-400">
                Subscribe to get updates about new courses and offers.
              </p>

              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 rounded-xl bg-green-500/10 p-4 border border-green-500/20"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-green-400">
                      Subscribed!
                    </p>
                    <p className="text-xs text-gray-400">
                      Thank you for subscribing.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-xl bg-white/5 px-4 py-3 pr-12 text-sm text-white placeholder-gray-500 transition-all duration-300 focus:border-[#c5a880] focus:outline-none focus:ring-2 focus:ring-[#c5a880]/20 border border-white/10"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="absolute right-1.5 top-1.5 rounded-lg bg-gradient-to-r from-[#9d3526] to-[#7a2a1e] p-2 text-white transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isLoading ? (
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    We respect your privacy. No spam ever.
                  </p>
                </form>
              )}

              {/* Contact Info */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone className="h-4 w-4 text-[#c5a880] flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail className="h-4 w-4 text-[#c5a880] flex-shrink-0" />
                  <span>info@doricskills.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 text-[#c5a880] flex-shrink-0" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ============ Bottom Bar ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-6"
        >
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div className="text-sm text-gray-400">
              &copy; {currentYear} Doric Skills. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 transition-colors duration-300 hover:text-[#c5a880]"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/terms"
                className="text-gray-400 transition-colors duration-300 hover:text-[#c5a880]"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/sitemap"
                className="text-gray-400 transition-colors duration-300 hover:text-[#c5a880]"
              >
                Sitemap
              </Link>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Heart className="h-4 w-4 text-[#9d3526]" />
              <span>Made with passion</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}