"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Award,
  Trophy,
  Users,
  Clock,
  Shield,
  Heart,
  Target,
  Globe,
  Star,
  CheckCircle,
  Quote,
  Calendar,
  Building2,
  TrendingUp,
  BookOpen,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Team Members
const teamMembers = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
    bio: "20+ years of experience in education technology",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Priya Sharma",
    role: "Head of Academics",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    bio: "PhD from IIT Delhi, 15+ years in curriculum design",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Amit Patel",
    role: "Director of Technology",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
    bio: "Ex-Google, 12+ years in software development",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Neha Gupta",
    role: "Head of Placements",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
    bio: "10+ years in corporate recruitment & career counseling",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

// Stats
const stats = [
  {
    icon: <Users className="h-6 w-6" />,
    number: "10,000+",
    label: "Students Trained",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    number: "50+",
    label: "Industry Awards",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    number: "30+",
    label: "Countries Served",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Star className="h-6 w-6" />,
    number: "4.9/5",
    label: "Student Rating",
    color: "from-purple-500 to-pink-500",
  },
];

// Milestones
const milestones = [
  {
    year: "2018",
    title: "Our Journey Begins",
    description: "Started with a vision to transform education",
    icon: "🚀",
  },
  {
    year: "2019",
    title: "First 1000 Students",
    description: "Reached our first milestone of 1000 students",
    icon: "🎯",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description: "Expanded to 10+ countries worldwide",
    icon: "🌍",
  },
  {
    year: "2021",
    title: "50+ Corporate Partners",
    description: "Partnered with leading companies",
    icon: "🏢",
  },
  {
    year: "2022",
    title: "10,000+ Students",
    description: "Reached 10,000+ students globally",
    icon: "🎓",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Received 50+ industry awards",
    icon: "🏆",
  },
];

