import { Text } from "@/components/ui/Text";
import { Image } from "@/components/ui/Image";
import { Button } from "@/components/ui/Button";
import plusIcon from "@/assets/plusIcon.svg";
import { type ICompanyCard } from "./Companies";

export const CompanyCard = ({ companyLogo, companyName, companyDescription }: ICompanyCard) => {
    return (
        <div className="flex items-center justify-between mb-4 gap-3">
            <Image src={companyLogo} alt="company avatar" className="size-[70px]"/>
            <div className="w-2/3 flex flex-col items-center">
                <Text tag="h4" className="font-semibold mb-1">{companyName}</Text>
                <Text textStyle="sm" className="text-darkGrey">{companyDescription}</Text>
            </div>
            <Button variant="secondary" size="icon" className="flex justify-center items-center size-[38px] rounded-full"><Image src={plusIcon} /></Button>
        </div>
    )
}