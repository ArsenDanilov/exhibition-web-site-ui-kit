interface INavbarData  {
    title: string,
    href: string,
}

interface IMobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export type { INavbarData, IMobileMenuButtonProps }