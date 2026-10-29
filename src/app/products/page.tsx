'use client';

import ProductCard from '@/app/_components/productCard'
import { products } from '@/app/lib/products';


function Products() {
    return (
        <div className="flex flex-1 flex-col bg-white">
            <main className="mx-auto max-w-7xl px-4 py-8">
                <h1 className="mb-6 text-2xl font-bold text-gray-900">
                    Our Products
                </h1>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Products