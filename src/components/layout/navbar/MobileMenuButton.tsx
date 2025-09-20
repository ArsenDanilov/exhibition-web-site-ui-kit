import closeMobileMenuButton from "../../../../public/closeMobileMenuButton.svg"
import burgerButton from "../../../../public/burgerButton.svg"

export const MobileMenuButton = ({ isOpen }: {isOpen: boolean}) => {
  return (
    <div className="flex items-center">
      <button>
        <img src={isOpen ? `${closeMobileMenuButton}` :`${burgerButton}`}
          alt={isOpen ? "Close mobile menu button": "Open mobile menu button"}
        />
      </button>
    </div>
  );
};


