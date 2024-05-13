import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header, { Nav } from "@/app/header";

export const metadata: Metadata = {
  title: "Christian Stamati",
  description: "Building digital products",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            <Nav className="grid w-full grid-cols-5" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
