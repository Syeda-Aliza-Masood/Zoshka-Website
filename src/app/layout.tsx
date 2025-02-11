import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css"; // Ensure correct path for Tailwind styles
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zoshka",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={`${geistSans.className} ${geistMono.className} font-sans antialiased bg-gray-50 text-gray-900`}> 
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
