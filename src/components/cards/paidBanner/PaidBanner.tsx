import { Image } from "@/components/ui/Image";
import paidBanner from "@/assets/paidBanner/paidBanner.png"
import { type EditableComponent } from "../../../types";

interface PaidBannerProps {
  banner: string;
}

export const PaidBanner: EditableComponent<PaidBannerProps> = ({ banner }) => {
    return (
        <div>
            <Image src={banner} alt="banner with AD"/>
        </div>
    )
}

PaidBanner.schema = {
  label: "PaidBanner",
  type: "PaidBanner",
  getDefaultProps: () => ({
    banner: paidBanner
  }),
};

