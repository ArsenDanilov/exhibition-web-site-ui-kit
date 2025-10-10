import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { Image } from "@/components/ui/Image";
import { Text } from "@/components/ui/Text";
import favoriteIcon from "@/assets/favoriteIcon.svg";
import { type IProductCard } from "./Product";

export const ProductCard = ({ productName, productImage }: IProductCard) => {
  return (
    <div className="flex-1 min-w-0">
      <div className="rounded-lg border border-black12 h-[121px] lg:h-[169px] mb-4 p-2">
        <Image src={productImage} alt="Product image" className="w-full h-full object-cover" />
      </div>
      <Text weight="semibold" size="xxs" className="mb-4 line-clamp-2 overflow-hidden text-ellipsis">{productName}</Text>
      <div className="flex gap-2 items-end">
        <Button>Interested</Button>
        <IconButton variant="secondary" size="md"><Image src={favoriteIcon} /></IconButton>
      </div>
    </div>
  );
};
