import { Text } from "@/components/ui/Text";
import { Image } from "@/components/ui/Image";
import moreButton from "@/assets/moreButton.svg";

export interface IContentData {
  video: string;
  videoTitle: string;
  videoAlt?: string;
}

export const ContentCard = ({ video, videoTitle, videoAlt }: IContentData) => {
  return (
    <div className="px-4 py-5 mb-9">
      <Image src={video} alt={videoAlt} className="mb-5" />
      <div className="flex justify-between items-center gap-4">
        <Text className="font-semibold">{videoTitle}</Text>
        <Image src={moreButton} />
      </div>
    </div>
  );
};
