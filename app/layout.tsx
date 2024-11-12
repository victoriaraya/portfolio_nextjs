import type { Metadata } from "next";
import { Gruppo } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const gruppo = Gruppo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gruppo",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Victoria Raya",
  description:
    "Portfolio website for Victoria Raya, software devloper focusing on frontend with React and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gruppo.className} bg-[#b291a4] dark:bg-[#4a3f47]`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
