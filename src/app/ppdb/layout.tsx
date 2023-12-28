import { Metadata } from "next";

// import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "PPDB Whatschool",
};

export default function page({ children }: { children: React.ReactNode }) {
  return (
    <div className="ppdb_container">
      {/* <Navbar /> */}
      {children}
    </div>
  );
}
