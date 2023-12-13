import { Rubik, DM_Sans } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

export const fonts = {
  rubik,
  dm,
};
