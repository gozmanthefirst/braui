// External Imports
import type { Metadata } from "next";
import { ReactNode } from "react";

// Local Imports
import { Header } from "@/components/ui/header";
import { instrumentSans } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Braui",
  description: "A web app where I build brilliant random animated UIs.",
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.className} bg-background text-foreground antialiased`}
      >
        <div className="flex min-h-dvh flex-col">
          <Header />
          <div className="flex-1 py-4 md:py-6">{children}</div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
