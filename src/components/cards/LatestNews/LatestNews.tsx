import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { newsData } from "./news.data";
import { NewsCard } from "./NewsCard";
import { formatPostTime } from "@/utils/formatPostTime";

export const LatestNews = () => {

  return (
    <section>
      <Text tag="h3" textStyle="3xl" className="text-3xl mb-5 font-semibold w-[60%]">
        Latest News
      </Text>
      <div>
        {newsData.map((item) => (
            <NewsCard key={item.postedAt} username={item.username} avatar={item.avatar} postedAt={formatPostTime(item.postedAt)} text={item.text} images={item.images} likes={item.likes} comments={item.comments}/>
        ))}
      </div>
      <Button className="w-full">Show more content</Button>
    </section>
  );
};
