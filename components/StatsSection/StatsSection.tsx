"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Users,
  Trophy,
  Globe,
  Star,
  CheckCircle,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  number: number;
  label: string;
  suffix?: string;
  color: string;
  description: string;
}

const stats: StatItem[] = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    number: 10000,
    label: "Students Trained",
    suffix: "+",
    color: "#9d3526",
    description: "Global learners trust our expertise",
  },
  {
    icon: <Users className="h-6 w-6" />,
    number: 50,
    label: "Expert Trainers",
    suffix: "+",
    color: "#c5a880",
    description: "Industry professionals",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    number: 95,
    label: "Success Rate",
    suffix: "%",
    color: "#9d3526",
    description: "Career transformation",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    number: 30,
    label: "Countries Served",
    suffix: "+",
    color: "#c5a880",
    description: "Worldwide presence",
  },
];

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#faf9f7] via-white to-[#f5f0eb] py-20 md:py-28">
      {/* Premium Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#9d3526]/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#c5a880]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#9d3526]/[0.03] blur-3xl" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5ZDM1MjYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTR2NGgtNHY0aDR2NGg0di00aDR2LTRoLTR6bTAtMTB2LTRoLTR2NGgtNHY0aDR2NGg0di00aDR2LTRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Header with Decorative Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[#9d3526]/10 px-5 py-2 mb-5 border border-[#9d3526]/10"
          >
            <Sparkles className="h-4 w-4 text-[#9d3526]" />
            <span className="text-sm font-semibold text-[#9d3526] tracking-wide uppercase">
              Our Impact in Numbers
            </span>
          </motion.div>

          <h2 className="text-4xl font-bold text-[#111111] md:text-5xl lg:text-6xl leading-tight">
            Transforming Careers
            <br />
            <span className="bg-gradient-to-r from-[#9d3526] to-[#c5a880] bg-clip-text text-transparent">
              Across the Globe
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#9d3526] to-[#c5a880] mx-auto mt-6 rounded-full"
          />

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
            Every number represents a success story. Join our community of
            achievers and take your skills to the next level.
          </p>
        </motion.div>

        {/* Premium Stats Grid - Glass Morphism Cards */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-7 text-center border border-white/50 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:bg-white/90">
                {/* Premium Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9d3526] to-[#c5a880] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <div className="relative z-10">
                  {/* Animated Icon Container */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg`}
                    style={{
                      background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                    }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Number with Premium Styling */}
                  <p
                    className="text-4xl font-extrabold md:text-5xl lg:text-6xl tracking-tight"
                    style={{ color: stat.color }}
                  >
                    <Counter target={stat.number} suffix={stat.suffix || ""} />
                  </p>

                  <p className="mt-2 text-base font-semibold text-[#111111]">
                    {stat.label}
                  </p>

                  <p className="mt-1 text-sm text-gray-400">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Trust Badges with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4 md:mt-20"
        >
          {/* Rating Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-50 to-yellow-100/50 px-5 py-3 border border-yellow-200/50 shadow-sm"
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-gray-800">4.9/5</span>
            <span className="text-sm text-gray-500">(2,000+ reviews)</span>
          </motion.div>

          {/* Satisfaction Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-green-50 to-green-100/50 px-5 py-3 border border-green-200/50 shadow-sm"
          >
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="font-bold text-gray-800">100%</span>
            <span className="text-sm text-gray-500">Satisfaction</span>
          </motion.div>

          {/* Certified Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100/50 px-5 py-3 border border-blue-200/50 shadow-sm"
          >
            <Award className="h-5 w-5 text-blue-500" />
            <span className="font-bold text-gray-800">Certified</span>
            <span className="text-sm text-gray-500">Programs</span>
          </motion.div>

          {/* Extra Premium Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#9d3526]/5 to-[#c5a880]/10 px-5 py-3 border border-[#9d3526]/10 shadow-sm"
          >
            <TrendingUp className="h-5 w-5 text-[#9d3526]" />
            <span className="font-bold text-gray-800">Top Rated</span>
            <span className="text-sm text-gray-500">Industry Leader</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}