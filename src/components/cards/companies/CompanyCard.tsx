import { Text } from "@/components/ui/Text";
import { Image } from "@/components/ui/Image";
import { _Button } from "@/components/ui/_Button";
import plusIcon from "@/assets/plusIcon.svg";
import { type ICompanyCard } from "./Companies";

export const CompanyCard = ({ companyLogo, companyName, companyDescription }: ICompanyCard) => {
    return (
        <div className="flex items-center justify-between mb-4 gap-3">
            <Image src={companyLogo} alt="company avatar" className="size-[60px] sm:size-[50px] lg:size-[70px]"/>
            <div className="w-2/3 flex flex-col items-center">
                <Text className="font-semibold mb-1 text-sm lg:text-base">{companyName}</Text>
                <Text textStyle="xs" className="text-darkGrey">{companyDescription}</Text>
            </div>
            <_Button variant="secondary" size="icon" className="flex justify-center items-center size-[32px] sm:size-[27px] lg:size-[38px] rounded-full"><Image src={plusIcon} /></_Button>
        </div>
    )
}