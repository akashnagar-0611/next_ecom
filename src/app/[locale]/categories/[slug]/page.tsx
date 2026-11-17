import React, { Suspense } from 'react'
type CategoriesProps = {
  params: Promise<{
    slug: string
  }>
}

async function CategorySlug({ params }: CategoriesProps) {
  const { slug } = await params;

  return <span>{slug}</span>;
}

async function Categories({ params }: CategoriesProps) {

  return (
    <Suspense fallback={
      <main className="mx-auto min-h-full w-full max-w-full px-3 py-5 text-sm sm:px-6 sm:py-8 sm:text-base lg:px-8">
        Loading category...
      </main>
    }>
      <main className="mx-auto min-h-full w-full max-w-7xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
        <h1 className="text-xl font-bold sm:text-2xl">Categories</h1>
        <p className="mt-3 break-words text-sm capitalize sm:text-base">
          <CategorySlug params={params} />
        </p>
      </main>
    </Suspense>
  )
}

export default Categories;