import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SSR Testing - Next 14",
  description: "SSR Testing - Next 14",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
