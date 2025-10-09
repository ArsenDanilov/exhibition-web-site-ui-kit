import { Text } from "@/components/ui/Text";
import { Image } from "@/components/ui/Image";
import { IconButton } from "@/components/ui/IconButton";
import plusIcon from "@/assets/plusIcon.svg";
import { type ICompanyCard } from "./Companies";

export const CompanyCard = ({ companyLogo, companyName, companyDescription }: ICompanyCard) => {
    return (
        <div className="flex items-center justify-between mb-4 gap-3">
            <Image src={companyLogo} alt="company avatar" className="size-[60px] sm:size-[50px] lg:size-[70px]"/>
            <div className="w-2/3 flex flex-col items-center">
                <Text weight="semibold" className="mb-1 text-sm lg:text-base">{companyName}</Text>
                <Text size="xs" color="muted">{companyDescription}</Text>
            </div>
            <IconButton variant="secondary" size="xs" shape="circle"><Image src={plusIcon} /></IconButton>
        </div>
    )
}