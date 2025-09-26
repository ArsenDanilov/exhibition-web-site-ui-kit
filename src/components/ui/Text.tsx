interface TextProps {
    children?: React.ReactNode;
    tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined,
    textStyle?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | undefined;
    className?: string;
}

export const Text = ({ children, tag = 'p', textStyle = 'base', className }: TextProps) => {
    const Component = tag;

    return (
        <Component className={`text-${textStyle} ${className}`}>{children}</Component>
    )
}