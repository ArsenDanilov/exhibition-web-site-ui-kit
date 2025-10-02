import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { companiesData } from "./companies.data";
import { CompanyCard } from "./CompanyCard";

export const Companies = () => {
  return (
    <div className="px-7 py-5 rounded-3xl border border-black30">
      <Text tag="h3" textStyle="3xl" className="mb-5 font-semibold">
        Content
      </Text>
      <div className="mb-5">
        {companiesData.map((item) => (
            <CompanyCard companyAvatar={item.companyAvatar} companyName={item.companyName} companyDescription={item.companyDescription} />
        ))}
      </div>
      <Text className="mb-5">Get a list of exhibiting companies that can solve your business needs in <span className="text-primary font-semibold">Matchmaking</span></Text>
      <Button variant="secondary" className="w-full text-darkGrey">
        Show more
      </Button>
    </div>
  );
};
