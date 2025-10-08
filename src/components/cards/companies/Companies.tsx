import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { CompanyCard } from "./CompanyCard";
import ckppAvatar from "@/assets/companies/ckppAvatar.png";
import martasAvatar from "@/assets/companies/martasAvatar.png";
import quanzhouAvatar from "@/assets/companies/quanzhouAvatar.png";
import { type EditableComponent } from "../../../types";

export interface ICompanyCard {
  companyLogo: string;
  companyName: string;
  companyDescription: string;
}

interface CompaniesProps {
  companyCards: ICompanyCard[];
}

export const Companies: EditableComponent<CompaniesProps> = ({ companyCards }) => {
  return (
    <div className="px-6 py-4 sm:px-5 sm:py-3 lg:px-7 lg:py-5 rounded-3xl sm:border border-black30">
      <Text tag="h2" textStyle="xl" className="text-xl mb-5 font-semibold">
        Content
      </Text>
      <div className="mb-5">
        {companyCards.map((card) => (
          <CompanyCard
            companyLogo={card.companyLogo}
            companyName={card.companyName}
            companyDescription={card.companyDescription}
          />
        ))}
      </div>
      <Text className="mb-5 text-sm lg:text-base">
        Get a list of exhibiting companies that can solve your business needs in{" "}
        <span className="text-primary font-semibold text-sm lg:text-base">Matchmaking</span>
      </Text>
      <Button variant="secondary" className="w-full text-darkGrey">
        Show more
      </Button>
    </div>
  );
};

Companies.schema = {
  label: "Companies",
  type: "Companies",
  getDefaultProps: () => ({
    companyCards: [
      {
        companyLogo: ckppAvatar,
        companyName: "Центр компетенций пищевых производств",
        companyDescription:
          "Россия • Сервис и инжиниринг для пищевых производств",
      },
      {
        companyLogo: martasAvatar,
        companyName: "MARTAS TARIMSAL URUNLERI DEGERLENDIRME A.S.",
        companyDescription:
          "Россия • Сервис и инжиниринг для пищевых производств",
      },
      {
        companyLogo: quanzhouAvatar,
        companyName: "QUANZHOU JIFU FOOD CO.,LTD.",
        companyDescription:
          "Россия • Сервис и инжиниринг для пищевых производств",
      },
    ],
  }),
};
