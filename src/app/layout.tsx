import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import { Roboto, IBM_Plex_Sans } from "@next/font/google";
import Footer from "@/app/components/footer"

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300" , "400" , "500" , "700" , "900"],
  variable: "--font-Roboto"
})

const IBM_PlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['100','200','400','700'],
  variable: "--font-IBM_Plex_Sans"
})
export const metadata: Metadata = {
  title: "Create Next App",
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
        className={`${roboto.variable} ${IBM_PlexSans.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
