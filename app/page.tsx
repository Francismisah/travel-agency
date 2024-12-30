import About from "@/components/About";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
   <Hero/>
    <About />
    <Guide />
    <Services />
    <GetApp/>
    </>
  );
}
