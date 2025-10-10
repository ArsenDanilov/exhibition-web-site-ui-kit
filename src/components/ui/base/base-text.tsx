import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textVariants = cva(
  "",
  {
    variants: {
      size: {
        xxxs: "text-[10px]",
        xxs: "text-[11px]",
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
      },
      weight: {
        extralight: "font-extralight",
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      color: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
        destructive: "text-destructive",
        white: "text-white",
        darkGrey: "text-darkGrey",
        black70: "text-black70",
      },
    },
    defaultVariants: {
      size: "base",
      weight: "normal",
      color: "default",
    },
  }
)

export interface BaseTextProps
  extends VariantProps<typeof textVariants> {
  children?: React.ReactNode
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'button'
  className?: string
}

const BaseText = React.forwardRef<HTMLElement, BaseTextProps>(
  ({ className, size, weight, color, as: Component = 'p', children, ...props }, ref) => {
    return (
      <Component
        className={cn(textVariants({ size, weight, color, className }))}
        ref={ref as any}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

export { BaseText }