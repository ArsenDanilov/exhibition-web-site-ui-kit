import { BaseLink, type BaseLinkProps } from "./base/base-link"

interface LinkProps extends Omit<BaseLinkProps, 'href'> {
    children?: React.ReactNode,
    href: string,
    className?: string,
    external?: boolean
}

export const Link = ({ children, href, className, ...props }: LinkProps) => {
    return (
        <BaseLink
            href={href}
            className={className}
            {...props}
        >
            {children}
        </BaseLink>
    )
}