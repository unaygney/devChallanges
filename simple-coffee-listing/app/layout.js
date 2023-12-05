import { mainFont } from "@/lib/font";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased w-full  h-full">
      <body className={`${mainFont.className} w-full h-full  `}>
        {children}
      </body>
    </html>
  );
}
