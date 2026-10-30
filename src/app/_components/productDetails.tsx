
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/app/lib/products';

type Props = {
  product: Product;
};

export default function ProductDetailsClient({ product }: Props) {
  return (
    <main className="mx-auto w-full max-w-full bg-white px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
      <Link
        href="/products"
        className="mb-5 inline-flex min-h-11 items-center text-sm text-gray-600 hover:text-black sm:mb-6"
      >
        ← Back to products
      </Link>

      <div className="grid min-w-0 gap-6 sm:gap-8 md:grid-cols-2 md:gap-10">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 sm:rounded-xl">
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
          <p className="text-xs uppercase tracking-wide text-gray-500 sm:text-sm">
            {product.category}
          </p>

          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            {product.title}
          </h1>

          {product.rating !== undefined && (
            <p className="mt-3 text-amber-500">
              ★ {product.rating.toFixed(1)} / 5
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
              ₹{product.price.toLocaleString('en-IN')}
            </p>

            {product.originalPrice !== undefined && (
              <p className="text-base text-gray-400 line-through sm:text-lg">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </p>
            )}
          </div>

          <p className="mt-5 text-sm leading-6 text-gray-600 sm:mt-6 sm:text-base sm:leading-7">
            {product.description}
          </p>

          <button
            type="button"
            onClick={() => alert(`${product.title} added to cart`)}
            className="mt-6 min-h-12 w-full rounded-md bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800 sm:mt-8 sm:text-base"
          >
            Add to Cart
          </button>
        </section>
      </div>
    </main>
  );
}
