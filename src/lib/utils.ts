import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "FCFA",
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  const { currency = "USD", notation = "compact" } = options
  const numericPirce = typeof price === "string" ? parseFloat(price) : price

  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPirce) 
}