import { Image } from "@/components/ui/Image";
import { Text } from "@/components/ui/Text";
import { type IMemberCard } from "./Members";

export const MemberCard = ({ memberAvatar, memberName, memberCompany }: IMemberCard) => {
  return (
    <div className="flex flex-col justify-center">
        <Image src={memberAvatar} alt="user avatar" className="mb-3 size-[71px] lg:size-[100px] mx-auto" />
        <Text textStyle="sm" className="mb-1 text-center w-[100%]">{memberName}</Text>
        <Text textStyle="xs" className="text-darkGrey text-center">{memberCompany}</Text>
    </div>
  )
};
