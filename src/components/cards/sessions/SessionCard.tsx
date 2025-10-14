import { Text } from "@/components/ui/Text";
import { formatPostTime } from "@/utils/formatPostTime";
import { Button } from "@/components/ui/Button";
import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { type ISessionCard } from "./Sessions";
import favoriteIcon from "@/assets/favoriteIcon.svg";

export const SessionCard = ({
  sessionTitle,
  sessionDescription,
  sessionPostedAt,
  sessionTags,
}: ISessionCard) => {
  return (
    <div className="p-3 lg:px-4 lg:py-5 bg-light-pink mb-5 rounded-2xl flex items-start gap-5 justify-between">
      <div>
        <Text weight="semibold" className="mb-2">
          {sessionTitle}&nbsp;|{" "}
          <Text as="span" weight="normal">{formatPostTime(sessionPostedAt)}</Text>
        </Text>
        <Text className="mb-1">{sessionDescription}</Text>
        <Link href="#" variant="primary" size="md" weight="semibold" className="mb-4 inline-block">
          Show more
        </Link>
        <div className="flex gap-2 mb-4 flex-wrap">
          {sessionTags &&
            sessionTags.map((tag, index) => (
              <div
                key={index}
                className="bg-light-grey text-dark-grey rounded-full text-xs px-3 py-px flex justify-center items-center"
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
