import { Button } from "@/components/ui/Button";
import { Image } from "@/components/ui/Image";
import { Text } from "@/components/ui/Text";
import favoriteIcon from "@/assets/favoriteIcon.svg";
import type { IProductData } from "./product.data";

export const ProductCard = ({ productName, productImage }: IProductData) => {
  return (
    <div>
      <div className="rounded-lg border border-black12 h-[169px] mb-4 p-2">
        <Image src={productImage} alt="Product image" className="w-full h-full object-cover" />
      </div>
      <Text className="font-semibold mb-4">{productName}</Text>
      <div className="flex gap-2">
        <Button>Interested</Button>
        <Button variant="secondary" className="w-[46px] h-[40px]"><Image src={favoriteIcon} /></Button>
      </div>
    </div>
  );
};
