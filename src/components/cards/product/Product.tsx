import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { productData } from "./product.data";
import { ProductCard } from "./ProductCard";

export const Product = () => {
  return (
    <div className="px-7 py-5 rounded-3xl border border-black30">
      <Text tag="h3" textStyle="2xl" className="mb-5 font-semibold">
        Product
      </Text>
      <div className="flex items-center gap-7 mb-5 justify-center">
        {productData.map((data) => (
          <ProductCard
            key={data.productName}
            productImage={data.productImage}
            productName={data.productName}
          />
        ))}
      </div>
      <Button variant="secondary" className="text-darkGrey w-full">
        Show more
      </Button>
    </div>
  ); 
};
