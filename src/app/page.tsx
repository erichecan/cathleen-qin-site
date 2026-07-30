import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import About from "@/components/About";
import Offerings from "@/components/Offerings";
import Statement from "@/components/Statement";
import Stats from "@/components/Stats";
import Speaking from "@/components/Speaking";
import ComingSoon from "@/components/ComingSoon";
import Moments from "@/components/Moments";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Positioning />
        <About />
        <Offerings />
        <Statement />
        <Stats />
        <Speaking />
        <ComingSoon />
        <Moments />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
