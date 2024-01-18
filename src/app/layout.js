import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Website",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
