import { BaseText, type BaseTextProps } from "./base/base-text"

export interface TextProps extends BaseTextProps {}

export const Text = ({ 
    children, 
    className = "",
    size = "base",
    weight,
    color,
    as = "p",
    ...props
}: TextProps) => {
    return (
        <BaseText 
            as={as}
            size={size}
            weight={weight}
            color={color}
            className={className}
            {...props}
        >
            {children}
        </BaseText>
    );
}