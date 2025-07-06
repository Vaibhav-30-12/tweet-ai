import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import BackgroundImage from "@/components/BackgroundImage";
import { Toaster } from 'sonner'
import Providers from "./Providers";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const Raleway_init = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tweet.ai",
  description: "Refine your tweet with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Raleway_init.className} antialiased h-screen dark:bg-black bg-white`}
      >
        <Providers>
          <SidebarProvider>
            <AppSidebar />
            <Toaster />
            <BackgroundImage />
            <SidebarTrigger />
            {children}
            <Analytics />
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
