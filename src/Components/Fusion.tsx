import Image from "next/image";

export default function SocialGallery() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-gray-600 text-lg mb-2">Share your setup with</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
          #ZOSHKA
        </h2>
      </div>

      <div className="relative overflow-hidden rounded-lg">
        <Image
          src="/fusion.png" // Replace with your desired image path
          alt="Workspace setup" // Update alt text if necessary
          width={1799} // Set appropriate width
          height={721} // Set appropriate height
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 " />
      </div>
    </section>
  );
}
