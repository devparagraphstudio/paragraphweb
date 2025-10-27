"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils/helpers"

function TabsUnderlined({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsListUnderlined({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-neutral-100 text-neutral-500 inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px] 0",
        className
      )}
      {...props}
    />
  )
}

function TabsTriggerUnderlined({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "  text-black  inline-flex h-14 flex-1 items-center justify-center gap-1.5 py-2 text-sm font-medium whitespace-nowrap  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-3 border-black [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ",
        className
      )}
      {...props}
    />
  )
}

function TabsContentUnderlined({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { TabsUnderlined, TabsListUnderlined, TabsTriggerUnderlined, TabsContentUnderlined }
