import { Rubik, DM_Sans } from "next/font/google";

const rubik = Rubik({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

const dm = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm",
});

export const fonts = {
  rubik,
  dm,
};
