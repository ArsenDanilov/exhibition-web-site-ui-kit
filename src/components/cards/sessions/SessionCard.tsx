import { Text } from "@/components/ui/Text";
import { formatPostTime } from "@/utils/formatPostTime";
import { Button } from "@/components/ui/Button";
import { Image } from "@/components/ui/Image";
import { type ISessionCard } from "./Sessions";
import favoriteIcon from "@/assets/favoriteIcon.svg";

export const SessionCard = ({
  sessionTitle,
  sessionDescription,
  sessionPostedAt,
  sessionTags,
}: ISessionCard) => {
  return (
    <div className="p-3 lg:px-4 lg:py-5 bg-lightPink mb-5 rounded-2xl flex items-start gap-5 justify-between">
      <div>
        <Text className="font-semibold mb-2">
          {sessionTitle}&nbsp;|{" "}
          <span className="font-normal">{formatPostTime(sessionPostedAt)}</span>
        </Text>
        <Text className="mb-1">{sessionDescription}</Text>
        <Button className="text-primary mb-4 font-semibold">Show more</Button>
        <div className="flex gap-2 mb-4 flex-wrap">
          {sessionTags &&
            sessionTags.map((tag, index) => (
              <div
                key={index}
                className="bg-lightGrey text-darkGrey rounded-full text-xs px-3 py-[1px] flex justify-center items-center"
              >
                {tag}
              </div>
            ))}
        </div>
        <Button size="xs">Attend</Button>
      </div>
      <Image src={favoriteIcon} />
    </div>
  );
};
