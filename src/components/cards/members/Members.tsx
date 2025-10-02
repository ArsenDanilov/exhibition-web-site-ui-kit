import { MemberCard } from "./MemberCard";
import { membersData } from "./members.data";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export const Members = () => {
  return (
    <div className="px-7 py-5 rounded-3xl border border-black30">
      <Text tag="h3" textStyle="3xl" className="mb-5 font-semibold">
        Members
      </Text>
      <div className="mb-5 grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-4">
        {membersData.map((item, index) => (
          <MemberCard
            key={index}
            avatar={item.avatar}
            name={item.name}
            company={item.company}
          />
        ))}
      </div>
      <Button variant="secondary" className="w-full text-darkGrey">
        Show more
      </Button>
    </div>
  );
};
