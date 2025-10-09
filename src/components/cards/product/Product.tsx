import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { ProductCard } from "./ProductCard";
import { type EditableComponent } from "../../../types";
import product1 from "@/assets/product/product1.png"
import product2 from "@/assets/product/product2.png"

export interface IProductCard {
  productName: string;
  productImage: string;
}

interface ProductProps {
  productCards: IProductCard[];
}

export const Product: EditableComponent<ProductProps> = ({ productCards }) => {
  return (
    <div className="hidden sm:block px-6 py-4 sm:px-5 sm:py-3 lg:px-7 lg:py-5 rounded-3xl border border-black30 ">
      <Text as="h2" size="xl" weight="semibold" className="mb-5">
        Product
      </Text>
      <div className="flex justify-between gap-5 lg:gap-7 mb-4 lg:mb-5">
        {productCards.map((card) => (
          <ProductCard
            key={card.productName}
            productImage={card.productImage}
            productName={card.productName}
          />
        ))}
      </div>
      <Button variant="muted" fullWidth>
        Show more
      </Button>
    </div>
  );
};

Product.schema = {
  label: "Product",
  type: "Product",
  getDefaultProps: () => ({
    productCards: [
      {
        productName: "ТМ Снэкушки Коррекс. Сухарики",
        productImage: product1,
    },
    {
        productName: "Арахис в хрустящей корочке Small Balls",
        productImage: product2,
    },
    ],
  }),
};
