import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Header, { Nav } from "@/app/header";
import { headers } from "next/headers";
import { ThemeProvider } from "@/app/theme-provider";
import React from "react";
import Footer from "@/app/footer";
import { Toaster } from "@/components/ui/toaster";
import { env } from "@/env";
import GradientBackground from "@/components/gradient-background";
import { Logo } from "@/components/logo";
import VerticalSpace from "@/components/vertical-space";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Christian Stamati — Fullstack Developer",
  description: "On a mission to build products people love",
  icons: [{ rel: "icon", url: "/favicon.png" }],
  openGraph: {
    images: [
      {
        width: 1200,
        height: 630,
        url: "/static/images/social-share.png",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (env.UNDER_MAINTENANCE === "true") {
    return (
      <html lang="en" suppressHydrationWarning>
        <body
          className={`font-sans ${GeistSans.variable} ${GeistMono.variable} flex h-svh flex-col items-center`}
        >
          <GradientBackground />
          <Logo className="py-12 text-4xl"></Logo>

          <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
            <h1 className="max-w-sm text-3xl font-semibold sm:max-w-lg sm:text-4xl">
              The site is under construction maintenance!
            </h1>
            <VerticalSpace />
            <p className="max-w-md">
              The website is currently undergoing scheduled maintenance, it will
              be back soon! Thank you for being so patient. Contact me for more
              information!
            </p>
            <VerticalSpace />
            <Link href="mailto:hello@chri.dev" className="font-bold underline">
              hello@chri.dev
            </Link>
            <VerticalSpace size="xl" />
          </div>
        </body>
      </html>
    );
  }

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
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} h-svh`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <div className={`glass fixed bottom-0 left-0 right-0 z-50 sm:hidden`}>
            <Nav className="flex justify-center" />
          </div>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
