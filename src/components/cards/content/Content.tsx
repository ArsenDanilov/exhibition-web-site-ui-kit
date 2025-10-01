import { contentData } from "./content.data";
import { ContentCard } from "./ContentCard";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";

export const Content = () => {
  return (
    <div className="px-7 py-5 rounded-3xl border border-black30">
      <Text tag="h3" textStyle="3xl" className="mb-5 font-semibold">
        Content
      </Text>
      <div className="mb-5">
        {contentData.map((data, index) => (
          <ContentCard
            key={index}
            video={data.video}
            videoTitle={data.videoTitle}
            videoAlt={data.videoAlt}
          />
        ))}
      </div>
      <Button variant="secondary" className="w-full text-darkGrey">
        Show more
      </Button>
    </div>
  );
};
