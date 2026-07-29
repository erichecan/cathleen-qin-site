import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import About from "@/components/About";
import Speaking from "@/components/Speaking";
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
        <About />
        <Statement />
        <Speaking />
        <Moments />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
