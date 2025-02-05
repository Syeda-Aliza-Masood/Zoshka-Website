"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/Components/ui/card"

interface Product {
  name: string
  description: string
  image: string
  price: string
}

const data: Product[] = [
  {
    name: "Smart Watch",
    price: "Rs. 2800",
    image: "/watch.JPEG",
    description: "I20 ultra max suit smart watch 10 in 1 in one box 2.3 inches large screen smart watch with earbuds,",
  },
  {
    name: "Tumbler",
    price: "Rs. 2090",
    image: "/tumbler.JPEG",
    description: "High Quality Stainless Steel Tumbler with Straw 1200ml",
  },
  {
    name: "Solar LED",
    price: "Rs. 500",
    image: "/light.JPEG",
    description:
      "Waterproof Solar Deck fence Lights Lamp Solar LED Step Light Solar Lights for Home, Outdoor Stairs, Step, Fence, Yard, Patio, and Pathway (Assorted Color)",
  },
  {
    name: "Bottle Cover",
    price: "Rs. 300",
    image: "/cover.JPEG",
    description: "Water Dispenser Bottle Cover, Gallon Water Bottle Dust Poof Cloth, Random Colours & Design",
  },
  {
    name: "Airtight Jar",
    price: "Rs. 700",
    image: "/grain.JPEG",
    description: "2.5L Airtight Grain Jar (Premium Quality) Each",
  },
  {
    name: "Leather Case Organizer Tray",
    price: "Rs. 600",
    image: "/tray.JPEG",
    description: "Leather Case Organizer Tray (Square Random Colors)",
  },
  {
    name: "Neck Pillow",
    price: "Rs. 560",
    image: "/pillow.JPEG",
    description: "Filling: 100% Polyurethane fiber Foam Plush cover: 90% Polyester; 10% Spandex Snap fastener",
  },
  {
    name: "Dishwashing Gloves",
    price: "Rs. 480",
    image: "/gloves.JPEG",
    description: "Dishwashing Gloves Big (Random Colours)",
  },
  {
    name: "Glass Jar",
    price: "Rs. 390",
    image: "/jar.JPEG",
    description: "Glass Cover Jar with Spoon & Brush(Box Packing) Each",
  },
  {
    name: "Acrylic Box",
    price: "Rs. 1850",
    image: "/box.JPEG",
    description: "Acrylic 4 Grid Storage Box (Premium Quality)",
  },
]

export default function CategorySection() {
  const [visibleCount, setVisibleCount] = useState(6)

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 3)
  }

  return (
    <section className="py-12 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.slice(0, visibleCount).map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-gray-200"
            >
              <CardContent className="p-0">
                <div className="relative h-72 w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 text-sm flex-grow mb-2">{product.description}</p>
                  <p className="font-bold text-lg text-[#B88E2F]">{product.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {visibleCount < data.length && (
          <div className="flex justify-center mt-8">
            <button
              className="text-[#B88E2F] border-2 border-[#B88E2F] px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-md hover:bg-[#B88E2F] hover:text-white transition duration-300"
              onClick={loadMoreProducts}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

