"use client";

import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/constants/products";


export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Products
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            We offer a wide range of products designed to meet your unique needs
            and tastes. From farm-fresh produce to natural delights, every
            product reflects our commitment to quality and sustainability.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="rounded-xl object-contain h-56 mx-auto"
                />
                <div className="mt-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm flex-1">
                    {product.description}
                  </p>
                  <Link
                    href={`/products/${product.id}`}
                    className="mt-4 inline-block text-green-700 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
