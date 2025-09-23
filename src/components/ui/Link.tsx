import { memo } from "react"

interface LinkProps {
    children?: React.ReactNode,
    href: string, 
    className?: string
}

export const Link = memo(({ children, href, className, ...props }: LinkProps) => {
    return (
        <a href={href} className={className} {...props}>{children}</a>
    )
})