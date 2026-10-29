
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '../lib/products';

type Props = {
  product: Product;
};

export default function ProductDetailsClient({ product }: Props) {
  return (
    <main className=" mx-auto max-w-7xl px-4 py-10">
      <Link
        href="/Products"
        className="mb-6 inline-block text-sm text-gray-600 hover:text-black"
      >
        ← Back to products
      </Link>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <section>
          <p className="text-sm uppercase tracking-wide text-gray-500">
            {product.category}
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            {product.title}
          </h1>

          {product.rating !== undefined && (
            <p className="mt-3 text-amber-500">
              ★ {product.rating.toFixed(1)} / 5
            </p>
          )}

          <div className="mt-5 flex items-center gap-3">
            <p className="text-3xl font-bold text-gray-900">
              ₹{product.price.toLocaleString('en-IN')}
            </p>

            {product.originalPrice !== undefined && (
              <p className="text-lg text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </p>
            )}
          </div>

          <p className="mt-6 leading-7 text-gray-600">
            {product.description}
          </p>

          <button
            type="button"
            onClick={() => alert(`${product.title} added to cart`)}
            className="mt-8 w-full rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </section>
      </div>
    </main>
  );
}
