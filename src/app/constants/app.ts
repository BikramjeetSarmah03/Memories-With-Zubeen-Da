// Application Constants
export const APP_CONFIG = {
  name: "Zubeen Da Community",
  shortName: "ZDC",
  tagline: "Memories & Music",
  description: "A platform dedicated to celebrating the musical legacy and achievements of Zubeen Da",
} as const;

export const ROUTES = {
  HOME: "/",
  CREATE_POST: "/create-post",
  ACHIEVEMENTS: "/achievements",
  ABOUT: "/about",
} as const;

export const NAVIGATION_ITEMS = [
  { name: "Home", href: ROUTES.HOME },
  { name: "Create Post", href: ROUTES.CREATE_POST },
  { name: "Achievements", href: ROUTES.ACHIEVEMENTS },
] as const;

export const SUGGESTED_TAGS = [
  "#live",
  "#throwback", 
  "#tribute",
  "#firsttime",
  "#backstage",
  "#emotional",
  "#concert",
  "#nostalgia",
] as const;

export const FILE_UPLOAD = {
  ACCEPTED_TYPES: [".jpg", ".jpeg", ".png", ".mp4"],
  MAX_SIZE: "50MB",
  MAX_FILES: 10,
} as const;

export const MEMORY_GRID = {
  INITIAL_LOAD: 16,
  LOAD_MORE: 12,
  COLUMNS: {
    mobile: 2,
    tablet: 3,
    desktop: 4,
  }
} as const;
