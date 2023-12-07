import { mainFont } from "@/lib/font";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${mainFont.className}`}>{children}</body>
    </html>
  );
}
