import { Hero } from "../sections/Hero";
import { LogoTicker } from "../sections/LogoTicker";
import { ProductShowcase } from "../sections/ProductShowcase";
import {  Howitworks} from "../sections/Howitworks";
import { Testimonials } from "../sections/Testimonials";
import { CallToAction } from "../sections/CallToAction";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Howitworks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
