import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const iconColorCustomize = (color: string) => {
  const customize = (content: string) => {
    return content
      .replace(/stroke="[^"]*"/g, `stroke="${color}"`) // Change stroke color to red
      .replace(/fill="[^"]*"/g, `fill="${color}"`) // Change fill color to red
  }
  return customize
}
