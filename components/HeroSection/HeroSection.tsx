"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Lightbulb,
  Target,
  Trophy,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const slides = [
  {
    id: 1,
    eyebrow: "Learn with purpose",
    title: "Learn Skills.",
    highlight: "Build Confidence.",
    description:
      "Practical training and hands-on learning to help you develop skills you can actually use in your career.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&auto=format&fit=crop&q=85",
    alt: "Students learning together in a classroom",
    primaryText: "Explore Courses",
    primaryLink: "/courses",
    secondaryText: "Why Doric Skills?",
    secondaryLink: "/about",
  },
  {
    id: 2,
    eyebrow: "Skills that matter",
    title: "Turn Learning Into",
    highlight: "Real-World Skills.",
    description:
      "Build practical knowledge through guided learning, useful projects, and training designed around today's professional world.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=85",
    alt: "Person working on a laptop while learning digital skills",
    primaryText: "Start Learning",
    primaryLink: "/skills",
    secondaryText: "View Courses",
    secondaryLink: "/courses",
  },
  {
    id: 3,
    eyebrow: "Your next step",
    title: "Grow Your Skills.",
    highlight: "Shape Your Future.",
    description:
      "Whether you're starting out or looking to move ahead, get the guidance and practice you need to take your next step with confidence.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop&q=85",
    alt: "Students participating in a learning session",
    primaryText: "Get Started",
    primaryLink: "/contact",
    secondaryText: "Meet Doric Skills",
    secondaryLink: "/about",
  },
];

const trustPoints = [
  {
    icon: Wrench,
    value: "Practical",
    label: "Learning approach",
  },
  {
    icon: Users,
    value: "Expert",
    label: "Guidance",
  },
  {
    icon: BriefcaseBusiness,
    value: "Career",
    label: "Focused training",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 45 : -45,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -45 : 45,
  }),
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const totalSlides = slides.length;
  const activeSlide = slides[currentSlide];

  /*
   * IMPORTANT:
   * The old version paused the timer on mouse/focus events.
   * Because the mouse is normally already over the hero when the page loads,
   * the slider could remain paused and appear "broken".
   *
   * This version uses one simple, reliable 6-second interval.
   * Manual controls still work immediately.
   */
  useEffect(() => {
    if (totalSlides <= 1) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentSlide) return;

      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    },
    [currentSlide]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  return (
    <section
      aria-label="Doric Skills introduction"
      className="relative isolate mt-[65px] min-h-[560px] overflow-hidden bg-[#171513] pt-6 md:mt-[70px] md:min-h-[640px] md:pt-8"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={activeSlide.id}
            custom={direction}
            variants={shouldReduceMotion ? undefined : slideVariants}
            initial={shouldReduceMotion ? { opacity: 0 } : "enter"}
            animate={shouldReduceMotion ? { opacity: 1 } : "center"}
            exit={shouldReduceMotion ? { opacity: 0 } : "exit"}
            transition={
              shouldReduceMotion
                ? { duration: 0.15 }
                : {
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.image}
              alt=""
              fill
              priority={currentSlide === 0}
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Lighter overlays: keeps the hero premium without making it black */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Soft decorative glow */}
      <div className="pointer-events-none absolute right-[-140px] top-[-120px] -z-10 h-[420px] w-[420px] rounded-full bg-[#c5a880]/10 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] -z-10 h-[420px] w-[420px] rounded-full bg-[#9d3526]/15 blur-[120px]" />

      {/* Main content */}
      <div className="mx-auto flex min-h-[560px] max-w-7xl items-center px-5 py-16 sm:px-8 md:min-h-[640px] lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeSlide.id}
                custom={direction}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 18 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -16 }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0.15 }
                    : { duration: 0.55, ease: "easeOut" }
                }
              >
                {/* Eyebrow */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 backdrop-blur-md">
                 <Lightbulb className="h-4 w-4 text-[#e2c99d]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c5a880]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ead9bc] sm:text-sm">
                    {activeSlide.eyebrow}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px]">
                  {activeSlide.title}{" "}
                  <span className="bg-gradient-to-r from-[#f0d8a8] via-[#c5a880] to-[#c76a5b] bg-clip-text text-transparent">
                    {activeSlide.highlight}
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                  {activeSlide.description}
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={activeSlide.primaryLink}
                    className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#9d3526] px-7 font-semibold text-white shadow-[0_15px_45px_rgba(157,53,38,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ad3d2d] hover:shadow-[0_20px_55px_rgba(157,53,38,0.38)] focus:outline-none focus:ring-2 focus:ring-[#c5a880] focus:ring-offset-2 focus:ring-offset-[#171513]"
                  >
                    {activeSlide.primaryText}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href={activeSlide.secondaryLink}
                    className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/25 bg-white/[0.08] px-7 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a880]/60 hover:bg-white/[0.14] focus:outline-none focus:ring-2 focus:ring-[#c5a880] focus:ring-offset-2 focus:ring-offset-[#171513]"
                  >
                    {activeSlide.secondaryText}
                  </Link>
                </div>

                {/* Trust points */}
                <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/15 pt-6 sm:gap-6">
                  {trustPoints.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.label}>
                        <div className="mb-2 flex items-center gap-2">
                          <Icon className="h-4 w-4 text-[#e0c99f]" />
                          <span className="text-sm font-bold text-white sm:text-base">
                            {item.value}
                          </span>
                        </div>

                        <p className="text-[11px] leading-4 text-white/60 sm:text-xs">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeSlide.id}
                custom={direction}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        scale: 0.97,
                        x: direction > 0 ? 30 : -30,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        scale: 0.98,
                        x: direction > 0 ? -20 : 20,
                      }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0.15 }
                    : {
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }
                }
                className="relative"
              >
                {/* Image card */}
                <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/[0.06] p-2 shadow-2xl shadow-black/40 backdrop-blur-sm">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.alt}
                      fill
                      sizes="(max-width: 1024px) 90vw, 48vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/10" />
                  </div>
                </div>

                {/* Floating card */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -8, 0],
                        }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-5 -left-3 rounded-2xl border border-white/20 bg-white/95 px-4 py-3 shadow-xl sm:-left-7 sm:px-5 sm:py-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9d3526]/10">
                      <GraduationCap className="h-5 w-5 text-[#9d3526]" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#151515]">
                        Learn by doing
                      </p>
                      <p className="mt-0.5 text-xs text-black/50">
                        Practical, guided training
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Top floating badge */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, 7, 0],
                        }
                  }
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="absolute -right-2 -top-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c5a880]/40 bg-[#9d3526] shadow-xl shadow-black/30 sm:-right-5 sm:h-16 sm:w-16"
                >
                  <Lightbulb className="h-4 w-4 text-[#e2c99d]" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 sm:bottom-8 sm:gap-4">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md transition-all hover:border-[#c5a880]/60 hover:bg-[#9d3526] focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-10 bg-[#c5a880]"
                  : "w-2 bg-white/35 hover:bg-white/65"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md transition-all hover:border-[#c5a880]/60 hover:bg-[#9d3526] focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-7 right-7 z-20 hidden items-center gap-2 text-white/60 md:flex">
        <span className="text-2xl font-semibold text-white">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>

        <span className="text-sm">/</span>

        <span className="text-sm">
          {String(totalSlides).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
