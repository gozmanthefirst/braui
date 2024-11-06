// External Imports
import { Tac_One } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const tacOne = Tac_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
