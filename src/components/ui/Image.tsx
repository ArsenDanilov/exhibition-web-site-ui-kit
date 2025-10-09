import { BaseImage, type BaseImageProps } from "./base/base-image"

interface ImageProps extends Omit<BaseImageProps, 'src' | 'alt'> {
    src: string,
    alt?: string | undefined,
    className?: string | undefined
}

export const Image = ({ src, alt, className, ...props }: ImageProps) => {
    return (
        <BaseImage 
            src={src} 
            alt={alt} 
            className={className}
            {...props}
        />
    )
}