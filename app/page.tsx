import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import SplitWithImage from "./components/split-with-image";
import Navbar from "./components/navbar";

export default function Page() {
  return (
    <main>
      <Banner />
      <Navbar />
      <Header
        title="Jamie L. Thompson, LCSW"
        subtitle="Badass Therapy Something Something"
      />
      <SplitWithImage />
      <Footer />
    </main>
  );
}
