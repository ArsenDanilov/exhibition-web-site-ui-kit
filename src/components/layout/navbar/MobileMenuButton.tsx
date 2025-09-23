import closeMobileMenuButton from "../../../../public/closeMobileMenuButton.svg"
import burgerButton from "../../../../public/burgerButton.svg"
import { Image } from "../../ui/Image";

export const MobileMenuButton = ({ isOpen }: {isOpen: boolean}) => {
  return (
    <div className="flex items-center">
      <button>
        <Image src={isOpen ? `${closeMobileMenuButton}` :`${burgerButton}`} alt={isOpen ? "Close mobile menu button": "Open mobile menu button"}></Image>
      </button>
    </div>
  );
};


