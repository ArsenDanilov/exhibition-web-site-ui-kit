import { Image } from "@/components/ui/Image";
import { Text } from "@/components/ui/Text";

export interface IMemberData {
  avatar: string;
  name: string;
  company: string;
}

export const MemberCard = ({ avatar, name, company }: IMemberData) => {
  return (
    <div className="flex flex-col justify-center">
        <Image src={avatar} alt="user avatar" className="mb-3" />
        <Text className="mb-1 text-center">{name}</Text>
        <Text textStyle="xs" className="text-darkGrey text-center">{company}</Text>
    </div>
  )
};
