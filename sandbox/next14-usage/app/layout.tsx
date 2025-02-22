import * as React from "react";
import type { Metadata } from "next";
import "./globals.css";
import "@gitcoin/ui/styles.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SSR Testing - Next 14",
  description: "SSR Testing - Next 14",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <React.StrictMode>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="m-0" suppressHydrationWarning>
          <ThemeProvider enableSystem>
            <Navbar />
            <div className="mt-4">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </React.StrictMode>
  );
}
