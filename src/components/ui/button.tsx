
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 btn-micro icon-hover-bounce focus-ring",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 shadow-lg hover:shadow-xl glow-effect active:scale-95",
        destructive:
          "bg-gradient-to-r from-destructive to-red-500 text-destructive-foreground hover:from-destructive/90 hover:to-red-500/90 shadow-lg active:scale-95",
        outline:
          "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground shadow-md hover:shadow-lg bubble-hover active:scale-95",
        secondary:
          "bg-gradient-to-r from-secondary to-accent text-secondary-foreground hover:from-secondary/90 hover:to-accent/90 shadow-md hover:shadow-lg bubble-hover active:scale-95",
        ghost: "text-primary hover:bg-primary/10 hover:text-primary playful-nav glow-text active:scale-95",
        link: "text-primary underline-offset-4 hover:underline playful-nav glow-text",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
