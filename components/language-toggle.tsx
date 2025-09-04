"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "cs" : "en")}
      className="h-9 px-3 font-medium"
    >
      {language === "en" ? "🇨🇿 CS" : "🇺🇸 EN"}
    </Button>
  )
}
