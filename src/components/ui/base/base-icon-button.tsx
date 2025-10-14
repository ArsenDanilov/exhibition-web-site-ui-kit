import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover disabled:bg-primary-disabled",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover disabled:bg-secondary-disabled",
        muted: "bg-secondary text-darkGrey hover:bg-secondary-hover disabled:bg-secondary-disabled",
      },
      size: {
        xs: "size-8 sm:size-7 lg:size-10",
        md: "size-8 lg:size-10",
        lg: "w-10 h-10 md:w-8 md:h-8 xl:w-10 xl:h-10",
      },
      shape: {
        square: "",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xs",
      shape: "square",
    },
  }
)

export interface BaseIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof iconButtonVariants> {
  asChild?: boolean
}

const BaseIconButton = React.forwardRef<HTMLButtonElement, BaseIconButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(iconButtonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

export { BaseIconButton }