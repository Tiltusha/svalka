import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/components/layout/layout";
import { Providers } from "@/components/common/Providers";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Svalka",
  description: "Svalka - персональный планировщик задач",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
          <LayoutClient>
            <Providers>
              {children}
            </Providers>
          </LayoutClient>
      </body>
    </html>
  );
}
