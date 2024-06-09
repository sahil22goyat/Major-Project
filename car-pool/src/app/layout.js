import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Purchase from "./Purchase/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Pool",
  description: "  Social Help",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
       
      </body>
    </html>
  );
}
