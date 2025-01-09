import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Layout/Navbar";
import Footer from "@/Layout/Footer";
import Transition from "./motion";

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
  title: "Prashant",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="geistMono.className">
      <body className={` font-mono fgh ${geistSans.variable} ${geistMono.variable} antialiased`} >
        <div className="body-container">
          <div className="nav-container"><Navbar /></div>
          <div className="page-body "><div className="child-container mx-auto " >
            <Transition >{children}</Transition> 
          </div></div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
