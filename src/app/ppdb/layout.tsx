import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPDB Whatschool",
};

export default function page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
