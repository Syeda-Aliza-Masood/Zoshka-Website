import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative overflow-hidden w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/5.jpg" alt="Hero background" fill style={{ objectFit: "cover" }} priority />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start min-h-screen bg-black bg-opacity-40 px-4 md:px-8">
        {/* Content Box */}
        <div className="w-full text-left max-w-sm md:max-w-md lg:max-w-lg p-6 md:p-8 rounded-lg shadow-lg">
          <h6 className="text-sm md:text-base lg:text-lg font-semibold mb-2 md:mb-4 text-white">New Arrival</h6>
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-[#B88E2F]">
            Discover Our <br /> New Collection
          </h3>
          <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 text-white">
            Explore the finest selection of premium products tailored just for you.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-[#B88E2F] text-white px-6 py-3 text-sm md:text-base font-semibold rounded-full hover:bg-gray-800 transition duration-300"
          >
            BUY NOW
          </Link>
        </div>
      </div>
    </div>
  )
}

