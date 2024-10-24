import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google"
import "./globals.css";
import { TooltipProvider } from "@radix-ui/react-tooltip";


const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter"
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
})

export const metadata: Metadata = {
  title: "Sanjiv Jaiswal",
  description: "Entrepreneurial web developer building real products!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <TooltipProvider>
      <html lang="en">
        <body
          className={`${jetbrainsMono.variable} ${inter.variable}`}
        >
          {children}
        </body>
      </html>
    </TooltipProvider>
  );
}
