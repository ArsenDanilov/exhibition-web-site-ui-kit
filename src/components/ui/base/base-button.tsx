import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover disabled:bg-primary-disabled",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover disabled:bg-secondary-disabled",
        muted: "bg-secondary text-darkGrey hover:bg-secondary-hover disabled:bg-secondary-disabled",
      },
      size: {
        xs: "w-24 h-9 sm:w-[87px] sm:h-8 lg:w-28 lg:h-10 sm:text-xxs lg:text-base",
        md: "w-full h-10 sm:w-36 sm:h-8 lg:w-48 lg:h-11",
        lg: "w-full h-10 md:w-40 md:h-8 xl:w-52 xl:h-11 text-base sm:text-xs xl:text-base",
      },
      fullWidth: {
        true: "!w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xs",
      fullWidth: false,
    },
  }
)

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

export { BaseButton }