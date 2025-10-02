import { Image } from "@/components/ui/Image";
import paidBanner from "@/assets/paidBanner/paidBanner.png"

export const PaidBanner = () => {
    return (
        <div>
            <Image src={paidBanner} alt="banner with AD"/>
        </div>
    )
}