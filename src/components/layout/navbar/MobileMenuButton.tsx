export const MobileMenuButton = ({ isOpen }: {isOpen: boolean}) => {
  return (
    <div className="flex items-center">
      <button>
        <img
          src={
            isOpen
              ? "@/../public/closeMobileMenuButton.svg"
              : "@/../public/burgerButton.svg"
          }
          alt={isOpen ? "Close mobile menu button": "Open mobile menu button"}
        />
      </button>
    </div>
  );
};


