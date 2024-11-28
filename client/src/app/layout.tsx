import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import { DashboardWrapper } from "@/app/dashboardWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Add specific weights if needed
  style: ["normal", "italic"], // Optional, if styles like italic are needed
  variable: "--font-poppins", // Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased`}
      >
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}