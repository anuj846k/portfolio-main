"use client"

import React from "react"
import { motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

const animationProps: MotionProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
}

interface ShinyButtonProps
  extends
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode
  className?: string
}

// Magic UI Shiny Button, rendered as a link so it can navigate and download.
export const ShinyButton = React.forwardRef<
  HTMLAnchorElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.a
      ref={ref}
      className={cn(
        "relative inline-flex cursor-pointer rounded-full border bg-background px-6 py-2 font-medium shadow-md backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.1)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]",
        className
      )}
      {...animationProps}
      {...props}
    >
      <span
        className="relative flex size-full items-center gap-2 text-sm tracking-wide text-[rgb(0,0,0,65%)] uppercase dark:font-light dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMask:
            "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          backgroundImage:
            "linear-gradient(-75deg,hsl(var(--primary)/0.1) calc(var(--x) + 20%),hsl(var(--primary)/0.5) calc(var(--x) + 25%),hsl(var(--primary)/0.1) calc(var(--x) + 100%))",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px"
      />
    </motion.a>
  )
})

ShinyButton.displayName = "ShinyButton"
