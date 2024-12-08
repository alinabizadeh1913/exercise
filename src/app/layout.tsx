import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import MainLayout from "../components/layout";

const Font = Orbitron({
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Practice",
  description: "Working on javascript and typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Typescript Project</title>
      </head>
      <body className={Font.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
