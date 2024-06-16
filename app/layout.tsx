import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>It's a hellscape!</title>
      </head>
      <body>
        <main>
          <Banner />
          <Navbar />
          <Header
            title="Jamie L. Thompson, LCSW"
            subtitle="Badass Therapy Something Something"
          />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
