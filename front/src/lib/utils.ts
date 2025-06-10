import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind CSS classes and other CSS classes intelligently,
 * resolving conflicts and unifying them.
 *
 * @param {...ClassValue[]} inputs - A list of CSS classes or arrays of classes.
 * @returns {string} A string containing the combined CSS classes.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}