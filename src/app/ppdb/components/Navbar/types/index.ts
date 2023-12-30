import { IconType } from "react-icons";

export type NavItem = {
  label: string;
  icon: IconType;
  href: string;
  target?: string;
};

export type DesktopNavProps = {
  navItems: Array<NavItem>;
};

export type MobileNavProps = DesktopNavProps;
