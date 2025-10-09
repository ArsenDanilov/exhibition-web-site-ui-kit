import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils.ts"

const linkVariants = cva(
    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    {
        variants: {
            variant: {
                default: "text-black70 hover:text-black",
                nav: "text-black70 hover:text-black sm:text-xs lg:text-sm",
                mobileNav: "w-full flex justify-between items-center px-4 py-3 text-black70 hover:bg-gray-200 rounded-lg",
                footer: "text-black30 hover:text-black70",
                unstyled: "",
            },
            size: {
                sm: "text-xs",
                md: "text-sm",
                lg: "text-base",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
)

export interface BaseLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
    external?: boolean
}

const BaseLink = React.forwardRef<HTMLAnchorElement, BaseLinkProps>(
    ({ className, variant, size, external, ...props }, ref) => {
        const externalProps = external ? {
            target: "_blank",
            rel: "noopener noreferrer"
        } : {}

        return (
            <a
                className={cn(linkVariants({ variant, size, className }))}
                ref={ref}
                {...externalProps}
                {...props}
            />
        )
    }
)
BaseLink.displayName = "BaseLink"

export { BaseLink }