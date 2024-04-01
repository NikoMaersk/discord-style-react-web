import { twMerge } from "tailwind-merge"
import { ClassValue } from "clsx"
import clsx from "clsx"

export function merge(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}