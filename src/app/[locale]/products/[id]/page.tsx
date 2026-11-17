import { notFound } from 'next/navigation';
import ProductDetailsClient from '@/app/[locale]/_components/productDetails';
import { products } from '@/app/[locale]/lib/products';

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export const instant = false

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      <ProductDetailsClient product={product} />
    </div>
  );
}
