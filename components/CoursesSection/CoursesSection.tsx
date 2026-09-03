"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Palette,
  BarChart3,
  Cloud,
  Shield,
  Star,
  Users,
  Clock,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Monitor,
  Globe,
  Zap,
  TrendingUp,
} from "lucide-react";

// Course Data
const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60",
    description: "Master MERN stack with real-world projects and expert mentorship.",
    rating: 4.9,
    students: 2500,
    price: "$499",
    level: "Intermediate",
    duration: "12 Weeks",
    color: "from-blue-500 to-cyan-500",
    icon: <Code2 className="h-5 w-5" />,
    featured: true,
    skills: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    title: "Mobile App Development",
    category: "Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60",
    description: "Build native and cross-platform apps for iOS and Android.",
    rating: 4.8,
    students: 1800,
    price: "$449",
    level: "Intermediate",
    duration: "10 Weeks",
    color: "from-purple-500 to-pink-500",
    icon: <Smartphone className="h-5 w-5" />,
    featured: false,
    skills: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop&q=60",
    description: "Create stunning designs that users love and businesses need.",
    rating: 4.7,
    students: 2000,
    price: "$399",
    level: "Beginner",
    duration: "8 Weeks",
    color: "from-orange-500 to-red-500",
    icon: <Palette className="h-5 w-5" />,
    featured: false,
    skills: ["Figma", "Adobe XD", "Prototyping", "UI Design"],
  },
  {
    id: 4,
    title: "Data Science & Analytics",
    category: "Data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
    description: "Master data analysis, ML, and AI with hands-on projects.",
    rating: 4.9,
    students: 1500,
    price: "$599",
    level: "Advanced",
    duration: "14 Weeks",
    color: "from-green-500 to-emerald-500",
    icon: <BarChart3 className="h-5 w-5" />,
    featured: true,
    skills: ["Python", "TensorFlow", "SQL", "Tableau"],
  },
  {
    id: 5,
    title: "Cloud Architecture & DevOps",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60",
    description: "Master cloud platforms and DevOps practices for modern businesses.",
    rating: 4.8,
    students: 1200,
    price: "$549",
    level: "Advanced",
    duration: "12 Weeks",
    color: "from-indigo-500 to-blue-500",
    icon: <Cloud className="h-5 w-5" />,
    featured: false,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: 6,
    title: "Cybersecurity Essentials",
    category: "Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=60",
    description: "Protect organizations from cyber threats with essential skills.",
    rating: 4.6,
    students: 900,
    price: "$449",
    level: "Intermediate",
    duration: "10 Weeks",
    color: "from-red-500 to-rose-500",
    icon: <Shield className="h-5 w-5" />,
    featured: false,
    skills: ["Network Security", "Penetration Testing", "Compliance"],
  },
];

const categories = [
  { id: "all", label: "All Courses", icon: <BookOpen className="h-4 w-4" /> },
  { id: "Development", label: "Development", icon: <Code2 className="h-4 w-4" /> },
  { id: "Design", label: "Design", icon: <Palette className="h-4 w-4" /> },
  { id: "Data", label: "Data Science", icon: <BarChart3 className="h-4 w-4" /> },
  { id: "Cloud", label: "Cloud & DevOps", icon: <Cloud className="h-4 w-4" /> },
  { id: "Security", label: "Cybersecurity", icon: <Shield className="h-4 w-4" /> },
];

export default function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#faf9f7] py-16 md:py-24">
      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#9d3526]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#c5a880]/5 blur-3xl" />

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
            Our Courses
          </span>
          <h2 className="text-3xl font-bold text-[#111111] md:text-4xl lg:text-5xl">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-[#c5a880] to-[#9d3526] bg-clip-text text-transparent">
              Career
            </span>
            <br className="hidden sm:block" />
            with Expert Training
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Choose from our wide range of industry-relevant courses designed to
            help you succeed in today's competitive job market.
          </p>
        </motion.div>

        {/* ============ Category Filters ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-[#9d3526] text-white shadow-lg shadow-[#9d3526]/30"
                  : "bg-white text-gray-600 hover:bg-[#9d3526]/5 hover:text-[#9d3526] border border-[#c5a880]/20"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* ============ Course Grid ============ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#9d3526]/10 hover:-translate-y-2 border border-[#c5a880]/10"
              >
                {/* Featured Badge */}
                {course.featured && (
                  <div className="absolute left-4 top-4 z-20 rounded-full bg-gradient-to-r from-[#9d3526] to-[#7a2a1e] px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-[#9d3526]/30">
                    <span className="flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Course Image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={600}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#9d3526]/30 to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute bottom-4 left-4 z-10 rounded-full bg-black/50 px-3 py-1 backdrop-blur-sm">
                    <span className="text-xs font-medium text-white">
                      {course.category}
                    </span>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Title & Icon */}
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-[#111111] transition-colors duration-300 group-hover:text-[#9d3526]">
                      {course.title}
                    </h3>
                    <div className={`rounded-lg bg-gradient-to-r ${course.color} p-2 text-white shadow-lg`}>
                      {course.icon}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {course.skills.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-[#faf9f7] px-2.5 py-0.5 text-xs text-gray-600 border border-[#c5a880]/10"
                      >
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{course.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="mt-4 flex items-center justify-between border-t border-[#c5a880]/10 pt-4">
                    <div className="flex items-center gap-4">
                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-[#111111]">
                          {course.rating}
                        </span>
                      </div>
                      {/* Students */}
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {course.students.toLocaleString()}
                        </span>
                      </div>
                      {/* Duration */}
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {course.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Enroll Button */}
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-[#9d3526]">
                        {course.price}
                      </span>
                      <span className="text-sm text-gray-500"> / course</span>
                    </div>
                    <Link
                      href={`/courses/${course.id}`}
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9d3526] to-[#7a2a1e] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#9d3526]/20 transition-all duration-300 hover:shadow-2xl hover:shadow-[#9d3526]/40 hover:-translate-y-0.5"
                    >
                      Enroll Now
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>

                  {/* Level Badge */}
                  <div className="absolute right-4 top-4 z-10">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      course.level === "Beginner" 
                        ? "bg-green-100 text-green-700" 
                        : course.level === "Intermediate"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Hover Border Animation */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#9d3526] to-[#c5a880] transition-all duration-500 group-hover:w-full" />

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#9d3526]/0 via-[#9d3526]/5 to-[#c5a880]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ============ View All CTA ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/courses"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9d3526] to-[#7a2a1e] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#9d3526]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#9d3526]/50"
          >
            View All Courses
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* ============ Trust Badges ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 rounded-3xl bg-white p-8 shadow-xl border border-[#c5a880]/10"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Monitor className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-[#111111]">100+ Courses</p>
              <p className="text-sm text-gray-500">Expert-led training</p>
            </div>
          </div>

          <div className="h-12 w-px bg-gray-200" />

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-[#111111]">10K+ Students</p>
              <p className="text-sm text-gray-500">Global community</p>
            </div>
          </div>

          <div className="h-12 w-px bg-gray-200" />

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-[#111111]">95% Success</p>
              <p className="text-sm text-gray-500">Job placement rate</p>
            </div>
          </div>

          <div className="h-12 w-px bg-gray-200" />

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
              <TrendingUp className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="font-semibold text-[#111111]">4.8/5 Rating</p>
              <p className="text-sm text-gray-500">Student satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}