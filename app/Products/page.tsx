'use client';

import React from 'react'
import ProductCard from '../_components/ProductCard'
import type { Product } from '../lib/products';
import { products } from '../lib/products';


function Products() {
    function handleAddToCart(product: Product) {
        console.log('Added to cart:', product);
    }
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
                            // onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Products