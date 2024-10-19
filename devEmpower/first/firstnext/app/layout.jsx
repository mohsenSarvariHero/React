import localFont from "next/font/local";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import { MenuContext } from "@/Context/MenuContext";




export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <MenuContext>
                    <MainLayout> {children}</MainLayout>

        </MenuContext>
       
        
       
      </body>
    </html>
  );
}