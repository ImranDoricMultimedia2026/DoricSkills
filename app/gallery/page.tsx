"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Grid3x3,
  LayoutGrid,
  List,
  Camera,
  Calendar,
  Users,
  Award,
  Play,
  Heart,
  Share2,
  Copy,
  Check,
} from "lucide-react";

// Gallery Data
const galleryItems = [
  // 2025 Events
  {
    id: 1,
    title: "Tech Summit 2025",
    description: "Annual technology conference with 500+ attendees",
    category: "events",
    year: "2025",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&auto=format&fit=crop&q=60",
    size: "large",
    date: "15 Jan 2025",
    location: "Mumbai, India",
  },
  {
    id: 2,
    title: "Web Development Workshop",
    description: "Hands-on workshop on modern web technologies",
    category: "workshops",
    year: "2025",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&auto=format&fit=crop&q=60",
    size: "medium",
    date: "20 Feb 2025",
    location: "Online",
  },
  {
    id: 3,
    title: "Graduation Ceremony 2025",
    description: "Celebrating 2000+ graduates",
    category: "events",
    year: "2025",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=400&auto=format&fit=crop&q=60",
    size: "large",
    date: "25 Mar 2025",
    location: "Delhi, India",
  },
  {
    id: 4,
    title: "Student Project Showcase",
    description: "Innovative projects by our talented students",
    category: "projects",
    year: "2025",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=60",
    size: "medium",
    date: "10 Apr 2025",
    location: "Bangalore, India",
  },
  {
    id: 5,
    title: "AI & ML Conference",
    description: "Future of AI with industry experts",
    category: "events",
    year: "2025",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&auto=format&fit=crop&q=60",
    size: "small",
    date: "15 May 2025",
    location: "Hyderabad, India",
  },
  {
    id: 6,
    title: "Design Thinking Workshop",
    description: "Creative problem solving for designers",
    category: "workshops",
    year: "2025",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&auto=format&fit=crop&q=60",
    size: "medium",
    date: "20 Jun 2025",
    location: "Online",
  },
  {
    id: 7,
    title: "Cloud Computing Bootcamp",
    description: "Intensive AWS and Azure training",
    category: "workshops",
    year: "2025",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=60",
    size: "large",
    date: "10 Jul 2025",
    location: "Mumbai, India",
  },
  {
    id: 8,
    title: "Student Awards 2025",
    description: "Celebrating outstanding student achievements",
    category: "achievements",
    year: "2025",
    image: "https://images.unsplash.com/photo-1531973576160-7126cd90372e?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1531973576160-7126cd90372e?w=400&auto=format&fit=crop&q=60",
    size: "medium",
    date: "15 Aug 2025",
    location: "Delhi, India",
  },
  // 2024 Events
  {
    id: 9,
    title: "Data Science Hackathon",
    description: "24-hour coding competition",
    category: "events",
    year: "2024",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop&q=60",
    size: "large",
    date: "10 Sep 2024",
    location: "Pune, India",
  },
  {
    id: 10,
    title: "Cybersecurity Workshop",
    description: "Hands-on security training",
    category: "workshops",
    year: "2024",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60",
    size: "medium",
    date: "20 Oct 2024",
    location: "Online",
  },
  {
    id: 11,
    title: "Graduation 2024",
    description: "Celebrating 1500+ graduates",
    category: "events",
    year: "2024",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&auto=format&fit=crop&q=60",
    size: "large",
    date: "25 Nov 2024",
    location: "Mumbai, India",
  },
  {
    id: 12,
    title: "Mobile App Hackathon",
    description: "Build apps in 48 hours",
    category: "events",
    year: "2024",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&auto=format&fit=crop&q=60",
    size: "medium",
    date: "15 Dec 2024",
    location: "Bangalore, India",
  },
  // 2023 Events
  {
    id: 13,
    title: "Digital Marketing Workshop",
    description: "Learn digital marketing strategies",
    category: "workshops",
    year: "2023",
    image: "https://images.unsplash.com/photo-1432889821006-c0c5a2b2f1b2?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1432889821006-c0c5a2b2f1b2?w=400&auto=format&fit=crop&q=60",
    size: "small",
    date: "10 Jan 2023",
    location: "Online",
  },
  {
    id: 14,
    title: "Student Awards 2023",
    description: "Celebrating excellence",
    category: "achievements",
    year: "2023",
    image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=400&auto=format&fit=crop&q=60",
    size: "large",
    date: "20 Mar 2023",
    location: "Delhi, India",
  },
  {
    id: 15,
    title: "Web Dev Bootcamp",
    description: "Intensive web development training",
    category: "workshops",
    year: "2023",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60",
    size: "medium",
    date: "15 Jun 2023",
    location: "Mumbai, India",
  },
];

