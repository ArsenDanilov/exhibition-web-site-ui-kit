import { cn } from "@/lib/utils";

interface TextProps {
    children?: React.ReactNode;
    // Existing props (keep for backward compatibility)
    tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    textStyle?: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';
    className?: string;
    // New enhanced props
    size?: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'button';
}

export const Text = ({ 
    children, 
    tag = 'p', 
    textStyle = 'base', 
    className = "",
    // New props with defaults
    size,
    weight,
    as
}: TextProps) => {
    // Use new 'as' prop if provided, otherwise fall back to 'tag'
    const Component = as || tag;
    
    // Use new 'size' prop if provided, otherwise fall back to 'textStyle'
    const fontSize = size || textStyle;

    const weightClasses = {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold'
    };

    return (
        <Component 
            className={cn(
                `text-${fontSize}`,
                weight && weightClasses[weight],
                className
            )}
        >
            {children}
        </Component>
    );
}