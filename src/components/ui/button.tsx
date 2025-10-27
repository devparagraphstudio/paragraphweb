import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils/helpers"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none  shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-neutral-950 focus-visible:ring-neutral-950/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/20  aria-invalid:border-red-500 ",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-900 text-neutral-50 shadow-xs hover:bg-neutral-900/90 ",
        destructive:
          "bg-red-500 text-white shadow-xs hover:bg-red-500/90 focus-visible:ring-red-500/20 ",
        outline:
          "border bg-white shadow-xs hover:bg-neutral-100 hover:text-neutral-900 0",
        secondary:
          "bg-neutral-100 text-neutral-900 shadow-xs hover:bg-neutral-100/80 ",
        ghost:
          "hover:bg-neutral-100 hover:text-neutral-900 ",
        link: "text-neutral-900 underline-offset-4 hover:underline ",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3",
        lg: "h-10 rounded-md px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
