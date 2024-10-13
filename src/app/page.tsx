import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import NavBar from "@/components/nav-bar/nav-bar";
import Services from "@/components/services/services";
import Testimonial from "@/components/testimonial/testimonial";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Testimonial/>
      <Footer/>
    </>
  );
}
