import * as React from "react"

import { cn } from "@/lib/utils/helpers"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-neutral-950 placeholder:text-neutral-500 selection:bg-neutral-900 selection:text-neutral-50 dark:bg-neutral-200/30 border-neutral-200 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ",
        "aria-invalid:ring-red-500/20 ",
        className
      )}
      {...props}
    />
  )
}

export { Input }
