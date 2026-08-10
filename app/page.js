import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Categories />
      <FeaturedProducts />
      <About />
    </>
  );
}
