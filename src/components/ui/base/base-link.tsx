import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const linkVariants = cva(
    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    {
        variants: {
            variant: {
                default: "text-black70 hover:text-black",
                muted: "text-black30 hover:text-black70",
                primary: "text-primary font-semibold hover:text-primary/80",
                unstyled: "",
            },
            size: {
                xs: "text-xs",
                sm: "text-sm",
                md: "text-base",
                lg: "text-lg",
            },
            weight: {
                normal: "font-normal",
                medium: "font-medium",
                semibold: "font-semibold",
                bold: "font-bold",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "sm",
            weight: "normal",
        },
    }
)

export interface BaseLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
    external?: boolean
}

const BaseLink = React.forwardRef<HTMLAnchorElement, BaseLinkProps>(
    ({ className, variant, size, weight, external, ...props }, ref) => {
        const externalProps = external ? {
            target: "_blank",
            rel: "noopener noreferrer"
        } : {}

        return (
            <a
                className={cn(linkVariants({ variant, size, weight, className }))}
                ref={ref}
                {...externalProps}
                {...props}
            />
        )
    }
)

export { BaseLink }