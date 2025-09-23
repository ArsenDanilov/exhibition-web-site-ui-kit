import { memo } from "react"

interface IImage   {
    src: string,
    alt?: string | undefined
}

export const Image = memo(({ src, alt }: IImage) => {
    return (
        <img src={src} alt={alt} />
    )
})