import { MemberCard } from "./MemberCard";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { type EditableComponent } from "../../../types";
import ezhovAvatar from "@/assets/usersAvatars/ezhovAvatar.png"
import glazkovaAvatar from "@/assets/usersAvatars/glazkovaAvatar.png"
import kapliyAvatar from "@/assets/usersAvatars/kapliyAvatar.png"
import kivichAvatar from "@/assets/usersAvatars/kivichAvatar.png"

export interface IMemberCard {
  memberAvatar: string;
  memberName: string;
  memberCompany: string;
}

interface MembersProps {
  membersCards: IMemberCard[];
}

export const Members: EditableComponent<MembersProps> = ({ membersCards }) => {
  return (
    <div className="hidden sm:block px-6 py-4 sm:px-5 sm:py-3 lg:px-7 lg:py-5 rounded-3xl border border-black-30">
      <Text as="h2" size="xl" weight="semibold" className="mb-5">
        Members
      </Text>
      <div className="mb-5 grid grid-cols-3 grid-rows-2 gap-x-7 gap-y-3 lg:gap-x-10 lg:gap-y-4">
        {membersCards.map((card, index) => (
          <MemberCard
            key={index}
            memberAvatar={card.memberAvatar}
            memberName={card.memberName}
            memberCompany={card.memberCompany}
          />
        ))}
      </div>
      <Button variant="muted" fullWidth>
        Show more
      </Button>
    </div>
  );
};

Members.schema = {
  label: "Members",
  type: "Members",
  getDefaultProps: () => ({
    membersCards: [
      {
        memberAvatar: ezhovAvatar,
        memberName: "Александр Ежов",
        memberCompany: "ITE group",
      },
      {
        memberAvatar: kapliyAvatar,
        memberName: "Екатерина Каплий",
        memberCompany: "ITE group",
      },
      {
        memberAvatar: glazkovaAvatar,
        memberName: "Валерия Глазкова",
        memberCompany: "ITE group",
      },
      {
        memberAvatar: kivichAvatar,
        memberName: "Александра Кивич",
        memberCompany: "ITE group",
      },
      {
        memberAvatar: ezhovAvatar,
        memberName: "Александр Ежов",
        memberCompany: "ITE group",
      },
      {
        memberAvatar: kapliyAvatar,
        memberName: "Екатерина Каплий",
        memberCompany: "ITE group",
      },
    ],
  }),
};
