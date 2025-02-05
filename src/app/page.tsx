import Category from "@/app/Component/Category";
import Counter from "@/app/Component/Counter";
import Footer from "@/app/Component/Footer";
import Hero from "@/app/Component/Hero";
import Navbar from "@/app/Component/Navbar";
import Product from "@/app/Component/Product";
import Subfooter from "@/app/Component/Subfooter";
import Fusion from "@/app/Component/Fusion";


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
