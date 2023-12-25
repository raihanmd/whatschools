import { IconType } from "react-icons";

export interface NavItem {
  label: string;
  icon: IconType;
  href: string;
}

export interface DesktopNavProps {
  navItems: Array<NavItem>;
}

export interface MobileNavProps extends DesktopNavProps {}
