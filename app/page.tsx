"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { LoginPage } from "@/components/login-page"
import { DashboardPage } from "@/components/dashboard-page"
import { ProfilesPage } from "@/components/profiles-page"

type View = "login" | "dashboard" | "profiles"

export default function Page() {
  const [currentView, setCurrentView] = useState<View>("login")
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0)

  const handleLogin = () => {
    setCurrentView("dashboard")
  }

  const handleCardClick = (cardIndex: number) => {
    setSelectedCardIndex(cardIndex)
    setCurrentView("profiles")
  }

  const handleBackToDashboard = () => {
    setCurrentView("dashboard")
  }

  const handleBackToLogin = () => {
    setCurrentView("login")
  }

  return (
    <main className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {currentView === "login" && (
          <LoginPage key="login" onLogin={handleLogin} />
        )}
        {currentView === "dashboard" && (
          <DashboardPage
            key="dashboard"
            onCardClick={handleCardClick}
            onBack={handleBackToLogin}
          />
        )}
        {currentView === "profiles" && (
          <ProfilesPage
            key="profiles"
            cardIndex={selectedCardIndex}
            onBack={handleBackToDashboard}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
