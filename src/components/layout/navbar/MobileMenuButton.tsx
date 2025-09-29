import closeMobileMenuButton from "@/assets/closeMobileMenuButton.svg"
import burgerButton from "@/assets/burgerButton.svg"
import { Image } from "@/components/ui/Image";

export const MobileMenuButton = ({ isOpen }: {isOpen: boolean}) => {
  return (
    <div className="flex items-center">
      <button>
        <Image src={isOpen ? `${closeMobileMenuButton}` :`${burgerButton}`} alt={isOpen ? "Close mobile menu button": "Open mobile menu button"}></Image>
      </button>
    </div>
  );
};


