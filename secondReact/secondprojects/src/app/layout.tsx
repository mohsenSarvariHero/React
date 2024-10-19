import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    absolute:"",
    default:"create new app",
    template:"mohsen sarvari | %s"
  },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <h1 className="bg-slate-700 text-white text-center p-10">Heading page</h1>
        <div className="p-3 bg-slate-100">
          
          {children}
        </div>
        
        <footer className="bg-slate-700 text-green-400 text-center p-5">footer page</footer>
      </body>
    </html>
  );
}
