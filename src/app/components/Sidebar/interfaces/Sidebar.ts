import { BoxProps, FlexProps } from "@chakra-ui/react";
import { ReactText } from "react";
import { IconType } from "react-icons";

export interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

export interface SidebarProps extends BoxProps {
  LinkItems: Array<LinkItemProps>;
  onClose: () => void;
}

export interface MobileProps extends FlexProps {
  onOpen: () => void;
}

export interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  href: string;
}
