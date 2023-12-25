import { Metadata } from "next";

import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "PPDB Whatschool",
};

export default function page() {
  return (
    <div className="container">
      <Navbar />
    </div>
  );
}
