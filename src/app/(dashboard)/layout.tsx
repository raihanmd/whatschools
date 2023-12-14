import { Metadata } from "next";

import Sidebar from "../components/Sidebar";
import APP_CONFIG from "@/config/app";

export const metadata: Metadata = {
  title: `Dashboard | ${APP_CONFIG.appName}`,
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <Sidebar>{children}</Sidebar>;
};

export default layout;
