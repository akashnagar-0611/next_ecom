import Link from 'next/link'

const Navbar = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="flex min-h-11 items-center gap-5 overflow-x-auto bg-secondary px-3 text-sm sm:gap-8 sm:px-6 sm:text-base lg:px-8"
    >
      <Link href="/" className="shrink-0 py-2 text-black underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2">
        Home
      </Link>
      <Link href="/products" className="shrink-0 py-2 text-black underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2">
        Products
      </Link>
      <Link href="/categories/boots" className="shrink-0 py-2 text-black underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2">
        Categories
      </Link>
    </nav>
  )
}

export default Navbar