import Category from "@/Components/Category";
import Counter from "@/Components/Counter"
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Product from "@/Components/Product";
import Subfooter from "@/Components/Subfooter";
import Fusion from "@/Components/Fusion";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Product />
      <Counter />
      <Fusion />
      <Subfooter />
      <Footer />
    </div>
  );
}
