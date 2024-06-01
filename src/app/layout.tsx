import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "../styles/globals.css";
import Header, { Nav } from "@/app/header";
import { headers } from "next/headers";
import { ThemeProvider } from "@/app/theme-provider";
import { SocialIcon } from "react-social-icons";
import React from "react";
import Footer from "@/app/footer";

export const metadata: Metadata = {
  title: "Christian Stamati",
  description: "On a mission to build products people love",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname");
  const isDev = pathname?.includes("dev");
  if (isDev) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body
          className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <div className={`glass fixed bottom-0 left-0 right-0 z-50 sm:hidden`}>
            <Nav className="flex justify-center" />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
