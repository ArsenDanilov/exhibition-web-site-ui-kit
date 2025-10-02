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
    <div className="px-7 py-5 rounded-3xl border border-black30">
      <Text tag="h3" textStyle="2xl" className="text-2xl mb-5 font-semibold">
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
      <Text className="mb-5">
        Get a list of exhibiting companies that can solve your business needs in{" "}
        <span className="text-primary font-semibold">Matchmaking</span>
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
