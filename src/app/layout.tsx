import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  title: "HiredEasy - Creative Digital Agency",
  description: "We build creative websites & apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.className}  antialiased`}
      >
        {/* <Navbar/> */}
        {children}
      </body>
    </html>
  );
}
