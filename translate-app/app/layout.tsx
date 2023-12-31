import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DM_SANS = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Translate App",
  description: "Translation app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          (DM_SANS.className,
          "w-full min-h-screen bg-hero bg-no-repeat bg-cover bg-center md:bg-right ")
        }
      >
        {children}
      </body>
    </html>
  );
}
