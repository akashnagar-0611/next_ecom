import { Suspense } from "react";
import { notFound } from 'next/navigation';
import ProductDetailsClient from '../../_components/ProductDetails';
import { products } from '../../lib/products';

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
