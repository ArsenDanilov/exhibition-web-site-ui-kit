import { ContentCard } from "./ContentCard";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { type EditableComponent } from "../../../types";
import video1 from "@/assets/content/video1.png";
import video2 from "@/assets/content/video2.png";
import video3 from "@/assets/content/video3.png";

export interface IContentCard {
  video: string;
  videoTitle: string;
  videoAlt?: string;
}

interface ContentProps {
  contentCards: IContentCard[];
}

export const Content: EditableComponent<ContentProps> = ({ contentCards }) => {
  return (
    <div className="hidden sm:block sm:px-5 sm:py-3 lg:px-7 lg:py-5 rounded-3xl border border-black30">
      <Text tag="h2" textStyle="xl" className="sm:mb-4 lg:mb-5 font-semibold">
        Content
      </Text>
      <div className="mb-3 lg:mb-5">
        {contentCards.map((card, index) => (
          <ContentCard
            key={index}
            video={card.video}
            videoTitle={card.videoTitle}
            videoAlt={card.videoAlt}
          />
        ))}
      </div>
      <Button variant="secondary" className="w-full text-darkGrey">
        Show more
      </Button>
    </div>
  );
};

Content.schema = {
  label: "Content",
  type: "Content",
  getDefaultProps: () => ({
    contentCards: [
      {
        video: video1,
        videoTitle: "Мнение эксперта: «Как продукту попасть на полку? В чем...",
        videoAlt: "Video from post",
      },
      {
        video: video2,
        videoTitle: "Интервью с летчиком-космонавтом, Героем России...",
        videoAlt: "Video from post",
      },
      {
        video: video3,
        videoTitle: "Тренды в разработке продуктов питания 2025",
        videoAlt: "Video from post",
      },
    ],
  }),
};
