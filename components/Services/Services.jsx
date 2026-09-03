"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Palette,
  BarChart3,
  Cloud,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Web Development",
    description:
      "Full-stack web development with modern frameworks and technologies.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    hoverColor: "hover:shadow-blue-500/10",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "App Development",
    description:
      "Native and cross-platform mobile app development for iOS and Android.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    hoverColor: "hover:shadow-purple-500/10",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Design",
    description:
      "Beautiful, user-friendly designs that convert visitors into customers.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    hoverColor: "hover:shadow-orange-500/10",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Data Science",
    description:
      "Data analytics, machine learning, and AI solutions for businesses.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    hoverColor: "hover:shadow-green-500/10",
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Computing",
    description:
      "Cloud infrastructure, DevOps, and scalable solutions for modern businesses.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    hoverColor: "hover:shadow-indigo-500/10",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Cyber Security",
    description:
      "Protect your digital assets with our comprehensive security training.",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    hoverColor: "hover:shadow-red-500/10",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#faf9f7] to-white py-16 md:py-24">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 h-[600px] w-[600px] rounded-full bg-[#9d3526]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#c5a880]/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#9d3526]/10 px-4 py-1.5 text-sm font-semibold text-[#9d3526] mb-4">
            <Sparkles className="h-4 w-4" />
            What We Offer
          </span>
          <h2 className="text-3xl font-bold text-[#111111] md:text-4xl lg:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#c5a880] to-[#9d3526] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Comprehensive training programs designed to help you succeed in
            today's competitive job market.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl border ${service.borderColor} ${service.bgColor} p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${service.hoverColor} hover:border-[#c5a880]/30`}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9d3526]/5 to-[#c5a880]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon with Gradient */}
              <div className={`relative z-10 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${service.color} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-[#111111] transition-colors duration-300 group-hover:text-[#9d3526]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-2 text-gray-600">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link
                href="/services"
                className="relative z-10 mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#9d3526] transition-all duration-300 hover:gap-3 group/link"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#9d3526] to-[#c5a880] transition-all duration-500 group-hover:w-full" />

              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-r from-[#9d3526]/5 to-[#c5a880]/5 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9d3526] to-[#7a2a1e] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#9d3526]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#9d3526]/50"
          >
            View All Services
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 rounded-3xl bg-white/50 p-8 backdrop-blur-sm border border-[#c5a880]/10"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[#111111]">100% Satisfaction</p>
              <p className="text-sm text-gray-500">Guaranteed results</p>
            </div>
          </div>

          <div className="h-12 w-px bg-gray-200" />

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[#111111]">Expert Trainers</p>
              <p className="text-sm text-gray-500">Industry professionals</p>
            </div>
          </div>

          <div className="h-12 w-px bg-gray-200" />

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[#111111]">Certified Programs</p>
              <p className="text-sm text-gray-500">Industry recognized</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}