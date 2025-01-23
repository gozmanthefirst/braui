// External Imports
import type { Metadata } from "next";
import { ReactNode } from "react";

// Local Imports
import { Header } from "@/components/ui/header";
import { Navigation } from "@/components/ui/navigation";
import { geistSans } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Braui",
  description: "A web app where I build random animated UIs.",
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
        <div className="flex flex-col justify-between min-h-dvh">
          <Header />
          {children}
          <Navigation />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
