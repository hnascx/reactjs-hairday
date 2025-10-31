import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        datePickerButton:
          "bg-transparent hover:bg-transparent border border-gray-500 rounded-lg",
        hourButton:
          "bg-gray-600 text-gray-200 hover:bg-gray-600/90 border border-gray-500 focus:text-yellow focus:border-yellow disabled:bg-transparent disabled:text-gray-500 disabled:border-gray-600",
        bookClientButton:
          "bg-yellow text-gray-900 font-bold uppercase flex items-center justify-center border-transparent disabled:bg-yellow/25 disabled:border-transparent hover:border-yellow-light hover:border-2 transition-all duration-200",
      },
      size: {
        hourButton: "h-9.5 rounded-md px-4 py-2 has-[>svg]:px-3 w-19.25",
        md: "h-12 w-83 rounded-lg px-6 has-[>svg]:px-4",
        lg: "h-14 w-83 rounded-lg px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-md": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "hourButton",
      size: "hourButton",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
