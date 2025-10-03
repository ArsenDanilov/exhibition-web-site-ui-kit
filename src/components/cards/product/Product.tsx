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
    <div className="px-7 py-5 rounded-3xl border border-black30">
      <Text tag="h3" textStyle="2xl" className="mb-5 font-semibold">
        Product
      </Text>
      <div className="flex items-center gap-7 mb-5 justify-center">
        {productCards.map((card) => (
          <ProductCard
            key={card.productName}
            productImage={card.productImage}
            productName={card.productName}
          />
        ))}
      </div>
      <Button variant="secondary" className="text-darkGrey w-full">
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
