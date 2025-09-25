import { Image } from "../../ui/Image"
import { type AboutBannerProps } from "./about.types"

export const AboutBanner = ({ img, alt }: AboutBannerProps) => {
    return (
        <Image src={img} alt={alt} className="rounded-3xl"/>
    )
}