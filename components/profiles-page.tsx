"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, X, MapPin, Calendar, Users, Phone, Mail, User } from "lucide-react"

interface ProfilesPageProps {
  cardIndex: number
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

interface Profile {
  id: number
  name: string
  age: number
  sex: string
  address: string
  contact: string
  email: string
  guardian: string
  birthday: string
}

function generateProfiles(cardIndex: number): Profile[] {
  const firstNames = [
    "Maria", "Jose", "Juan", "Ana", "Carlos",
    "Sofia", "Miguel", "Lucia", "Rafael", "Isabella",
    "Gabriel", "Carmen", "Diego", "Elena", "Marco",
    "Rosa", "Pedro", "Clara", "Luis", "Victoria",
  ]
  const lastNames = [
    "Santos", "Reyes", "Cruz", "Garcia", "Torres",
    "Flores", "Rivera", "Morales", "Ramos", "Diaz",
    "Lopez", "Mendoza", "Castillo", "Aquino", "Navarro",
    "Bautista", "Villanueva", "Dela Cruz", "Fernandez", "Santiago",
  ]
  const streets = [
    "Rizal Street", "Mabini Avenue", "Bonifacio Road",
    "Aguinaldo Blvd", "Luna Drive", "Del Pilar Lane",
  ]
  const cities = [
    "Manila", "Quezon City", "Makati", "Cebu City",
    "Davao City", "Pasig",
  ]

  const count = cardIndex === 12 ? 8 : 15
  const profiles: Profile[] = []

  for (let i = 0; i < count; i++) {
    const firstName = firstNames[(cardIndex * 3 + i) % firstNames.length]
    const lastName = lastNames[(cardIndex * 5 + i * 2) % lastNames.length]
    const sex = i % 2 === 0 ? "Female" : "Male"
    const baseAge = cardIndex === 12 ? 30 + (i % 20) : 12 + Math.floor(cardIndex / 3)
    const birthYear = 2026 - baseAge
    const birthMonth = ((i * 3 + 1) % 12) + 1
    const birthDay = ((i * 7 + 5) % 28) + 1

    profiles.push({
      id: i,
      name: `${firstName} ${lastName}`,
      age: baseAge,
      sex,
      address: `${100 + i * 12} ${streets[i % streets.length]}, ${cities[i % cities.length]}`,
      contact: `09${170 + cardIndex}${String(1000000 + i * 12345).slice(0, 7)}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@email.com`,
      guardian: `${firstNames[(i + 5) % firstNames.length]} ${lastNames[(i + 3) % lastNames.length]}`,
      birthday: `${birthMonth.toString().padStart(2, "0")}/${birthDay.toString().padStart(2, "0")}/${birthYear}`,
    })
  }

  return profiles
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2,
    },
  },
}

const profileCardVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export function ProfilesPage({ cardIndex, onBack }: ProfilesPageProps) {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null)
  const profiles = generateProfiles(cardIndex)
  const title = cardLabels[cardIndex] || "Unknown"

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{
        opacity: 0,
        x: 60,
        transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen relative"
      style={{ background: "linear-gradient(180deg, #F6F0D7 0%, #ede7c8 100%)" }}
    >
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-32 w-80 h-80 bg-[#C5D89D] blob-1 opacity-15" />
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-[#9CAB84] blob-3 opacity-10" />
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
                {title}
              </h1>
              <p className="text-xs text-[#9CAB84]">
                Click a profile to view details
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-[#C5D89D]/20 px-4 py-2 ring-1 ring-[#C5D89D]/20">
            <User className="h-4 w-4 text-[#89986D]" />
            <span className="text-xs font-medium text-[#89986D]">
              {profiles.length} Profiles
            </span>
          </div>
        </div>
      </motion.header>

      {/* Profiles Grid */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {profiles.map((profile) => (
            <motion.button
              key={profile.id}
              variants={profileCardVariants}
              onClick={() => setSelectedProfile(profile)}
              className="genz-card group flex flex-col items-center gap-3 rounded-2xl bg-[#F6F0D7]/70 backdrop-blur-sm p-5 ring-1 ring-[#C5D89D]/20 overflow-hidden relative"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C5D89D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Avatar */}
              <div className="relative z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C5D89D]/40 to-[#9CAB84]/20 ring-2 ring-[#C5D89D]/20 group-hover:ring-[#89986D]/40 transition-all duration-400">
                  <span className="text-xl font-bold text-[#89986D] group-hover:scale-110 transition-transform duration-300 inline-block">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                {/* Online dot */}
                <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-[#C5D89D] ring-2 ring-[#F6F0D7] group-hover:bg-[#89986D] transition-colors duration-300" />
              </div>

              {/* Name */}
              <div className="relative z-10 flex flex-col items-center gap-0.5 mt-1">
                <span className="text-sm font-semibold text-[#89986D] text-center leading-tight text-pretty">
                  {profile.name}
                </span>
                <span className="text-[11px] text-[#9CAB84]/70 font-medium">
                  {profile.sex}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Profile Detail Modal */}
      <AnimatePresence>
        {selectedProfile && (
          <ProfileModal
            profile={selectedProfile}
            onClose={() => setSelectedProfile(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ProfileModal({
  profile,
  onClose,
}: {
  profile: Profile
  onClose: () => void
}) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-[#89986D]/20 backdrop-blur-md"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: 40,
          transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md rounded-3xl bg-[#F6F0D7] shadow-2xl shadow-[#89986D]/10 ring-1 ring-[#C5D89D]/30 overflow-hidden"
        >
          {/* Header gradient */}
          <div className="relative bg-gradient-to-br from-[#9CAB84] to-[#89986D] px-8 pt-8 pb-14">
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-xl bg-[#F6F0D7]/20 text-[#F6F0D7] hover:bg-[#F6F0D7]/30 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </motion.button>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#C5D89D] animate-pulse" />
              <span className="text-xs font-medium text-[#F6F0D7]/80 tracking-wide">
                Profile Details
              </span>
            </div>
          </div>

          {/* Avatar overlapping */}
          <div className="flex justify-center -mt-10">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C5D89D] to-[#9CAB84] text-xl font-bold text-[#F6F0D7] ring-4 ring-[#F6F0D7] shadow-lg"
            >
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </motion.div>
          </div>

          {/* Name */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-4 text-center px-8"
          >
            <h2 className="text-xl font-bold text-[#89986D]">
              {profile.name}
            </h2>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="rounded-full bg-[#C5D89D]/20 px-3 py-1 text-xs font-medium text-[#89986D]">
                {profile.sex}
              </span>
              <span className="rounded-full bg-[#9CAB84]/15 px-3 py-1 text-xs font-medium text-[#89986D]">
                {profile.age} years old
              </span>
            </div>
          </motion.div>

          {/* Info rows */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="px-6 pb-6 pt-5"
          >
            <div className="flex flex-col gap-2.5">
              <InfoRow
                icon={<Calendar className="h-4 w-4" />}
                label="Birthday"
                value={profile.birthday}
              />
              <InfoRow
                icon={<MapPin className="h-4 w-4" />}
                label="Address"
                value={profile.address}
              />
              <InfoRow
                icon={<Users className="h-4 w-4" />}
                label="Guardian"
                value={profile.guardian}
              />
              <InfoRow
                icon={<Phone className="h-4 w-4" />}
                label="Contact"
                value={profile.contact}
              />
              <InfoRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={profile.email}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-[#C5D89D]/10 p-3.5 hover:bg-[#C5D89D]/20 transition-colors duration-300 group">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#C5D89D]/20 text-[#89986D] group-hover:bg-[#89986D] group-hover:text-[#F6F0D7] transition-all duration-300">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-medium text-[#9CAB84] tracking-wide">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-[#89986D] break-words">
          {value}
        </p>
      </div>
    </div>
  )
}
