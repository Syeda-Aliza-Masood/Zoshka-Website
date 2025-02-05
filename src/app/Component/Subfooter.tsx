import { ShoppingCart, Shield, Truck, Headphones } from "lucide-react";

export default function Subfooter() {
  return (
    <div className="border-t mt-2 mb-2">
      <div className="w-full py-12 bg-black"> {/* Changed background to golden */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-200 rounded-full">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2 text-white">High Quality</h3> {/* Updated text color to white */}
            <p className="text-sm text-white">Crafted from top materials</p> {/* Text is already white */}
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-200 rounded-full">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2 text-white">Discounts / Promotions</h3> {/* Updated text color to white */}
            <p className="text-sm text-white">On festivals</p> {/* Text is already white */}
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-200 rounded-full">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2 text-white">Free Shipping</h3> {/* Updated text color to white */}
            <p className="text-sm text-white">Order over Rs. 3000</p> {/* Text is already white */}
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-200 rounded-full">
              <Headphones className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2 text-white">24 / 7 Support</h3> {/* Updated text color to white */}
            <p className="text-sm text-white">Dedicated support</p> {/* Text is already white */}
          </div>
        </div>
      </div>
    </div>
  );
}
