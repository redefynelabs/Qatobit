import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const grift = localFont({
  src: [
    {
      path: "./grift/Grift-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
        path: "./grift/Grift-Medium.otf",
        weight: "500",
        style: "normal",
    },
    {
      path: "./grift/Grift-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-grift", 
  display: "swap",
});


export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});