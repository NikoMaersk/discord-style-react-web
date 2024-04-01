
import { VariantProps, cva } from "class-variance-authority"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export const buttonStyles = cva(
    "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: ["hover:bg-accent", "text-accentText"],
                ghost: "",
                dark: ["bg-secondary-dark", "hover:bg-secondary-dark-hover", "text-secondary"]
            },
            size: {
                default: "h-10 px-3 py-2",
                icon: "size-12",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    })

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export function Button({ variant, size, className, ...props }: ButtonProps) {
    return <button {...props} className={twMerge(buttonStyles({ variant, size }),
        className)} />
}