"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, XCircle, Eye, EyeOff } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function LiveDemo() {
  const { t } = useLanguage()
  const [password, setPassword] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "success" | "error">("idle")

  const calculatePasswordStrength = (pwd: string) => {
    let strength = 0
    if (pwd.length >= 8) strength += 25
    if (/[A-Z]/.test(pwd)) strength += 25
    if (/[0-9]/.test(pwd)) strength += 25
    if (/[^A-Za-z0-9]/.test(pwd)) strength += 25
    return strength
  }

  useEffect(() => {
    setPasswordStrength(calculatePasswordStrength(password))
  }, [password])

  const handleVerification = async () => {
    setIsVerifying(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (verificationCode === "123456") {
      setVerificationStatus("success")
    } else {
      setVerificationStatus("error")
    }
    setIsVerifying(false)
  }

  const getStrengthColor = (strength: number) => {
    if (strength < 25) return "bg-red-500"
    if (strength < 50) return "bg-orange-500"
    if (strength < 75) return "bg-yellow-500"
    return "bg-green-500"
  }

  const getStrengthText = (strength: number) => {
    if (strength < 25) return t("weak")
    if (strength < 50) return t("fair")
    if (strength < 75) return t("good")
    return t("strong")
  }

  return (
    <section id="live-demo" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("liveDemo")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("liveDemoDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Password Strength Checker */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                {t("passwordStrengthChecker")}
              </CardTitle>
              <CardDescription>{t("passwordStrengthDescription")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder={t("enterPassword")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>

              {password && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>
                      {t("strength")}: {getStrengthText(passwordStrength)}
                    </span>
                    <span>{passwordStrength}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor(passwordStrength)}`}
                      style={{ width: `${passwordStrength}%` }}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <Badge variant={password.length >= 8 ? "default" : "secondary"}>8+ {t("characters")}</Badge>
                    <Badge variant={/[A-Z]/.test(password) ? "default" : "secondary"}>{t("uppercase")}</Badge>
                    <Badge variant={/[0-9]/.test(password) ? "default" : "secondary"}>{t("numbers")}</Badge>
                    <Badge variant={/[^A-Za-z0-9]/.test(password) ? "default" : "secondary"}>{t("symbols")}</Badge>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 2FA Verification */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                {t("twoFactorAuth")}
              </CardTitle>
              <CardDescription>{t("twoFactorDescription")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">{t("simulatedCode")}</p>
                <code className="text-lg font-mono font-bold text-primary">123456</code>
              </div>

              <Input
                placeholder={t("enterVerificationCode")}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength={6}
                className="text-center text-lg tracking-widest font-mono"
              />

              <Button
                onClick={handleVerification}
                disabled={verificationCode.length !== 6 || isVerifying}
                className="w-full"
              >
                {isVerifying ? t("verifying") : t("verify")}
              </Button>

              {verificationStatus !== "idle" && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    verificationStatus === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {verificationStatus === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <XCircle className="w-5 h-5" />
                  )}
                  <span className="text-sm font-medium">
                    {verificationStatus === "success" ? t("verificationSuccess") : t("verificationError")}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
