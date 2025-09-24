// Design System Constants
export const COLORS = {
  primary: {
    blue: "bg-blue-600",
    purple: "bg-purple-600",
    gradient: "bg-gradient-to-r from-blue-600 to-purple-600",
    gradientHover: "hover:from-blue-700 hover:to-purple-700",
    text: "text-blue-600",
    background: "bg-blue-50",
  },
  secondary: {
    gray: "bg-gray-600",
    lightGray: "bg-gray-50",
    text: "text-gray-600",
    background: "bg-gray-50",
  },
  accent: {
    gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
    text: "text-white",
  }
} as const;

export const SPACING = {
  button: {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  },
  card: {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  },
  section: {
    sm: "py-4",
    md: "py-6",
    lg: "py-8",
    xl: "py-12",
  },
  container: {
    sm: "px-4",
    md: "px-6",
    lg: "px-8",
  }
} as const;

export const SIZES = {
  button: {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  },
  heading: {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
    "2xl": "text-4xl",
  },
  text: {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }
} as const;

export const BORDER_RADIUS = {
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-2xl",
  full: "rounded-full",
} as const;

export const SHADOWS = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
} as const;

export const TRANSITIONS = {
  fast: "transition-all duration-200",
  normal: "transition-all duration-300",
  slow: "transition-all duration-500",
} as const;
