import { memo } from "react";

interface TextProps extends HTMLElement {
    text: string,
    tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
}

export const Text = memo(({ text, tag = 'p', size = 'base' }: TextProps) => {
    const Component = tag;

    return (
        <Component className={`${size}`}>{text}</Component>
    )
})