"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Courses & Training", "/courses"],
  ["Gallery", "/gallery"],
  ["Contact Us", "/contact"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(72);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Clean body scroll lock logic without page jump bugs
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            scrolled
              ? `
                bg-white/95
                backdrop-blur-2xl
                border-b border-[#c5a880]/20
                shadow-[0_20px_60px_-20px_rgba(157,53,38,0.2)]
                py-2
              `
              : `
                bg-white/70
                backdrop-blur-xl
                border-b border-slate-200/30
                shadow-sm
                py-3
              `
          }
        `}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex items-center gap-2 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-[#9d3526]/50 focus:ring-offset-2 rounded-2xl flex-shrink-0"
            aria-label="Doric Skills Home"
          >
            <div
              className="
                absolute -inset-4
                rounded-3xl
                bg-gradient-to-r from-[#9d3526]/10 via-[#c5a880]/10 to-[#9d3526]/10
                blur-2xl
                opacity-0
                transition-all duration-1000
                group-hover:opacity-100
                group-hover:scale-110
              "
            />

            <div
              className="
                relative flex items-center justify-center
                transition-all duration-500
                group-hover:-translate-y-1
              "
            >
              <Image
                src="/images/Doric skills logo png 02.png"
                alt="Doric Skills logo"
                width={200}
                height={200}
                className="h-12 sm:h-16 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <div
              className="
                flex items-center
                gap-0.5
                rounded-full
                border border-[#c5a880]/15
                bg-white/50
                p-1
                shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]
                backdrop-blur-md
              "
            >
              {links.map(([label, href]) => {
                const isActive =
                  pathname === href ||
                  (href !== "/" && pathname.startsWith(href));

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      group relative
                      overflow-hidden
                      rounded-full
                      px-3 lg:px-4
                      py-1.5 lg:py-2
                      text-[12px] lg:text-[13px]
                      font-semibold
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#9d3526]/30
                      ${
                        isActive
                          ? "text-white"
                          : "text-[#555555] hover:text-[#9d3526]"
                      }
                    `}
                  >
                    {isActive && (
                      <span
                        className="
                          absolute inset-0
                          rounded-full
                          bg-gradient-to-r
                          from-[#9d3526]
                          to-[#8c3023]
                          shadow-md
                          shadow-[#9d3526]/30
                          animate-in
                          fade-in
                          duration-500
                        "
                      />
                    )}

                    <span
                      className={`
                        absolute inset-0
                        rounded-full
                        bg-gradient-to-r
                        from-[#9d3526]/10
                        to-[#c5a880]/10
                        transition-all
                        duration-500
                        ease-out
                        ${
                          isActive
                            ? "scale-0 opacity-0"
                            : "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                        }
                      `}
                    />

                    <span
                      className="
                        absolute inset-0
                        rounded-full
                        opacity-0
                        blur-md
                        bg-[#9d3526]/20
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                      {label}
                      <span
                        className={`
                          text-[8px] lg:text-[9px]
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100"
                          }
                        `}
                      >
                        ↗
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="
                group relative
                hidden
                overflow-hidden
                rounded-full
                bg-gradient-to-r
                from-[#9d3526]
                to-[#7a2a1e]
                px-4 lg:px-6
                py-2 lg:py-2.5
                text-[11px] lg:text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-[#9d3526]/30
                transition-all
                duration-500
                hover:-translate-y-0.5
                hover:shadow-2xl
                hover:shadow-[#9d3526]/40
                focus:outline-none
                focus:ring-2
                focus:ring-[#9d3526]/50
                focus:ring-offset-2
                sm:inline-flex
              "
            >
              <span
                className="
                  absolute inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-transform
                  duration-1000
                  group-hover:translate-x-full
                "
              />
              <span className="relative z-10 flex items-center gap-1.5 lg:gap-2">
                Get Started
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                relative
                flex
                h-9 w-9 sm:h-11 sm:w-11
                flex-col
                items-center
                justify-center
                gap-1 sm:gap-1.5
                rounded-xl sm:rounded-2xl
                border
                border-[#c5a880]/20
                bg-white/60
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white
                hover:shadow-md
                focus:outline-none
                focus:ring-2
                focus:ring-[#9d3526]/30
                md:hidden
              "
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={`
                  h-[2px]
                  w-5 sm:w-6
                  rounded-full
                  bg-[#111111]
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${isOpen ? "translate-y-[5px] sm:translate-y-[7px] rotate-45" : ""}
                `}
              />
              <span
                className={`
                  h-[2px]
                  w-5 sm:w-6
                  rounded-full
                  bg-[#111111]
                  transition-all
                  duration-300
                  ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}
                `}
              />
              <span
                className={`
                  h-[2px]
                  w-5 sm:w-6
                  rounded-full
                  bg-[#111111]
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${isOpen ? "-translate-y-[5px] sm:-translate-y-[7px] -rotate-45" : ""}
                `}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`
          fixed
          inset-x-0
          bg-white/98
          backdrop-blur-2xl
          border-t
          border-[#c5a880]/20
          shadow-2xl
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          md:hidden
          overflow-y-auto
          z-40
          ${isOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-full pointer-events-none"}
        `}
        style={{
          top: `${headerHeight}px`,
          height: `calc(100dvh - ${headerHeight}px)`,
        }}
      >
        <div className="px-4 sm:px-6 py-6 h-full flex flex-col justify-between">
          <div className="space-y-1.5 sm:space-y-2">
            {links.map(([label, href], index) => {
              const isActive =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href));

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl sm:rounded-2xl
                    border
                    px-4 sm:px-5
                    py-3 sm:py-4
                    font-medium
                    text-sm sm:text-base
                    transition-all
                    duration-500
                    ${
                      isActive
                        ? `
                          border-[#9d3526]/20
                          bg-gradient-to-r
                          from-[#9d3526]/10
                          to-[#c5a880]/5
                          text-[#9d3526]
                          translate-x-1 sm:translate-x-2
                          shadow-md
                        `
                        : `
                          border-transparent
                          text-[#555555]
                          hover:border-[#c5a880]/20
                          hover:bg-[#faf9f7]
                          hover:text-[#9d3526]
                          hover:translate-x-1 sm:hover:translate-x-2
                          hover:shadow-md
                        `
                    }
                  `}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <span className="flex items-center gap-2 sm:gap-3">
                    <span
                      className={`
                        h-1.5 w-1.5 sm:h-2 sm:w-2
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "bg-[#9d3526] scale-100"
                            : "bg-[#c5a880]/30 scale-75 group-hover:scale-100 group-hover:bg-[#9d3526]"
                        }
                      `}
                    />
                    {label}
                  </span>

                  <span
                    className="
                      text-sm
                      opacity-0
                      -translate-x-2
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="
              group
              mt-auto
              flex
              items-center
              justify-center
              gap-2 sm:gap-3
              rounded-xl sm:rounded-2xl
              bg-gradient-to-r
              from-[#9d3526]
              to-[#7a2a1e]
              px-4 sm:px-6
              py-3.5 sm:py-4
              font-semibold
              text-sm sm:text-base
              text-white
              shadow-xl
              shadow-[#9d3526]/30
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
              hover:shadow-[#9d3526]/40
            "
          >
            <span className="text-[#c5a880] text-base sm:text-lg">✦</span>
            Get Started
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}