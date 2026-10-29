
import Image from 'next/image';
import Link from 'next/link';

export type Product = {
  id: string | number;
  slug: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  category?: string;
};

type ProductCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
};

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) /
            product.originalPrice) *
            100
        )
      : 0;

  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg">
      <Link
        href={`/products/${product.id}`} 
        className="block"
      >
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {discount > 0 && (
            <span className="absolute left-3 top-3 rounded-md bg-red-500 px-2 py-1 text-xs font-semibold text-white">
              {discount}% OFF
            </span>
          )}
        </div>

        <div className="space-y-2 p-4">
          {product.category && (
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              {product.category}
            </p>
          )}

          <h3 className="line-clamp-2 min-h-10 text-sm font-semibold text-gray-900">
            {product.title}
          </h3>

          {product.rating !== undefined && (
            <div className="flex items-center gap-1 text-sm">
              <span className="text-amber-500">★</span>
              <span className="text-gray-700">
                {product.rating.toFixed(1)}
              </span>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price.toLocaleString('en-IN')}
            </span>

            {product.originalPrice !== undefined &&
              product.originalPrice > product.price && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="w-full rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
