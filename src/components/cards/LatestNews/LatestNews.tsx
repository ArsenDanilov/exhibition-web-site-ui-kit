import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { NewsCard } from "./NewsCard";
import { formatPostTime } from "@/utils/formatPostTime";
import { type EditableComponent } from "../../../types";
import kivichAvatar from "@/assets/usersAvatars/kivichAvatar.png";
import glazkovaAvatar from "@/assets/usersAvatars/glazkovaAvatar.png";
import iteAvatar from "@/assets/usersAvatars/iteAvatar.png";
import kivichPostImage from "@/assets/news/kivichPostImage.png"
import glazkovaPostImage from "@/assets/news/glazkovaPostImage.png"
import itePostImage from "@/assets/news/itePostImage.png"

export interface INewsCard {
  username: string;
  avatar: string;
  postedAt: string;
  text?: string;
  images?: string;
  likes: number;
  comments: number;
}

interface LatestNewsProps {
  newsCards: INewsCard[];
}

export const LatestNews: EditableComponent<LatestNewsProps> = ({ newsCards }) => {
  return (
    <section className="!bg-white py-9 rounded-3xl sm:py-0 sm:rounded-none sm:!bg-transparent md:w-[55%]">
      <Text
        as="h2"
        size="xl"
        weight="semibold"
        className="text-center md:text-start mb-5"
      >
        Latest News
      </Text>
      <div>
        {newsCards.map((newsCard) => (
          <NewsCard
            key={newsCard.postedAt}
            username={newsCard.username}
            avatar={newsCard.avatar}
            postedAt={formatPostTime(newsCard.postedAt)}
            text={newsCard.text}
            images={newsCard.images}
            likes={newsCard.likes}
            comments={newsCard.comments}
          />
        ))}
      </div>
      <div className="px-6 md:px-0">
        <Button fullWidth>Show more content</Button>
      </div>
    </section>
  );
};

LatestNews.schema = {
  label: "LatestNews",
  type: "LatestNews",
  getDefaultProps: () => ({
    newsCards: [
      {
        username: "Александра Кивич",
        avatar: kivichAvatar,
        postedAt: "2025-06-30T18:07:56.789Z",
        text: "🔥Уважаемые участники сообщества!🔥 С 14 по 18 июля на WorldFood Connect пройдет тематическая неделя «Безалкогольные напитки». Как всегда, вас ждут экспертные вебинары, интервью, новости и посты от участников сообщества!",
        images: kivichPostImage,
        likes: 11,
        comments: 444,
      },
      {
        username: "Валерия Глазкова",
        avatar: glazkovaAvatar,
        postedAt: "2025-06-25T17:06:56.789Z",
        text: "#WorldFoodSummit&НильсенАкадемия #WorldFoodSummit. 🔥 Уважаемые участники бизнес-сообщества! 🔥 Собираем для вас в одном посте эксклюзивные материалы с WorldFood Summit & Нильсен Академии.",
        images: glazkovaPostImage,
        likes: 11,
        comments: 444,
      },
      {
        username: "ITE Group",
        avatar: iteAvatar,
        postedAt: "2024-11-18T13:13:56.789Z",
        text: "С чем будут строить малоэтажку: решения SIEGENIA на MosBuild 2023 Центральная тема SIEGENIA на MosBuild 2023 — ИЖС. Компания совместно с партнерами profine RUS и FUTURUSS проведет мероприятия о развитии в загородном строительстве, а на Архитектурной арене представит портфолио продуктов для остекления ИЖС.",
        images: itePostImage,
        likes: 11,
        comments: 444,
      },
      {
        username: "ITE Group",
        avatar: iteAvatar,
        postedAt: "2024-11-18T13:13:56.789Z",
        text: "С чем будут строить малоэтажку: решения SIEGENIA на MosBuild 2023 Центральная тема SIEGENIA на MosBuild 2023 — ИЖС. Компания совместно с партнерами profine RUS и FUTURUSS проведет мероприятия о развитии в загородном строительстве, а на Архитектурной арене представит портфолио продуктов для остекления ИЖС.",
        images: itePostImage,
        likes: 11,
        comments: 444,
      },
    ],
  }),
};