// Categories
const categories = [
  { id: "all", label: "All", icon: <Grid3x3 className="h-4 w-4" /> },
  { id: "events", label: "Events", icon: <Calendar className="h-4 w-4" /> },
  { id: "workshops", label: "Workshops", icon: <Users className="h-4 w-4" /> },
  { id: "projects", label: "Projects", icon: <Camera className="h-4 w-4" /> },
  { id: "achievements", label: "Achievements", icon: <Award className="h-4 w-4" /> },
];

// Years
const years = ["All", "2025", "2024", "2023"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const filteredItems = galleryItems.filter((item) => {
    const categoryMatch = selectedCategory === "all" || item.category === selectedCategory;
    const yearMatch = selectedYear === "All" || item.year === selectedYear;
    return categoryMatch && yearMatch;
  });

  const currentItem = lightboxOpen ? galleryItems[currentImageIndex] : null;

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === "Escape") {
        setLightboxOpen(false);
        setIsZoomed(false);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  // Body scroll lock
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen]);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
    setIsZoomed(false);
  }, [filteredItems.length]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    setIsZoomed(false);
  }, [filteredItems.length]);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    setIsZoomed(false);
  };

  const handleDownload = async () => {
    if (!currentItem) return;
    try {
      const response = await fetch(currentItem.image);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${currentItem.title}-${currentItem.year}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const handleShare = async () => {
    if (!currentItem) return;
    try {
      await navigator.clipboard.writeText(
        `${currentItem.title} - Doric Skills Gallery\n${currentItem.image}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  return (
    <>
      {/* ============================================
          SCHEMA: GALLERY PAGE
          ============================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Doric Skills Gallery",
            "description": "Explore our training sessions, workshops, events, student activities and achievement photos.",
            "url": "https://doricskills.com/gallery",
          })
        }}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#9d3526] via-[#8c3023] to-[#6f241b] pt-32 pb-20 md:pt-40 md:pb-28" style={{marginTop:"70px"}}>
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
              Our Gallery
            </span>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Moments That{" "}
              <span className="bg-gradient-to-r from-[#c5a880] to-[#f5e6d3] bg-clip-text text-transparent">
                Inspire
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Explore our journey through training sessions, workshops, events,
              and student achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          GALLERY CONTENT
          ============================================ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-between gap-4 mb-8"
          >
            <div>
              <p className="text-sm text-gray-500">
                Showing <span className="font-bold text-[#111111]">{filteredItems.length}</span>{" "}
                images
              </p>
            </div>
            <div className="flex items-center gap-3">
              {/* View Mode */}
              <div className="flex rounded-xl bg-[#faf9f7] p-1 border border-[#c5a880]/10">
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "masonry" ? "bg-white shadow-lg text-[#9d3526]" : "text-gray-400 hover:text-gray-600"
                  }`}
                  aria-label="Masonry view"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "grid" ? "bg-white shadow-lg text-[#9d3526]" : "text-gray-400 hover:text-gray-600"
                  }`}
                  aria-label="Grid view"
                >
                  <Grid3x3 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-[#9d3526] text-white shadow-lg shadow-[#9d3526]/30"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-[#c5a880]/20"
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Year Filter */}
            <div className="flex flex-wrap gap-2 ml-auto">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    selectedYear === year
                      ? "bg-[#9d3526] text-white shadow-lg shadow-[#9d3526]/30"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-[#c5a880]/20"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${selectedYear}-${viewMode}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className={viewMode === "masonry" ? "columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4" : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                    viewMode === "masonry" ? "break-inside-avoid" : ""
                  } ${item.size === "large" ? "sm:col-span-2 sm:row-span-2" : ""}`}
                  onClick={() => handleImageClick(filteredItems.indexOf(item))}
                >
                  <div className="relative">
                    <Image
                      src={item.thumbnail || item.image}
                      alt={item.title}
                      width={item.size === "large" ? 800 : 400}
                      height={item.size === "large" ? 600 : 300}
                      className={`w-full object-cover transition-all duration-700 ${
                        hoveredId === item.id ? "scale-110" : "scale-100"
                      }`}
                      style={{
                        height: item.size === "large" ? "500px" : item.size === "medium" ? "350px" : "250px",
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                      hoveredId === item.id ? "opacity-100" : "opacity-0"
                    }`} />

                    {/* Content Overlay */}
                    <div className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-500 ${
                      hoveredId === item.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="rounded-full bg-[#9d3526]/80 px-2 py-0.5 text-xs font-medium">
                          {item.category}
                        </span>
                        <span className="text-xs text-white/80">{item.year}</span>
                      </div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-sm text-white/80 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-white/60">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className={`absolute top-3 right-3 flex gap-1.5 transition-all duration-500 ${
                      hoveredId === item.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload();
                        }}
                        className="rounded-full bg-black/50 p-2 backdrop-blur-sm text-white hover:bg-[#9d3526] transition-all duration-300"
                        aria-label="Download"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageClick(filteredItems.indexOf(item));
                        }}
                        className="rounded-full bg-black/50 p-2 backdrop-blur-sm text-white hover:bg-[#9d3526] transition-all duration-300"
                        aria-label="View"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="py-20 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#faf9f7]">
                <Camera className="h-10 w-10 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-[#111111]">No images found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          LIGHTBOX
          ============================================ */}
      <AnimatePresence>
        {lightboxOpen && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setLightboxOpen(false);
                setIsZoomed(false);
              }}
              className="absolute top-4 right-4 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 z-20 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {currentImageIndex + 1} / {filteredItems.length}
            </div>

            {/* Controls - Top Right */}
            <div className="absolute top-4 right-16 z-20 flex gap-2">
              <button
                onClick={toggleFullscreen}
                className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Fullscreen"
              >
                {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
              </button>
              <button
                onClick={handleDownload}
                className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Download"
              >
                <Download className="h-5 w-5" />
              </button>
              <button
                onClick={handleShare}
                className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all duration-300 relative"
                aria-label="Share"
              >
                {copied ? <Check className="h-5 w-5 text-green-400" /> : <Share2 className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Zoom"
              >
                {isZoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
              </button>
            </div>

            {/* Image Container */}
            <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: isZoomed ? 1.5 : 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  width={1200}
                  height={800}
                  className="max-h-[80vh] w-auto object-contain rounded-2xl"
                  priority
                />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                  <h3 className="text-xl font-bold text-white">{currentItem.title}</h3>
                  <p className="text-sm text-white/80">{currentItem.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-white/60">
                    <span>{currentItem.date}</span>
                    <span>•</span>
                    <span>{currentItem.location}</span>
                    <span>•</span>
                    <span className="rounded-full bg-[#9d3526] px-2 py-0.5 text-white">
                      {currentItem.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 z-20 rounded-full bg-white/10 p-4 text-white hover:bg-white/20 transition-all duration-300"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 z-20 rounded-full bg-white/10 p-4 text-white hover:bg-white/20 transition-all duration-300"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Thumbnails Navigation */}
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden md:flex gap-2">
                  {filteredItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsZoomed(false);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "w-8 bg-white"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Keyboard Shortcuts Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/30 hidden md:block">
              Use arrow keys to navigate • ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}