"use client"

import type { ReactNode } from "react"

interface CustomCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "tech" | "project" | "achievement"
}

export const CustomCard = ({ children, className = "", variant = "default" }: CustomCardProps) => {
  const variants = {
    default: "bg-background/50 border border-border/50 backdrop-blur-sm",
    tech: "bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-l-primary border-y border-r border-border/30",
    project:
      "bg-background/80 border border-border/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50",
    achievement: "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 shadow-md",
  }

  return <div className={`rounded-2xl p-6 ${variants[variant]} ${className}`}>{children}</div>
}

interface CustomButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "ghost" | "tech"
  className?: string
  disabled?: boolean
}

export const CustomButton = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}: CustomButtonProps) => {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    ghost: "hover:bg-accent hover:text-accent-foreground border border-transparent hover:border-border/50",
    tech: "bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-primary/30",
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${variants[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  )
}

interface CustomBadgeProps {
  children: ReactNode
  variant?: "default" | "tech" | "skill" | "status"
  className?: string
}

export const CustomBadge = ({ children, variant = "default", className = "" }: CustomBadgeProps) => {
  const variants = {
    default: "bg-secondary text-secondary-foreground border border-border/50",
    tech: "bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30",
    skill: "bg-accent/20 text-accent-foreground border border-accent/40",
    status: "bg-green-500/20 text-green-400 border border-green-500/40",
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
