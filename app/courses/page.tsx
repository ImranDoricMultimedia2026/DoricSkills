"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  BarChart3,
  Cloud,
  Shield,
  ChevronRight,
  ChevronDown,
  Calendar,
  Users,
  Award,
  Clock,
  BookOpen,
  ExternalLink,
  Github,
  Globe,
  Star,
  CheckCircle,
  Zap,
  Layers,
  FolderOpen,
  Plus,
  Minus,
} from "lucide-react";

// Department Data
const departments = [
  {
    id: "web-dev",
    name: "Web Development",
    icon: <Code2 className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    years: [
      {
        year: "2025",
        title: "Full Stack Web Development",
        description: "Master MERN stack with advanced AI integration",
        overview:
          "This comprehensive program covers modern web development with a focus on AI-powered applications. Students learn to build scalable, secure, and intelligent web solutions.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
        technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "TypeScript", "AWS"],
        achievements: [
          "Built 5+ production-ready projects",
          "Integrated AI/ML features",
          "Scalable microservices architecture",
        ],
        students: 250,
        duration: "12 Weeks",
        rating: 4.9,
        projects: [
          {
            name: "AI-Powered E-Commerce",
            description: "Full-stack e-commerce with recommendation system",
          },
          {
            name: "Real-time Collaboration Tool",
            description: "Google Docs clone with live editing",
          },
        ],
      },
      {
        year: "2024",
        title: "Frontend Development",
        description: "React, Next.js, and modern frontend frameworks",
        overview:
          "Deep dive into modern frontend technologies. Students learn to build responsive, interactive, and high-performance web applications.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
        technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Redux"],
        achievements: [
          "Built 10+ responsive websites",
          "Optimized performance scores 95+",
          "SEO mastery",
        ],
        students: 180,
        duration: "10 Weeks",
        rating: 4.8,
        projects: [
          {
            name: "Portfolio Builder",
            description: "Drag-and-drop portfolio generator",
          },
          {
            name: "News Aggregator",
            description: "Real-time news from multiple sources",
          },
        ],
      },
      {
        year: "2023",
        title: "Backend Development",
        description: "Node.js, Express, databases and APIs",
        overview:
          "Focus on server-side development, REST APIs, database design, and system architecture.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
        technologies: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Docker"],
        achievements: [
          "Designed 10+ databases",
          "Built 15+ REST APIs",
          "Authentication systems",
        ],
        students: 150,
        duration: "10 Weeks",
        rating: 4.7,
        projects: [
          {
            name: "Task Management API",
            description: "RESTful API with JWT authentication",
          },
          {
            name: "Chat Application",
            description: "Real-time messaging with WebSockets",
          },
        ],
      },
    ],
  },
  {
    id: "app-dev",
    name: "App Development",
    icon: <Smartphone className="h-5 w-5" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    years: [
      {
        year: "2025",
        title: "Cross-Platform Development",
        description: "React Native and Flutter with AI integration",
        overview:
          "Build apps for both iOS and Android using a single codebase. This course covers advanced cross-platform development with AI features.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80",
        technologies: ["React Native", "Flutter", "Firebase", "AI/ML", "GraphQL"],
        achievements: [
          "Published 3+ apps on App Store",
          "Advanced state management",
          "AI/ML integration",
        ],
        students: 200,
        duration: "12 Weeks",
        rating: 4.8,
        projects: [
          {
            name: "Fitness Tracker App",
            description: "Cross-platform fitness tracking with AI insights",
          },
          {
            name: "E-Learning Platform",
            description: "Mobile learning platform with offline support",
          },
        ],
      },
      {
        year: "2024",
        title: "iOS App Development",
        description: "SwiftUI and iOS native development",
        overview:
          "Master iOS development using Swift and SwiftUI. Learn to build beautiful, responsive iOS apps.",
        image: "https://images.unsplash.com/photo-1581274289469-8bb12db1c2e0?w=600&auto=format&fit=crop&q=80",
        technologies: ["Swift", "SwiftUI", "UIKit", "Core Data", "Combine"],
        achievements: [
          "Built 5+ iOS apps",
          "Published on App Store",
          "MVC/MVVM architecture",
        ],
        students: 120,
        duration: "10 Weeks",
        rating: 4.7,
        projects: [
          {
            name: "Expense Tracker",
            description: "iOS expense tracking with charts",
          },
          {
            name: "Weather App",
            description: "Live weather with interactive maps",
          },
        ],
      },
    ],
  },
  {
    id: "ui-ux",
    name: "UI/UX Design",
    icon: <Palette className="h-5 w-5" />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    years: [
      {
        year: "2025",
        title: "Design Systems & AI",
        description: "AI-powered design systems and advanced prototyping",
        overview:
          "Learn to build scalable design systems with AI integration. Master advanced prototyping and user research.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop&q=80",
        technologies: ["Figma", "Adobe XD", "AI Design", "Prototyping", "Design Systems"],
        achievements: [
          "Built 3+ design systems",
          "AI-powered design tools",
          "User research mastery",
        ],
        students: 150,
        duration: "10 Weeks",
        rating: 4.8,
        projects: [
          {
            name: "Design System Builder",
            description: "Complete design system with AI suggestions",
          },
          {
            name: "User Research Platform",
            description: "UX research and testing platform",
          },
        ],
      },
      {
        year: "2024",
        title: "UX Design & Research",
        description: "User research, testing and design thinking",
        overview:
          "Focus on user-centered design. Learn research methods, usability testing, and design thinking.",
        image: "https://images.unsplash.com/photo-1560469495-41db6f9d5e66?w=600&auto=format&fit=crop&q=80",
        technologies: ["Figma", "User Research", "Usability Testing", "Design Thinking"],
        achievements: [
          "Conducted 50+ user interviews",
          "Usability testing mastery",
          "Data-driven design",
        ],
        students: 100,
        duration: "10 Weeks",
        rating: 4.6,
        projects: [
          {
            name: "Usability Testing Kit",
            description: "Framework for usability testing",
          },
          {
            name: "UX Research Platform",
            description: "Research and analysis platform",
          },
        ],
      },
    ],
  },
  {
    id: "data-science",
    name: "Data Science",
    icon: <BarChart3 className="h-5 w-5" />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    years: [
      {
        year: "2025",
        title: "Machine Learning & AI",
        description: "Advanced ML with deep learning and AI integration",
        overview:
          "Master machine learning algorithms, deep learning, and AI applications. Learn to build intelligent systems.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
        technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning"],
        achievements: [
          "Built 5+ ML models",
          "Deep learning applications",
          "Model deployment",
        ],
        students: 180,
        duration: "14 Weeks",
        rating: 4.9,
        projects: [
          {
            name: "Healthcare Analytics",
            description: "ML-based healthcare prediction system",
          },
          {
            name: "Recommendation Engine",
            description: "Personalized recommendation system",
          },
        ],
      },
      {
        year: "2024",
        title: "Data Analytics",
        description: "Data analysis, visualization and business intelligence",
        overview:
          "Learn to analyze data, create visualizations, and derive business insights using modern tools.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
        technologies: ["Python", "Pandas", "Tableau", "Power BI", "SQL"],
        achievements: [
          "Analyzed 10+ datasets",
          "Interactive dashboards",
          "Business intelligence reports",
        ],
        students: 140,
        duration: "12 Weeks",
        rating: 4.7,
        projects: [
          {
            name: "Sales Analytics Dashboard",
            description: "Interactive sales dashboard",
          },
          {
            name: "Financial Analysis Tool",
            description: "Business intelligence tool",
          },
        ],
      },
    ],
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    icon: <Cloud className="h-5 w-5" />,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    years: [
      {
        year: "2025",
        title: "Cloud Architecture & AI",
        description: "AWS, Azure, and AI-powered cloud solutions",
        overview:
          "Master cloud architecture with AI integration. Learn to build scalable, secure, and intelligent cloud solutions.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
        technologies: ["AWS", "Azure", "Docker", "Kubernetes", "AI/ML", "DevOps"],
        achievements: [
          "Designed 5+ cloud architectures",
          "AI/ML integration",
          "Automation pipelines",
        ],
        students: 120,
        duration: "12 Weeks",
        rating: 4.8,
        projects: [
          {
            name: "AI-Powered Cloud Platform",
            description: "Cloud platform with AI capabilities",
          },
          {
            name: "DevOps Pipeline",
            description: "CI/CD with AI monitoring",
          },
        ],
      },
      {
        year: "2024",
        title: "DevOps & Infrastructure",
        description: "CI/CD, containerization and automation",
        overview:
          "Learn modern DevOps practices, containerization, and infrastructure automation.",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&auto=format&fit=crop&q=80",
        technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible"],
        achievements: [
          "Built CI/CD pipelines",
          "Container orchestration",
          "Infrastructure as code",
        ],
        students: 100,
        duration: "10 Weeks",
        rating: 4.6,
        projects: [
          {
            name: "Kubernetes Cluster",
            description: "Multi-container deployment",
          },
          {
            name: "Automation Framework",
            description: "Infrastructure automation suite",
          },
        ],
      },
    ],
  },
  {
    id: "cyber",
    name: "Cybersecurity",
    icon: <Shield className="h-5 w-5" />,
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    years: [
      {
        year: "2025",
        title: "Advanced Security & AI",
        description: "AI-powered security and penetration testing",
        overview:
          "Master advanced cybersecurity with AI integration. Learn penetration testing, threat detection, and AI-powered security.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
        technologies: ["AI Security", "Penetration Testing", "Threat Detection", "Compliance"],
        achievements: [
          "Conducted 10+ penetration tests",
          "AI-powered threat detection",
          "Security frameworks",
        ],
        students: 100,
        duration: "12 Weeks",
        rating: 4.7,
        projects: [
          {
            name: "Security Analytics Platform",
            description: "AI-based threat detection system",
          },
          {
            name: "Penetration Testing Suite",
            description: "Automated security testing framework",
          },
        ],
      },
      {
        year: "2024",
        title: "Network Security",
        description: "Network security, firewalls and protocols",
        overview:
          "Learn network security fundamentals, firewalls, and security protocols.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
        technologies: ["Network Security", "Firewalls", "Protocols", "Monitoring", "Incident Response"],
        achievements: [
          "Configured 10+ firewalls",
          "Security protocols mastery",
          "Incident response plans",
        ],
        students: 80,
        duration: "10 Weeks",
        rating: 4.5,
        projects: [
          {
            name: "Network Monitoring Tool",
            description: "Real-time network security monitoring",
          },
          {
            name: "Incident Response Plan",
            description: "Complete security incident response framework",
          },
        ],
      },
    ],
  },
];

