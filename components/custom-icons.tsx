"use client"

interface IconProps {
  className?: string
  size?: number
}

export const CustomIcons = {
  // Tech Stack Icons - Geometric & Minimal
  Code: ({ className = "", size = 24 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path
        d="M8 6L2 12L8 18M16 6L22 12L16 18M12 4L10 20"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),

  Database: ({ className = "", size = 24 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect x="3" y="4" width="18" height="4" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="3" y="10" width="18" height="4" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="3" y="16" width="18" height="4" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),

  Security: ({ className = "", size = 24 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M12 2L4 6V12C4 18 12 22 12 22S20 18 20 12V6L12 2Z" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),

  Video: ({ className = "", size = 24 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <polygon points="10,9 16,12 10,15" fill="currentColor" />
    </svg>
  ),

  // Navigation Icons - Unique Shapes
  Menu: ({ className = "", size = 24 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M3 8H21M3 16H21M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  Close: ({ className = "", size = 24 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // Social & External
  GitHub: ({ className = "", size = 24 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  ),

  External: ({ className = "", size = 24 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // Theme Toggle - Custom Design
  Sun: ({ className = "", size = 24 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),

  Moon: ({ className = "", size = 24 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79Z" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),

  // Achievement Icons - Gaming Style
  Trophy: ({ className = "", size = 24 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path
        d="M6 9H4.5A2.5 2.5 0 012 6.5V6A2 2 0 014 4H5M18 9H19.5A2.5 2.5 0 0122 6.5V6A2 2 0 0020 4H19M8 21L16 21M12 17V21M12 17C15.866 17 19 13.866 19 10V8C19 6.89543 18.1046 6 17 6H7C5.89543 6 5 6.89543 5 8V10C5 13.866 8.13401 17 12 17Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),

  Gaming: ({ className = "", size = 24 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect x="2" y="8" width="20" height="8" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="8" cy="12" r="1" fill="currentColor" />
      <circle cx="16" cy="10" r="1" fill="currentColor" />
      <circle cx="18" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
}
