import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const imageVariants = cva(
  "",
  {
    variants: {
      size: {
        xs: "w-4 h-4",
        sm: "w-6 h-6",
        md: "w-8 h-8",
        lg: "w-12 h-12",
        xl: "w-16 h-16",
        full: "w-full h-full",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-xs",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      objectFit: {
        contain: "object-contain",
        cover: "object-cover",
        fill: "object-fill",
        none: "object-none",
        scaleDown: "object-scale-down",
      },
    },
    defaultVariants: {
      objectFit: "cover",
    },
  }
)

export interface BaseImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageVariants> {}

const BaseImage = React.forwardRef<HTMLImageElement, BaseImageProps>(
  ({ className, size, rounded, objectFit, ...props }, ref) => {
    return (
      <img
        className={cn(imageVariants({ size, rounded, objectFit, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

export { BaseImage }