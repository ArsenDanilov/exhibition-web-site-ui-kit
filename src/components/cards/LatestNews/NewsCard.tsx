import { Image } from "@/components/ui/Image";
import { Text } from "@/components/ui/Text";
import likeIcon from "@/assets/likeIcon.svg";
import commentIcon from "@/assets/commentIcon.svg";
import { type INewsCard } from "./LatestNews";

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
          <Text className="font-bold">
            {username}
          </Text>
          <Text textStyle="sm" className="text-black70 font-extralight">{postedAt}</Text>
        </div>
      </div>
      <Text>{text}</Text>
      <button className="font-semibold text-primary mb-4">
        Показать больше
      </button>
      
      {images && (
        <Image src={images} alt="image from post" className="mb-4" />
      )}
      <div className="flex gap-9 items-center">
        <div className="flex gap-2 items-center">
          <Image src={likeIcon} />
          <Text tag="span" className="text-darkGrey">
            {likes}
          </Text>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={commentIcon} />
          <Text tag="span" className="text-darkGrey">
            {comments}
          </Text>
        </div>
      </div>
    </div>
  );
};
