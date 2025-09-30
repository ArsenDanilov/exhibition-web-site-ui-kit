import { Text } from "../../ui/Text";
import { newsData } from "./news.data";
import { NewsCard } from "./NewsCard";

export const LatestNews = () => {

  function formatPostTime(dateString: string): string {
    const date = new Date(dateString);

    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");

    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];

    const monthName = months[month];

    return `${day} ${monthName} в ${hours}:${minutes}`;
  }

  return (
    <section className="w-[611px]">
      <Text tag="h3" textStyle="3xl" className="text-3xl mb-5 font-semibold">
        Latest News
      </Text>
      <div>
        {newsData.map((item) => (
            <NewsCard username={item.username} avatar={item.avatar} postedAt={formatPostTime(item.postedAt)} text={item.text} images={item.images} likes={item.likes} comments={item.comments}/>
        ))}
      </div>
    </section>
  );
};
