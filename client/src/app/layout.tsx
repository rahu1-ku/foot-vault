import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";
import { Nunito_Sans } from "next/font/google";
const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: '400',
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FootVault",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={nunito.className}>
        <DashboardWrapper>
          {children}
          </DashboardWrapper>
        
      </body>
    </html>
  );
}
