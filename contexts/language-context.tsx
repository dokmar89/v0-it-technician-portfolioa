"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "cs"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.portfolio": "Portfolio",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.title": "IT Technician & Full-Stack Developer",
    "hero.subtitle": "Specializing in TypeScript applications, authentication systems, and modern web solutions",
    "hero.cta": "View My Work",
    "hero.contact": "Get In Touch",

    // About
    "about.title": "About Me",
    "about.description":
      "Passionate IT technician with expertise in building robust web applications and authentication systems. I specialize in TypeScript, React, and modern backend technologies, creating solutions that are both secure and user-friendly.",
    "about.projects": "Projects Completed",
    "about.experience": "Years Experience",
    "about.technologies": "Technologies Mastered",

    // Skills
    "skills.title": "Technical Skills",
    "skills.frontend": "Frontend Development",
    "skills.backend": "Backend & Database",
    "skills.specialized": "Specialized Applications",
    "skills.tools": "Development Tools",

    // Portfolio
    "portfolio.title": "Featured Projects",
    "portfolio.viewDetails": "View Details",
    "portfolio.github": "View on GitHub",

    // Live Demo
    liveDemo: "Live Demo",
    liveDemoDescription: "Interactive demonstrations of authentication and security features I've built",
    passwordStrengthChecker: "Password Strength Checker",
    passwordStrengthDescription: "Real-time password validation with security recommendations",
    twoFactorAuth: "Two-Factor Authentication",
    twoFactorDescription: "Simulated 2FA verification process",
    enterPassword: "Enter your password",
    strength: "Strength",
    characters: "characters",
    uppercase: "Uppercase",
    numbers: "Numbers",
    symbols: "Symbols",
    weak: "Weak",
    fair: "Fair",
    good: "Good",
    strong: "Strong",
    simulatedCode: "Simulated verification code:",
    enterVerificationCode: "Enter verification code",
    verifying: "Verifying...",
    verify: "Verify",
    verificationSuccess: "Verification successful!",
    verificationError: "Invalid code. Try again.",

    // Achievements
    achievements: "Achievements",
    achievementsDescription: "Professional milestones and a few fun accomplishments along the way",
    fullStackDeveloper: "Full-Stack Developer",
    fullStackDescription: "Mastered both frontend and backend development with modern technologies",
    authenticationExpert: "Authentication Expert",
    authenticationDescription: "Built secure authentication systems including PassProve and 2FA solutions",
    mortalKombatDescription: "Achieved flawless victory in Mortal Kombat - precision and timing matter in coding too!",
    realTimeApplications: "Real-Time Applications",
    realTimeDescription: "Developed video conferencing platforms and live communication systems",
    problemSolver: "Problem Solver",
    problemSolverDescription: "Consistently finding elegant solutions to complex technical challenges",
    continuousLearner: "Continuous Learner",
    continuousLearnerDescription: "Always exploring new technologies and improving existing skills",
    legendary: "Legendary",
    epic: "Epic",
    rare: "Rare",
    uncommon: "Uncommon",
    common: "Common",
    easterEggNote: "Sometimes the best developers need to unwind with a good game!",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to collaborate on your next project",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
  },
  cs: {
    // Navigation
    "nav.about": "O mně",
    "nav.skills": "Dovednosti",
    "nav.portfolio": "Portfolio",
    "nav.experience": "Zkušenosti",
    "nav.contact": "Kontakt",

    // Hero
    "hero.greeting": "Ahoj, jsem",
    "hero.title": "IT Technik & Full-Stack Vývojář",
    "hero.subtitle": "Specializuji se na TypeScript aplikace, autentifikační systémy a moderní webová řešení",
    "hero.cta": "Zobrazit moji práci",
    "hero.contact": "Kontaktovat mě",

    // About
    "about.title": "O mně",
    "about.description":
      "Vášnivý IT technik s expertízou v budování robustních webových aplikací a autentifikačních systémů. Specializuji se na TypeScript, React a moderní backend technologie, vytvářím řešení, která jsou bezpečná i uživatelsky přívětivá.",
    "about.projects": "Dokončených projektů",
    "about.experience": "Let zkušeností",
    "about.technologies": "Zvládnutých technologií",

    // Skills
    "skills.title": "Technické dovednosti",
    "skills.frontend": "Frontend vývoj",
    "skills.backend": "Backend a databáze",
    "skills.specialized": "Specializované aplikace",
    "skills.tools": "Vývojářské nástroje",

    // Portfolio
    "portfolio.title": "Vybrané projekty",
    "portfolio.viewDetails": "Zobrazit detaily",
    "portfolio.github": "Zobrazit na GitHubu",

    // Live Demo
    liveDemo: "Živé demo",
    liveDemoDescription: "Interaktivní ukázky autentifikačních a bezpečnostních funkcí, které jsem vytvořil",
    passwordStrengthChecker: "Kontrola síly hesla",
    passwordStrengthDescription: "Validace hesla v reálném čase s bezpečnostními doporučeními",
    twoFactorAuth: "Dvoufaktorová autentifikace",
    twoFactorDescription: "Simulovaný proces 2FA ověření",
    enterPassword: "Zadejte své heslo",
    strength: "Síla",
    characters: "znaků",
    uppercase: "Velká písmena",
    numbers: "Čísla",
    symbols: "Symboly",
    weak: "Slabé",
    fair: "Přijatelné",
    good: "Dobré",
    strong: "Silné",
    simulatedCode: "Simulovaný ověřovací kód:",
    enterVerificationCode: "Zadejte ověřovací kód",
    verifying: "Ověřuji...",
    verify: "Ověřit",
    verificationSuccess: "Ověření úspěšné!",
    verificationError: "Neplatný kód. Zkuste znovu.",

    // Achievements
    achievements: "Úspěchy",
    achievementsDescription: "Profesní milníky a pár zábavných úspěchů po cestě",
    fullStackDeveloper: "Full-Stack vývojář",
    fullStackDescription: "Zvládl jsem frontend i backend vývoj s moderními technologiemi",
    authenticationExpert: "Expert na autentifikaci",
    authenticationDescription: "Vytvořil jsem bezpečné autentifikační systémy včetně PassProve a 2FA řešení",
    mortalKombatDescription:
      "Dosáhl jsem flawless victory v Mortal Kombat - přesnost a timing jsou důležité i v kódování!",
    realTimeApplications: "Real-time aplikace",
    realTimeDescription: "Vyvinul jsem video konferenční platformy a systémy živé komunikace",
    problemSolver: "Řešitel problémů",
    problemSolverDescription: "Konzistentně nacházím elegantní řešení složitých technických výzev",
    continuousLearner: "Neustále se učím",
    continuousLearnerDescription: "Vždy zkoumám nové technologie a zlepšuji stávající dovednosti",
    legendary: "Legendární",
    epic: "Epický",
    rare: "Vzácný",
    uncommon: "Neobvyklý",
    common: "Běžný",
    easterEggNote: "Někdy i ti nejlepší vývojáři potřebují relaxovat s dobrou hrou!",

    // Contact
    "contact.title": "Kontaktujte mě",
    "contact.subtitle": "Připraven spolupracovat na vašem dalším projektu",
    "contact.name": "Jméno",
    "contact.email": "Email",
    "contact.message": "Zpráva",
    "contact.send": "Odeslat zprávu",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("cs")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
