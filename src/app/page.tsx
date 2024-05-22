// import Image from "next/image";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/Featured";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Services />
    </>
  );
}
