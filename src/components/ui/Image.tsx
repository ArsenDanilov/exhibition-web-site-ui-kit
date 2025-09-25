interface IImage   {
    src: string,
    alt?: string | undefined,
    className?: string | undefined
}

export const Image = ({ src, alt, className }: IImage) => {
    return (
        <img src={src} alt={alt} className={className}/>
    )
}