import { BaseText, type BaseTextProps } from "./base/base-text.tsx"

interface TextProps extends BaseTextProps {
    // Existing props (keep for backward compatibility)
    tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    textStyle?: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Text = ({ 
    children, 
    tag = 'p', 
    textStyle = 'base', 
    className = "",
    size,
    weight,
    as,
    ...props
}: TextProps) => {
    // Use new 'as' prop if provided, otherwise fall back to 'tag'
    const Component = as || tag;
    
    // Use new 'size' prop if provided, otherwise fall back to 'textStyle'
    const fontSize = size || textStyle;

    return (
        <BaseText 
            as={Component}
            size={fontSize}
            weight={weight}
            className={className}
            {...props}
        >
            {children}
        </BaseText>
    );
}