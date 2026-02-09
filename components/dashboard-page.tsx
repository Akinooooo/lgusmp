"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ChevronRight, Layers } from "lucide-react"

interface DashboardPageProps {
  onCardClick: (cardIndex: number) => void
  onBack: () => void
}

const cardLabels = [
  "Grade 7 - A",
  "Grade 7 - B",
  "Grade 7 - C",
  "Grade 8 - A",
  "Grade 8 - B",
  "Grade 8 - C",
  "Grade 9 - A",
  "Grade 9 - B",
  "Grade 9 - C",
  "Grade 10 - A",
  "Grade 10 - B",
  "Grade 10 - C",
  "Faculty",
]

const cardColors = [
  "from-[#C5D89D]/40 to-[#C5D89D]/10",
  "from-[#9CAB84]/30 to-[#9CAB84]/10",
  "from-[#89986D]/25 to-[#89986D]/5",
  "from-[#C5D89D]/35 to-[#C5D89D]/10",
  "from-[#9CAB84]/25 to-[#9CAB84]/5",
  "from-[#89986D]/30 to-[#89986D]/10",
  "from-[#C5D89D]/30 to-[#C5D89D]/5",
  "from-[#9CAB84]/35 to-[#9CAB84]/10",
  "from-[#89986D]/25 to-[#89986D]/8",
  "from-[#C5D89D]/40 to-[#C5D89D]/8",
  "from-[#9CAB84]/30 to-[#9CAB84]/8",
  "from-[#89986D]/30 to-[#89986D]/5",
  "from-[#89986D]/40 to-[#9CAB84]/15",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
}

const cardVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function DashboardPage({ onCardClick, onBack }: DashboardPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0.97,
        filter: "blur(6px)",
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      }}
      className="min-h-screen relative"
      style={{ background: "linear-gradient(180deg, #F6F0D7 0%, #ede7c8 100%)" }}
    >
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#C5D89D] blob-1 opacity-15" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#9CAB84] blob-2 opacity-10" />
      </div>

      {/* Dot pattern */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #89986D 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Header */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-10 glass border-b border-[#C5D89D]/20"
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <motion.button
              onClick={onBack}
              whileHover={{ x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-xl bg-[#F6F0D7] px-4 py-2.5 text-sm font-medium text-[#89986D] ring-1 ring-[#C5D89D]/30 genz-btn"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </motion.button>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold tracking-tight text-[#89986D]">
                Dashboard
              </h1>
              <p className="text-xs text-[#9CAB84]">
                Select a section to view profiles
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-[#C5D89D]/20 px-4 py-2 ring-1 ring-[#C5D89D]/20">
            <Layers className="h-4 w-4 text-[#89986D]" />
            <span className="text-xs font-medium text-[#89986D]">
              {cardLabels.length} Sections
            </span>
          </div>
        </div>
      </motion.header>

      {/* Cards Grid */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {cardLabels.map((label, index) => (
            <motion.button
              key={label}
              variants={cardVariants}
              onClick={() => onCardClick(index)}
              className="genz-card group relative flex flex-col h-44 rounded-2xl bg-[#F6F0D7]/70 backdrop-blur-sm p-6 text-left ring-1 ring-[#C5D89D]/20 overflow-hidden"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cardColors[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Index badge */}
                <div className="flex items-center gap-2 mb-auto">
                  <span className="flex items-center justify-center h-7 w-7 rounded-lg bg-[#C5D89D]/20 text-xs font-mono font-bold text-[#89986D] group-hover:bg-[#89986D] group-hover:text-[#F6F0D7] transition-all duration-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Label */}
                <div className="mt-auto">
                  <span className="text-lg font-bold tracking-tight text-[#89986D] group-hover:text-[#89986D] transition-colors duration-300 text-balance">
                    {label}
                  </span>
                </div>

                {/* Bottom arrow */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-px flex-1 bg-[#C5D89D]/30 group-hover:bg-[#9CAB84]/50 transition-colors duration-400" />
                  <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#C5D89D]/20 group-hover:bg-[#89986D] transition-all duration-400">
                    <ChevronRight className="h-3.5 w-3.5 text-[#89986D] group-hover:text-[#F6F0D7] transition-colors duration-400" />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
