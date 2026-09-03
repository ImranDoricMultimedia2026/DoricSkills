"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Users,
  ThumbsUp,
  Award,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Senior Developer at Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60",
    quote: "Doric Skills transformed my career completely. The training was world-class, and the support from mentors was exceptional. I went from a junior developer to a senior role at Google within 6 months of completing the course.",
    rating: 5,
    course: "Full Stack Web Development",
    date: "March 2024",
    social: "twitter",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Product Designer at Microsoft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60",
    quote: "The UI/UX Design Masterclass completely changed my approach to design. The practical projects and industry insights helped me build a portfolio that landed me my dream job at Microsoft.",
    rating: 5,
    course: "UI/UX Design Masterclass",
    date: "February 2024",
    social: "linkedin",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Data Scientist at Amazon",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60",
    quote: "The Data Science course at Doric Skills is the best investment I ever made. The curriculum is comprehensive, and the hands-on projects prepared me for real-world challenges at Amazon.",
    rating: 5,
    course: "Data Science & Analytics",
    date: "January 2024",
    social: "twitter",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "DevOps Engineer at AWS",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=60",
    quote: "The Cloud Architecture course gave me the skills I needed to transition into a senior DevOps role. The trainers are industry experts who provide practical, real-world knowledge.",
    rating: 4,
    course: "Cloud Architecture & DevOps",
    date: "December 2023",
    social: "linkedin",
  },
  {
    id: 5,
    name: "Neha Gupta",
    role: "Mobile Developer at Uber",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&auto=format&fit=crop&q=60",
    quote: "I was a complete beginner in mobile development. The Mobile App Development course at Doric Skills gave me the confidence and skills to build production-ready apps. Now I'm working at Uber!",
    rating: 5,
    course: "Mobile App Development",
    date: "November 2023",
    social: "twitter",
  },
  {
    id: 6,
    name: "Arjun Reddy",
    role: "Cybersecurity Specialist at Cisco",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60",
    quote: "The Cybersecurity course is exceptional. The practical labs and real-world scenarios prepared me for the challenges of enterprise security. I highly recommend this program.",
    rating: 5,
    course: "Cybersecurity Essentials",
    date: "October 2023",
    social: "linkedin",
  },
];

// Stats
const stats = [
  {
    icon: <Users className="h-5 w-5" />,
    number: "10,000+",
    label: "Happy Students",
  },
  {
    icon: <Star className="h-5 w-5" />,
    number: "4.9/5",
    label: "Average Rating",
  },
  {
    icon: <ThumbsUp className="h-5 w-5" />,
    number: "95%",
    label: "Success Rate",
  },
  {
    icon: <Award className="h-5 w-5" />,
    number: "50+",
    label: "Industry Awards",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      timerRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, isPaused]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#faf9f7] to-white py-16 md:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Background */}
      <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#9d3526]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#c5a880]/5 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full border border-[#c5a880]/5" />

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
            Student Testimonials
          </span>
          <h2 className="text-3xl font-bold text-[#111111] md:text-4xl lg:text-5xl">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#c5a880] to-[#9d3526] bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Real stories from real students who transformed their careers with
            Doric Skills.
          </p>
        </motion.div>

        {/* ============ Stats Row ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg border border-[#c5a880]/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="rounded-full bg-[#9d3526]/10 p-2 text-[#9d3526]">
                {stat.icon}
              </div>
              <div>
                <p className="text-lg font-bold text-[#111111]">{stat.number}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ============ Testimonial Carousel ============ */}
        <div className="relative mx-auto max-w-5xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="rounded-3xl bg-white p-6 md:p-10 shadow-2xl shadow-[#9d3526]/5 border border-[#c5a880]/10"
            >
              <div className="flex flex-col items-center gap-8 md:flex-row md:gap-10">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="relative h-24 w-24 md:h-32 md:w-32">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="rounded-full object-cover border-4 border-[#c5a880]/20"
                    />
                  </div>
                  {/* Quote Icon */}
                  <div className="absolute -bottom-2 -right-2 rounded-full bg-[#9d3526] p-2 shadow-lg shadow-[#9d3526]/30">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center gap-0.5 md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonials[currentIndex].rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="mt-4">
                    <p className="text-lg font-bold text-[#111111]">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentIndex].role}
                    </p>
                    <div className="mt-1 flex items-center justify-center gap-2 md:justify-start">
                      <span className="rounded-full bg-[#9d3526]/10 px-2.5 py-0.5 text-xs text-[#9d3526]">
                        {testimonials[currentIndex].course}
                      </span>
                      <span className="text-xs text-gray-400">
                        {testimonials[currentIndex].date}
                      </span>
                    </div>
                  </div>

                  {/* Social Icon */}
                  <div className="mt-3 flex justify-center gap-2 md:justify-start">
                    <div className="rounded-full bg-gray-100 p-1.5">
                      {testimonials[currentIndex].social === "twitter" ? (
                        <Twitter className="h-4 w-4 text-[#1DA1F2]" />
                      ) : testimonials[currentIndex].social === "linkedin" ? (
                        <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                      ) : (
                        <MessageCircle className="h-4 w-4 text-[#25D366]" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#c5a880]/20 bg-white shadow-lg transition-all duration-300 hover:bg-[#9d3526] hover:border-[#9d3526] hover:shadow-lg hover:shadow-[#9d3526]/30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-[#111111] transition-colors duration-300 group-hover:text-white" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`group relative transition-all duration-300 ${
                    currentIndex === index ? "w-10" : "w-2.5"
                  } h-2.5 rounded-full ${
                    currentIndex === index
                      ? "bg-[#9d3526] shadow-lg shadow-[#9d3526]/30"
                      : "bg-[#c5a880]/30 hover:bg-[#c5a880]/60"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {currentIndex === index && (
                    <span className="absolute inset-0 rounded-full bg-[#9d3526] animate-ping opacity-75" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#c5a880]/20 bg-white shadow-lg transition-all duration-300 hover:bg-[#9d3526] hover:border-[#9d3526] hover:shadow-lg hover:shadow-[#9d3526]/30"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-[#111111] transition-colors duration-300 group-hover:text-white" />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="mt-4 text-center text-sm text-gray-400">
            {String(currentIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </div>
        </div>

        {/* ============ Trust Badges ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 rounded-3xl bg-gradient-to-r from-[#faf9f7] to-white p-6 border border-[#c5a880]/10"
        >
          <div className="flex items-center gap-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400" />
            ))}
            <span className="ml-2 font-bold text-[#111111]">4.9/5</span>
          </div>

          <div className="h-8 w-px bg-gray-200" />

          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-[#9d3526]" />
            <span className="font-semibold text-[#111111]">10,000+</span>
            <span className="text-sm text-gray-500">students trained</span>
          </div>

          <div className="h-8 w-px bg-gray-200" />

          <div className="flex items-center gap-2">
            <ThumbsUp className="h-5 w-5 text-[#9d3526]" />
            <span className="font-semibold text-[#111111]">95%</span>
            <span className="text-sm text-gray-500">success rate</span>
          </div>

          <div className="h-8 w-px bg-gray-200" />

          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-[#9d3526]" />
            <span className="font-semibold text-[#111111]">50+</span>
            <span className="text-sm text-gray-500">industry awards</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}