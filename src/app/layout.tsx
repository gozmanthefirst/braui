// External Imports
import type { Metadata } from "next";
import { ReactNode } from "react";

// Local Imports
import { geistSans } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Motions by Gozman",
  description: "Motions by Gozman",
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
