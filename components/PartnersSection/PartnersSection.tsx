"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Building2,
  Users,
  Award,
  Globe,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";

// Partner Data
const partners = [
  {
    id: 1,
    name: "Google",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&auto=format&fit=crop&q=60",
    category: "Tech Giant",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://images.unsplash.com/photo-1642132652861-471b60b5a4dc?w=200&auto=format&fit=crop&q=60",
    category: "Tech Giant",
  },
  {
    id: 3,
    name: "Amazon",
    logo: "https://images.unsplash.com/photo-1523474253046-036cd0452b9c?w=200&auto=format&fit=crop&q=60",
    category: "Tech Giant",
  },
  {
    id: 4,
    name: "Apple",
    logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200&auto=format&fit=crop&q=60",
    category: "Tech Giant",
  },
  {
    id: 5,
    name: "Meta",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&auto=format&fit=crop&q=60",
    category: "Tech Giant",
  },
  {
    id: 6,
    name: "IBM",
    logo: "https://images.unsplash.com/photo-1578587018454-35bb76db8863?w=200&auto=format&fit=crop&q=60",
    category: "Tech Giant",
  },
  {
    id: 7,
    name: "Accenture",
    logo: "https://images.unsplash.com/photo-1578587018454-35bb76db8863?w=200&auto=format&fit=crop&q=60",
    category: "Consulting",
  },
  {
    id: 8,
    name: "TCS",
    logo: "https://images.unsplash.com/photo-1578587018454-35bb76db8863?w=200&auto=format&fit=crop&q=60",
    category: "Consulting",
  },
];

// Client Success Stories
const successStories = [
  {
    id: 1,
    company: "Google",
    achievement: "Hired 50+ Doric Skills graduates in 2024",
    icon: "🏆",
  },
  {
    id: 2,
    company: "Microsoft",
    achievement: "Partnership for Azure certification program",
    icon: "🚀",
  },
  {
    id: 3,
    company: "Amazon",
    achievement: "AWS training partnership since 2022",
    icon: "☁️",
  },
  {
    id: 4,
    company: "TCS",
    achievement: "Preferred training partner for 10,000+ employees",
    icon: "💼",
  },
];

// Trust Metrics
const metrics = [
  {
    icon: <Building2 className="h-5 w-5" />,
    number: "500+",
    label: "Corporate Partners",
  },
  {
    icon: <Users className="h-5 w-5" />,
    number: "10,000+",
    label: "Students Placed",
  },
  {
    icon: <Award className="h-5 w-5" />,
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    number: "30+",
    label: "Countries Served",
  },
];

export default function PartnersSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#faf9f7] py-16 md:py-24">
      {/* Decorative Background */}
      <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#9d3526]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#c5a880]/5 blur-3xl" />
      
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
            Our Partners
          </span>
          <h2 className="text-3xl font-bold text-[#111111] md:text-4xl lg:text-5xl">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#c5a880] to-[#9d3526] bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We collaborate with the world's leading companies to provide
            industry-relevant training and placement opportunities.
          </p>
        </motion.div>

        {/* ============ Trust Metrics ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mb-12"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg border border-[#c5a880]/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="rounded-full bg-[#9d3526]/10 p-2 text-[#9d3526]">
                {metric.icon}
              </div>
              <div>
                <p className="text-lg font-bold text-[#111111]">{metric.number}</p>
                <p className="text-xs text-gray-500">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ============ Partner Logos Grid ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg border border-[#c5a880]/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#9d3526]/10"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9d3526]/5 to-[#c5a880]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Logo Image */}
              <div className="relative z-10 mx-auto h-16 w-16 md:h-20 md:w-20">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Partner Name */}
              <p className="relative z-10 mt-3 text-center text-sm font-semibold text-[#111111] group-hover:text-[#9d3526] transition-colors duration-300">
                {partner.name}
              </p>
              <p className="relative z-10 text-center text-xs text-gray-500">
                {partner.category}
              </p>

              {/* Decorative Border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#9d3526] to-[#c5a880] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* ============ Success Stories ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#111111] md:text-3xl">
              Our{" "}
              <span className="text-[#9d3526]">Success Stories</span>
            </h3>
            <p className="mt-2 text-gray-600">
              Building meaningful partnerships that create real impact
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl bg-white p-6 shadow-lg border border-[#c5a880]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="text-3xl mb-3">{story.icon}</div>
                
                {/* Company Name */}
                <p className="font-bold text-[#111111] group-hover:text-[#9d3526] transition-colors duration-300">
                  {story.company}
                </p>
                
                {/* Achievement */}
                <p className="mt-1 text-sm text-gray-600">
                  {story.achievement}
                </p>

                {/* Checkmark */}
                <div className="absolute right-4 top-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ============ CTA Section ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#9d3526] to-[#7a2a1e] p-8 md:p-12 shadow-2xl shadow-[#9d3526]/30">
            {/* Decorative Elements */}
            <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Ready to Partner with Us?
              </h3>
              <p className="mt-2 text-[#c5a880]">
                Join our network of 500+ corporate partners worldwide
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-[#9d3526] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20"
                >
                  Partner With Us
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
                >
                  Learn More
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-white/80">4.9/5 Rating</span>
                </div>
                <div className="h-4 w-px bg-white/20" />
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-white/80">98% Success</span>
                </div>
                <div className="h-4 w-px bg-white/20" />
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-white/80">10K+ Students</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}