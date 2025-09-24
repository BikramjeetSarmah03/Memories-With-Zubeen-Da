import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx and tailwind-merge for optimal class handling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Create conditional classes based on conditions
 */
export function conditionalClasses(
  baseClasses: string,
  conditionalClasses: Record<string, boolean>
): string {
  const classes = Object.entries(conditionalClasses)
    .filter(([, condition]) => condition)
    .map(([className]) => className);
  
  return cn(baseClasses, ...classes);
}

/**
 * Create responsive classes
 */
export function responsiveClasses(classes: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}): string {
  return cn(
    classes.mobile,
    classes.tablet && `sm:${classes.tablet}`,
    classes.desktop && `lg:${classes.desktop}`
  );
}
