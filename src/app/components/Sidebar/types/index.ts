import { BoxProps, FlexProps } from "@chakra-ui/react";
import { ReactText } from "react";
import { IconType } from "react-icons";

export type LinkItemProps = {
  name: string;
  icon: IconType;
  href: string;
};

export type SidebarProps = BoxProps & {
  LinkItems: Array<LinkItemProps>;
  onClose: () => void;
};

export type MobileProps = FlexProps & {
  onOpen: () => void;
};

export type NavItemProps = FlexProps & {
  icon: IconType;
  children: React.ReactNode;
  href: string;
};
