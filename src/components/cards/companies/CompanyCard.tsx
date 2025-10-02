import { Text } from "@/components/ui/Text";
import { Image } from "@/components/ui/Image";
import { Button } from "@/components/ui/Button";
import plusIcon from "@/assets/plusIcon.svg"

export interface ICompanyData {
    companyAvatar: string,
    companyName: string, 
    companyDescription: string
}

export const CompanyCard = ({ companyAvatar, companyName, companyDescription }: ICompanyData) => {
    return (
        <div className="flex items-center justify-between mb-4 gap-3">
            <Image src={companyAvatar} alt="company avatar" className="size-[70px]"/>
            <div className="w-2/3">
                <Text tag="h4" className="font-semibold mb-1">{companyName}</Text>
                <Text textStyle="sm" className="text-darkGrey">{companyDescription}</Text>
            </div>
            <Button variant="secondary" size="icon" className="flex justify-center items-center size-[38px] rounded-full"><Image src={plusIcon} /></Button>
        </div>
    )
}