// Values
const values = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Integrity",
    description: "We believe in transparency and honesty",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaboration",
    description: "We work together to achieve great results",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Innovation",
    description: "We embrace new ideas and technologies",
    color: "from-orange-500 to-yellow-500",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ============================================
          SCHEMA: ABOUT PAGE
          ============================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Doric Skills",
            "description": "Doric Skills is a premier training institute founded in 2018. We have trained over 10,000 students across 30+ countries with a 95% success rate.",
            "url": "https://doricskills.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Doric Skills",
              "foundingDate": "2018",
              "numberOfEmployees": 50
            }
          })
        }}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-[#9d3526] via-[#8c3023] to-[#6f241b]" style={{marginTop:"70px"}}>
        {/* Decorative Elements */}
        <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 h-[600px] w-[600px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#c5a880]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex min-h-[70vh] items-center">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* ======== LEFT CONTENT ======== */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#c5a880]/20 px-4 py-2 backdrop-blur-sm border border-[#c5a880]/30"
                >
                  <Sparkles className="h-4 w-4 text-[#c5a880]" />
                  <span className="text-sm font-medium text-[#c5a880]">
                    About Doric Skills
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl"
                >
                  Empowering{" "}
                  <span className="bg-gradient-to-r from-[#c5a880] to-[#f5e6d3] bg-clip-text text-transparent">
                    Future Leaders
                  </span>
                  <br />
                  Since 2018
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="max-w-lg text-base text-gray-300 md:text-lg"
                >
                  We are passionate about transforming lives through quality
                  education and skill development. Our mission is to make
                  world-class education accessible to everyone.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href="/courses"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-[#9d3526] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20"
                  >
                    Explore Courses
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a880] hover:bg-[#c5a880]/10"
                  >
                    Contact Us
                  </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-3 gap-4 pt-4"
                >
                  <div>
                    <p className="text-2xl font-bold text-[#c5a880] md:text-3xl">
                      10K+
                    </p>
                    <p className="text-sm text-gray-400">Students Trained</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#c5a880] md:text-3xl">
                      50+
                    </p>
                    <p className="text-sm text-gray-400">Expert Trainers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#c5a880] md:text-3xl">
                      95%
                    </p>
                    <p className="text-sm text-gray-400">Success Rate</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* ======== RIGHT IMAGE ======== */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative w-full max-w-md">
                  {/* Main Image */}
                  <div className="relative rounded-3xl shadow-2xl overflow-hidden border-2 border-[#c5a880]/20">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80"
                      alt="About Doric Skills"
                      width={600}
                      height={500}
                      className="h-auto w-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#9d3526]/30 to-transparent" />
                  </div>

                  {/* Floating Card 1 */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 z-20 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-sm border border-[#c5a880]/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-[#9d3526]/10 p-2">
                        <Award className="h-5 w-5 text-[#9d3526]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#111111]">50+ Awards</p>
                        <p className="text-xs text-gray-500">Industry Recognition</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Card 2 */}
                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -right-4 -top-4 z-20 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-sm border border-[#c5a880]/30"
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
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* ============================================
          OUR STORY SECTION
          ============================================ */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#9d3526]/10 px-4 py-1.5 text-sm font-semibold text-[#9d3526] mb-4">
                <Sparkles className="h-4 w-4" />
                Our Story
              </span>
              <h2 className="text-3xl font-bold text-[#111111] md:text-4xl">
                Transforming Lives Through{" "}
                <span className="text-[#9d3526]">Quality Education</span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Doric Skills was founded in 2018 with a simple yet powerful
                  vision: to make world-class education accessible to everyone.
                  What started as a small training center has grown into a
                  global educational institution.
                </p>
                <p>
                  Today, we have trained over 10,000 students from 30+ countries
                  with a 95% career transition success rate. Our alumni work at
                  top companies including Google, Microsoft, Amazon, and more.
                </p>
                <p>
                  We believe in practical, hands-on learning that prepares
                  students for real-world challenges. Our industry-expert
                  mentors and comprehensive curriculum ensure our students are
                  job-ready from day one.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#faf9f7] p-6 border border-[#c5a880]/10">
                  <div className="rounded-full bg-[#9d3526]/10 p-2 w-fit">
                    <Target className="h-5 w-5 text-[#9d3526]" />
                  </div>
                  <h4 className="mt-3 font-bold text-[#111111]">Our Mission</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    To provide industry-relevant education that empowers
                    individuals to build successful careers.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#faf9f7] p-6 border border-[#c5a880]/10">
                  <div className="rounded-full bg-[#9d3526]/10 p-2 w-fit">
                    <Globe className="h-5 w-5 text-[#9d3526]" />
                  </div>
                  <h4 className="mt-3 font-bold text-[#111111]">Our Vision</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    To become the world's most trusted educational platform,
                    transforming lives through quality learning.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#9d3526]/10 border-2 border-[#c5a880]/20">
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80"
                  alt="Our Story"
                  width={600}
                  height={500}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#9d3526]/20 via-transparent to-transparent" />
              </div>

              {/* Floating Quote */}
              <div className="absolute -bottom-6 -right-6 z-20 rounded-2xl bg-white p-6 shadow-2xl border border-[#c5a880]/20 max-w-xs">
                <Quote className="h-6 w-6 text-[#9d3526]" />
                <p className="mt-2 text-sm font-medium text-[#111111]">
                  "Education is the most powerful weapon which you can use to
                  change the world."
                </p>
                <p className="mt-1 text-xs text-gray-500">- Nelson Mandela</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          STATS SECTION
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#faf9f7] to-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl bg-white p-6 text-center shadow-lg border border-[#c5a880]/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#9d3526]/10"
              >
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${stat.color} text-white shadow-lg transition-all duration-500 group-hover:scale-110`}>
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-[#111111] md:text-3xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          VALUES SECTION
          ============================================ */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#9d3526]/10 px-4 py-1.5 text-sm font-semibold text-[#9d3526] mb-4">
              <Heart className="h-4 w-4" />
              Our Values
            </span>
            <h2 className="text-3xl font-bold text-[#111111] md:text-4xl">
              What Drives{" "}
              <span className="text-[#9d3526]">Our Success</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Our core values guide everything we do at Doric Skills.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl bg-[#faf9f7] p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#9d3526]/10 border border-[#c5a880]/10"
              >
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${value.color} text-white shadow-lg transition-all duration-500 group-hover:scale-110`}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#9d3526] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          MILESTONES / TIMELINE
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#faf9f7] to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#9d3526]/10 px-4 py-1.5 text-sm font-semibold text-[#9d3526] mb-4">
              <Calendar className="h-4 w-4" />
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-[#111111] md:text-4xl">
              Milestones That Define{" "}
              <span className="text-[#9d3526]">Our Success</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-[#9d3526] via-[#c5a880] to-[#9d3526] opacity-20" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col items-center md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-4 md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 z-10 hidden -translate-x-1/2 md:block">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#9d3526] to-[#7a2a1e] text-3xl shadow-lg shadow-[#9d3526]/30">
                      {milestone.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`inline-block rounded-2xl bg-white p-6 shadow-xl shadow-[#9d3526]/5 border border-[#c5a880]/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#9d3526]/10 hover:-translate-y-1 ${index % 2 === 0 ? "md:mr-6" : "md:ml-6"}`}>
                      <p className="text-sm font-bold text-[#9d3526]">
                        {milestone.year}
                      </p>
                      <h4 className="mt-1 text-lg font-bold text-[#111111]">
                        {milestone.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden w-5/12 md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TEAM SECTION
          ============================================ */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#9d3526]/10 px-4 py-1.5 text-sm font-semibold text-[#9d3526] mb-4">
              <Users className="h-4 w-4" />
              Our Team
            </span>
            <h2 className="text-3xl font-bold text-[#111111] md:text-4xl">
              Meet Our{" "}
              <span className="text-[#9d3526]">Experts</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Our team of industry experts is dedicated to your success.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl bg-[#faf9f7] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#9d3526]/10 border border-[#c5a880]/10"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#9d3526]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#9d3526] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#9d3526] font-medium">
                    {member.role}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{member.bio}</p>
                  <div className="mt-4 flex justify-center gap-3">
                    <Link
                      href={member.social.linkedin}
                      className="rounded-full bg-[#0A66C2]/10 p-2 text-[#0A66C2] transition-all duration-300 hover:bg-[#0A66C2] hover:text-white"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </Link>
                    <Link
                      href={member.social.twitter}
                      className="rounded-full bg-[#1DA1F2]/10 p-2 text-[#1DA1F2] transition-all duration-300 hover:bg-[#1DA1F2] hover:text-white"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#9d3526] to-[#7a2a1e] py-16 md:py-24">
        <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to Join{" "}
              <span className="text-[#c5a880]">Doric Skills</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#c5a880]">
              Start your journey towards a successful career today. Join 10,000+
              students who have already taken the leap.
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
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}