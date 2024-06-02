import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const downloadFile = (name: string, url: string) => {
  const link = document.createElement("a");
  link.download = name;
  link.href = url;
  link.click();
  link.remove();
};
