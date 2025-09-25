"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/constants/products";



// Page Props
interface ProductPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-50 to-white py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {product.title}
          </h1>
          <p className="mt-2 text-green-600 font-medium">{product.category}</p>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={400}
              className="rounded-2xl object-contain shadow-sm"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              About {product.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.detail}
            </p>
            <Link
              href="/products"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
