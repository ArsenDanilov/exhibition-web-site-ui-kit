import { SessionCard } from "./SessionCard";
import { Text } from "@/components/ui/Text";
import { type EditableComponent } from "../../../types";
import { Button } from "@/components/ui/Button";

export interface ISessionCard {
  sessionTitle: string;
  sessionDescription: string;
  sessionPostedAt: string;
  sessionTags?: string[];
}

interface SessionsProps {
  sessionsCards: ISessionCard[];
}

export const Sessions: EditableComponent<SessionsProps> = ({ sessionsCards }) => {
  return (
    <div className="px-6 py-4 sm:px-5 sm:py-3 lg:px-7 lg:py-5 rounded-3xl sm:border border-black30">
      <Text as="h2" size="xl" weight="semibold" className="mb-5">
        Sessions
      </Text>
      {sessionsCards.map((card, index) => (
        <SessionCard
          key={index}
          sessionTitle={card.sessionTitle}
          sessionDescription={card.sessionDescription}
          sessionPostedAt={card.sessionPostedAt}
          sessionTags={card.sessionTags}
        />
      ))}
      <Button variant="secondary" className="w-full text-darkGrey">
        Show more
      </Button>
    </div>
  );
};

Sessions.schema = {
  label: "Sessions",
  type: "Sessions",
  getDefaultProps: () => ({
    sessionsCards: [
      {
        sessionTitle:
          "Главные изменения индустрии напитков 2025. Что ждет рынок и производителей?",
        sessionDescription:
          "Приглашаем 15 июля в 11.00 по МСК на вебинар «Главные изменения индустрии напитков 2025. Что ждет рынок и производителей?",
        sessionPostedAt: "2025-07-15T11:00:56.789Z",
        sessionTags: [
          "Теги теги теги",
          "Теги теги теги",
          "Теги теги теги теги теги теги",
        ],
      },
      {
        sessionTitle:
          "Производство без слепых зон: как добиться полной прозрачности и управляемости на всех этапах",
        sessionDescription:
          "Приглашаем 27 мая в 11.00 по МСК на вебинар «Производство без слепых зон»",
        sessionPostedAt: "2025-05-27T11:00:56.789Z",
        sessionTags: [
          "Теги теги теги",
          "Теги теги теги",
          "Теги теги теги теги теги теги",
        ],
      },
      {
        sessionTitle: "Обзор цифровых сервисов для пищевых производств",
        sessionDescription:
          "Приглашаем 26 мая в 12.00 по МСК на вебинар «Обзор цифровых сервисов для пищевых производств»",
        sessionPostedAt: "2025-05-26T12:00:56.789Z",
        sessionTags: [
          "Теги теги теги",
          "Теги теги теги",
          "Теги теги теги теги теги теги",
        ],
      },
    ],
  }),
};
