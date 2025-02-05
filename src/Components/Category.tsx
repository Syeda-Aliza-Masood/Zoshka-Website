"use client"

import { useEffect, useState, useMemo } from "react"
import Image from "next/image"
import { Smartphone, Home, UtensilsCrossed } from "lucide-react"
import { Card, CardContent } from "@/Components/ui/card"

export default function CategorySection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const categories = useMemo(
    () => [
      {
        icon: <Smartphone className="h-8 w-8" />,
        title: "Smart Devices",
        description: "Latest gadgets & electronics",
        image: "/watch.jpeg",
      },
      {
        icon: <Home className="h-8 w-8" />,
        title: "Home Decor",
        description: "Beautiful home accessories",
        image: "/light.jpeg",
      },
      {
        icon: <UtensilsCrossed className="h-8 w-8" />,
        title: "Kitchen Gadgets",
        description: "Modern kitchen essentials",
        image: "/kitchen.jpeg",
      },
    ],
    [],
  )

  if (!mounted) return null

  return (
    <section className="py-12 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Shop By Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-0 bg-gray-200">
                <div className="relative h-48 w-full">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 group-hover:bg-black/50 transition-colors" />
                </div>
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

