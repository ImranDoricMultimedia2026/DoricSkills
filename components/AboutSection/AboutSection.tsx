"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Target,
  Heart,
  Users,
  ArrowRight,
  Sparkles,
  Quote,
  CheckCircle,
  Calendar,
  Globe,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: <Users className="h-5 w-5" />,
    number: "10K+",
    label: "Students Trained",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    number: "30+",
    label: "Countries Served",
  },
  {
    icon: <Star className="h-5 w-5" />,
    number: "4.9",
    label: "Average Rating",
  },
  {
    icon: <Award className="h-5 w-5" />,
    number: "50+",
    label: "Industry Awards",
  },
];

const values = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Integrity",
    description: "We believe in transparency and honesty.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaboration",
    description: "We work together to achieve great results.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Innovation",
    description: "We embrace new ideas and technologies.",
    color: "from-orange-500 to-yellow-500",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Founded",
    description: "Started our journey with a small team.",
    icon: "🚀",
  },
  {
    year: "2020",
    title: "1000 Students",
    description: "Reached our first 1000 students.",
    icon: "🎯",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded to 30+ countries.",
    icon: "🌍",
  },
  {
    year: "2024",
    title: "50+ Awards",
    description: "Recognized for excellence.",
    icon: "🏆",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Decorative Background Elements */}
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
            About Us
          </span>
          <h2 className="text-3xl font-bold text-[#111111] md:text-4xl lg:text-5xl">
            Empowering{" "}
            <span className="bg-gradient-to-r from-[#c5a880] to-[#9d3526] bg-clip-text text-transparent">
              Future Leaders
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We are passionate about transforming lives through quality education
            and skill development.
          </p>
        </motion.div>

        {/* ============ Main Content Grid ============ */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT - Image with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#9d3526]/10 border-2 border-[#c5a880]/20">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60"
                alt="About Doric Skills"
                width={600}
                height={500}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#9d3526]/20 via-transparent to-transparent" />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
            </div>

            {/* Floating Badge 1 */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 z-20 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-sm border border-[#c5a880]/30"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#9d3526]/10 p-2">
                  <Award className="h-5 w-5 text-[#9d3526]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111111]">Certified</p>
                  <p className="text-xs text-gray-500">ISO 9001:2024</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 z-20 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-sm border border-[#c5a880]/30"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-[#9d3526]/30 to-[#c5a880]/30"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111111]">10K+ Alumni</p>
                  <p className="text-xs text-gray-500">Global Network</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Circles */}
            <div className="absolute -bottom-10 -right-10 z-0 h-48 w-48 rounded-full border border-[#c5a880]/20 bg-gradient-to-r from-[#9d3526]/10 to-[#c5a880]/10 blur-3xl" />
          </motion.div>

          {/* RIGHT - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#111111] md:text-3xl">
                Transforming Lives Through{" "}
                <span className="text-[#9d3526]">Quality Education</span>
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                At Doric Skills, we believe that everyone deserves access to
                quality education. Since 2018, we have been committed to
                providing industry-relevant training that helps individuals
                build successful careers.
              </p>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Our expert trainers, comprehensive curriculum, and hands-on
                approach ensure that our students are job-ready from day one.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 rounded-2xl bg-[#faf9f7] p-4 border border-[#c5a880]/10 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="rounded-full bg-[#9d3526]/10 p-2 text-[#9d3526]">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[#111111]">
                      {stat.number}
                    </p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-3 rounded-xl bg-white p-3 border border-[#c5a880]/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className={`rounded-full bg-gradient-to-r ${value.color} p-2 text-white`}>
                    {value.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111111] group-hover:text-[#9d3526]">
                      {value.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9d3526] to-[#7a2a1e] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#9d3526]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#9d3526]/50"
              >
                Learn More About Us
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

  

        {/* ============ Trust Badges ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 rounded-3xl bg-gradient-to-r from-[#faf9f7] to-white p-8 border border-[#c5a880]/10"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
              <Star className="h-6 w-6 text-yellow-600 fill-yellow-600" />
            </div>
            <div>
              <p className="font-semibold text-[#111111]">4.9/5 Rating</p>
              <p className="text-sm text-gray-500">From 5,000+ reviews</p>
            </div>
          </div>

          <div className="h-12 w-px bg-gray-200" />

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-[#111111]">100% Satisfaction</p>
              <p className="text-sm text-gray-500">Guaranteed results</p>
            </div>
          </div>

          <div className="h-12 w-px bg-gray-200" />

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-[#111111]">Since 2018</p>
              <p className="text-sm text-gray-500">6+ years of excellence</p>
            </div>
          </div>

          <div className="h-12 w-px bg-gray-200" />

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-[#111111]">Global Presence</p>
              <p className="text-sm text-gray-500">30+ countries</p>
            </div>
          </div>
        </motion.div>

        {/* ============ Quote / Testimonial Teaser ============ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-[#9d3526]/5 to-[#c5a880]/5 p-8 border border-[#c5a880]/20">
            <Quote className="absolute left-6 top-6 h-8 w-8 text-[#9d3526]/20" />
            <Quote className="absolute bottom-6 right-6 h-8 w-8 rotate-180 text-[#9d3526]/20" />
            
            <div className="relative z-10">
              <p className="text-lg font-medium text-[#111111] md:text-xl">
                "Doric Skills transformed my career completely. The training was
                world-class, and the support from mentors was exceptional."
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#9d3526] to-[#7a2a1e]" />
                <div className="text-left">
                  <p className="font-semibold text-[#111111]">Rahul Sharma</p>
                  <p className="text-sm text-gray-500">
                    Senior Developer at Google
                  </p>
                </div>
              </div>
              <div className="mt-3 flex justify-center gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}