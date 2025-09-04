"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Code, Gamepad2, Award, Star, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Achievements() {
  const { t } = useLanguage()

  const achievements = [
    {
      icon: Code,
      title: t("fullStackDeveloper"),
      description: t("fullStackDescription"),
      category: "professional",
      rarity: "epic",
    },
    {
      icon: Trophy,
      title: t("authenticationExpert"),
      description: t("authenticationDescription"),
      category: "professional",
      rarity: "legendary",
    },
    {
      icon: Gamepad2,
      title: "Flawless Victory",
      description: t("mortalKombatDescription"),
      category: "gaming",
      rarity: "rare",
      isEasterEgg: true,
    },
    {
      icon: Zap,
      title: t("realTimeApplications"),
      description: t("realTimeDescription"),
      category: "professional",
      rarity: "epic",
    },
    {
      icon: Award,
      title: t("problemSolver"),
      description: t("problemSolverDescription"),
      category: "professional",
      rarity: "common",
    },
    {
      icon: Star,
      title: t("continuousLearner"),
      description: t("continuousLearnerDescription"),
      category: "personal",
      rarity: "uncommon",
    },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "from-yellow-400 to-orange-500"
      case "epic":
        return "from-purple-400 to-pink-500"
      case "rare":
        return "from-blue-400 to-cyan-500"
      case "uncommon":
        return "from-green-400 to-emerald-500"
      default:
        return "from-gray-400 to-gray-500"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "professional":
        return "💼"
      case "gaming":
        return "🎮"
      case "personal":
        return "🌟"
      default:
        return "🏆"
    }
  }

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("achievements")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("achievementsDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card
                key={index}
                className={`border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  achievement.isEasterEgg ? "ring-2 ring-yellow-500/50 hover:ring-yellow-500" : ""
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${getRarityColor(achievement.rarity)}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{getCategoryIcon(achievement.category)}</span>
                      <Badge
                        variant="outline"
                        className={`bg-gradient-to-r ${getRarityColor(achievement.rarity)} text-white border-0`}
                      >
                        {t(achievement.rarity)}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">
                    {achievement.title}
                    {achievement.isEasterEgg && <span className="ml-2 text-yellow-500 animate-pulse">✨</span>}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{achievement.description}</CardDescription>
                  {achievement.isEasterEgg && (
                    <div className="mt-3 p-2 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <p className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">{t("easterEggNote")}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
