
'use client';
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import type { Product } from '@/app/[locale]/lib/products';
import { useRouter } from '@/i18n/navigation';
import { useCart } from '@/app/[locale]/context/cartContext';

type Props = {
  product: Product;
};

export default function ProductDetailsClient({ product }: Props) {
  const t = useTranslations("PDP");
  const router = useRouter();
  const { addToCart } = useCart();
  return (
    <main className="mx-auto w-full max-w-full bg-background  px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
      <Link
        href="/products"
        className="mb-5 inline-flex min-h-11 items-center text-sm hover:text-black sm:mb-6"
      >
        ← {t("backToProducts")}
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
          <p className="text-xs uppercase tracking-wide  sm:text-sm">
            {product.category}
          </p>

          <h1 className="mt-2 text-2xl font-bold  sm:text-3xl">
            {product.title}
          </h1>

          {product.rating !== undefined && (
            <p className="mt-3 text-amber-500">
              ★ {product.rating.toFixed(1)} / 5
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="text-2xl font-bold sm:text-3xl">
              ₹{product.price.toLocaleString('en-IN')}
            </p>

            {product.originalPrice !== undefined && (
              <p className="text-base line-through sm:text-lg">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </p>
            )}
          </div>

          <p className="mt-5 text-sm leading-6 sm:mt-6 sm:text-base sm:leading-7">
            {product.description}
          </p>

          <button
            type="button"
            onClick={() => {
              addToCart(product);
              router.push("/cart");
            }}
            className="mt-6 min-h-12 w-full rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-muted cursor-pointer sm:mt-8 sm:text-base"
          >
            {t("addToCart")}
          </button>
        </section>
      </div>
    </main>
  );
}
