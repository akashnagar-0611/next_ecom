import React, { Suspense } from 'react'
type CategoriesProps = {
  params: Promise<{
    slug: string
  }>
}

async function CategorySlug({ params }: CategoriesProps) {
  const { slug } = await params;

  return <span className="text-black">{slug}</span>;
}

async function Categories({ params }: CategoriesProps) {

  return (
    <Suspense fallback={
      <span className="flex flex-1 flex-col bg-white text-black">Loading category...</span>
    }>
      <div className="flex flex-1 flex-col bg-white">
        <span className='text-black'>Categories</span>
         <CategorySlug params={params} />
      </div>
    </Suspense>
  )
}

export default Categories;