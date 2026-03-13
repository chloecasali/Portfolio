import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Builds a single className string from conditional values and then resolves
 * conflicting Tailwind utilities so later overrides win cleanly.
 *
 * Use this helper when a component accepts a `className` prop or composes
 * multiple utility strings. For a single static class string, plain text is enough.
 */
export function mergeClasses(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
