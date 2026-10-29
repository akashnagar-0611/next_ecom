import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row  bg-secondary px-10 items-center h-10 max-h-10' >
        <Link href={"/"} className='mr-5 text-black'>
            <span>Home</span>
        </Link>
        <Link href={"/Products"} className='mr-5 text-black'>
            <span>Products</span>
        </Link>
        <Link href={"/Categories/boots"} className='mr-5 text-black'>
            <span>Categories</span>
        </Link>
    </div>
  )
}

export default Navbar