import ProductCard from '@/app/_components/productCard'
import { products } from '@/app/lib/products';

function Products() {
    return (
        <main className="mx-auto w-full max-w-full bg-white px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
                <h1 className="mb-4 text-xl font-bold text-gray-900 sm:mb-6 sm:text-2xl">
                    Our Products
                </h1>

                <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
        </main>
    )
}

export default Products