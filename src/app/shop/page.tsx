"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Navbar from "@/Components/Navbar"; // Import Navbar component
import Subfooter from "@/Components/Subfooter"; // Import Subfooter component
import Footer from "@/Components/Footer"; // Import Footer component

interface Product {
  id: string;
  image: string;
  productname: string;
  productdes: string;
  price: number; // Original price
  discount: number;
  rating: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cartModelVisibility, setCartModelVisibility] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false); // Track client-side mounting
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Number of products per page
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Ensure router only works on the client side
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://67913f55af8442fd737989a0.mockapi.io/api/zoshka/ecommerceweb");
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
        const fetchedData = await res.json();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (item: Product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, item];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartModelVisibility(true);
  };

  const viewCart = () => {
    if (isClient) {
      router.push("/cart");
    }
  };

  const continueShopping = () => {
    if (isClient) {
      router.push("/shop");
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(data.length / productsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  if (!isClient) return null; // Render nothing until mounted on client

  return (
    <div className="min-h-screen bg-white">
      <Navbar /> {/* Add Navbar component */}
      
      <div className="container mx-auto px-4 text-center mb-15 mt-8">
        <h2 className="text-3xl font-bold text-center text-[#B88E2F] mb-8">
          Our Product
        </h2>
        <p className="text-xl text-gray-800 mt-4 mb-4">
          Explore the finest products with amazing deals
        </p>
      </div>

      {loading && <p className="text-center text-[#B88E2F]">Loading ...</p>}

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {currentProducts.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300 max-w-xs mx-auto flex flex-col border border-gray-200"
          >
            <div className="relative w-full h-72">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.productname}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-t-xl bg-gray-300"
              />
              <div className="absolute top-2 left-2 bg-[#B88E2F] text-white py-1 px-3 text-xs font-semibold rounded-full shadow-md">
                {item.discount} % OFF
              </div>
            </div>
            <div className="flex-1 p-6">
              <h2 className="text-lg font-semibold text-gray-800">{item.productname}</h2>
              <p className="text-sm text-gray-600 mt-1">{item.productdes}</p>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center text-lg text-gray-900">
                  <span className="font-semibold text-[#B88E2F]">Price:</span>
                  <div className="flex items-center">
                    <span className="text-gray-500 line-through mr-2">Rs. {item.price}</span>
                    <span className="text-xl font-bold text-gray-800">
                      Rs. {item.price - (item.price * item.discount) / 100}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-lg text-gray-900">
                <span className="text-lg">Rating:</span>
                <div className="flex items-center text-[#B88E2F]">
                  {[...Array(Math.floor(item.rating))].map((_, index) => (
                    <FaStar key={index} className="text-xl" />
                  ))}
                  {item.rating % 1 !== 0 && <FaStar className="text-xl" style={{ opacity: 0.5 }} />}
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(item)}
                className="mt-4 bg-[#B88E2F] text-white rounded-lg py-2 px-4 text-base font-semibold transition-all duration-300 ease-in-out hover:bg-black w-full"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-12 mb-12">
        <button
          onClick={handlePreviousPage}
          className="bg-[#B88E2F] text-white py-2 px-4 rounded-lg hover:bg-black transition-all"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="bg-[#B88E2F] text-white py-2 px-4 rounded-lg hover:bg-black transition-all"
        >
          Next
        </button>
      </div>

      {cartModelVisibility && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-96 relative shadow-xl">
            <button
              onClick={() => setCartModelVisibility(false)}
              className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Added To Cart</h2>
            <p className="text-gray-600 mb-6">
              You have added a product to your cart. Would you like to view your cart?
            </p>
            <div className="flex space-x-4">
              <button
                onClick={continueShopping}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-[#B88E2F] transition-colors "
              >
                Continue Shopping
              </button>
              <button
                onClick={viewCart}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-[#B88E2F] transition-colors"
              >
                View Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <Subfooter /> {/* Add Subfooter component */}
      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default Home;