export default function CoursesTrainingPage() {
  const [selectedDept, setSelectedDept] = useState(departments[0]);
  const [selectedYear, setSelectedYear] = useState(selectedDept.years[0]);
  const [expandedDept, setExpandedDept] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "projects" | "achievements">("overview");

  // Handle department change
  const handleDeptChange = (dept: typeof departments[0]) => {
    setSelectedDept(dept);
    setSelectedYear(dept.years[0]);
    setActiveTab("overview");
    // Close mobile sidebar
    setExpandedDept(null);
  };

  // Handle year change
  const handleYearChange = (year: typeof selectedDept.years[0]) => {
    setSelectedYear(year);
    setActiveTab("overview");
  };

  return (
    <>
      {/* ============================================
          SCHEMA: COURSES PAGE
          ============================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Skills & Training Courses",
            "description": "Explore our comprehensive skills and training courses across multiple departments.",
            "provider": {
              "@type": "Organization",
              "name": "Doric Skills",
              "sameAs": "https://doricskills.com/"
            }
          })
        }}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#9d3526] via-[#8c3023] to-[#6f241b] pt-32 pb-20 md:pt-40 md:pb-28" style={{marginTop:"80px"}}>
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
              Skills & Training
            </span>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-[#c5a880] to-[#f5e6d3] bg-clip-text text-transparent">
                Courses
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Choose your department and explore year-wise curriculum,
              projects, and achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          MAIN CONTENT
          ============================================ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* ============ LEFT - Departments Sidebar ============ */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-80 flex-shrink-0"
            >
              <div className="sticky top-28">
                <div className="rounded-2xl bg-[#faf9f7] p-4 border border-[#c5a880]/10">
                  <h3 className="text-sm font-semibold text-[#111111] uppercase tracking-wider mb-4 px-2">
                    Departments
                  </h3>

                  {/* Mobile Dropdown */}
                  <div className="lg:hidden mb-4">
                    <button
                      onClick={() => setExpandedDept(expandedDept ? null : "open")}
                      className="w-full flex items-center justify-between rounded-xl bg-white p-3 border border-[#c5a880]/20"
                    >
                      <span className="flex items-center gap-2">
                        {selectedDept.icon}
                        <span className="font-medium">{selectedDept.name}</span>
                      </span>
                      {expandedDept ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </button>

                    <AnimatePresence>
                      {expandedDept && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-2 space-y-1 rounded-xl bg-white p-2 border border-[#c5a880]/10"
                        >
                          {departments.map((dept) => (
                            <button
                              key={dept.id}
                              onClick={() => handleDeptChange(dept)}
                              className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                                selectedDept.id === dept.id
                                  ? `bg-gradient-to-r ${dept.color} text-white shadow-lg`
                                  : "text-gray-600 hover:bg-gray-50 hover:text-[#9d3526]"
                              }`}
                            >
                              {dept.icon}
                              {dept.name}
                              {selectedDept.id === dept.id && (
                                <CheckCircle className="h-4 w-4 ml-auto" />
                              )}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Desktop List */}
                  <div className="hidden lg:block space-y-1">
                    {departments.map((dept) => (
                      <button
                        key={dept.id}
                        onClick={() => handleDeptChange(dept)}
                        className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                          selectedDept.id === dept.id
                            ? `bg-gradient-to-r ${dept.color} text-white shadow-lg`
                            : "text-gray-600 hover:bg-white hover:text-[#9d3526]"
                        }`}
                      >
                        {dept.icon}
                        {dept.name}
                        {selectedDept.id === dept.id && (
                          <CheckCircle className="h-4 w-4 ml-auto" />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Department Stats */}
                  <div className="mt-4 grid grid-cols-2 gap-2 pt-4 border-t border-[#c5a880]/10">
                    <div className="rounded-xl bg-white p-3 text-center">
                      <p className="text-lg font-bold text-[#9d3526]">
                        {selectedDept.years.length}
                      </p>
                      <p className="text-xs text-gray-500">Sessions</p>
                    </div>
                    <div className="rounded-xl bg-white p-3 text-center">
                      <p className="text-lg font-bold text-[#9d3526]">
                        {selectedDept.years.reduce((acc, y) => acc + y.students, 0)}+
                      </p>
                      <p className="text-xs text-gray-500">Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ============ RIGHT - Content Area ============ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 min-w-0"
            >
              {/* Department Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <div className={`rounded-xl bg-gradient-to-r ${selectedDept.color} p-3 text-white`}>
                    {selectedDept.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#111111]">
                      {selectedDept.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {selectedDept.years.length} Sessions •{" "}
                      {selectedDept.years.reduce((acc, y) => acc + y.students, 0)}+ Students
                    </p>
                  </div>
                </div>
              </div>

              {/* Year Selector */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedDept.years.map((year) => (
                  <button
                    key={year.year}
                    onClick={() => handleYearChange(year)}
                    className={`group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                      selectedYear.year === year.year
                        ? `bg-gradient-to-r ${selectedDept.color} text-white shadow-lg`
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-[#c5a880]/20"
                    }`}
                  >
                    <Calendar className="h-4 w-4" />
                    {year.year}
                  </button>
                ))}
              </div>

              {/* Year Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedYear.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Course Overview Card */}
                  <div className="rounded-2xl bg-white overflow-hidden shadow-xl border border-[#c5a880]/10">
                    {/* Course Image */}
                    <div className="relative h-56 md:h-72">
                      <Image
                        src={selectedYear.image}
                        alt={selectedYear.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white">
                          {selectedYear.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {selectedYear.description}
                        </p>
                      </div>
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1.5 border border-white/20">
                        <span className="flex items-center gap-1 text-sm text-white">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {selectedYear.rating}
                        </span>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="border-b border-[#c5a880]/10">
                      <div className="flex gap-1 p-3">
                        {["overview", "projects", "achievements"].map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                              activeTab === tab
                                ? `bg-gradient-to-r ${selectedDept.color} text-white shadow-lg`
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                      <AnimatePresence mode="wait">
                        {activeTab === "overview" && (
                          <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-4"
                          >
                            <h4 className="text-lg font-semibold text-[#111111]">
                              Course Overview
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                              {selectedYear.overview}
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                              <div className="rounded-xl bg-[#faf9f7] p-3 text-center">
                                <Clock className="h-5 w-5 text-[#9d3526] mx-auto" />
                                <p className="text-sm font-semibold mt-1">{selectedYear.duration}</p>
                                <p className="text-xs text-gray-500">Duration</p>
                              </div>
                              <div className="rounded-xl bg-[#faf9f7] p-3 text-center">
                                <Users className="h-5 w-5 text-[#9d3526] mx-auto" />
                                <p className="text-sm font-semibold mt-1">{selectedYear.students}+</p>
                                <p className="text-xs text-gray-500">Students</p>
                              </div>
                              <div className="rounded-xl bg-[#faf9f7] p-3 text-center">
                                <Award className="h-5 w-5 text-[#9d3526] mx-auto" />
                                <p className="text-sm font-semibold mt-1">Certified</p>
                                <p className="text-xs text-gray-500">Program</p>
                              </div>
                              <div className="rounded-xl bg-[#faf9f7] p-3 text-center">
                                <BookOpen className="h-5 w-5 text-[#9d3526] mx-auto" />
                                <p className="text-sm font-semibold mt-1">Hands-on</p>
                                <p className="text-xs text-gray-500">Learning</p>
                              </div>
                            </div>

                            {/* Technologies */}
                            <div className="pt-2">
                              <h5 className="text-sm font-semibold text-[#111111] mb-2">
                                Technologies Covered
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {selectedYear.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className={`rounded-full px-3 py-1 text-xs font-medium bg-[#faf9f7] border border-[#c5a880]/10 text-gray-600`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeTab === "projects" && (
                          <motion.div
                            key="projects"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-4"
                          >
                            <h4 className="text-lg font-semibold text-[#111111]">
                              Projects
                            </h4>
                            <p className="text-sm text-gray-500">
                              Real-world projects you'll build during this course
                            </p>
                            <div className="grid gap-4 md:grid-cols-2">
                              {selectedYear.projects.map((project, idx) => (
                                <div
                                  key={idx}
                                  className="group rounded-xl bg-[#faf9f7] p-4 border border-[#c5a880]/10 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1"
                                >
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h5 className="font-semibold text-[#111111] group-hover:text-[#9d3526] transition-colors">
                                        {project.name}
                                      </h5>
                                      <p className="text-sm text-gray-500 mt-1">
                                        {project.description}
                                      </p>
                                    </div>
                                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-[#9d3526] transition-colors" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {activeTab === "achievements" && (
                          <motion.div
                            key="achievements"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-4"
                          >
                            <h4 className="text-lg font-semibold text-[#111111]">
                              Key Achievements
                            </h4>
                            <p className="text-sm text-gray-500">
                              What you'll accomplish by the end of this course
                            </p>
                            <div className="space-y-3">
                              {selectedYear.achievements.map((achievement, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-3 rounded-xl bg-[#faf9f7] p-4 border border-[#c5a880]/10"
                                >
                                  <div className="rounded-full bg-[#9d3526]/10 p-1.5 mt-0.5">
                                    <CheckCircle className="h-4 w-4 text-[#9d3526]" />
                                  </div>
                                  <span className="text-gray-700">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 flex justify-center">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9d3526] to-[#7a2a1e] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#9d3526]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#9d3526]/50"
                    >
                      Enroll Now - {selectedYear.year}
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}