import { Image } from "@/components/ui/Image";
import { Text } from "@/components/ui/Text";
import likeIcon from "@/assets/likeIcon.svg";
import commentIcon from "@/assets/commentIcon.svg";
import { type INewsCard } from "./LatestNews";
import {Link} from "@/components/ui/Link";

export const NewsCard = ({
  username,
  avatar,
  postedAt,
  text,
  images,
  likes,
  comments,
}: INewsCard) => {
  return (
    <div className="p-3 lg:px-4 lg:py-5 rounded-3xl mb-5 md:border border-black30">
      <div className="flex gap-3 items-center mb-4">
        <div>
          <Image src={avatar} alt="user avatar" className="size-[50px]"/>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <Text weight="bold">
            {username}
          </Text>
          <Text size="sm" weight="extralight" color="black70">{postedAt}</Text>
        </div>
      </div>
      <Text>{text}</Text>
      <Link href="#" variant="primary" size="md" weight="semibold" className="mb-4 inline-block">
        Показать больше
      </Link>
      
      {images && (
        <Image src={images} alt="image from post" className="mb-4" />
      )}
      <div className="flex gap-9 items-center">
        <div className="flex gap-2 items-center">
          <Image src={likeIcon} />
          <Text as="span" color="muted">
            {likes}
          </Text>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={commentIcon} />
          <Text as="span" color="muted">
            {comments}
          </Text>
        </div>
      </div>
    </div>
  );
};
