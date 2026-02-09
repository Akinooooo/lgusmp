"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff, ArrowRight } from "lucide-react"

interface LoginPageProps {
  onLogin: () => void
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggingIn(true)
    setTimeout(() => {
      onLogin()
    }, 900)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: "blur(12px)",
        transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F6F0D7 0%, #e8e2c0 50%, #F6F0D7 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5D89D] blob-1 opacity-30"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#9CAB84] blob-2 opacity-20"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="absolute top-1/4 -left-20 w-60 h-60 bg-[#C5D89D] blob-3 opacity-20"
        />
      </div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #89986D 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative w-full max-w-md px-6"
      >
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3,
            }}
            className="animate-float"
          >
            <div className="rounded-3xl bg-[#F6F0D7] p-4 shadow-lg shadow-[#9CAB84]/10 ring-1 ring-[#C5D89D]/30">
              <img
                src="/smplogo.png"
                alt="SMP Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Welcome text */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-sans font-bold tracking-tight text-[#89986D]">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-[#9CAB84]">
              Sign in to continue to your portal
            </p>
          </motion.div>

          {/* Login Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full rounded-3xl bg-[#F6F0D7]/80 backdrop-blur-xl p-8 shadow-xl shadow-[#9CAB84]/8 ring-1 ring-[#C5D89D]/20"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Username */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="username"
                  className="text-xs font-medium tracking-wide text-[#89986D] pl-1"
                >
                  Username
                </label>
                <div className="relative">
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full rounded-2xl bg-[#F6F0D7] px-5 py-3.5 text-sm font-sans text-[#89986D] placeholder:text-[#9CAB84]/50 ring-1 ring-[#C5D89D]/30 focus:outline-none focus:ring-2 focus:ring-[#9CAB84] transition-all duration-300"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-xs font-medium tracking-wide text-[#89986D] pl-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-2xl bg-[#F6F0D7] px-5 py-3.5 pr-12 text-sm font-sans text-[#89986D] placeholder:text-[#9CAB84]/50 ring-1 ring-[#C5D89D]/30 focus:outline-none focus:ring-2 focus:ring-[#9CAB84] transition-all duration-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CAB84] hover:text-[#89986D] transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <motion.button
                type="submit"
                disabled={isLoggingIn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="mt-3 flex items-center justify-center gap-2 w-full rounded-2xl bg-[#89986D] px-6 py-4 text-sm font-semibold text-[#F6F0D7] genz-btn disabled:opacity-70"
              >
                {isLoggingIn ? (
                  <motion.div className="flex items-center gap-3">
                    <motion.div
                      className="h-4 w-4 rounded-full border-2 border-[#F6F0D7]/30 border-t-[#F6F0D7]"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                    <span>Signing in...</span>
                  </motion.div>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xs text-[#9CAB84]/70"
          >
            SMP Management System
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}
