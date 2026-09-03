"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Award,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Heart,
  Monitor,
  BookOpen,
  Target,
  Star,
  CheckCircle,
  Zap,
} from "lucide-react";

// Why Choose Us Features
const features = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "Industry-Recognized Certifications",
    description:
      "All our courses are certified and recognized by leading industry bodies and employers worldwide.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Mentors",
    description:
      "Learn from industry professionals with 10+ years of experience in their respective fields.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Flexible Learning",
    description:
      "Learn at your own pace with our flexible schedule and lifetime access to course materials.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Job Placement Support",
    description:
      "Get dedicated career support including resume building, interview prep, and job referrals.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Hands-On Projects",
    description:
      "Build a portfolio with real-world projects that showcase your skills to employers.",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Community Support",
    description:
      "Join a vibrant community of learners and alumni who support and motivate each other.",
    color: "from-pink-500 to-purple-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
];

// Additional Benefits
const benefits = [
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "95% Career Transition Rate",
    description: "Our graduates successfully transition to new careers",
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: "4.9/5 Student Satisfaction",
    description: "Based on 5,000+ student reviews",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "100+ Courses",
    description: "Wide range of industry-relevant programs",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Personalized Learning Paths",
    description: "Tailored to your career goals and skill level",
  },
];

// Numbers that prove our success
const successNumbers = [
  {
    number: "10K+",
    label: "Students Trained",
    icon: <Users className="h-5 w-5" />,
  },
  {
    number: "95%",
    label: "Placement Rate",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    number: "4.9/5",
    label: "Average Rating",
    icon: <Star className="h-5 w-5" />,
  },
  {
    number: "50+",
    label: "Industry Awards",
    icon: <Award className="h-5 w-5" />,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#faf9f7] to-white py-16 md:py-24">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#9d3526]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#c5a880]/5 blur-3xl" />
      
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
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold text-[#111111] md:text-4xl lg:text-5xl">
            Why{" "}
            <span className="bg-gradient-to-r from-[#c5a880] to-[#9d3526] bg-clip-text text-transparent">
              Doric Skills
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We go beyond traditional education to provide a transformative learning
            experience that sets you up for success.
          </p>
        </motion.div>

        {/* ============ Success Numbers ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mb-12"
        >
          {successNumbers.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg border border-[#c5a880]/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="rounded-full bg-[#9d3526]/10 p-2 text-[#9d3526]">
                {item.icon}
              </div>
              <div>
                <p className="text-lg font-bold text-[#111111]">{item.number}</p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ============ Features Grid ============ */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl border ${feature.borderColor} ${feature.bgColor} p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#9d3526]/10`}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div className={`relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 mt-4 text-lg font-bold text-[#111111] transition-colors duration-300 group-hover:text-[#9d3526]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-2 text-gray-600">
                {feature.description}
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#9d3526] to-[#c5a880] transition-all duration-500 group-hover:w-full" />

              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-r from-[#9d3526]/5 to-[#c5a880]/5 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>

        {/* ============ Additional Benefits ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl bg-gradient-to-br from-[#9d3526]/5 to-[#c5a880]/5 p-8 border border-[#c5a880]/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#111111]">
              What Makes Us{" "}
              <span className="text-[#9d3526]">Different</span>
            </h3>
            <p className="mt-2 text-gray-600">
              More reasons why students choose Doric Skills
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-start gap-3 rounded-2xl bg-white p-4 shadow-lg border border-[#c5a880]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="rounded-full bg-[#9d3526]/10 p-2 text-[#9d3526] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#9d3526] group-hover:text-white">
                  {benefit.icon}
                </div>
                <div>
                  <p className="font-semibold text-[#111111] group-hover:text-[#9d3526] transition-colors duration-300">
                    {benefit.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {benefit.description}
                  </p>
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
                Ready to Transform Your Career?
              </h3>
              <p className="mt-2 text-[#c5a880]">
                Join 10,000+ students who have already taken the leap
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/courses"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-[#9d3526] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20"
                >
                  Explore Courses
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
                >
                  Contact Us
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-white/80">10K+ Students</span>
                </div>
                <div className="h-4 w-px bg-white/20" />
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-white/80">4.9/5 Rating</span>
                </div>
                <div className="h-4 w-px bg-white/20" />
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-white/80">95% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}