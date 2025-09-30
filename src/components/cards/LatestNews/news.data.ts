import kivichAvatar from "@/assets/news/kivichAvatar.png";
import glazkovaAvatar from "@/assets/news/glazkovaAvatar.png";
import iteAvatar from "@/assets/news/iteAvatar.png";
import kivichPostImage from "@/assets/news/kivichPostImage.png"
import glazkovaPostImage from "@/assets/news/glazkovaPostImage.png"
import itePostImage from "@/assets/news/itePostImage.png"

export interface INewsData {
    username: string,
    avatar: string,
    postedAt: string,
    text?: string,
    images?: string | string[],
    likes: number,
    comments: number
}

export const newsData: INewsData[] = [
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
    text: "#WorldFoodSummit&НильсенАкадемия#WorldFoodSummit. 🔥 Уважаемые участники бизнес-сообщества! 🔥 Собираем для вас в одном посте эксклюзивные материалы с WorldFood Summit & Нильсен Академии.",
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
];
