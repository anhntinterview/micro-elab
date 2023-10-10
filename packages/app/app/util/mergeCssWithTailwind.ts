import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function mergedCssWithTailwind(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}