import localFont from "next/font/local";

import "@app/globals.css";
import Banner from "@components/banner";
import Footer from "@components/footer";
import Header from "@components/header";
import Navbar from "@components/navbar";

const interFont = localFont({
  src: [
    {
      path: "./InterVariable.woff2",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "./InterVariable-Italic.woff2",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={interFont.className}>
      <head>
        <title>It's a hellscape!</title>
      </head>
      <body>
        <main>
          <Banner />
          <Navbar />
          <Header
            title="Jamie L. Thompson, LCSW!!!"
            subtitle="Badass Therapy Something Something"
          />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
