import { Text } from "@/components/ui/Text";
import { Image } from "@/components/ui/Image";
import moreButton from "@/assets/moreButton.svg";
import { type IContentCard } from "./Content";

export interface IContentData {
  video: string;
  videoTitle: string;
  videoAlt?: string;
}

export const ContentCard = ({ video, videoTitle, videoAlt }: IContentCard) => {
  return (
    <div className="sm:py-4 lg:py-5">
      <Image src={video} alt={videoAlt} className="mb-5" />
      <div className="flex justify-between items-center gap-4">
        <Text className="font-semibold">{videoTitle}</Text>
        <Image src={moreButton} />
      </div>
    </div>
  );
};
